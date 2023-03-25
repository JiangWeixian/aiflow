const { cssgg } = require('tailwind-cssgg')

const gray = {
  100: ({ opacityValue }) => `hsla(0, 0%, 8.5%, ${opacityValue})`,
  200: ({ opacityValue }) => `hsla(0, 0%, 11.0%, ${opacityValue})`,
  300: ({ opacityValue }) => `hsla(0, 0%, 13.6%, ${opacityValue})`,
  400: ({ opacityValue }) => `hsla(0, 0%, 15.8%, ${opacityValue})`,
  500: ({ opacityValue }) => `hsla(0, 0%, 17.9%, ${opacityValue})`,
  600: ({ opacityValue }) => `hsla(0, 0%, 20.5%, ${opacityValue})`,
  700: ({ opacityValue }) => `hsla(0, 0%, 24.3%, ${opacityValue})`,
  800: ({ opacityValue }) => `hsla(0, 0%, 31.2%, ${opacityValue})`,
  900: ({ opacityValue }) => `hsla(0, 0%, 43.9%, ${opacityValue})`,
  1000: ({ opacityValue }) => `hsla(0, 0%, 49.4%, ${opacityValue})`,
  1100: ({ opacityValue }) => `hsla(0, 0%, 62.8%, ${opacityValue})`,
  1200: ({ opacityValue }) => `hsla(0, 0%, 93.0%, ${opacityValue})`,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [cssgg],
  theme: {
    extend: {
      colors: {
        // same as mayumi color theme preset
        'mayumi-gray': {
          ...gray,
        },
      },
    },
  },
}
