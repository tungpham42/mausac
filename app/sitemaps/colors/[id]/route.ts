import { NextRequest, NextResponse } from "next/server";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";
import cssColors from "css-colors";

const TOTAL_COLORS = 16777216;
const MAX_PER_SITEMAP = 4096;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

const CACHE_HEADER = "public, s-maxage=604800, stale-while-revalidate=86400";

// Cache individual sitemaps
const sitemapCache = new Map<string, { xml: string; timestamp: number }>();
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days

// Pre-compute hex values for all colors
const hexCache = new Array(TOTAL_COLORS);
for (let i = 0; i < TOTAL_COLORS; i++) {
  hexCache[i] = i.toString(16).padStart(6, "0").toUpperCase();
}

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

async function generateColorSitemap(
  hostUrl: string,
  lastMod: string,
  start: number,
  end: number
): Promise<string> {
  const cacheKey = `colors-${start}-${end}-${lastMod}`;
  const cached = sitemapCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.xml;
  }

  const lines: string[] = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ];

  // Pre-build language URLs for each color
  for (let i = start; i < end; i++) {
    const hex = hexCache[i];

    // English version
    lines.push(URL_TEMPLATE(`${hostUrl}/${hex}`, lastMod));

    // Other languages
    for (let j = 1; j < validLanguages.length; j++) {
      const lang = validLanguages[j];
      lines.push(URL_TEMPLATE(`${hostUrl}/${lang}/${hex}`, lastMod));
    }
  }

  lines.push(`</urlset>`);
  const xml = lines.join("\n");

  sitemapCache.set(cacheKey, { xml, timestamp: Date.now() });
  return xml;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idNum = parseInt(id, 10);

  if (Number.isNaN(idNum) || idNum < 0 || idNum > SITEMAP_COUNT) {
    return new NextResponse("Invalid sitemap ID", { status: 404 });
  }

  const hostUrl = await getHostUrl();
  const lastMod = new Date().toISOString().split("T")[0];

  let xml: string;

  if (idNum === 0) {
    xml = await generateRootSitemap(hostUrl, lastMod);
  } else {
    const start = (idNum - 1) * MAX_PER_SITEMAP;
    const end = Math.min(start + MAX_PER_SITEMAP, TOTAL_COLORS);
    xml = await generateColorSitemap(hostUrl, lastMod, start, end);
  }

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": CACHE_HEADER,
    },
  });
}
