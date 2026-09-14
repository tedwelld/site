import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { programmes } from "@/content/programmes";
import { stories } from "@/content/stories";
import { galleryItems } from "@/content/gallery";
import { img } from "@/content/credits";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = site.contentUpdatedAt;
  const absolute = (path: string) => new URL(path, site.url).href;
  const programmeImages = programmes.flatMap((p) => (p.image ? [p.image] : []));
  const pageImages: Record<string, string[]> = {
    "/": [img.youthGroup, ...programmeImages],
    "/about": [img.communityMeeting],
    "/about/partners": [img.workshop],
    "/our-work": [img.produce, ...programmeImages],
    "/impact": [img.coexistence],
    "/stories": [
      img.visitorDiscussion,
      ...stories.flatMap((s) => (s.image ? [s.image] : [])),
    ],
    "/gallery": [img.youthGroup, ...galleryItems.map((photo) => photo.image)],
    "/get-involved": [img.youthGroup],
    "/get-involved/donate": [img.produce],
    "/get-involved/volunteer": [img.youthLearning],
    "/get-involved/partner": [img.workshop],
    "/get-involved/sponsor-a-project": [img.basketMaker, ...programmeImages],
    "/visit": [img.safari],
    "/contact": [img.communityMeeting],
    "/image-credits": [img.visitorDiscussion],
  };
  // Every page displays the organisation logo; list images on their containing pages.
  const images = (paths: string[]) =>
    [...new Set([site.logo, ...paths])].map(absolute);

  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about/partners", priority: 0.6, changeFrequency: "monthly" },
    { path: "/our-work", priority: 0.9, changeFrequency: "monthly" },
    { path: "/impact", priority: 0.9, changeFrequency: "monthly" },
    { path: "/stories", priority: 0.8, changeFrequency: "weekly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
    { path: "/get-involved", priority: 0.9, changeFrequency: "monthly" },
    {
      path: "/get-involved/donate",
      priority: 0.95,
      changeFrequency: "monthly",
    },
    {
      path: "/get-involved/volunteer",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/get-involved/partner",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/get-involved/sponsor-a-project",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { path: "/visit", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/image-credits", priority: 0.3, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: images(pageImages[route.path] ?? []),
    })),
    ...programmes.map((programme) => ({
      url: `${site.url}/our-work/${programme.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: images(programme.image ? [programme.image] : []),
    })),
    ...stories.map((story) => ({
      url: `${site.url}/stories/${story.slug}`,
      lastModified: new Date(story.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: images(story.image ? [story.image] : []),
    })),
  ];
}
