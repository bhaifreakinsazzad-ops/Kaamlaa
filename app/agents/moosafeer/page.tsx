import SiteFrame from "@/app/components/site-frame";

export default function MoosafeerPage() {
  return (
    <SiteFrame
      kicker="Agent floor"
      title="Moosafeer — AI Tour Sales & Rental Concierge"
      subtitle="Moosafeer helps travel businesses sell packages, rent vehicles or rooms, answer tourist questions, and capture booking details."
      primaryCta={{ label: "Get Moosafeer", href: "/register" }}
      secondaryCta={{ label: "See access modes", href: "/pricing" }}
    >
      <section className="card p-6">
        <h2 className="font-[var(--font-space-grotesk)] text-2xl font-bold">
          Built for tour sales and rentals
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>• AI replies for tour inquiries and itinerary questions.</li>
          <li>• Rental intake templates for rooms, vehicles, and guides.</li>
          <li>• Booking follow-up summaries your team can act on quickly.</li>
        </ul>
      </section>
    </SiteFrame>
  );
}
