import type { MetadataRoute } from "next";

const canonicalDate = new Date("2026-04-27T04:04:14.850Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kaamlaa.shop",
      lastModified: canonicalDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kaamlaa.shop/marketplace",
      lastModified: canonicalDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://kaamlaa.shop/agents",
      lastModified: canonicalDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://kaamlaa.shop/agents/haamoodee",
      lastModified: canonicalDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://kaamlaa.shop/agents/karrent-claw",
      lastModified: canonicalDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://kaamlaa.shop/agents/moosafeer",
      lastModified: canonicalDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://kaamlaa.shop/pricing",
      lastModified: canonicalDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kaamlaa.shop/how-it-works",
      lastModified: canonicalDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://kaamlaa.shop/contact",
      lastModified: canonicalDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://kaamlaa.shop/register",
      lastModified: canonicalDate,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
