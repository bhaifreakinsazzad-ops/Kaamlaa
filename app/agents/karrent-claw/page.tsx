import SiteFrame from "@/app/components/site-frame";

export default function KarrentClawPage() {
  return (
    <SiteFrame
      kicker="Agent floor"
      title="Karrent Claw — Device Task Completion Agent"
      subtitle="Karrent Claw is built for operators who want tasks fully completed, not partially drafted."
      primaryCta={{ label: "Get Karrent Claw", href: "/register" }}
      secondaryCta={{ label: "See plans", href: "/pricing" }}
    >
      <section className="card p-6">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">
          Approval-based execution flow
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>• Runs request checklists with clear handoff points.</li>
          <li>• Asks for approval on high-impact actions before execution.</li>
          <li>• Ships completion reports that teams can trust immediately.</li>
        </ul>
      </section>
    </SiteFrame>
  );
}
