import SiteFrame from "@/app/components/site-frame";

export default function PrivacyPage() {
  return (
    <SiteFrame
      kicker="Legal"
      title="Privacy policy (baseline placeholder)"
      subtitle="The live legal text was not publicly available on May 1, 2026 and returned 404. This route is restored for continuity."
    >
      <section className="card p-6 text-sm text-muted">
        Replace this placeholder with the canonical policy from protected production sources once
        Vercel project access is reconnected.
      </section>
    </SiteFrame>
  );
}
