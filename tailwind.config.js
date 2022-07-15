/** @type {import('tailwindcss').Config} */

const headerHeight = "80px";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        header: headerHeight,
      },
      top: {
        header: "500px",
      },
      width: {
        sidebar: "200px",
      },
      padding: {
        header: headerHeight,
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
