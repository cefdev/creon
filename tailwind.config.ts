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
        black: "#000000",
        white: "#FFFFFF",
        purple: "#AB23FF",
        blue: "#3D8BFF",
        greyLine: "#13171D",
        greyText: "#46505F",
      },
    },
  },
  plugins: [],
};
export default config;
