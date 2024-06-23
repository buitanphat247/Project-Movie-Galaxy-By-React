module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      tablet: "600px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
