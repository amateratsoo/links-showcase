/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', 
    './src/index.html'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },

      colors: {
        dark: {
          '900': '#121214'
        },

        'frosted-glass': {
          blur: 'rgba(255, 255, 255, 0.4)',
          translucent: 'rgba(255, 255, 255, 0.2)'
        }
      },

      backgroundImage: {
        'light-variant': 'linear-gradient(to bottom, rgba(249, 168, 212, .6), rgb(248, 113, 113, .6), rgb(129, 140, 248, .6))',
        'dark-variant': 'linear-gradient(to bottom, rgb(18, 18, 20), rgb(18, 18, 20), rgb(18, 18, 20), rgb(18, 18, 20), rgb(55,48,163))',
        'indigo-waterfall': 'linear-gradient(to right, rgb(99, 102, 241), rgb(124, 58, 237), rgb(129, 140, 248, .6), rgb(129, 140, 248, .6))',
      },

      keyframes: {
        'progressbar-fill-up': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },

      animation: {
        'progressbar-fill-up': 'progressbar-fill-up 2s ease-in-out'
      }
    },
  },
  plugins: [],
}
