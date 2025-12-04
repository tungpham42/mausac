import { getHostUrl } from "@/utils/getHostUrl";
import { NextResponse } from "next/server";

const TOTAL_COLORS = 16777216;
const MAX_PER_SITEMAP = 4096;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

let cachedXml: string | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

// Pre-compute sitemap entries
const precomputedSitemapEntries = (() => {
  const entries: string[] = new Array(SITEMAP_COUNT + 1);
  const lastMod = new Date().toISOString().split("T")[0];
  const template = `  <sitemap>\n<loc>{HOST_URL}/sitemaps/colors/{ID}.xml</loc>\n<lastmod>${lastMod}</lastmod>\n</sitemap>`;

  for (let i = 0; i <= SITEMAP_COUNT; i++) {
    entries[i] = template.replace("{ID}", i.toString());
  }
  return entries;
})();

async function generateSitemapIndex() {
  const hostUrl = await getHostUrl();

  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>`,
    `<!-- Sitemap Index for Color Pages -->`,
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ];

  // Use precomputed entries with host URL replacement
  for (let i = 0; i <= SITEMAP_COUNT; i++) {
    lines.push(precomputedSitemapEntries[i].replace("{HOST_URL}", hostUrl));
  }

  lines.push(`</sitemapindex>`, `<!-- End of Sitemap Index -->`);

  return lines.join("\n");
}

export async function GET() {
  const now = Date.now();

  if (!cachedXml || now - cacheTimestamp > CACHE_TTL) {
    cachedXml = await generateSitemapIndex();
    cacheTimestamp = now;
  }

  return new NextResponse(cachedXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
