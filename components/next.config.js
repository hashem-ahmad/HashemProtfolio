/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Vercel supports Next.js image optimization natively.
    unoptimized: false,
  },
  // This disables blocking deploys on ESLint errors (optional, but recommended for now).
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove the following lines if previously set for GitHub Pages:
  // output: "export",
  // basePath: "/Protfolio",
  // assetPrefix: "/Protfolio/",
  // trailingSlash: true,
};

module.exports = nextConfig;
