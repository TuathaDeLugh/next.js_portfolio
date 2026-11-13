import type { Config } from "tailwindcss";

function withOpacity(varName: string): any {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `color-mix(in srgb, var(${varName}) calc(${opacityValue} * 100%), transparent)`;
    }
    return `var(${varName})`;
  };
}

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
        obsidian: withOpacity("--canvas-dark"),
        carbon: withOpacity("--surface-panel"),
        plate: withOpacity("--surface-card"),
        "plate-elevated": withOpacity("--surface-elevated"),
        "plate-border": withOpacity("--border-subtle"),
        "plate-border-hover": withOpacity("--border-hover"),
        luxury: {
          espresso: withOpacity("--surface-elevated"),
          cedar: withOpacity("--luxury-bronze"),
          bronze: withOpacity("--luxury-bronze"),
          gold: withOpacity("--luxury-gold"),
          champagne: withOpacity("--luxury-champagne"),
          shimmer: withOpacity("--luxury-shimmer"),
          cashmere: withOpacity("--text-slate"),
          cream: withOpacity("--luxury-highlight"),
          linen: withOpacity("--text-pearl"),
        },
        signal: {
          emerald: withOpacity("--luxury-champagne"),
          indigo: withOpacity("--luxury-gold"),
          iris: withOpacity("--luxury-bronze"),
          cyan: withOpacity("--text-slate"),
          sky: withOpacity("--luxury-gold"),
          amber: withOpacity("--luxury-gold"),
          mint: withOpacity("--luxury-bronze"),
          gold: withOpacity("--luxury-gold"),
          bronze: withOpacity("--luxury-bronze"),
        },
        pearl: {
          DEFAULT: withOpacity("--text-pearl"),
          muted: withOpacity("--text-slate"),
          dim: withOpacity("--text-dim"),
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        "out-craft": "cubic-bezier(0.23, 1, 0.32, 1)",
        "in-out-craft": "cubic-bezier(0.77, 0, 0.175, 1)",
        "luxury-spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)",
        "gold-gradient":
          "linear-gradient(135deg, var(--luxury-highlight) 0%, var(--luxury-gold) 50%, var(--luxury-champagne) 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, transparent, var(--border-subtle), transparent)",
        "luxury-radial":
          "radial-gradient(circle at 50% 0%, var(--glow-primary) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
