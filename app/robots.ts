import type { MetadataRoute } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const hostUrl = await getHostUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
      },
    ],
    sitemap: `${hostUrl}/sitemap.xml`,
  };
}
