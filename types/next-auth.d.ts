import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role?: string;
      username?: string;
    } & DefaultSession["user"];
    additional_details?: boolean;
  }

  interface User {
    role?: string;
    username?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    userid?: string;
    additional_details?: boolean;
  }
}
