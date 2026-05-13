import type { MetadataRoute } from "next";
import { baseUrl, loanProducts } from "@/lib/content";

const staticRoutes = [
  "",
  "/loans",
  "/how-it-works",
  "/about",
  "/about/team",
  "/about/managing-director-message",
  "/contact",
  "/start-application",
  "/faqs",
  "/insights",
  "/complaints",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: now })),
    ...loanProducts.map((loan) => ({ url: `${baseUrl}/loans/${loan.slug}`, lastModified: now })),
  ];
}
