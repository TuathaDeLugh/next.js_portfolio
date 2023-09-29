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
			session.user.id = token?.userid
			session.provider = token.provider
			session.additional_details = token.additional_details || false

			return session
		},
		async jwt({ token, user, trigger, session }) {
			if (user?.id === 'admin') {
				token.role = 'admin'
				return token
			}
			if (user) {
				token.userid = user._id
				token.provider = user.provider
				token.additional_details = user.additional_details
			}
			if (trigger === 'update' && session?.additional_details)
				token.additional_details = session.additional_details

			if (trigger === 'update' && session?.id) token.userid = session.id

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