/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        maingray: '#D3D3D3',
        contentgray: '#F0F0F0',
        heroblack: '#000319',
        footerblack: '#121212',
        taggreen: '#008D6B',
        strongred: '#904669',
        badgegray: '#D9D9D9',
        boxblue: '#E6E6FA'
      },
    },
  },
  plugins: [],
};
