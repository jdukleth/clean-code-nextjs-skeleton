/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cloudinary.com'],
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
