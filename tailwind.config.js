/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        marcellus: "Marcellus",
      },
      colors: {
        customWhite: "#F2F1EC",
        customGreen: "#345333",
        customYellow: "#f2c94c",
        customLightGray: "#f2f2ec",
        customBorderColor: "#e9e9e9",
      },
    },
  },
  plugins: [],
};
