/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'light-100': '#FCD980',
        'light-200': '#FDE4A6',
        'dark-100': '#282938',
        'dark-200': '#535460',
        'navdark-100': '#24254A',
        'navdark-200': '#1C1E53'
      }
    },
  },
  plugins: [],
};
