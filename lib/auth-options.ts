import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const credentialSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const demoEmail = process.env.DEMO_AUTH_EMAIL ?? "demo@kaamlaa.shop";
const demoPassword = process.env.DEMO_AUTH_PASSWORD ?? "change-me-now";

export const authOptions: NextAuthOptions = {
  secret:
    process.env.AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "kaamlaa-dev-secret-change-in-production",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = credentialSchema.safeParse(credentials);
        if (!parsed.success) return null;

        if (
          parsed.data.email.toLowerCase() === demoEmail.toLowerCase() &&
          parsed.data.password === demoPassword
        ) {
          return {
            id: "demo-user",
            email: demoEmail,
            name: "Kaamlaa Operator",
          };
        }

        return null;
      },
    }),
  ],
};
