import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lumen/bootstrap.min.css";
import "./globals.css";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata(): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  return {
    title: "Tra Cứu Mã Màu | Trang chủ",
    description:
      "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
    keywords: ["mã màu", "tra cứu màu sắc", "màu sắc", "hex", "rgb", "hsl"],
    openGraph: {
      title: "Tra Cứu Mã Màu | Trang chủ",
      description:
        "Tra cứu mã màu nhanh chóng và chính xác. Hỗ trợ các định dạng màu sắc như HEX, RGB, HSL và cung cấp các biến thể màu sắc.",
      type: "website",
      url: hostUrl,
      images: [
        {
          url: `${hostUrl}/1200x630.jpg`,
          width: 1200,
          height: 630,
          alt: "Tra Cứu Mã Màu",
        },
      ],
      siteName: "Tra Cứu Mã Màu",
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
      <body>{children}</body>
    </html>
  );
}
