/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const headerHeight = "80px";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      height: {
        header: headerHeight,
      },

      padding: {
        header: headerHeight,
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
