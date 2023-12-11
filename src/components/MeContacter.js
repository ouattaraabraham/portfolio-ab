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
     className='py-8 mx-auto text-center text-slate-10 border-2  items-center sm:py-10  sm:max-w-2xl'>
      <h2>Interested in collaborating with me?</h2>
      <p className='lg:text-lg py-5'>
       I’m always open to discussing product design work or partnership opportunities.    
      </p>
      <button className='border-2 px-4 py-2 bg-white text-black hover:shadow-bt hover:scale-[1.09]	 '>Start a conversation</button>
    </div>
  </motion.div>
  )
}

export default MeContacter