import type { NextConfig } from "next";

// Empty for local dev at `/`; CI sets it to `/fredin` for GitHub Pages.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
