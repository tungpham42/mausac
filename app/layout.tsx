import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const initialLanguage = resolvedParams.lang || "vi";

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
          <SpeedInsights />
        </head>
        <body>
          <MainBrandLogo
            logoSrc="/soft-logo.webp"
            mainDomain="soft.io.vn"
            dismissible={false}
            altText="Logo Soft"
          />
          {children}
          <Footer />
          <GoogleAnalytics ga_id="G-HHXZSNQ65X" />
        </body>
      </html>
    </LanguageProvider>
  );
}
