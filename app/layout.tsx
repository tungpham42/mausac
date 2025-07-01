import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";
import { LanguageProvider } from "@/context/LanguageContext";

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
