import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["canvas", "sharp"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
