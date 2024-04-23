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
        "B3":"#5c6471",
        "C1":"#724af8",
        "C2":"#18171c",
        "C3":"#2f2e36",
        "C4":"#84849c",
        "C5":"#9c9ee9",
        "C6":"#121214"
      },
      fontFamily: {
        Lexend: ["Lexend Deca", "sans-serif"],
      },
     
    },
  },
  plugins: [
    function({addUtilities}){
      const nweUtilities = {
        ".scrollbar-thin":{
          scrollbarWidth : "thin",
          scrollbarColor : "white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar" : {
            width:"8px"
          },
          "&::-webkit-scrollbar-track" : {
            background:"white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor:"red",
            borderRadius:"20px",
            border:"1px solid white"
          }
        }
      }
      addUtilities(nweUtilities,["responsive","hover"])
    }
  ],
}

