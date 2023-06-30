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
        ],
      },
}

module.exports = nextConfig
