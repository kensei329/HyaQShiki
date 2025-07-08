import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  assetPrefix: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '',
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化がデフォルトでは機能しないため
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
