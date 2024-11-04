/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        neutral:{
          'off-white': 'hsl(36, 100%, 99%)',
          'blue-chelou': "hsl(180, 57, 49)",
          'red-button' : "hsl(345, 91, 55)",
          'grey': "#545454",
          'ebony-clay' : "hsl(203, 24, 19)",
      },
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },
      backgroundImage: {
        'hero-img': "url('../images/bg_header.jpg')",
        'img-nuage': "url('../images/bg_nuage.jpg')",
        'img-cam' : "url('../images/bg_appareil_photo.jpg')",
        'newleytaer' : "url('../images/bg_newsletter.jpg')",
      },
    },
  },
  plugins: [],
};
