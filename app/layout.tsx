import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";
import ColorLogo from "@/components/ColorLogo";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import { headers } from "next/headers";
import validLanguages from "@/languages";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const resolvedParams = await params;
  const headersList = await headers();
  const langFromHeader =
    headersList.get("x-lang") || resolvedParams.lang || "en";
  const initialLanguage = validLanguages.includes(langFromHeader.toLowerCase())
    ? langFromHeader.toLowerCase()
    : "en";

  console.log("resolvedParams:", resolvedParams);
  console.log("langFromHeader:", langFromHeader);
  console.log("initialLanguage:", initialLanguage);

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
          <div className="d-flex justify-content-start gap-0">
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
          <Script id="update-lang" strategy="afterInteractive">
            {`
              const lang = localStorage.getItem('language') || '${initialLanguage}';
              if (lang !== document.documentElement.lang) {
                document.documentElement.lang = lang;
                console.log('Client - Updated lang to:', lang);
              }
            `}
          </Script>
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t9evh6woav");
          `}
          </Script>
        </body>
      </html>
    </LanguageProvider>
  );
}
