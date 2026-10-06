import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Cloudflare Pages の静的配信では画像最適化サーバーを使わない
    unoptimized: true,
  },
};

export default nextConfig;
