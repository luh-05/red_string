/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f20d0d",
        "red": "#b91c1c",
        "neumorphic-bg": "#e0e5ec",
        "neon-red": "#ff0000",
        "background-light": "#f8f5f5",
        "background-dark": "#221010"
      },
      fontFamily: { display: "Inter" },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}