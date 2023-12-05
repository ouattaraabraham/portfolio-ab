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
      backgroundImage:{
        gradient: 'linear-gradient(83deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 51%)',
      }
      ,
      keyframes:{
        miroir:{
          'from':{transform:'skewY(0deg)'},
          'to':{transform:'skewY(90deg)'}
        },
        text:{
          'from':{transform:'translateX(0)'},
          'to':{transform:'translateX(-400%)'}
        },
        temoignage:{
          'from':{opacity: 0},
          'to':{opacity: 1},
        },
        rotate1:{
          'from':{transform:'rotate(0deg)'},
          'to':{transform:'rotate(360deg)'}
        },
        rotate2:{
          'from':{transform:'rotate(180deg)'},
          'to':{transform:'rotate(540deg)'}
        }
      },
    },
    animation:{
      miroir:'miroir 3s linear',
      text:'text 30s linear infinite',
      temoignage:'temoignage 2s linear ',
      rotate1:'rotate1 2s linear infinite',
      rotate2:'rotate2 2s linear infinite reverse',


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


