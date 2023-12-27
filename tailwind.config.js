/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        nanum: "Nanum Brush Script",
      },
      colors: {
        customWhite: "#F2F1EC",
        customGreen: "#345333",
      },
    },
  },
  plugins: [],
};
