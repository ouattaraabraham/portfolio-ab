import React from 'react'
import {  motion } from "framer-motion"
// import { useLottie } from "lottie-react";
// import AnimeFigma from '../video/Animation - 1700750403883.json'
import Video from '../video/video2.mp4'


function ConceptionUxUi() {

  const container={
    initial:(index)=>({ y: index ,opacity:0}),
    animate:{ y: 0 , opacity:1 }
  }
    // const options = {
    //     animationData: AnimeFigma,
    //     loop: true
    //   };
    //   const { View } = useLottie(options);

  return (

        <div  className='pt-36 md:pt-48 mx-auto max-w-[1200px] flex flex-col md:flex-row items-center'>
          <motion.div
            variants={container}
            initial="initial"
            transition={{duration:1}}
            whileInView="animate"
            viewport={{once:true}}
            custom={50}
           className='pb-2 md:leading-relaxed flex flex-col gap-2 items-center text-[7vw] sm:text-[5vw] xl:text-[4vw]'>
          <div className=' md:w-full 2xl:text-[69.4px]'>
            <span className='md:block md:pl-4 '>  UI Design  </span>
            <span className='md:block '>UX Design</span>
          </div>
            <span className='md:pl-4 md:w-full '> Front end dev</span>
          </motion.div>
          <div className='flex justify-center overflow-hidden'>
            <div
            
             className=' flex justify-center items-center border-2	 overflow-hidden rounded-[600px] w-[90vw] h-[50vw] md:w-[55vw] md:h-[30vw] max-h-[460px]	'>
               <video autoPlay loop muted className=''>
                <source src={Video} type='video/mp4' />
               </video>
            </div> 
          </div>

        </div> 
 )
}

export default ConceptionUxUi