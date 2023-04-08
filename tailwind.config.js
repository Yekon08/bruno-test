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
        blackText: "#101010",
        grayBorder: "#CDCED0",
        mainOlive: "#5D750F",
        mainGold: "#E4C87F",
        whiteLowOpacity: "rgba(255, 255, 255, 0.2)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: "Satoshi",
      },
    },
  },
  plugins: [],
};
