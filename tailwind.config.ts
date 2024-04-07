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
        main: "#0081A7",
        secondary: "#00AFB9",
        foreground: "#535660",
        gray: "#7D7D7D",
        white: "#FFFFFF",
        yellow: "#FDFCDC",
        peach: "#FED9B7",
        orange: "#F07167",
        footer: "#1C1C1C",
        footerText: "#E7E7E7",
        footerLight: "#383838",
      },
      flex: {
        carousel: "0 0 100%"
      },
      col: {
        span: {
          "3": "span 3 / span 3"
        }
      }
    },
  },
  plugins: [],
};
export default config;
