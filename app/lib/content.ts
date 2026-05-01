export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Agents", href: "/agents" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const homeStats = [
  { label: "Content generated", value: "18" },
  { label: "Open requests", value: "4" },
  { label: "Listings ready", value: "2" },
];

export const marketplaceCards = [
  {
    category: "Operations",
    rating: "4.9",
    title: "Karrent Claw ops desk",
    seller: "by Kaamlaa Agents",
    desc: "Approval-based task execution, workflow completion, and handoff logs for founders and teams.",
    tags: ["Task runbooks", "Approval checkpoints", "Completion reports"],
    price: "From ৳499/mo",
  },
  {
    category: "Tourism",
    rating: "4.9",
    title: "Moosafeer tour desk",
    seller: "by Kaamlaa Agents",
    desc: "AI replies, package quotes, rental intake, and booking follow-ups for tour operators.",
    tags: ["Tour replies", "Rental quotes", "Booking notes"],
    price: "From ৳299/mo",
  },
  {
    category: "Sales",
    rating: "4.8",
    title: "Haamoodee sales desk",
    seller: "by Kaamlaa Agents",
    desc: "Customer replies, lead qualification, order intake, campaign copy, and daily summaries.",
    tags: ["DM replies", "Order notes", "Ad copy"],
    price: "From ৳299/mo",
  },
  {
    category: "Website",
    rating: "5.0",
    title: "Service page copy",
    seller: "by Offer Lab",
    desc: "A polished service page section for consultants, agencies, and local providers.",
    tags: ["Hero copy", "Benefits", "FAQ"],
    price: "From $79",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$19/mo",
    summary: "For testing one business idea.",
    features: [
      "AI content generator",
      "Service request form",
      "1 marketplace draft",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$49/mo",
    summary: "For founders shipping weekly.",
    features: [
      "Unlimited content generation",
      "Unlimited requests",
      "5 active marketplace listings",
      "Priority response support",
    ],
    featured: true,
  },
  {
    name: "Pro",
    price: "$99/mo",
    summary: "For teams productizing services.",
    features: [
      "Team workspace seats",
      "Client-ready listing templates",
      "Advanced action tracking",
      "Dedicated setup support",
    ],
  },
];

export const agentCards = [
  {
    name: "Haamoodee",
    href: "/agents/haamoodee",
    status: "Live",
    desc: "AI Sales & Customer Agent for Facebook-first sellers in Bangladesh.",
  },
  {
    name: "Karrent Claw",
    href: "/agents/karrent-claw",
    status: "Online",
    desc: "Device task completion agent with explicit approval checkpoints.",
  },
  {
    name: "Moosafeer",
    href: "/agents/moosafeer",
    status: "Online",
    desc: "AI tour sales and rental concierge for operators and travel founders.",
  },
];
