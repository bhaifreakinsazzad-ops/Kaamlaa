import SiteFrame from "@/app/components/site-frame";
import { pricingTiers } from "@/app/lib/content";

export default function PricingPage() {
  return (
    <SiteFrame
      kicker="Simple pricing for the first sellable version"
      title="Pick the plan that keeps you shipping."
      subtitle="The MVP stays focused: create business content, capture service requests, and publish marketplace listings."
      primaryCta={{ label: "Start free", href: "/register" }}
    >
      <section className="grid gap-4 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`card p-5 ${tier.featured ? "border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.18)]" : ""}`}
          >
            {tier.featured ? <p className="brand-pill mb-3">Most Popular</p> : null}
            <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">{tier.name}</h2>
            <p className="mt-1 text-muted">{tier.summary}</p>
            <p className="mt-3 text-3xl font-black">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-6 card p-6">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">
          Kaamlaa vs traditional hiring
        </h2>
        <p className="mt-2 text-muted">
          Keep product quality high without full-time overhead: 24/7 execution, no onboarding lag,
          and clear outputs for every request.
        </p>
      </section>
    </SiteFrame>
  );
}
