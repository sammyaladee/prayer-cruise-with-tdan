/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}", // This line tells Tailwind where to look for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
