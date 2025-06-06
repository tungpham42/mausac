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
      <h1 className="mb-4">Tra cứu mã màu</h1>
      <ColorSearchForm />
      <h2>
        {formats.hex} - {color.toName() || "Unnamed Color"}
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
