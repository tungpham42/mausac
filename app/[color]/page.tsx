import { redirect } from "next/navigation";
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
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

// Force static generation
export const dynamic = 'force-static';

// Generate static params for common colors
export async function generateStaticParams() {
  // Common colors for static generation
  const commonColors = [
    'ff0000', // red
    '00ff00', // green  
    '0000ff', // blue
    'ffff00', // yellow
    'ff00ff', // magenta
    '00ffff', // cyan
    '000000', // black
    'ffffff', // white
    '808080', // gray
    'orange',
    'purple',
    'pink',
    'brown',
    'navy',
    'lime',
    'teal',
    'silver',
    'gold',
    'maroon',
    'olive'
  ];

  return commonColors.map((color) => ({
    color: color,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ color: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const language = "vi"; // Default language for static generation
  const color = parseColor(paramsResolved.color);
  const hex = color?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");
  const colorName = color?.toName();
  const baseUrl = `${hostUrl}/${colorName || hexClean}`;

  return {
    title: (
      getTranslation(language, "metadata.colorPage.title") as string
    ).replace("<hex>", hex),
    description: (
      getTranslation(language, "metadata.colorPage.description") as string
    ).replace("<hex>", hex),
    keywords: (
      getTranslation(language, "metadata.colorPage.keywords") as string[]
    ).map((kw) => kw.replace("<hex>", hex)),
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: (
        getTranslation(language, "metadata.colorPage.ogTitle") as string
      ).replace("<hex>", hex),
      description: (
        getTranslation(language, "metadata.colorPage.ogDescription") as string
      ).replace("<hex>", hex),
      type: "website",
      url: baseUrl,
      siteName: getTranslation(
        language,
        "metadata.colorPage.siteName"
      ) as string,
      images: [
        {
          url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
          width: 1200,
          height: 630,
          alt: (
            getTranslation(language, "metadata.colorPage.ogImageAlt") as string
          ).replace("<hex>", hex),
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
  const resolvedParams = await params;
  const language = "vi"; // Default language for static generation
  const color = parseColor(resolvedParams.color);

  if (!color) redirect(`/`);

  const formats = getColorFormats(color);

  if (!formats) redirect(`/`);

  const colorHex = formats.hex;

  const shades = getShades(colorHex) || [];
  const tints = getTints(colorHex) || [];
  const complement = getComplement(colorHex);
  const triadic = getTriadic(colorHex) || [];
  const analogous = getAnalogous(colorHex) || [];
  const splitComp = getSplitComplement(colorHex) || [];

  return (
    <LanguageProvider initialLanguage={language}>
      <div className="container mt-5">
        <LanguageToggle />
        <h1 className="mb-4 text-center">
          <Link
            href={`/`}
            className="btn btn-link btn-lg text-decoration-none"
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="me-2" />
          </Link>
          {(getTranslation(language, "colorPage.header") as string).replace(
            "<hex>",
            formats.hex
          )}
        </h1>
        <ColorSearchForm />
        <h2>
          <span className="color-code">{formats.hex}</span> -{" "}
          {color.toName() || getTranslation(language, "colorPage.unnamedColor")}
        </h2>
        <ColorCard hex={formats.hex} />
        <ColorFormats formats={formats} />
        <ColorPalette
          type="Shades"
          label={getTranslation(language, "colorPage.shades") as string}
          colors={shades}
        />
        <ColorPalette
          type="Tints"
          label={getTranslation(language, "colorPage.tints") as string}
          colors={tints}
        />
        {complement && (
          <ColorPalette
            type="Complementary"
            label={
              getTranslation(language, "colorPage.complementary") as string
            }
            colors={[complement]}
          />
        )}
        <ColorPalette
          type="Triadic"
          label={getTranslation(language, "colorPage.triadic") as string}
          colors={triadic}
        />
        <ColorPalette
          type="Analogous"
          label={getTranslation(language, "colorPage.analogous") as string}
          colors={analogous}
        />
        <ColorPalette
          type="Split Complement"
          label={
            getTranslation(language, "colorPage.splitComplement") as string
          }
          colors={splitComp}
        />
      </div>
    </LanguageProvider>
  );
}
