import type { MetadataRoute } from "next";
import { docs } from "@/content/docs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/docs`, lastModified: now, priority: 0.8 },
    ...docs.map((doc) => ({
      url: `${site.url}/docs/${doc.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
