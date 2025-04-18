/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google user avatars
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com', // Auto-generated name-based avatars
        pathname: '/api/**',
      },
    ],
  },
};

export default nextConfig;
