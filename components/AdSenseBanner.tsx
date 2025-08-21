import Script from "next/script";

const AdSenseBanner = () => {
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3585118770961536"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        onLoad={() => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }}
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3585118770961536"
        data-ad-slot="6125104736"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </>
  );
};

export default AdSenseBanner;
