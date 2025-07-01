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
import LanguageToggle from "@/components/LanguageToggle";
import Link from "next/link";
import { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import { LanguageProvider } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ color: string }>;
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const searchParamsResolved = await searchParams;
  const language = searchParamsResolved.lang || "vi";
  const color = parseColor(paramsResolved.color);
  const hex = color?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");

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
    openGraph: {
      title: (
        getTranslation(language, "metadata.colorPage.ogTitle") as string
      ).replace("<hex>", hex),
      description: (
        getTranslation(language, "metadata.colorPage.ogDescription") as string
      ).replace("<hex>", hex),
      type: "website",
      url: `${hostUrl}/${hexClean}`,
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
  searchParams,
}: {
  params: Promise<{ color: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const searchParamsResolved = await searchParams;
  const language = searchParamsResolved.lang || "vi";
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
    <LanguageProvider initialLanguage={language}>
      <div className="container mt-5">
        <LanguageToggle />
        <h1 className="mb-4 text-center">
          <Link href="/" className="btn btn-link btn-lg text-decoration-none">
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
          title="Shades"
          label={getTranslation(language, "colorPage.shades") as string}
          colors={shades}
        />
        <ColorPalette
          title="Tints"
          label={getTranslation(language, "colorPage.tints") as string}
          colors={tints}
        />
        {complement && (
          <ColorPalette
            title="Complementary"
            label={
              getTranslation(language, "colorPage.complementary") as string
            }
            colors={[complement]}
          />
        )}
        <ColorPalette
          title="Triadic"
          label={getTranslation(language, "colorPage.triadic") as string}
          colors={triadic}
        />
        <ColorPalette
          title="Analogous"
          label={getTranslation(language, "colorPage.analogous") as string}
          colors={analogous}
        />
        <ColorPalette
          title="Split Complement"
          label={
            getTranslation(language, "colorPage.splitComplement") as string
          }
          colors={splitComp}
        />
      </div>
    </LanguageProvider>
  );
}
