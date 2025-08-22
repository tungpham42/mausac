import Home from "@/components/Home";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import validLanguages from "@/languages";

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
  const baseUrl = language === "en" ? hostUrl : `${hostUrl}/${language}`;

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const paramsResolved = await params;
  const language = validLanguages.includes(paramsResolved.lang)
    ? paramsResolved.lang
    : "en";
  return <Home language={language} />;
}
