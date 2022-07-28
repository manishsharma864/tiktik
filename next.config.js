/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  typescript:{
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images:{
    domains:['external-content.duckduckgo.com','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
