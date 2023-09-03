/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#FFFFFF",
          200: "#FFFAF7",
          400: "#D9C8BD",
        },
        dark: {
          500: "#777E95",
          800: "#24262C",
        },
        accent1: {
          100: "#F5C5BB",
          500: "#FC512D",
          700: "#661807",
        },
        accent2: {
          100: "#E8F2F8",
          500: "#4188B3",
          700: "#24485E",
        },
      },
    },
  },
  plugins: [],
};
