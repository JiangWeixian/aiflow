const { cssgg } = require('tailwind-cssgg')
const { mayumi, patterns } = require('mayumi/plugin')
const { grayDark } = require('@radix-ui/colors')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', patterns],
  plugins: [cssgg, mayumi, typography],
  theme: {
    extend: {
      colors: {
        ...grayDark,
      },
    },
  },
}
