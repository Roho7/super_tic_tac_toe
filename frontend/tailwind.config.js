/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "leaf-pattern": "url('assets/leaf.webp')",
      },
      colors: {
        dark: {
          100: "#EFDCD4",
          500: "#F3AF93",
          600: "#7E381B",
        },
        accent1: {
          100: "#F5AEC9",
          500: "#FE0062",
          700: "#5F102E",
        },
        accent2: {
          100: "#B5B4F2",
          500: "#282666",
          700: "#13114D",
        },
      },
    },
  },
  plugins: [],
};
