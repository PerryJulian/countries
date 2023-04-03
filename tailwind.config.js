/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#fafafa',
        dark: '#202c36',
      },
      secondary: {
        DEFAULT: '#ffffff',
        dark: '#2B3844',
      },
    },
    extend: {
      boxShadow: {
        button: '0px 0px 7px rgba(0, 0, 0, 0.293139)',
      },
    },
  },
  plugins: [],
}
