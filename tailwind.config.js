/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4A148C',
        secondary: '#2196F3',
        accent: '#00E5FF',
        dark: {
          bg: '#121212',
          text: '#E0E0E0'
        }
      }
    },
  },
  plugins: [],
}