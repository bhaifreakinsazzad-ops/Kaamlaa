import SiteFrame from "@/app/components/site-frame";

export default function TermsPage() {
  return (
    <SiteFrame
      kicker="Legal"
      title="Terms of service (baseline placeholder)"
      subtitle="The public endpoint returned 404 during recovery, so this route is restored as a temporary placeholder."
    >
      <section className="card p-6 text-sm text-muted">
        Insert the production-approved terms once full Vercel project access is restored.
      </section>
    </SiteFrame>
  );
}
