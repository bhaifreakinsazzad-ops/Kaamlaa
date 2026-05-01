import SiteFrame from "@/app/components/site-frame";

export default function HaamoodeePage() {
  return (
    <SiteFrame
      kicker="Flagship Agent · Kaamlaa Marketplace"
      title="Haamoodee — AI Sales & Customer Agent"
      subtitle="Built for Bangladesh-optimized commerce: FAQ reply, lead qualification, order intake, campaign copy, and daily summaries."
      primaryCta={{ label: "Get Haamoodee", href: "/register" }}
      secondaryCta={{ label: "Browse marketplace", href: "/marketplace" }}
    >
      <section className="card p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Capabilities</p>
        <div className="mt-4 grid gap-2 text-sm text-muted md:grid-cols-2">
          <p>• FAQ Reply</p>
          <p>• Lead Qualification</p>
          <p>• Order Intake</p>
          <p>• Campaign Copy</p>
          <p>• Product Inquiry</p>
          <p>• Daily Summary</p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { mode: "Sell", price: "৳4,999 একবার", detail: "Buy once, lifetime access." },
          { mode: "Rent", price: "৳999/মাস", detail: "Monthly subscription, cancel anytime." },
          { mode: "Hire", price: "৳1 = 1 credit", detail: "Pay only when you run workflows." },
        ].map((option) => (
          <article key={option.mode} className="card p-5">
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">{option.mode}</h2>
            <p className="mt-2 text-2xl font-black">{option.price}</p>
            <p className="mt-2 text-sm text-muted">{option.detail}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
