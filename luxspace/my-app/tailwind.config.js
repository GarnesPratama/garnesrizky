module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1535px",
    },
    colors: {
      pink: "#F9CADA",
      black: "#000000",
      white: "#ffff",
      blank: "#F9F9F9",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      banner: "url('./src/images/banner.png')",
    },
  },
  plugins: [],
  important: true,
};
