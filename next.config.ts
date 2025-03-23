import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "vbuyaxvfxkfyptlgzmzo.supabase.co",
      },
    ],
  },
};

export default nextConfig;
