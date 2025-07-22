/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/roleradar-landing",
  assetPrefix: "/roleradar-landing/",
  trailingSlash: true,

  images: { unoptimized: true },
};

export default nextConfig;
