/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  webpack5: true,
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
}
