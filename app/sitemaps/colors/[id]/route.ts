import { NextRequest, NextResponse } from "next/server";
import { getHostUrl } from "@/utils/getHostUrl";

const TOTAL_COLORS = 16777216; // 256^3 (total possible hex colors)
const MAX_PER_SITEMAP = 4096; // Maximum URLs per sitemap file
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

function padHex(n: number) {
  return n.toString(16).padStart(6, "0").toUpperCase(); // Uppercase for consistency
}

export async function GET(
  req: Request | NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const idNum = parseInt(id, 10);

  // Validate sitemap ID
  if (Number.isNaN(idNum) || idNum < 1 || idNum > SITEMAP_COUNT) {
    return new NextResponse("Invalid sitemap ID", { status: 404 });
  }

  const hostUrl = await getHostUrl();
  const now = new Date().toISOString();
  const start = (idNum - 1) * MAX_PER_SITEMAP;
  const end = Math.min(start + MAX_PER_SITEMAP, TOTAL_COLORS);

  // Start XML with a stylesheet reference
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>\n`;
  xml += `<!-- Sitemap ${id} for Color Pages (Range: ${start} to ${
    end - 1
  }) -->\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <!-- Generated ${now} -->\n`;
  xml += `  <!-- Total URLs in this sitemap: ${end - start} -->\n`;

  // Generate URL entries with additional metadata
  for (let i = start; i < end; i++) {
    const hex = padHex(i);
    xml += `  <url>\n`;
    xml += `    <loc>${hostUrl}/${hex}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`; // Suggest monthly updates
    xml += `    <priority>0.8</priority>\n`; // Moderate priority for color pages
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;
  xml += `<!-- End of Sitemap ${id} -->`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
