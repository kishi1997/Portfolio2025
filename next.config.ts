import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // これを追加！
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
