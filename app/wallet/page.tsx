import SiteFrame from "@/app/components/site-frame";
import { requireSession } from "@/app/lib/require-session";

export default async function WalletPage() {
  await requireSession("/wallet");

  return (
    <SiteFrame
      kicker="Wallet"
      title="Usage credits and payment history"
      subtitle="Protected wallet route restored for takeover parity."
    >
      <section className="card p-6 text-sm text-muted">
        Wallet actions will appear here after backend environment reconnection.
      </section>
    </SiteFrame>
  );
}
