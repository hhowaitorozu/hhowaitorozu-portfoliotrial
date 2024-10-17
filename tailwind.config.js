/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: '#76ABAE',
        gelap: '#222831',
        semigelap: '#31363F',
        terang: '#EEEEEE'
      }
    },
  },
  plugins: [],
}

