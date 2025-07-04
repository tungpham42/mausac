import Home from "@/components/Home";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const params = await searchParams;
  const language = params.lang || "vi";
  const canonicalUrl = `${hostUrl}?lang=${language}`;

  return {
    title: getTranslation(language, "metadata.home.title") as string,
    description: getTranslation(
      language,
      "metadata.home.description"
    ) as string,
    keywords: getTranslation(language, "metadata.home.keywords") as string[],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: getTranslation(language, "metadata.home.ogTitle") as string,
      description: getTranslation(
        language,
        "metadata.home.ogDescription"
      ) as string,
      type: "website",
      url: canonicalUrl,
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
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const language = params.lang || "vi";
  return <Home language={language} />;
}
