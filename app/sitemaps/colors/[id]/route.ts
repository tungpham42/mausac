import { NextRequest } from "next/server";
import { getHostUrl } from "@/utils/getHostUrl";
export const runtime = "nodejs";

const TOTAL_COLORS = 16777216;
const MAX_PER_SITEMAP = 50000;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

function padHex(n: number) {
  return n.toString(16).padStart(6, "0");
}

export async function GET(
  req: Request | NextRequest,
  { params }: { params: Promise<{ id: string }> } // Updated type to Promise
) {
  const { id } = await params; // Await the params to resolve the Promise
  const idNum = parseInt(id, 10);
  if (Number.isNaN(idNum) || idNum < 1 || idNum > SITEMAP_COUNT) {
    return new Response("Invalid sitemap ID", { status: 404 });
  }

  const hostUrl = await getHostUrl();

  const start = (idNum - 1) * MAX_PER_SITEMAP;
  const end = Math.min(start + MAX_PER_SITEMAP, TOTAL_COLORS);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (let i = start; i < end; i++) {
    const hex = padHex(i);
    xml += `  <url><loc>${hostUrl}/${hex}</loc></url>\n`;
  }

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
