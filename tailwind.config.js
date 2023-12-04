/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-colorscolor-600": "var(--neutral-colorscolor-600)",
        "neutral-colorswhite": "var(--neutral-colorswhite)",
      },
      fontFamily: {
        "text-single-200-regular": "var(--text-single-200-regular-font-family)",
      },
    },
  },
  plugins: [],
};
