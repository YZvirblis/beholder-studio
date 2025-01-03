import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable built-in image optimization for Amplify
  },
};

export default nextConfig;
