"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

type LoginFormProps = {
  callbackUrl: string;
  hasError: boolean;
};

export default function LoginForm({ callbackUrl, hasError }: LoginFormProps) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(
    hasError ? "Sign in failed. Check credentials and try again." : null,
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setBusy(true);
    setError(null);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });
    setBusy(false);

    if (!result || result.error) {
      setError("Invalid email or password.");
      return;
    }

    window.location.href = result.url ?? callbackUrl;
  }

  return (
    <section className="card p-8">
      <h2 className="font-[var(--font-space-grotesk)] text-3xl font-bold">Welcome back</h2>
      <p className="mt-2 text-sm text-muted">Open your business workspace.</p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm font-semibold">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-[color:var(--line)] px-3 py-2"
          />
        </label>
        <label className="block text-sm font-semibold">
          Password
          <input
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-xl border border-[color:var(--line)] px-3 py-2"
          />
        </label>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button disabled={busy} className="btn btn-primary w-full px-5 py-3 text-sm" type="submit">
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-[color:var(--brand)]">
          Sign up free
        </Link>
      </p>
    </section>
  );
}
