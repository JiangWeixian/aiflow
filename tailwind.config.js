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

const blue = {
  100: ({ opacityValue }) => `hsla(212, 35.0%, 9.2%, ${opacityValue})`,
  200: ({ opacityValue }) => `hsla(216, 50.0%, 11.8%, ${opacityValue})`,
  300: ({ opacityValue }) => `hsla(214, 59.4%, 15.3%, ${opacityValue})`,
  400: ({ opacityValue }) => `hsla(214, 65.8%, 17.9%, ${opacityValue})`,
  500: ({ opacityValue }) => `hsla(213, 71.2%, 20.2%, ${opacityValue})`,
  600: ({ opacityValue }) => `hsla(212, 77.4%, 23.1%, ${opacityValue})`,
  700: ({ opacityValue }) => `hsla(211, 85.1%, 27.4%, ${opacityValue})`,
  800: ({ opacityValue }) => `hsla(211, 89.7%, 34.1%, ${opacityValue})`,
  900: ({ opacityValue }) => `hsla(206, 100%, 50.0%, ${opacityValue})`,
  1000: ({ opacityValue }) => `hsla(209, 100%, 60.6%, ${opacityValue})`,
  1100: ({ opacityValue }) => `hsla(210, 100%, 66.1%, ${opacityValue})`,
  1200: ({ opacityValue }) => `hsla(206, 98.0%, 95.8%, ${opacityValue})`,
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
        'mayumi-blue': {
          ...blue,
        },
      },
    },
  },
}
