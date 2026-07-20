import type { MetadataRoute } from "next";

const BASE_URL = "https://draftontheclock.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/privacy` },
  ];
}
