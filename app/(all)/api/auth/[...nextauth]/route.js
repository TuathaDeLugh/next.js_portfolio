import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectdb from "@/database/connection";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          await connectdb();
          const user = await User.findOne({ username });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
		async session({ session, token }) {
			if (token.role === 'admin') {
				session.user.role = 'admin'
				return session
			}
			session.user.username = token?.userid
			session.additional_details = token.additional_details || false

			return session
		},
		async jwt({ token, user}) {
			if (user?.username === 'admin') {
				token.role = 'admin'
				return token
			}

			return token
		},
	},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };