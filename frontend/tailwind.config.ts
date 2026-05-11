import type { Config } from "tailwindcss";

/**
 * Tailwind theme tokens aligned with project Art Deco palette.
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flamingo: "#F7A8B8",
        seafoam: "#A8E6CF",
        coral: "#FFB7A5",
        sunwash: "#FFEAA7",
        powder: "#B8D4E3",
        lavender: "#D5C6E0",
        cream: "#FFF8F0",
        sand: "#F5EDE3",
        deco: "#2D3436",
        graphite: "#636E72",
        brass: "#D4A574",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        deco: "0 4px 14px rgba(247, 168, 184, 0.15)",
        "deco-lg": "0 8px 24px rgba(247, 168, 184, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
