/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerBg: '#06002B66',
        whiteHover: '#ffffffdd',
        grayText: '#B3B3B3',
        greenUsed: '#15C013',
        blueUsed: '#06002B',
      },
      fontFamily: {
        inter: ["Inter"],
        lato: ["Lato"],
      },
      backgroundImage: {
        'first-div': "url('/src/assets/background.png')",
        'about-div': "url('/src/assets/sideImg.png')",
      },
      spacing: {
        'almostCover': '70vh',
      }
    },
  },
  plugins: [require('daisyui')],
}
