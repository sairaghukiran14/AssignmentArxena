/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluenew: "#2474CC",
        teal: "#20c997",
      },
      fontFamily: {
        sourceSansPro: ["source-sans-pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
