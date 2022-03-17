module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: "#4DD0E1",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
