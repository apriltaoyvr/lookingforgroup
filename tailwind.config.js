/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Roboto', 'Helvetica Neue', 'sans-serif'],
    },
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
