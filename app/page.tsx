import Home from "@/components/Home";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import validLanguages from "@/languages";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const language = "en";
  const baseUrl = hostUrl;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((lang) => {
    hreflangs[lang] = lang === "en" ? hostUrl : `${hostUrl}/${lang}`;
  });
  hreflangs["x-default"] = hostUrl;

  return {
    title: getTranslation(language, "metadata.home.title") as string,
    description: getTranslation(
      language,
      "metadata.home.description"
    ) as string,
    keywords: getTranslation(language, "metadata.home.keywords") as string[],
    alternates: {
      canonical: baseUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: getTranslation(language, "metadata.home.ogTitle") as string,
      description: getTranslation(
        language,
        "metadata.home.ogDescription"
      ) as string,
      type: "website",
      url: baseUrl,
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: getTranslation(language, "metadata.home.ogImageAlt") as string,
        },
      ],
      siteName: getTranslation(language, "metadata.home.siteName") as string,
    },
  };
}

export default async function HomePage() {
  const language = "en";
  const hostUrl = await getHostUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: getTranslation(language, "metadata.home.title") as string,
    description: getTranslation(
      language,
      "metadata.home.description"
    ) as string,
    url: hostUrl,
    inLanguage: language,
    publisher: {
      "@type": "Organization",
      name: "Soft.io.vn",
      url: "https://soft.io.vn",
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home language={language} />
    </>
  );
}
