import { NextResponse } from "next/server";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";
import cssColors from "css-colors";

const CACHE_HEADER = "public, s-maxage=604800, stale-while-revalidate=86400";

// Cache individual sitemaps
const sitemapCache = new Map<string, { xml: string; timestamp: number }>();
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

// Template for URL entries to avoid repetitive string building
const URL_TEMPLATE = (loc: string, lastMod: string) =>
  `  <url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;

async function generateRootSitemap(
  hostUrl: string,
  lastMod: string
): Promise<string> {
  const cacheKey = `root-${lastMod}`;
  const cached = sitemapCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.xml;
  }

  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    URL_TEMPLATE(`${hostUrl}`, lastMod),
  ];

  // Homepage URLs for all languages
  for (const lang of validLanguages) {
    if (lang !== "en") {
      lines.push(URL_TEMPLATE(`${hostUrl}/${lang}`, lastMod));
    }
  }

  // Color mixer URLs
  for (const lang of validLanguages) {
    const loc =
      lang === "en"
        ? `${hostUrl}/color-mixer`
        : `${hostUrl}/${lang}/color-mixer`;
    lines.push(URL_TEMPLATE(loc, lastMod));
  }

  // Image extractor URLs
  for (const lang of validLanguages) {
    const loc =
      lang === "en"
        ? `${hostUrl}/image-palette-extractor`
        : `${hostUrl}/${lang}/image-palette-extractor`;
    lines.push(URL_TEMPLATE(loc, lastMod));
  }

  // CSS color URLs (pre-compute language variations)
  for (const color of cssColors) {
    for (const lang of validLanguages) {
      const loc =
        lang === "en" ? `${hostUrl}/${color}` : `${hostUrl}/${lang}/${color}`;
      lines.push(URL_TEMPLATE(loc, lastMod));
    }
  }

  lines.push(`</urlset>`);
  const xml = lines.join("\n");

  sitemapCache.set(cacheKey, { xml, timestamp: Date.now() });
  return xml;
}

export async function GET() {
  const hostUrl = await getHostUrl();
  const lastMod = new Date().toISOString().split("T")[0];

  const xml = await generateRootSitemap(hostUrl, lastMod);

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": CACHE_HEADER,
    },
  });
}
