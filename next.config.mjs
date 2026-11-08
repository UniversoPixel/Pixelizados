/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.habbo.com',
        pathname: '/habbo-imaging/**',
      },
      {
        protocol: 'https',
        hostname: 'images.habbo.com',
      },
    ],
  },
};

export default nextConfig;
