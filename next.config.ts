/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/subdroid.github.io', // Replace with your repo name if different
  assetPrefix: '/subdroid.github.io/', // Replace with your repo name if different
};

export default nextConfig;
