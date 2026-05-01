import Link from "next/link";
import type { ReactNode } from "react";
import { navItems } from "@/app/lib/content";

type SiteFrameProps = {
  kicker?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children: ReactNode;
};

export default function SiteFrame({
  kicker,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: SiteFrameProps) {
  return (
    <div className="page-wrap">
      <header className="border-b border-[color:var(--line)] bg-white/70 backdrop-blur-sm">
        <div className="content-shell flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-[var(--font-space-grotesk)] text-lg font-bold">
            Kaamlaa Business OS
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-muted hover:text-black">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-secondary px-4 py-2 text-sm">
              Sign in
            </Link>
            <Link href="/register" className="btn btn-primary px-4 py-2 text-sm">
              Start
            </Link>
          </div>
        </div>
      </header>

      <main className="content-shell py-10">
        {kicker ? <p className="brand-pill mb-4">{kicker}</p> : null}
        <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryCta ? (
              <Link href={primaryCta.href} className="btn btn-primary px-5 py-3 text-sm">
                {primaryCta.label}
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link href={secondaryCta.href} className="btn btn-secondary px-5 py-3 text-sm">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
        <div className="mt-8">{children}</div>
      </main>

      <footer className="border-t border-[color:var(--line)] bg-white/80 py-8">
        <div className="content-shell grid gap-6 md:grid-cols-4">
          <div>
            <p className="font-[var(--font-space-grotesk)] font-bold">Kaamlaa</p>
            <p className="mt-2 text-sm text-muted">
              A clean AI business OS for creating assets, handling service demand, and selling
              simple offers.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Product</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/how-it-works">How it works</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Account</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <Link href="/register">Sign up</Link>
              <Link href="/login">Sign in</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-muted">Company</p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <p className="content-shell mt-6 text-xs text-muted">
          © 2026 Kaamlaa. All rights reserved. hello@kaamlaa.shop
        </p>
      </footer>
    </div>
  );
}
