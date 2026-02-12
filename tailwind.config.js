/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        agdasima: ["var(--font-agdasima)", "sans-serif"],
        freesans: ["var(--font-freesans)", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
