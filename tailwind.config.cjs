/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        headerBg: '#06002B99',
        whiteHover: '#ffffffdd',
        grayText: '#B3B3B3',
        greenUsed: '#15C013',
        blueUsed: '#06002B',
        notWhite: '#FBFBFB',
      },
      fontFamily: {
        inter: ["Inter"],
        lato: ["Lato"],
      },
      backgroundImage: {
        'first-div': "url('/src/assets/background.png')",
        'about-div': "url('/src/assets/background/ADTA 1.gif')",
      },
      spacing: {
        'almostCover': '70vh',
      },
      boxShadow: {
        custom: '0px 0px 12px 1px rgba(200, 200, 200, 0.2)',
      },
      keyframes:{
        carousel: {
          '0%, 100%': { backgroundImage: "url('/src/assets/background/background1.jpg')" },
          '34%': { backgroundImage: "url('/src/assets/background/background2.jpg')" },
          '64%': { backgroundImage: "url('/src/assets/background/background3.jpg')" },
        }
      },
      animation: {
        carousel: 'carousel 25s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
