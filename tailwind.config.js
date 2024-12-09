/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
        heroblack: '#000319',
        taggreen: '#008D6B'
      },
    },
  },
  plugins: [],
};
