/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "desblue": "#231D2A",
        "darkblue": "#201E2A",
      },
    },
  },
  plugins: [],
}

