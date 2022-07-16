const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "640px" },
      tablet: { min: "640px", max: "768px" },
      desktop: { max: "1024px" },
    },
    extend: {
      colors: {
        tor: {
          100: "#ffffff",
          200: "#fffffe",
          300: "#fffffd",
        },
      },
    },
  },
  plugins: [],
};
