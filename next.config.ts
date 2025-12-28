import type { NextConfig } from "next";

const repoName = 'CinematicUniverses';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
