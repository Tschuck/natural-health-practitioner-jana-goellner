/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background": "#EAE3D4",
        "primary-hover": "#33554D",
        primary: "#33554D",
        secondary: "#A7AC8C",

        'hjg-whitesmoke': "#EAE3D4",
        'hjg-brown': "#A68E78",
        'hjg-light-green': "#A7AC8C",
        'hjg-dark-green': "#33554D",
        'hjg-dark': "#231F20",
      },
    },
  },
  plugins: [],
};
