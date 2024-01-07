import React from 'react'
import {  motion } from "framer-motion"


function MeContacter() {

  return (
  <motion.div
    initial={{x:-100 , opacity:0,}}
    whileInView={{x:0 , opacity:1,}}
    transition={{ duration:1}}
   id='Contact' className='px-4 md:px-7  pb-12	'>
    <div
    //  initial={{}}
    // transition={{duration: 1.5,}}
    //  whileInView={{borderColor:colors}}
     className='py-8 mx-auto text-center text-slate-10  items-center sm:py-10  sm:max-w-2xl'>
      <h2 className='text-lg'>Collaborer avec moi?</h2>
      <p className='lg:text-lg py-5'>
      Je suis toujours ouvert à discuter du travail de conception de produits ou des opportunités de partenariat.      </p>
      <a href="mailto:ouattara.abraham2019@gmail.com">
      <motion.button
       className='border px-4 py-2 shadow-[2px_2px] hover:shadow-[4px_4px]  hover:shadow-bt '>Démarrer une conversation</motion.button>
      </a>
     
    </div>
  </motion.div>
  )
}

export default MeContacter