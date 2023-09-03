/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#E4EBF8",
          200: "#CAD9F7",
          400: "#3174FB",
        },
        dark: {
          800: "#020000",
        },
        accent1: {
          100: "#AEA0E6",
          500: "#2E158D",
          700: "#18026A",
        },
        accent2: {
          100: "#EFC7EC",
          500: "#DD50D2",
          700: "#B203A5",
        },
      },
    },
  },
  plugins: [],
};
