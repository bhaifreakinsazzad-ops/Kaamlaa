import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="page-wrap">
      <main className="content-shell py-16">
        <section className="card p-8">
          <p className="brand-pill">Kaamlaa</p>
          <h1 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold">
            Start your workspace in minutes.
          </h1>
          <p className="mt-3 max-w-2xl text-muted">
            The production registration flow is connected to the protected Kaamlaa auth backend.
            This recovered baseline keeps route parity and sign-in continuity while control handover
            is completed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/login" className="btn btn-primary px-5 py-3 text-sm">
              Go to sign in
            </Link>
            <Link href="/pricing" className="btn btn-secondary px-5 py-3 text-sm">
              Compare plans
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
