import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["http://172.20.97.147:3000"],
  },
};

export default nextConfig;
