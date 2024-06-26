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
      animation:{
        'stars': 'slide 5s linear infinite'
      },
      keyframes:{
        slide:{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' }

        }
      }
    },
  },
  plugins: [],
}

