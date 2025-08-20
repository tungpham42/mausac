import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";
import ColorLogo from "@/components/ColorLogo";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const initialLanguage = resolvedParams.lang || "en";

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <html lang={initialLanguage}>
        <head>
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536`}
            crossOrigin="anonymous"
          />
        </head>
        <body>
          <div className="d-flex justify-content-start gap-1">
            <MainBrandLogo
              logoSrc="/soft-logo.webp"
              mainDomain="soft.io.vn"
              dismissible={false}
              altText="Logo Soft"
            />
            <ColorLogo
              logoSrc="/color-logo.webp"
              mainDomain="color.soft.io.vn"
              dismissible={false}
              altText="Logo Color"
            />
          </div>
          {children}
          <Footer />
          <GoogleAnalytics ga_id="G-HHXZSNQ65X" />
        </body>
      </html>
    </LanguageProvider>
  );
}
