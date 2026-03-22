import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const paths = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/speakers", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/agenda", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/login", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/signup", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = new Date();

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
