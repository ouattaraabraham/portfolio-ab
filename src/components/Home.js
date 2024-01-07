import React from 'react'
import { motion } from "framer-motion"

// import Hero from '../assets/hero.png'
import Hero from '../assets/hero-1.jpg'


import star from '../assets/Star.svg'

function Home() {

  return (
    <div name='Home' className="px-4 md:px-10 w-full h-screen flex">
        <div className='m-auto flex flex-col  lg:gap-0 lg:grid lg:grid-cols-3 lg:pt-[8rem] '>       
            <div className='flex flex-col gap-[2vw] mobile:gap-[3vw] lg:col-span-2   '>
                <div className=' tracking-[0.050em] lg:tracking-[0.060em]  font-montrealI font-bold  	 text-[7vw]  md:text-[5vw] lg:text-[5vw]  mx-auto'>
                    <motion.h2 
                     initial={{y:50 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.2 , duration:0.5}} className=' leading-[.8em]'>CONCEPTEUR</motion.h2>
                    <motion.h2
                     initial={{y:20 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.4, duration:0.5}} className='text-center	'> DESIGNER &</motion.h2>
                    <motion.h2
                     initial={{y:20 , opacity:0}}
                     animate={{ y: 0 , opacity:1 }}
                     transition={{delay: 0.6 , duration:0.5}} className='leading-[.8em] text-nowrap text-nowrap	'>
                      <span>WEB</span>
                      <span className='ml-5 lg:ml-8'>DEVELOPPEUR</span>
                    </motion.h2>
                 </div>
                <motion.div

                initial={{y:20 , opacity:0}}
                animate={{y: 0 ,opacity:1,}}
                transition={{delay:0.8, duration:0.5}}   className='text-[4vw] mobile:text-[3vw] md:text-[2.5vw] flex gap-[5vw] justify-center items-center py-5'>
                    <span className={`text-[#c7c7c7] relative  overflow-hidden rounded-lg w-[25%] h-[2em] lg:h-[1.9em]    flex justify-center items-center  before:flex before:justify-center before:items-center before:rounded-lg before:w-[250px] before:shadow-[0_0_20px #ff0000] before:h-1  before:animate-rotate1 before:absolute before:bg-gradient 
                     after:content-['Ultra_Style'] after:text-black  after:flex after:justify-center after:items-center  after:w-[98.5%] after:h-[95%] after:text-center  after:absolute after:rounded-lg after:border after:border-slate-700 after:bg-[#e9e9e9] `}>....................................
                     </span>
              
                     <span className={`text-[#c7c7c7] relative  overflow-hidden rounded-lg w-[25%] h-[2em] lg:h-[1.9em]    flex justify-center items-center before:flex before:justify-center before:items-center before:rounded-lg before:w-[250px] before:h-1 before:rotate-180  before:animate-rotate2 before:absolute before:bg-gradient 
                     after:content-['Performant'] after:text-black after:flex after:justify-center after:items-center  after:w-[98.5%] after:h-[95%] after:text-center  after:absolute after:rounded-lg after:border  after:border-slate-700 after:bg-[#e9e9e9] `}>.....................................
                     </span>
                </motion.div>  
            </div>
            {/* img */}
            <motion.div
              initial={{y:50 , opacity:0,}}
              animate={{y:0 , opacity:1,}}
              transition={{delay:1, duration:0.7}}
               className='pt-[5vw] lg:pt-0'>
              <div className='relative bg-[#cdcdcd] lg:bottom-[1.5rem] rotate-[6deg] border-2 w-[12em] h-[15em] lg:w-[20vw] lg:h-[31vw] mx-auto overflow-hidden'>
                <div  className='absolute  top-[-200px] w-full h-screen grid grid-cols-5	gap-1'>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:1.8 ,delay:0.5}}
                   className='bg-slate-200 skew-y-[100deg] w-full h-full'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:1.8,delay:0.5}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:1.8,delay:0.5}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:1.8,delay:0.5}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                  <motion.div
                  initial={{skewY:'0deg',background:"#141414"}}
                  animate={{skewY:'90deg',}}
                  transition={{ duration:1.8,delay:0.5}}
                   className='bg-slate-200 skew-y-[100deg]'>.</motion.div>
                
                </div>
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  transition={{ duration:1.8,delay:.6}}
                 className='absolute bg-[#212121]  w-[25px]  md:w-[35px]'><img className='w-full h-full' src={star} alt="star d'abraham" /></motion.div>
                <img className='object-cover w-full h-full object-top lg:object-center	' src={Hero} alt="Hero" />
              </div>
            </motion.div>    
        </div>
    </div>
  )
}

export default Home