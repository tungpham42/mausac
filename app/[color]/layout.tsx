import { ReactNode } from "react";
import { Metadata } from "next";
import { parseColor } from "@/utils/colorUtils";
import { getHostUrl } from "@/utils/getHostUrl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ color: string }>;
}): Promise<Metadata> {
  const hostUrl = await getHostUrl();
  const paramsResolved = await params;
  const color = parseColor(paramsResolved.color);
  const hex = color?.toHexString() || "#000000";
  const name = color?.toName() || paramsResolved.color;

  const hexClean = hex.replace("#", "");

  return {
    title: `${name} - Tra Cứu Mã Màu`,
    description: `Tổng hợp các biến thể của màu ${name}`,
    openGraph: {
      title: `${name} - Tra Cứu Mã Màu`,
      description: `Tổng hợp các biến thể của màu ${name}`,
      type: "website",
      url: `${hostUrl}/${hexClean}`,
      siteName: "Tra Cứu Mã Màu",
      images: [
        {
          url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
          width: 1200,
          height: 630,
          alt: `Xem trước ${name}`,
        },
      ],
    },
  };
}

export default function ColorLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
