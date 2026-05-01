import Link from "next/link";
import SiteFrame from "@/app/components/site-frame";
import { homeStats } from "@/app/lib/content";

export default function HomePage() {
  return (
    <SiteFrame
      kicker="MVP business OS for founders who need momentum"
      title="Build the business before the doubt catches up."
      subtitle="Kaamlaa helps a solo founder create a sellable offer, capture demand, and publish a marketplace listing from one clean workspace."
      primaryCta={{ label: "Start building", href: "/register" }}
      secondaryCta={{ label: "Browse marketplace", href: "/marketplace" }}
    >
      <section className="card p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">Launch board</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {homeStats.map((item) => (
            <div key={item.label} className="rounded-xl border border-[color:var(--line)] p-4">
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="mt-1 text-sm text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Generate",
            body: "Turn a business idea into names, offers, ads, and landing copy.",
          },
          {
            title: "Capture",
            body: "Collect service requests and keep the next action visible.",
          },
          {
            title: "Sell",
            body: "Package the offer and publish it to the marketplace.",
          },
        ].map((item) => (
          <article key={item.title} className="card p-5">
            <h2 className="font-[var(--font-space-grotesk)] text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 card p-6">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">
          One place for the messy first version.
        </h2>
        <p className="mt-2 text-muted">
          The interface is intentionally direct: make an asset, capture a request, list the offer,
          price the plan. No enterprise clutter in the MVP.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "Landing page",
            "Dashboard",
            "Service request",
            "Marketplace listing",
            "Ad copy",
            "Work queues",
          ].map((tag) => (
            <span key={tag} className="rounded-full bg-[color:var(--brand-soft)] px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 card p-6">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">
          Start free, upgrade when the workspace starts making money.
        </h2>
        <div className="mt-4">
          <Link href="/pricing" className="btn btn-primary px-5 py-3 text-sm">
            See pricing
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
