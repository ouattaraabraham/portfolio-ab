import React from 'react'
import {  color, motion } from "framer-motion"


function MeContacter() {

  const shadow=[[' 0 0 10px #0202a6 inset',' 0 0 10px #077676 inset',' 0 0 10px #00008b inset',' 0 0 10px #006400 inset',' 0 0 10px #8e3325 inset',' 0 0 10px #8b008b inset',' 0 0 5px #2f4f4f inset',' 0 0 5px #2f4f4f inset']]
  const colors=['#0202a6','#077676','#00008b','#006400','#5f9ea0','#8e3325','#8b008b','#2f4f4f','#e5e9ec']
  return (
  <div id='Contact' className='px-4 md:px-7  pb-12	'>
    <motion.div
    //  initial={{}}
    transition={{duration: 1.5,}}
     whileInView={{borderColor:colors}}
     className='py-8 mx-auto text-center text-slate-10 rounded-xl border-2 flex flex-col gap-5 items-center sm:py-10  sm:max-w-2xl'>
      <h2>Interested in collaborating with me?</h2>
      <p className='lg:text-lg'>
       I’m always open to discussing product design work or partnership opportunities.    
      </p>
      <button className='border-2 px-4 py-2 rounded-xl border-[#2f4f4f]'>Start a conversation</button>
    </motion.div>
  </div>
  )
}

export default MeContacter