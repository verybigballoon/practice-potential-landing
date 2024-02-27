/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-forest-green": "#005051",
      "primary-yellow": "#fcdeac",
      "primary-white": "#ffffff",
      "secondary-matcha": "#5fb37f",
      "secondary-prugly-yellow": "#d9d444",
      "secondary-froggy-lime": "#99bc00",
      "secondary-teal": "#00968b",
      "text-gray-black": "#333333",
      "error-red": "#ff5555",
    },
    fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
