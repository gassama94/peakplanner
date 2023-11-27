/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1f2937', // Custom color added here
      },
      fontFamily: {
        title: ['"Pacifico"', 'cursive']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('autoprefixer'),
   
],
};
