import { LanguageProvider } from "@/context/LanguageContext";
import ImagePaletteExtractor from "@/components/ImagePaletteExtractor";
import type { Metadata } from "next";
import { getHostUrl } from "@/utils/getHostUrl";
import validLanguages from "@/languages";
import TopMenu from "@/components/TopMenu";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  // Generate static params for all supported languages except English
  return validLanguages
    .filter((lang) => lang !== "en")
    .map((lang) => ({
      lang: lang,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const hostUrl = await getHostUrl();
  const baseUrl = `${hostUrl}/${lang}/image-palette-extractor`;

  const hreflangs: Record<string, string> = {};
  validLanguages.forEach((language) => {
    hreflangs[language] =
      language === "en" ? `${hostUrl}/image-palette-extractor` : `${hostUrl}/${language}/image-palette-extractor`;
  });
  hreflangs["x-default"] = `${hostUrl}/image-palette-extractor`;

  // Language-specific metadata
  const titles: Record<string, string> = {
    vi: "Trích xuất bảng màu từ hình ảnh - Công cụ miễn phí - color.soft.io.vn",
    fr: "Extracteur de palette d'images - Outil gratuit - color.soft.io.vn",
    de: "Bild-Farbpaletten-Extraktor - Kostenloses Tool - color.soft.io.vn",
    it: "Estrattore di tavolozza immagini - Strumento gratuito - color.soft.io.vn",
    ja: "画像カラーパレット抽出ツール - 無料 - color.soft.io.vn",
    ko: "이미지 컬러 팔레트 추출기 - 무료 도구 - color.soft.io.vn",
    es: "Extractor de paleta de colores de imagen - Herramienta gratuita - color.soft.io.vn",
    pt: "Extrator de paleta de cores de imagem - Ferramenta gratuita - color.soft.io.vn",
    ru: "Извлечение цветовой палитры изображения - Бесплатный инструмент - color.soft.io.vn",
    zh: "图像调色板提取器 - 免费工具 - color.soft.io.vn",
  };

  const descriptions: Record<string, string> = {
    vi: "Công cụ trích xuất bảng màu từ hình ảnh miễn phí. Tải lên bất kỳ hình ảnh nào và nhận các màu chủ đạo với mã màu HEX, RGB, HSL.",
    fr: "Outil gratuit pour extraire les palettes de couleurs des images. Téléchargez n'importe quelle image et obtenez les couleurs dominantes avec les codes couleur HEX, RGB, HSL.",
    de: "Kostenloses Tool zur Extraktion von Farbpaletten aus Bildern. Laden Sie ein beliebiges Bild hoch und erhalten Sie die dominanten Farben mit HEX-, RGB-, HSL-Farbcodes.",
    it: "Strumento gratuito per estrarre le tavolozze di colori dalle immagini. Carica qualsiasi immagine e ottieni i colori dominanti con codici colore HEX, RGB, HSL.",
    ja: "画像からカラーパレットを抽出する無料ツール。任意の画像をアップロードして、HEX、RGB、HSLカラーコードで主要な色を取得します。",
    ko: "이미지에서 컬러 팔레트를 추출하는 무료 도구입니다. 이미지를 업로드하고 HEX, RGB, HSL 컬러 코드로 주요 색상을 가져오세요.",
    es: "Herramienta gratuita para extraer paletas de colores de imágenes. Sube cualquier imagen y obtén los colores dominantes con códigos de color HEX, RGB, HSL.",
    pt: "Ferramenta gratuita para extrair paletas de cores de imagens. Carregue qualquer imagem e obtenha as cores dominantes com códigos de cor HEX, RGB, HSL.",
    ru: "Бесплатный инструмент для извлечения цветовых палитр из изображений. Загрузите любое изображение и получите доминирующие цвета с цветовыми кодами HEX, RGB, HSL.",
    zh: "从图像中提取调色板的免费工具。上传任何图像并获取具有HEX、RGB、HSL颜色代码的主要颜色。",
  };

  const title = titles[lang] || titles.vi;
  const description = descriptions[lang] || descriptions.vi;

  return {
    title,
    description,
    keywords: [
      "image palette extractor",
      "color extraction",
      "image colors",
      "color palette generator",
      "dominant colors",
      "color analysis",
      "hex colors",
      "rgb colors",
      "image color picker"
    ],
    alternates: {
      canonical: baseUrl,
      languages: hreflangs,
    },
    openGraph: {
      title: title.split(" - ")[0],
      description,
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
    twitter: {
      card: "summary_large_image",
      title: title.split(" - ")[0],
      description,
      images: [`${hostUrl}/image-palette-extractor-1200x630.jpg`],
    },
  };
}

export default async function ImagePaletteExtractorLangPage({ params }: PageProps) {
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
          {language === 'vi' ? 'Trích xuất bảng màu từ hình ảnh' : 
           language === 'fr' ? 'Extracteur de palette d\'images' :
           language === 'de' ? 'Bild-Farbpaletten-Extraktor' :
           language === 'it' ? 'Estrattore di tavolozza immagini' :
           language === 'ja' ? '画像カラーパレット抽出ツール' :
           language === 'ko' ? '이미지 컬러 팔레트 추출기' :
           language === 'es' ? 'Extractor de paleta de colores de imagen' :
           language === 'pt' ? 'Extrator de paleta de cores de imagem' :
           language === 'ru' ? 'Извлечение цветовой палитры изображения' :
           language === 'zh' ? '图像调色板提取器' :
           'Image Palette Extractor'}
        </h1>
        <ImagePaletteExtractor language={language} />
      </div>
    </LanguageProvider>
  );
}
