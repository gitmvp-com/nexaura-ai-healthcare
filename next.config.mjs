// next.config.mjs
const nextConfig = {
  images: {
    domains: ['img.clerk.com', 'images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  metadataBase: new URL('http://localhost:3000'),
};

export default nextConfig;
