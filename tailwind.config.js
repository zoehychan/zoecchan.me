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
            borderColor: "transparent"
          }
        }
      },
      animation: {
        typing: "typing 1.5s steps(20) alternate, blink 1s infinite"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect'),
  ],
  darkMode: 'class',
}

