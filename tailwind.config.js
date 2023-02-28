/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      
      //Boards
      'gray-100': '#F0F0F0',
      'gray-300': '#C5C5C5',
      'soft-red' : '#ff5733',
      'yellow' : '#FFC300',
      'soft-blue' : '#2FF5EF',
      'green' : '#2FF59E',

      //Gradiant
      'indigo': '#4B0082',
      'purple-500': '#9C27B0',
      'pink-500': '#E91E63'



    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
