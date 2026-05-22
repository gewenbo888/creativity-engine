import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // deep generative void, indigo-black
        void: {
          950: "#05040a",
          900: "#080712",
          800: "#0d0b1c",
          700: "#141029",
          600: "#1d1740",
          500: "#2a2058",
        },
        // electric idea-violet (primary accent)
        iris: {
          600: "#7c5cff",
          500: "#9b7cff",
          400: "#b79bff",
          300: "#d4c4ff",
        },
        // synthesis cyan
        cyan: {
          600: "#1fb6cc",
          500: "#33d6e8",
          400: "#6fe6f3",
        },
        // novelty spark gold
        spark: {
          500: "#ffc94d",
          400: "#ffdd8a",
        },
        // emergence mint
        mint: {
          500: "#3fe3a8",
          400: "#79efc4",
        },
        // recombination rose
        rose: {
          500: "#ff5fa2",
          400: "#ff8cc0",
        },
        ink: {
          50: "#f4f1ff",
          100: "#ece8fb",
          300: "#c6bff0",
          500: "#8e86bd",
        },
      },
      fontFamily: {
        display: ['"Syne"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Serif SC"', "serif"],
      },
      boxShadow: {
        idea: "inset 0 1px 0 rgba(212,196,255,0.08), 0 22px 60px -28px rgba(0,0,0,0.9)",
        glow: "0 0 44px -8px rgba(124,92,255,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
