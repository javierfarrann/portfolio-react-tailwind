/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      fontFamily: {
          primary: "Montserrat",
          secondary: "Roboto",
      },
      extend: {
          colors: {
              primary: "#3C3744",
              secondary: "#090C9B",
              third: "#3D52D5",
              fourth: "#B4C5E4",
          },
      },
  },
  plugins: [],
}
