/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  basePath: '/words',
  assetPrefix: '/words/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
