/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: "#7fad39",
        dark: "#161b1d",
      },
    },
  },
  plugins: [require("daisyui")],
};
