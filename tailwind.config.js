/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 10px 1px rgba(0, 0, 0, 0.3)',
        '2xl': '0 0 5px 0px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

