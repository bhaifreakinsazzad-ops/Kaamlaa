import SiteFrame from "@/app/components/site-frame";

const steps = [
  {
    title: "Account তৈরি করুন",
    detail:
      "Create your account with email, set business name, preferred language, and get your workspace ready.",
  },
  {
    title: "Agent বেছে নিন",
    detail: "Choose Haamoodee, Karrent Claw, or Moosafeer based on your current workflow.",
  },
  {
    title: "Sell · Rent · Hire mode",
    detail: "Choose one-time purchase, monthly subscription, or credit-based usage.",
  },
  {
    title: "Payment & activation",
    detail: "Complete payment via supported rails and activate your workflow immediately.",
  },
  {
    title: "Run first workflow",
    detail: "Launch the first task and track results inside your dashboard and wallet.",
  },
];

export default function HowItWorksPage() {
  return (
    <SiteFrame
      kicker="মাত্র ৫ ধাপে শুরু"
      title="কীভাবে Kaamlaa কাজ করে?"
      subtitle="Sign up থেকে প্রথম AI workflow run — guided process built for fast execution."
      primaryCta={{ label: "Start building", href: "/register" }}
    >
      <section className="grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="card p-5">
            <p className="brand-pill">Step {index + 1}</p>
            <h2 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-bold">{step.title}</h2>
            <p className="mt-2 text-sm text-muted">{step.detail}</p>
          </article>
        ))}
      </section>
    </SiteFrame>
  );
}
