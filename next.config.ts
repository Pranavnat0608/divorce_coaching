import type { NextConfig } from "next";

// GitHub project Pages needs /divorce_coaching. Custom domains are served from /
// — after the domain is claimed on this repo, set PAGES_BASE_PATH="" in the
// workflow (or remove this) and redeploy.
const repoBase =
  process.env.PAGES_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === "true" ? "/divorce_coaching" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBase,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Helps GitHub Pages resolve nested routes without a server
  trailingSlash: true,
};

export default nextConfig;
