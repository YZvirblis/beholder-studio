/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js image optimization for Amplify
  },
  assetPrefix: "/", // Ensure correct asset paths
  trailingSlash: true, // Ensure proper URL handling
};

module.exports = nextConfig;
