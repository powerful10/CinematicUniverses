import type { NextConfig } from "next";

const repoName = "CinematicUniverses";
const isGitHubPagesBuild = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = isGitHubPagesBuild ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  ...(isGitHubPagesBuild
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
