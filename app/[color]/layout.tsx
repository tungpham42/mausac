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

  const hexClean = hex.replace("#", "");

  return {
    title: `${hex} - Tra cứu mã màu`,
    description: `Tổng hợp các biến thể của màu ${hex}`,
    openGraph: {
      title: `${hex} - Tra cứu mã màu`,
      description: `Tổng hợp các biến thể của màu ${hex}`,
      type: "website",
      url: `${hostUrl}/${hexClean}`,
      siteName: "Tra cứu mã màu",
      images: [
        {
          url: `https://singlecolorimage.com/get/${hexClean}/1200x630`,
          width: 1200,
          height: 630,
          alt: `Xem trước ${hex} - Tra cứu mã màu`,
        },
      ],
    },
  };
}

export default function ColorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
