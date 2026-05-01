import SiteFrame from "@/app/components/site-frame";
import { requireSession } from "@/app/lib/require-session";

export default async function BillingPage() {
  await requireSession("/billing");

  return (
    <SiteFrame
      kicker="Billing"
      title="Plans, invoices, and payment rails"
      subtitle="Protected billing route restored for post-takeover payments wiring."
    >
      <section className="card p-6 text-sm text-muted">
        Billing controls are staged pending live Vercel environment sync.
      </section>
    </SiteFrame>
  );
}
