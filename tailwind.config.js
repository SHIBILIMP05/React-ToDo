/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "A1":"#f44336",
        "A2":"#62b4fe",
        "A3":"#b2d198",
        "A4":"#a998fe",
        "B1":"#303642",
        "B2":"#3d4552",
        "B3":"#5c6471"
      },
      fontFamily: {
        Lexend: ["Lexend Deca", "sans-serif"],
      },
     
    },
  },
  plugins: [],
}

