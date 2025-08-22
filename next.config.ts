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
    ];
  },
  async redirects() {
    return [
      // EN là mặc định
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:color", destination: "/:color", permanent: true },
    ];
  },
};

export default nextConfig;
