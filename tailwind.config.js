/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#22272E",
        blue: "#539BF5",
        navbar: "#2D333B",
        "txt-default": "#ADBAC7",
        "txt-note": "768390",
        "btn-primary-bg": "#373E47",
        "btn-primary-border": "#CED8EB",
        "btn-primary-bg--hover": "#444C56",
        "btn-primary-border--hover": "#768390",
        "action-item-bg--hover": "#30353D",
        "action-item-bg--active": "#2E353C",
        divider: "#373E47",
      },
      spacing: {
        'gp': '1.5rem', //global padding x-axis
        'md-gp': '4rem'
      }
    },
  },
  plugins: [],
};
