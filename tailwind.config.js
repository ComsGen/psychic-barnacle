const colors = require('tailwindcss/colors')

module.exports = {
  purge: false,
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1A1A1A',
      grey: '#B2B2B2',
      white: '#FFFFFF',
      red: "#FF0000",
      primary: colors.indigo,
      secondary: colors.lightBlue,
      accent: colors.rose,
      gray: colors.coolGray,
      trueGray: colors.trueGray

    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '6rem',
      'gxl': '8rem'
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [],
}