import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"], // For headings
        quicksand: ["var(--font-quicksand)", "sans-serif"], // For body text
      },
      colors: {
        sapphire: "#1A2B4C",
        gold: "#D4A017",
        violet: "#6E3A8D",
        gray: "#B0A59F",
        emerald: "#167A68",
        crimson: "#8E1C3F",
      },
    },
  },
  plugins: [],
} satisfies Config;
