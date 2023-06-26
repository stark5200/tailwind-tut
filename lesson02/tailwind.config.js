/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratioo 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratioo 13/20)' },
      }
    },
  },
  plugins: [],
}

