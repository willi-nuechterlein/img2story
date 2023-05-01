/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/e.js',
        destination: 'https://rum.cronitor.io/script.js'
      }
    ]
  }
}

module.exports = nextConfig
