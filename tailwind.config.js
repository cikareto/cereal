/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#22272E",
        blue: "#539BF5",
        navbar: "#2D333B",
        error: "#FB6C57",
        "txt-default": "#ADBAC7",
        "txt-note": "#768390",
        "btn-primary-bg": "#373E47",
        "btn-primary-border": "#CED8EB",
        "btn-primary-bg--hover": "#444C56",
        "btn-primary-border--hover": "#768390",
        "action-item-bg--hover": "#30353D",
        "action-item-bg--active": "#2E353C",
        divider: "#373E47",
      },
      spacing: {
        gp: "1.5rem", //global padding x-axis
        "md-gp": "4rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: 700,
          color: "#ADBAC7",
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: 500,
          color: "#ADBAC7",
        },
        p: { fontSize: theme("fontSize.base"), color: "#ADBAC7" },
      });
    }),
  ],
};
