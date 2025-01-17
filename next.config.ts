/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // distDir: "_next",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};

export default nextConfig;