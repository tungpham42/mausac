import { LanguageProvider } from "@/context/LanguageContext";
import ColorMixer from "@/components/ColorMixer";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import validLanguages from "@/languages";
import TopMenu from "@/components/TopMenu";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const language = "en";
  const baseUrl = `${hostUrl}/color-mixer`;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((lang) => {
    hreflangs[lang] =
      lang === "en" ? baseUrl : `${hostUrl}/${lang}/color-mixer`;
  });
  hreflangs["x-default"] = baseUrl;

  return {
    title: getTranslation(language, "metadata.colorMixer.title") as string,
    description: getTranslation(
      language,
      "metadata.colorMixer.description"
    ) as string,
    keywords: getTranslation(
      language,
      "metadata.colorMixer.keywords"
    ) as string[],
    alternates: {
      canonical: baseUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: getTranslation(language, "metadata.colorMixer.ogTitle") as string,
      description: getTranslation(
        language,
        "metadata.colorMixer.ogDescription"
      ) as string,
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/color-mixer-1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: getTranslation(
            language,
            "metadata.colorMixer.ogImageAlt"
          ) as string,
        },
      ],
      siteName: getTranslation(
        language,
        "metadata.colorMixer.siteName"
      ) as string,
    },
  };
}

export default async function ColorMixerPage() {
  const language = "en";
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/color-mixer`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: getTranslation(language, "metadata.colorMixer.title") as string,
    description: getTranslation(
      language,
      "metadata.colorMixer.description"
    ) as string,
    url: baseUrl,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    inLanguage: language,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: {
      "@type": "Organization",
      name: "Soft.io.vn",
      url: "https://soft.io.vn",
    },
  };

  return (
    <LanguageProvider initialLanguage={language}>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mt-0">
        <TopMenu />
        <h1 className="mb-4 text-center">
          {getTranslation(language, "colorMixer.colorMixerTitle")}
        </h1>
        <ColorMixer />
      </div>
    </LanguageProvider>
  );
}
