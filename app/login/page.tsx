import LoginForm from "@/app/login/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaamlaa - AI Agent Marketplace | Sell · Rent · Hire",
  description:
    "Kaamlaa is the AI Agent Marketplace for Bangladesh and beyond. Buy, subscribe, or pay-per-use AI agents including Haamoodee, Karrent Claw, and Moosafeer. bKash, Stripe, and bank transfer supported.",
};

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const callbackValue = params.callbackUrl;
  const callbackUrl =
    typeof callbackValue === "string" && callbackValue.length > 0 ? callbackValue : "/dashboard";
  const hasError = typeof params.error === "string";

  return (
    <div className="page-wrap">
      <main className="content-shell py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <section className="card p-8">
            <p className="brand-pill">Kaamlaa</p>
            <h1 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold">
              Your next business needs a cockpit.
            </h1>
            <p className="mt-3 text-muted">
              Sign in to create assets, manage requests, and package offers without scattered tools.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-muted">
              <li>• Generate a business asset in minutes</li>
              <li>• Capture real service demand</li>
              <li>• Turn offers into marketplace listings</li>
            </ul>
          </section>
          <LoginForm callbackUrl={callbackUrl} hasError={hasError} />
        </div>
      </main>
    </div>
  );
}
