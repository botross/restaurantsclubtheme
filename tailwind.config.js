/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    screens: {
      'sm': [{ 'min': '100px', 'max': '426px' }],
      'lg': [{ 'min': '427px' }],
    },
    extend: {},
  },
  plugins: [],
}
