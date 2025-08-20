import { getHostUrl } from "@/utils/getHostUrl";
import { NextResponse } from "next/server";

const TOTAL_COLORS = 16777216; // 256^3 (total possible hex colors)
const MAX_PER_SITEMAP = 4096; // Maximum URLs per sitemap file
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

export async function GET() {
  const hostUrl = await getHostUrl();
  const now = new Date().toISOString();

  // Start XML with a stylesheet reference for human-readable rendering
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>\n`;
  xml += `<!-- Sitemap Index for Color Pages -->\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <!-- Generated ${now} -->\n`;
  xml += `  <!-- Total sitemaps: ${SITEMAP_COUNT} -->\n`;

  // Generate sitemap entries with consistent indentation
  for (let i = 0; i <= SITEMAP_COUNT; i++) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${hostUrl}/sitemaps/colors/${i}.xml</loc>\n`;
    xml += `    <lastmod>2025-08-19</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>\n`;
  xml += `<!-- End of Sitemap Index -->`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
