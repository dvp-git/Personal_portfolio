/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#13425c",
        secondary: "#cffafe",
        tertiary: "#031526ba",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xss: "375px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/nature_color3.jpg')",
      },
    },
  },
  plugins: [],
};

