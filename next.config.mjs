import WebpackObfuscator from "webpack-obfuscator";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(new WebpackObfuscator({ stringArrayRotate: true }));
      return config;
    }
    return config;
  },
};

export default nextConfig;
