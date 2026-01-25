/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6b4a",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
