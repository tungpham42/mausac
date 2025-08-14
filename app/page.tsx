import Home from "@/components/Home";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import { getTranslation } from "@/translations";

// Force static generation
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const language = "vi"; // Default language for static generation

  return {
    title: getTranslation(language, "metadata.home.title") as string,
    description: getTranslation(
      language,
      "metadata.home.description"
    ) as string,
    keywords: getTranslation(language, "metadata.home.keywords") as string[],
    alternates: {
      canonical: hostUrl,
    },
    openGraph: {
      title: getTranslation(language, "metadata.home.ogTitle") as string,
      description: getTranslation(
        language,
        "metadata.home.ogDescription"
      ) as string,
      type: "website",
      url: hostUrl,
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

export default function HomePage() {
  // Language will be handled client-side
  return <Home language="vi" />;
}
