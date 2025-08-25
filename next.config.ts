import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false, // 👈 disables trailing slash
  reactStrictMode: true,
  async rewrites() {
    return [
      // Home theo ngôn ngữ (ngoài EN)
      {
        source: "/:lang(vi|fr|de|it|ja|ko|es|pt|ru|zh)",
        destination: "/lang/:lang",
      },
      // Color theo ngôn ngữ
      {
        source: "/:lang(vi|fr|de|it|ja|ko|es|pt|ru|zh)/:color",
        destination: "/lang/:lang/:color",
      },
      // Color mixer theo ngôn ngữ
      {
        source: "/:lang(vi|fr|de|it|ja|ko|es|pt|ru|zh)/color-mixer",
        destination: "/lang/:lang/color-mixer",
      },
      // Image palette extractor theo ngôn ngữ
      {
        source: "/:lang(vi|fr|de|it|ja|ko|es|pt|ru|zh)/image-palette-extractor",
        destination: "/lang/:lang/image-palette-extractor",
      },
    ];
  },
  async redirects() {
    return [
      // EN là mặc định
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:color", destination: "/:color", permanent: true },
      { source: "/en/color-mixer", destination: "/color-mixer", permanent: true },
      { source: "/en/image-palette-extractor", destination: "/image-palette-extractor", permanent: true },
    ];
  },
};

export default nextConfig;
