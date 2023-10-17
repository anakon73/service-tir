/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,hbs}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat'],
          'lato': ['Lato'],
          'garamond': ['Garamond']
      }
    },
  },
  plugins: [],
}

