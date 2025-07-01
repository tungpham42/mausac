import { notFound } from "next/navigation";
import {
  parseColor,
  getColorFormats,
  getShades,
  getTints,
  getComplement,
  getTriadic,
  getAnalogous,
  getSplitComplement,
} from "@/utils/colorUtils";
import ColorCard from "@/components/ColorCard";
import ColorFormats from "@/components/ColorFormats";
import ColorPalette from "@/components/ColorPalette";
import ColorSearchForm from "@/components/ColorSearchForm";
import Link from "next/link";
import { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ color: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const color = parseColor(paramsResolved.color);
  const hex = color?.toHexString() || "#000000";

  const hexClean = hex.replace("#", "");

  return {
    title: `${hex} - Tra cứu mã màu`,
    description: `Tổng hợp các biến thể của màu ${hex}`,
    openGraph: {
      title: `${hex} - Tra cứu mã màu`,
      description: `Tổng hợp các biến thể của màu ${hex}`,
      type: "website",
      url: `${hostUrl}/${hexClean}`,
      siteName: "Tra cứu mã màu",
      images: [
        {
          url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
          width: 1200,
          height: 630,
          alt: `Xem trước ${hex} - Tra cứu mã màu`,
        },
      ],
    },
  };
}

export default async function ColorPage({
  params,
}: {
  params: Promise<{ color: string }>;
}) {
  const resolvedParams = await params; // Resolve the Promise
  const color = parseColor(resolvedParams.color);

  if (!color) return notFound();

  const formats = getColorFormats(color);

  if (!formats) return notFound();

  const colorHex = formats.hex;

  const shades = getShades(colorHex) || [];
  const tints = getTints(colorHex) || [];
  const complement = getComplement(colorHex);
  const triadic = getTriadic(colorHex) || [];
  const analogous = getAnalogous(colorHex) || [];
  const splitComp = getSplitComplement(colorHex) || [];

  return (
    <div className="container mt-5">
      <Link href="/" className="mb-4 text-center d-block">
        <h1>Tra cứu mã màu</h1>
      </Link>
      <ColorSearchForm />
      <h2>
        <span className="color-code">{formats.hex}</span> -{" "}
        {color.toName() || "Màu không tên"}
      </h2>
      <ColorCard hex={formats.hex} />
      <ColorFormats formats={formats} />
      <ColorPalette title="Shades" colors={shades} />
      <ColorPalette title="Tints" colors={tints} />
      {complement && (
        <ColorPalette title="Complementary" colors={[complement]} />
      )}
      <ColorPalette title="Triadic" colors={triadic} />
      <ColorPalette title="Analogous" colors={analogous} />
      <ColorPalette title="Split Complement" colors={splitComp} />
    </div>
  );
}
