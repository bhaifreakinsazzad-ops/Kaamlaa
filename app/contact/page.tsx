import SiteFrame from "@/app/components/site-frame";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaamlaa - AI Agent Marketplace | Sell · Rent · Hire",
  description:
    "Kaamlaa is the AI Agent Marketplace for Bangladesh and beyond. Buy, subscribe, or pay-per-use AI agents including Haamoodee, Karrent Claw, and Moosafeer. bKash, Stripe, and bank transfer supported.",
};

export default function ContactPage() {
  return (
    <SiteFrame
      kicker="Get in touch"
      title="Let's connect."
      subtitle="Questions, demo requests, or launch help? Reach out and we respond within 24 hours."
      primaryCta={{ label: "Email Kaamlaa", href: "mailto:hello@kaamlaa.shop" }}
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="card p-5">
          <h2 className="font-[var(--font-space-grotesk)] text-xl font-bold">Email</h2>
          <p className="mt-2 text-sm text-muted">hello@kaamlaa.shop</p>
          <p className="mt-1 text-sm text-muted">Replies within 24 hours.</p>
        </article>
        <article className="card p-5">
          <h2 className="font-[var(--font-space-grotesk)] text-xl font-bold">WhatsApp</h2>
          <p className="mt-2 text-sm text-muted">+880 1XXX-XXXXXX</p>
          <p className="mt-1 text-sm text-muted">Available 10am-8pm BDT.</p>
        </article>
        <article className="card p-5">
          <h2 className="font-[var(--font-space-grotesk)] text-xl font-bold">Location</h2>
          <p className="mt-2 text-sm text-muted">Dhaka, Bangladesh</p>
          <p className="mt-1 text-sm text-muted">Serving businesses globally.</p>
        </article>
      </section>
    </SiteFrame>
  );
}
