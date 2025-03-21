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
        maingrayOp: '#d3d3d3cc',
        contentgray: '#F0F0F0',
        heroblack: '#000319',
        footerblack: '#121212',
        taggreen: '#008D6B',
        strongred: '#904669',
        badgegray: '#D9D9D9',
        boxblue: '#E6E6FA'
      },
      boxShadow: {
        'card-md': '0px 12px 24px rgba(0, 0, 0, 0.30), 0px 6px 12px rgba(0, 0, 0, 0.20)',
        'card-lg': '0px 16px 32px rgba(0, 0, 0, 0.35), 0px 8px 16px rgba(0, 0, 0, 0.25)',
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
      },
    },
  },
  plugins: [],
};
