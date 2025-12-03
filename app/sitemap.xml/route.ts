import { getHostUrl } from "@/utils/getHostUrl";
import { NextResponse } from "next/server";

const TOTAL_COLORS = 16777216; // 256^3 total possible hex colors
const MAX_PER_SITEMAP = 4096;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

let cachedXml: string | null = null;

async function generateSitemapIndex() {
  const hostUrl = await getHostUrl();
  const now = new Date().toISOString();
  const lastMod = now.split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>\n`;
  xml += `<!-- Sitemap Index for Color Pages -->\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Build all <sitemap> entries once (4096 lines)
  for (let i = 0; i <= SITEMAP_COUNT; i++) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${hostUrl}/sitemaps/colors/${i}.xml</loc>\n`;
    xml += `    <lastmod>${lastMod}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;
  xml += `<!-- End of Sitemap Index -->`;

  return xml;
}

export async function GET() {
  if (!cachedXml) {
    cachedXml = await generateSitemapIndex();
  }

  return new NextResponse(cachedXml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
