import { getHostUrl } from "@/utils/getHostUrl";
import { NextResponse } from "next/server";

const TOTAL_COLORS = 16777216; // 256^3
const MAX_PER_SITEMAP = 50000;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

export async function GET() {
  const hostUrl = await getHostUrl();

  const now = new Date().toISOString();
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <sitemap>\n`;
  xml += `      <loc>${hostUrl}</loc>\n`;
  xml += `      <lastmod>${now}</lastmod>\n`;
  xml += `  </sitemap>\n`;
  for (let i = 1; i <= SITEMAP_COUNT; i++) {
    xml += `  <sitemap>\n`;
    xml += `    <loc>${hostUrl}/sitemaps/colors/${i}.xml</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `  </sitemap>\n`;
  }

  xml += `</sitemapindex>`;

  return new NextResponse(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
