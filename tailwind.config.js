/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    screens: {
      'sm':'640px',
          // => @media (min-width: 640px) { ... }
       'mobile': '470px',
       'md':'768px',
       'lg':'1024px',
       'xl':'1280px',
       '2xl':'1536px',
    
  },
    extend: {
      keyframes:{
        text:{
          'from':{transform:'translateX(0)'},
          'to':{transform:'translateX(-149%)'}
        },
        temoignage:{
          'from':{opacity: 0},
          'to':{opacity: 1},
        },
      },
    },
    animation:{
      text:'text 15s linear infinite',
      temoignage:'temoignage 2s linear '
    },


    fontFamily:{
      enraSlabVariable:'enra-slab-variable,sans-serif',
      signature:'Poppins',
      montrealI:'Montreal-italic',
      montrealM:'Montreal-Medium',
      montrealSBI:'Montreal-SemiBolditalic',
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


