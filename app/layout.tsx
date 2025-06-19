import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { getHostUrl } from "@/utils/getHostUrl";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Tra cứu mã màu | Trang chủ",
    description:
      "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
    keywords: ["mã màu", "tra cứu màu sắc", "màu sắc", "hex", "rgb", "hsl"],
    openGraph: {
      title: "Tra cứu mã màu | Trang chủ",
      description:
        "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
      type: "website",
      url: hostUrl,
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Tra cứu mã màu",
        },
      ],
      siteName: "Tra cứu mã màu",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
