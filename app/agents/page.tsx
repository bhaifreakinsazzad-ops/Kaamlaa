import Link from "next/link";
import SiteFrame from "@/app/components/site-frame";
import { agentCards } from "@/app/lib/content";

export default function AgentsPage() {
  return (
    <SiteFrame
      kicker="Agent floor"
      title="Choose the AI agent matched to your workflow."
      subtitle="Start with Haamoodee for sales, Karrent Claw for operations, or Moosafeer for rentals and tour sales."
      primaryCta={{ label: "Browse marketplace", href: "/marketplace" }}
    >
      <section className="grid gap-4 md:grid-cols-3">
        {agentCards.map((agent) => (
          <article key={agent.name} className="card p-5">
            <p className="brand-pill">{agent.status}</p>
            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-bold">{agent.name}</h2>
            <p className="mt-2 text-sm text-muted">{agent.desc}</p>
            <Link href={agent.href} className="btn btn-secondary mt-4 px-4 py-2 text-sm">
              View agent
            </Link>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
