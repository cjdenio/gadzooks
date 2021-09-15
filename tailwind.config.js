module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Rubik", "sans-serif"],
    },
    minWidth: {
      200: "250px",
    },
  },
  variants: {
    extend: {
      translate: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
