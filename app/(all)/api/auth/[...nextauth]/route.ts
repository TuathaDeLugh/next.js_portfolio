import User from "@/models/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectdb from "@/database/connection";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        const { username, password } = credentials;

        try {
          await connectdb();
          const user = await User.findOne({ username });

          if (!user || !user.password) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            role: user.username === "admin" ? "admin" : undefined,
          };
        } catch (error) {
          console.error("Error in NextAuth authorize: ", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token.role === "admin") {
        session.user.role = "admin";
        return session;
      }
      session.user.username = token?.userid;
      session.additional_details = token.additional_details || false;

      return session;
    },
    async jwt({ token, user }) {
      if (user?.username === "admin" || user?.role === "admin") {
        token.role = "admin";
        return token;
      }

      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
