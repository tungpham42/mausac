const AdSenseBanner = () => {
  return (
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
  );
};

export default AdSenseBanner;
