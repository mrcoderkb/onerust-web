import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F14",
        panel: "#0F1720",
        border: "#1D2A39",
        text: "#E6EEF8",
        muted: "#93A4B7",
        accent: "#4FB3FF",
        danger: "#FF5A6A",
        ok: "#2FE38A",
        warn: "#FFB020"
      }
    }
  },
  plugins: []
} satisfies Config;
