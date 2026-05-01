import SiteFrame from "@/app/components/site-frame";
import { marketplaceCards } from "@/app/lib/content";

export default function MarketplacePage() {
  return (
    <SiteFrame
      kicker="Productized offers, ready to buy"
      title="Sell the work as a clean package."
      subtitle="The marketplace is where Kaamlaa turns generated assets and service requests into simple listings buyers can understand fast."
      primaryCta={{ label: "List an offer", href: "/register" }}
      secondaryCta={{ label: "See plans", href: "/pricing" }}
    >
      <section className="card p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Listing builder</p>
        <h2 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold">
          Operations launch kit
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {["Clear title", "Specific deliverables", "Simple price", "One next step", "Buyer CTA"].map(
            (item) => (
              <span key={item} className="rounded-full border border-[color:var(--line)] px-3 py-1">
                {item}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        {marketplaceCards.map((card) => (
          <article key={card.title} className="card p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-xs font-bold">
                {card.category}
              </span>
              <span className="text-sm font-semibold">{card.rating}</span>
            </div>
            <h3 className="mt-3 font-[var(--font-space-grotesk)] text-xl font-bold">{card.title}</h3>
            <p className="text-sm text-muted">{card.seller}</p>
            <p className="mt-2 text-sm text-muted">{card.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-4 font-bold">{card.price}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
