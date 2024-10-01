/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        big: "64px",
        mid1: "52px",
        sml: "30px",
        big2: "44px",
        mid2: "35px",
        sml2: "25px",
      },
      padding: {
        "20px": "20px",
      }
    },
  },
  plugins: [],
}

