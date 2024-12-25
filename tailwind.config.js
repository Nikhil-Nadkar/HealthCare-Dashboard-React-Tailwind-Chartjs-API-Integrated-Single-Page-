/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    fontFamily : {
      'manrope' : ['Manrope'], 
    },

    fontWeight : {
      'regular' : 400,
      'medium' : 500,
      'bold' : 700,
      'extrabold' : 800,
    },
    extend: {
      colors : {
        
        themeblack : '#072635',
      },

      fontFamily: {
        sans: ['Manrope', 'sans-serif']
  
      },

      colors: {
        customBg: '#F6F7F8',
      },
  },
  plugins: [],
}

}

