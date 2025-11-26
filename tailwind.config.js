/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",   // 👈 add this
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [],
};
