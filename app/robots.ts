import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/dashboard/",
          "/wallet/",
          "/settings/",
          "/messages/",
          "/requests/",
          "/tasks/",
          "/my-agents/",
          "/billing/",
          "/onboarding/",
        ],
      },
    ],
    sitemap: "https://kaamlaa.shop/sitemap.xml",
  };
}
