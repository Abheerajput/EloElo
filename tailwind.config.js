/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {

        'sx': {'min': '318px', 'max': '576.99px'},
        'xs': {'min': '318px', 'max': '768.99px'},
        'sm': {'min': '769px', 'max': '1024px'}, 
        'md': {'min': '1025px', 'max': '1280px'}, 
        'lg': {'min': '1281px', 'max': '1536px'}, 
        'xl': {'min': '1537px'}, 
       
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'], 
        publicSans: ['"Public Sans"', 'sans-serif'], 
      },
    
    },
  },
  plugins: [
  ],
}


