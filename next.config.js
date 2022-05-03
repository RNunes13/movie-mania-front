/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  webpack5: true,
  images: {
    domains: ['image.tmdb.org'],
  }
}
