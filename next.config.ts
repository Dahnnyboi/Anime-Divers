import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Absolute imports for src/ subdirectories are configured in tsconfig.json paths.
  // Standalone output is configured in Batch 8 (CI/CD).
  sassOptions: {
    includePaths: ["./node_modules"],
  },
};

export default nextConfig;
