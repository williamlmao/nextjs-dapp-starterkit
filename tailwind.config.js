/** @type {import('tailwindcss').Config} */
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
      fontFamily: {},
      height: {
        header: headerHeight,
        screenLessHeader: `[calc(100vh_-_80px)]`,
      },

      padding: {
        header: headerHeight,
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
