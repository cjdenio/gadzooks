module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Rubik", "sans-serif"],
    },
  },
  variants: {
    extend: {
      translate: ["hover"],
    },
  },
  plugins: [],
};
