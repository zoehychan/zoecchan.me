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
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }
        }
      },
      animation: {
        typing: "typing 1.5s steps(20) alternate, blink .7s infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
  ],
  darkMode: 'class',
}

