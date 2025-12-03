import { NextRequest, NextResponse } from "next/server";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";

const TOTAL_COLORS = 16777216;
const MAX_PER_SITEMAP = 4096;
const SITEMAP_COUNT = Math.ceil(TOTAL_COLORS / MAX_PER_SITEMAP);

const cssColors = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "rebeccapurple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

const padHex = (n: number) => n.toString(16).padStart(6, "0").toUpperCase();

// --------------------------------------------
// CACHE CỨNG: 7 NGÀY – runtime gần bằng 0
// --------------------------------------------
const CACHE_HEADER = "public, s-maxage=604800, stale-while-revalidate=86400";

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
  const now = new Date().toISOString();
  const lastMod = now.split("T")[0];

  // Dùng array push — nhanh hơn concat string rất nhiều
  const lines: string[] = [];

  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(
    `<?xml-stylesheet type="text/xsl" href="${hostUrl}/sitemap.xsl"?>`
  );

  if (idNum === 0) {
    // -------- ROOT SITEMAP --------
    lines.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);
    lines.push(
      `  <url><loc>${hostUrl}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
    );

    for (const lang of validLanguages) {
      if (lang !== "en") {
        lines.push(
          `  <url><loc>${hostUrl}/${lang}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
        );
      }
    }

    for (const lang of validLanguages) {
      const loc =
        lang === "en"
          ? `${hostUrl}/color-mixer`
          : `${hostUrl}/${lang}/color-mixer`;
      lines.push(
        `  <url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
      );
    }

    for (const lang of validLanguages) {
      const loc =
        lang === "en"
          ? `${hostUrl}/image-palette-extractor`
          : `${hostUrl}/${lang}/image-palette-extractor`;
      lines.push(
        `  <url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
      );
    }

    for (const color of cssColors) {
      for (const lang of validLanguages) {
        const loc =
          lang === "en" ? `${hostUrl}/${color}` : `${hostUrl}/${lang}/${color}`;
        lines.push(
          `  <url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
        );
      }
    }
  } else {
    // -------- COLOR SITEMAPS --------
    const start = (idNum - 1) * MAX_PER_SITEMAP;
    const end = Math.min(start + MAX_PER_SITEMAP, TOTAL_COLORS);

    lines.push(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

    for (let i = start; i < end; i++) {
      const hex = padHex(i);
      for (const lang of validLanguages) {
        const loc =
          lang === "en" ? `${hostUrl}/${hex}` : `${hostUrl}/${lang}/${hex}`;

        lines.push(
          `  <url><loc>${loc}</loc><lastmod>${lastMod}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`
        );
      }
    }
  }

  lines.push(`</urlset>`);

  // Join một lần — cực nhanh
  const xml = lines.join("\n");

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": CACHE_HEADER,
    },
  });
}
