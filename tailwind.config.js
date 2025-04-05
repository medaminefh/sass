/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B4EFF', // Purple from the design
        secondary: '#3B82F6', // Blue for buttons
        gradientStart: '#6B5EFF', // Gradient start
        gradientEnd: '#3B82F6', // Gradient end
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #6B5EFF 0%, #3B82F6 100%)',
      },
    },
  },
  plugins: [],
}