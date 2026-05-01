import { requireSession } from "@/app/lib/require-session";
import SiteFrame from "@/app/components/site-frame";

export default async function DashboardPage() {
  const session = await requireSession("/dashboard");

  return (
    <SiteFrame
      kicker="Workspace"
      title="Kaamlaa — AI সহকর্মী for your business"
      subtitle="Protected workspace baseline restored. Continue from this authenticated foundation."
    >
      <section className="card p-6">
        <p className="text-sm text-muted">Signed in as</p>
        <p className="mt-1 text-lg font-bold">{session?.user?.email}</p>
      </section>
    </SiteFrame>
  );
}
