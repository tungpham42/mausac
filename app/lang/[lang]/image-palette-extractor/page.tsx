import { LanguageProvider } from "@/context/LanguageContext";
import ImagePaletteExtractor from "@/components/ImagePaletteExtractor";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";
import TopMenu from "@/components/TopMenu";
import { getTranslation } from "@/translations";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const language = validLanguages.includes(paramsResolved.lang)
    ? paramsResolved.lang
    : "en";
  const baseUrl = `${hostUrl}/${language}/image-palette-extractor`;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((lang) => {
    hreflangs[lang] =
      lang === "en"
        ? `${hostUrl}/image-palette-extractor`
        : `${hostUrl}/${lang}/image-palette-extractor`;
  });
  hreflangs["x-default"] = `${hostUrl}/image-palette-extractor`;

  return {
    title: getTranslation(
      language,
      "metadata.imagePaletteExtractor.title"
    ) as string,
    description: getTranslation(
      language,
      "metadata.imagePaletteExtractor.description"
    ) as string,
    keywords: getTranslation(
      language,
      "metadata.imagePaletteExtractor.keywords"
    ) as string[],
    alternates: {
      canonical: baseUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: getTranslation(
        language,
        "metadata.imagePaletteExtractor.ogTitle"
      ) as string,
      description: getTranslation(
        language,
        "metadata.imagePaletteExtractor.ogDescription"
      ) as string,
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/image-palette-extractor-1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: getTranslation(
            language,
            "metadata.imagePaletteExtractor.ogImageAlt"
          ) as string,
        },
      ],
      siteName: getTranslation(
        language,
        "metadata.imagePaletteExtractor.siteName"
      ) as string,
    },
  };
}

export default async function ImagePaletteExtractorLangPage({
  params,
}: PageProps) {
  const { lang } = await params;
  const language = validLanguages.includes(lang) ? lang : "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Palette Extractor",
    description: "Free online tool to extract color palettes from images",
    url: `${await getHostUrl()}/${lang}/image-palette-extractor`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    permissions: "browser",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "Soft.io.vn",
      url: "https://soft.io.vn",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <LanguageProvider initialLanguage={language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mt-0">
        <TopMenu />
        <h1 className="mb-4 text-center">
          {getTranslation(language, "imagePaletteExtractor.title")}
        </h1>
        <ImagePaletteExtractor language={language} />
      </div>
    </LanguageProvider>
  );
}
