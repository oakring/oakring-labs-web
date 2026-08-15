import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-accent-foreground)",
        ring: "var(--color-ring)",
        surface: "var(--color-surface)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "var(--section-py)",
        "section-sm": "var(--section-py-sm)",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      fontSize: {
        display: [
          "clamp(2.25rem,5vw,3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "heading-lg": [
          "1.875rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "heading-md": [
          "1.25rem",
          { lineHeight: "1.35", letterSpacing: "-0.01em" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
