/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: "#146089",
        second: "#00A9BF",
        shade: "#1E2232",
        third: "#9BC4BF"
      }
    },
  },
  plugins: [require("daisyui")],
}