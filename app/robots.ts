import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://vikramblissinn.in/sitemap.xml",
    host: "https://vikramblissinn.in",
  };
}
