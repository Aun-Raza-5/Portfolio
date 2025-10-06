/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables toggling with class "dark"
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0ea5e9",
        accentYellow: "#facc15",
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        fadeIn: 'fadeIn 1s forwards',
      },
    },
  },
  plugins: [],
}
