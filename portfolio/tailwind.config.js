/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['poppins']
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#0000FF',
          200: '#0096FF',
        }
      },
    },
  },
  plugins: [],
}