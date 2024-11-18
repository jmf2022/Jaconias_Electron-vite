/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif"
      },

      keyframes:{
        slideIn:{
          from: { width: 0 },
          to: { width: 'var(--radix-collapsible-content-width)' }
        },
        slideOut:{
          from: { width: 'var(--radix-collapsible-content-width)' },
          to: { width: 0 }
        }
      },

      animation:{
        slideIn: 'slideIn 0.28s',
        slideOut: 'slideOut 0.28s',
      }

    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.region-drag': {
          '-webkit-app-region': 'drag'
        },
        '.region-no-drag':{
          '-webkit-app-region': 'no-drag'
        }
      })
    })

  ],
}

