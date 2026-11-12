import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#14100E",
        carbon: "#1E1815",
        plate: "#27201C",
        "plate-elevated": "#3A2E29",
        "plate-border": "rgba(202, 173, 142, 0.15)",
        "plate-border-hover": "rgba(202, 173, 142, 0.45)",
        luxury: {
          espresso: "#3A2E29",
          cedar: "#A58376",
          gold: "#CAAD8E",
          cashmere: "#D1C8BD",
          cream: "#EBE3DA",
          linen: "#F1EDE7",
        },
        signal: {
          emerald: "#CAAD8E",
          indigo: "#CAAD8E",
          iris: "#A58376",
          cyan: "#D1C8BD",
          sky: "#CAAD8E",
          amber: "#CAAD8E",
          mint: "#A58376",
          gold: "#CAAD8E",
          bronze: "#A58376",
        },
        pearl: {
          DEFAULT: "#F1EDE7",
          muted: "#D1C8BD",
          dim: "#A58376",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        "out-craft": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-craft": "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
