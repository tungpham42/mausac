import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MainBrandLogo from "@/components/MainBrandLogo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
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
  );
}
