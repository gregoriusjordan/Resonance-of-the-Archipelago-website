/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F4ECD8",
        burgundy: "#460303",
        taupe: "#CBACA2",
        cream: "#F5AF98",
      },
      fontFamily: {
        raja: ["Ramaraja"],
        bhadra: ["Ramabhadra"],
        quick: ["Quicksand"],
        stardos: ["Stardos Stencil"],
        inter : ["Inter"],
      },
      fontSize : {
        xxl: '80px',
      },
      backgroundImage : {
        burgundys: "url('./src/Assets/Test 1 (1).jpg')",
        reso: "url('./src/Assets/reso1.png')"
      },
      backgroundColor : {
        ivory: "#F4ECD8",
        burgundy: "#460303",
        taupe: "#CBACA2",
        cream: "#F5AF98",
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
