import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./public/Images/hero-bg')",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"], // For headings
        quicksand: ["var(--font-quicksand)", "sans-serif"], // For body text
      },
      colors: {
        sapphire: {
          DEFAULT: "#1A2B4C", // Base sapphire color
          light: "#2A3C5E", // Lighter shade
          dark: "#0E1C36", // Darker shade
        },
        gold: {
          DEFAULT: "#D4A017", // Base gold color
          light: "#E0B544", // Lighter shade
          dark: "#B58310", // Darker shade
        },
        violet: "#6E3A8D",
        gray: "#B0A59F",
        emerald: "#167A68",
        crimson: "#8E1C3F",
      },
    },
  },
  plugins: [],
} satisfies Config;
