import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1900px",
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        purple: "#AB23FF",
        blue: "#3D8BFF",
        "grey-line": "#13171D",
        "grey-text": "#46505F",
      },
      backgroundImage: {
        linearDark: "linear-gradient(0deg, #000 0%, #3D8BFF 47%, #AB23FF 99%)",
      },
    },
  },
  plugins: [],
};
export default config;
