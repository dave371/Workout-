/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001514',
        secondary: '#FBFFFE',
        'accent-one': '#216663',
        'accent-two': '#672121',
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
