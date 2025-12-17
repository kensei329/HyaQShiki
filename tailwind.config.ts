import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        accent: "#E6A915",
        lightGray: "#F4F7F9",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

