/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: true,
      mdxRs: true,
      serverComponentsExternalPackages: ['mongoose']
    },
    eslint:'disable',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*'
        }, 
        {
          protocol: 'http',
          hostname: '*'
        }, 
      ]
    }
  }
  
  module.exports = nextConfig
  