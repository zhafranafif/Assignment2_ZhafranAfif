// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#2B3743',
        'very-dark': '#202D36',
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

