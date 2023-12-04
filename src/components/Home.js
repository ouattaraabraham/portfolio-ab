import React from 'react'
import { motion } from "framer-motion"

import profil from '../assets/img-lg.png'
import Hero from '../assets/hero.webp'
function Home() {

  const txt1='UltraStyle'
  return (
    <div name='Home' className="px-4 md:px-10 w-full ">
        <div className='py-[8rem] flex flex-col gap-[5vw] lg:gap-0 lg:grid lg:grid-cols-3  '>       
            <div className='flex flex-col gap-[2vw] mobile:gap-[3vw] lg:col-span-2   '>
                <div className='tracking-wide font-montrealI font-semibold	 text-[7.5vw] mobile:text-[7vw] sm:text-[7vw]  md:text-[5vw] lg:text-[5vw]  mx-auto'>
                    <motion.h2 
                     initial={{y:50 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.2 , duration:0.5}} className=' leading-[.8em]'>CREATIVE</motion.h2>
                    <motion.h2
                     initial={{y:20 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.4, duration:0.5}} className='text-center	'> DESIGNER &</motion.h2>
                    <motion.h2
                    initial={{y:20 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.6 , duration:0.5}} className='leading-[.8em]'>
                      <span>FRONTEND</span>
                      <span className='ml-5'>DEVELOPER</span>
                    </motion.h2>
                 </div>
                <motion.div

                initial={{y:20 , opacity:0}}
                animate={{y: 0 ,opacity:1,}}
                transition={{delay:0.8, duration:0.5}} className='text-[4vw] mobile:text-[3vw] md:text-[2.5vw] flex gap-[5vw] justify-center items-center py-5'>
                    <span className={`relative overflow-hidden rounded-lg w-[25%] h-[2em] lg:h-[1.9em]    flex justify-center items-center before:flex before:justify-center before:items-center before:w-[200px] before:blur-sm before:h-4  before:animate-rotate1 before:absolute before:bg-gradient 
                     after:content-['Ultra.Style']  after:flex after:justify-center after:items-center  after:w-[98.5%] after:h-[96.5%] after:text-center  after:absolute after:rounded-lg after:border after:border-slate-700 after:bg-[#e9e9e9] `}>
                     </span>
              
                     <span className={`relative overflow-hidden rounded-lg w-[25%] h-[2em] lg:h-[1.9em]    flex justify-center items-center before:flex before:justify-center before:items-center before:w-[200px] before:blur-sm before:h-3 before:rotate-180  before:animate-rotate2 before:absolute before:bg-gradient 
                     after:content-['Performant']  after:flex after:justify-center after:items-center  after:w-[98.5%] after:h-[96.5%] after:text-center  after:absolute after:rounded-lg after:border after:border-slate-700 after:bg-[#e9e9e9] `}>
                     </span>
                </motion.div>  
            </div>
            {/* img */}
            <motion.div
              initial={{y:50 , opacity:0,}}
              animate={{y:0 , opacity:1,}}
              transition={{delay:1, duration:0.9}}
               className=''>
              <div className='relative lg:bottom-[2rem] rotate-[6deg] border-2 w-[10em] h-[13em] lg:w-[17vw] lg:h-[28vw] mx-auto overflow-hidden'>
                <div  className='absolute top-[-200px] w-full h-screen grid grid-cols-5	gap-1'>
                  <motion.div
                  initial={{skewY:'0deg'}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:2 ,delay:0.6}}
                   className='bg-slate-200 skew-y-[100deg] w-full h-full'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg'}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:2,delay:0.6}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg'}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:2,delay:0.6}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg'}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:2,delay:0.6}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg'}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:2,delay:0.7}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                
                </div>
                <img className='object-cover w-full h-full object-center	' src={Hero} alt="Hero" />
              </div>
            </motion.div>    
        </div>
    </div>
  )
}

export default Home