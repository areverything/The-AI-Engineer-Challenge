import type { NextConfig } from "next";

/**
 * Next.js configuration for Vercel and local development.
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 */
const nextConfig: NextConfig = {
  /** Allow dev requests when API runs on another origin (optional; we proxy via route handlers). */
  reactStrictMode: true,
};

export default nextConfig;
