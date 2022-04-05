/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    strapi_host: process.env.STRAPI_HOST,
  },
}

module.exports = nextConfig
