import type { NextConfig } from "next";
import { Configuration } from "webpack";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
    domains: [
      "aceternity.com",
      "assets.aceternity.com",
      "encrypted-tbn0.gstatic.com",
      "camo.githubusercontent.com",
      "media2.giphy.com",
      "media4.giphy.com",
    ],
  },
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = { rules: [] };
    }

    config.module.rules = config.module.rules || [];

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
