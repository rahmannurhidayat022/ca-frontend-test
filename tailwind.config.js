/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pl-blue": "#1d3eb3",
        "pl-blue-dark": "#151e62",
      },
    },
  },
  plugins: [],
};
