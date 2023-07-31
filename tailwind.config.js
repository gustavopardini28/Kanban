/** @type {import('tailwindcss').Config} */

const { theme } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {

      //Boards
      'gray-100': '#F0F0F0',
      'gray-300': '#C5C5C5',
      'soft-red': '#ff5733',
      'testfds': '#FFC300',
      'soft-blue': '#2FF5EF',
      'green': '#2FF59E',

      //Gradiant
      'indigo': '#4B0082',
      'purple': '#9C27B0',
      'pink-500': '#E91E63'
    },
    plugins: [],
  }
}