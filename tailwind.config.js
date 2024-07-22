/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        green: "#B5C18E",
        brown: {
          DEFAULT: "#914F1E",
          100: "#DEAC80",
          200: "#F7DCB9",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};