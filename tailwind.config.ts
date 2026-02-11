import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        surface: "var(--surface)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
      },
      fontFamily: {
        heading: ["var(--font-bebas-neue)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
