import { LanguageProvider } from "@/context/LanguageContext";
import ColorMixer from "@/components/ColorMixer";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";
import validLanguages from "@/languages";
import TopMenu from "@/components/TopMenu";

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
  const baseUrl = `${hostUrl}/${language}/color-mixer`;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((lang) => {
    hreflangs[lang] =
      lang === "en"
        ? `${hostUrl}/color-mixer`
        : `${hostUrl}/${lang}/color-mixer`;
  });
  hreflangs["x-default"] = `${hostUrl}/color-mixer`;

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

export default async function ColorMixerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const paramsResolved = await params;
  const language = validLanguages.includes(paramsResolved.lang)
    ? paramsResolved.lang
    : "en";
  return (
    <LanguageProvider initialLanguage={language}>
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
