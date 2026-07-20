import type { MetadataRoute } from "next";

/*
 * The marketing site should be fully indexed — unlike
 * app.draftontheclock.com, which disallows all crawling. See Entry 208
 * and Marketing Site Implementation Plan Step MS.12.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://draftontheclock.com/sitemap.xml",
  };
}
