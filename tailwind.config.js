/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,php}',    
    './js/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
  ],
  darkMode: 'class',
}

