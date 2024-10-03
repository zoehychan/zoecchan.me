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
  plugins: [],
  darkMode: 'class',
}

