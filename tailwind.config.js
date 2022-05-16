module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'white-gray': '#D2D2D2',
      'dark-blue': '#04010e',
      'med-blue': '#1077B1',
      'ice-blue': '#07F2F8',
      'purple': '#BE4FBB',
      'dark-gray': '#1E1E20',
      'darker-gray': '#1a1b1d'
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      // keyframes: {
      //   drop: {
      //     '0%': { height: '0' },
      //     '50%': { height: '18rem' }
      //   },
      //   undrop: {
      //     '0%': { height: '18rem' },
      //     '50%': { height: '0' }
      //   }
      // },
      // animation: {
      //   drop: 'drop 0.6s ease-in-out',
      //   undrop: 'undrop 0.6s ease-in-out'
      // }
    },
  },
  plugins: [],
}
  