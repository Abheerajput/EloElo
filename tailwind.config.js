/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Your React components
    './node_modules/flowbite-react/**/*.js', // Flowbite components
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out', // Custom animation
      },
      screens: {
        'sx': { min: '318px', max: '576.99px' },
        'xs': { min: '318px', max: '768.99px' },
        'sm': { min: '769px', max: '1024px' },
        'md': { min: '1025px', max: '1280px' },
        'lg': { min: '1281px', max: '1536px' },
        'xl': { min: '1537px' },
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        publicSans: ['"Public Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    flowbite, 
    require('tailwindcss'), 
    require('autoprefixer'), 
  ],
};
