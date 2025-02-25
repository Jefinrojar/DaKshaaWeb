/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acquire: ["Acquire", "sans-serif"],
        marck: ["'Marck Script'", "cursive"],
        kohSantepheap: ["'Koh Santepheap'", "sans-serif"], // Add Koh Santepheap font
      },
    },
  },
  plugins: [],
};