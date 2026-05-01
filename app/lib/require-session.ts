import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function requireSession(path: string) {
  const session = await getServerSession(authOptions);
  if (!session) {
    const callback = encodeURIComponent(path);
    redirect(`/login?callbackUrl=${callback}`);
  }

  return session;
}
