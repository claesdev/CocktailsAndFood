/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'burrito-bowl': "url('/img/Bakgrund.jpeg')",
      })
    },
  },
  plugins: [],
}

