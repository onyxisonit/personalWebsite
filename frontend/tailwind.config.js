/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          burntOrange: "#cc5500",
          burntOrangeLight: "#D16619",
          terracotta: "#E2725B",
          terracottaLight: "#e68571",
          plum: "#781769",
          wine: "#78173a",
          teal: "#176978",
        },
      },
    },
    plugins: [],
  }
  