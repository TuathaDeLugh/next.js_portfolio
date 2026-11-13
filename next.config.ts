import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket.umangsailor.com",
      },
      {
        protocol: "http",
        hostname: "bucket.umangsailor.com",
      },
    ],
  },
};

export default withPWA(nextConfig);
