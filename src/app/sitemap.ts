import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { programmes } from "@/content/programmes";
import { stories } from "@/content/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about/team", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/partners", priority: 0.6, changeFrequency: "monthly" },
    { path: "/our-work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/impact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/stories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/get-involved", priority: 0.9, changeFrequency: "monthly" },
    { path: "/get-involved/donate", priority: 0.95, changeFrequency: "monthly" },
    { path: "/get-involved/volunteer", priority: 0.8, changeFrequency: "monthly" },
    { path: "/get-involved/partner", priority: 0.8, changeFrequency: "monthly" },
    { path: "/get-involved/sponsor-a-project", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/transparency", priority: 0.7, changeFrequency: "yearly" },
    { path: "/image-credits", priority: 0.3, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...programmes.map((programme) => ({
      url: `${site.url}/our-work/${programme.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...stories.map((story) => ({
      url: `${site.url}/stories/${story.slug}`,
      lastModified: new Date(story.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
