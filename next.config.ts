import dotenv from "dotenv";
import type { NextConfig } from "next";
import path from "path";
import { Configuration } from "webpack";

const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./env/.env.local") });

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
      "i.postimg.cc",
    ],
  },
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY,
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
