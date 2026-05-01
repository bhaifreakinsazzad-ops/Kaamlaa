import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaamlaa | Create, run, and sell businesses with AI | Kaamlaa",
  description:
    "Kaamlaa is an AI business OS for creating business assets, handling service requests, and listing offers in a simple marketplace.",
  metadataBase: new URL("https://kaamlaa.shop"),
  openGraph: {
    title: "Kaamlaa - AI Agent Marketplace | Sell · Rent · Hire",
    description:
      "Buy, subscribe, or pay-per-use AI agents including Haamoodee, Karrent Claw, and Moosafeer.",
    url: "https://kaamlaa.shop",
    siteName: "Kaamlaa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaamlaa - AI Agent Marketplace",
    description:
      "Sell. Rent. Hire AI agents. Start with Haamoodee, Karrent Claw, or Moosafeer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
