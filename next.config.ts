import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty for default
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
  // output: 'export'

  /* config options here */
};

export default nextConfig;
