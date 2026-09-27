import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Instagram 投稿や CMS の画像を表示する場合はここにホストを追加します
    remotePatterns: [],
  },
};

export default nextConfig;
