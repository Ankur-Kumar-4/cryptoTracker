/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        grey: "var(--grey)",
        darkgrey: "var(--darkgrey)",
        green: "var(--green)",
        red: "var(--red)",
      },
      boxShadow: {
        "lg": "1px 1px 8px #3a80e9",
      },
    },
  },
  plugins: [],
};
