import { LanguageProvider } from "@/context/LanguageContext";
import ImagePaletteExtractor from "@/components/ImagePaletteExtractor";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";
import TopMenu from "@/components/TopMenu";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/image-palette-extractor`;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((lang) => {
    hreflangs[lang] =
      lang === "en" ? baseUrl : `${hostUrl}/${lang}/image-palette-extractor`;
  });
  hreflangs["x-default"] = baseUrl;

  return {
    title:
      "Image Palette Extractor - Extract Colors from Images - color.soft.io.vn",
    description:
      "Free online image palette extractor tool. Extract dominant colors from any image. Get HEX, RGB, and HSL color codes with percentage distribution.",
    keywords: [
      "image palette extractor",
      "color extraction",
      "image colors",
      "color palette generator",
      "dominant colors",
      "color analysis",
      "hex colors",
      "rgb colors",
      "image color picker",
    ],
    alternates: {
      canonical: baseUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: "Image Palette Extractor - Extract Colors from Images",
      description:
        "Free online tool to extract color palettes from images. Upload any image and get the dominant colors with their color codes.",
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/image-palette-extractor-1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Image Palette Extractor Tool",
        },
      ],
      siteName: "Color Tools",
    },
  };
}

export default async function ImagePaletteExtractorPage() {
  const language = "en";
  const hostUrl = await getHostUrl();

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Palette Extractor",
    description:
      "Extract color palettes from images. Upload an image and get the dominant colors with their HEX, RGB, and HSL values.",
    url: hostUrl + "/image-palette-extractor",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    inLanguage: language,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Extract dominant colors from images",
      "Support for JPG, PNG, GIF, WEBP formats",
      "Get HEX, RGB, HSL color codes",
      "Color percentage distribution",
      "Download color palette as JSON",
      "Copy individual or all colors",
    ],
  };

  return (
    <LanguageProvider initialLanguage={language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mt-0">
        <TopMenu />
        <h1 className="mb-4 text-center">Image Palette Extractor</h1>
        <ImagePaletteExtractor language={language} />
      </div>
    </LanguageProvider>
  );
}
