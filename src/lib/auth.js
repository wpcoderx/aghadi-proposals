import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import bcrypt from "bcryptjs";
import dbConnect from "./dbConnect";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {

        const { username, password } = credentials || {};

        if (username === "admin" && password === "admin") {
          return { id: "1", name: "Admin User", email: "admin@example.com" };
          
        }

        console.warn("Login failed for:", username);
        return null;

      },
    }),
  ],
  callbacks: {

    async signIn({ account, user }) {

      console.log("accont : ",account);
      console.log("user : ",user);

      if (account.provider === "google") {

        await dbConnect();

        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          });
        }

        return true;

        /* return profile.email_verified && profile.email.endsWith("@example.com") */
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user";
      }
      return token;
    },

    async session({ session, token }) {

      const user = await User.findOne({ email: session.user.email });

      if (user) {
        session.user.id = user._id.toString();
      } else {
        session.user.id = "credentials-user"; // fallback ID
      }
      return session;

      /* session.user.role = token.role;
      return session; */
    },
    async redirect({ url, baseUrl }) {
      return '/dashboard';
    }
  },
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  debug: true,
});