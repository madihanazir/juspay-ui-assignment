/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#E5ECF6',
      borderLight: '#E5E7EB',
      textDark: '#1C1C1C',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    boxShadow: {
      card: '0px 1px 3px rgba(0, 0, 0, 0.08)',
    },
  },
},

  plugins: [],
}

