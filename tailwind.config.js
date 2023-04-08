/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainOlive: "#5D750F",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: "Satoshi",
      },
    },
  },
  plugins: [],
};
