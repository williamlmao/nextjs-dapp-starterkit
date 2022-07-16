/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["unsplash.com", "picsum.photos"],
  },
};

module.exports = nextConfig;
