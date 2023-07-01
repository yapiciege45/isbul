/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'isbul.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'isbul.com.tr',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'img.imageus.dev',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
