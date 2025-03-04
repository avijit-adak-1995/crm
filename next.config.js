/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
// next.config.js

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable caching in development
      config.cache = false;
    }

    return config;
  },
};

