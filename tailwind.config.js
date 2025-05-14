/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4F8CFF',
        accent: '#A259FF',
        'light-bg': '#F8FAFF',
        'dark-bg': '#181A20',
        'light-card': '#FFFFFF',
        'dark-card': '#23263A',
        'light-text': '#222B45',
        'dark-text': '#E0E0E0',
        'muted': '#A3AED6',
        footer: '#3B2673',
        dark: {
          bg: '#13111C',
          surface: '#201E2B',
          accent: '#9D8DF1',
          text: '#E6E3F1'
        }
      },
    },
  },
  plugins: [],
} 