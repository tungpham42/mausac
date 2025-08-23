import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdSenseBanner = () => {
  const [adFailed, setAdFailed] = useState(false);

  useEffect(() => {
    // Attempt to initialize AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense failed to load:", e);
      setAdFailed(true);
    }

    // Optional: Set a timeout to check if ad loaded
    const timer = setTimeout(() => {
      const adElement = document.querySelector(".adsbygoogle");
      if (adElement && !adElement.hasChildNodes()) {
        setAdFailed(true);
      }
    }, 5000); // Wait 5 seconds to determine if ad loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!adFailed ? (
        <>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536"
            crossOrigin="anonymous"
          ></script>

          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3585118770961536"
            data-ad-slot="6125104736"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
            }}
          />
        </>
      ) : (
        <Link
          href="https://soft.io.vn"
          className="image-banner mx-auto my-4"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            width: "fit-content",
          }}
        >
          <Image
            src="/soft-banner.jpg"
            alt="Fallback Banner"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Link>
      )}
    </>
  );
};

export default AdSenseBanner;
