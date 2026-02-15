import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-exo2)", "sans-serif"],
      },
      colors: {
        zeectric: {
          blue: "#22B2D6",   // Vibrant Blue from your logo
          slate: "#333D47",  // Industrial Slate from your logo
          navy: "#0A1120",   // Deep navy for background depth
        },
      },
    },
  },
  plugins: [],
};
export default config;