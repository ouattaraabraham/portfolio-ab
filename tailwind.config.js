/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      signature:'Poppins',
    },
    backgroundImage: { // defaults to {}
      tailwindcss: "url('https://avatars0.githubusercontent.com/u/30317862')",
    },
  },
  variants: { // all the following default to ['responsive']
    backgroundImage: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundOrigin: ['responsive'],
  },

  plugins: [
    require('tailwindcss-background-extended'), // no options to configure
  ],
}


