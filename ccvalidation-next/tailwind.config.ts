import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "var(--cream)",
        green: "var(--green)",
        teal: "var(--teal)",
        pink: "var(--pink)",
        orange: "var(--orange)",
        gray: "var(--gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
