import React from 'react'
import {  motion } from "framer-motion"
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs , TbBrandThreejs  } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import vsCodeImg from "../assets/vs-code.png"

function Skills() {

  const container={
    initial:(index)=>({ y: index ,opacity:0}),
    animate:{ y: 0 , opacity:1 }
  }
  

const icons=[
        {id:0,name:"React",icon:<FaReact size={30} color='#02cae2'/>},
        {id:0,name:"Next js",icon:<TbBrandNextjs size={33} color='#02cae2'/>},
        {id:0,name:"Tree js",icon:<TbBrandThreejs size={30} color='#02cae2'/>},
        {id:0,name:"Figma",icon:<LuFigma size={30} color='#02cae2'/>},
        {id:0,name:"Tailwind",icon:<SiTailwindcss size={33} color='#02cae2'/>},
        {id:0,name:"github",icon:<FaGithub size={30} color='#02cae2'/>},

    ]
  return (

  <div id='Skills' className='py-10 px-4 md:px-7 '>

    <div className='max-w-screen-xl	 mx-auto'>
     <motion.h2
      variants={container}
      initial="initial"
      transition={{duration:1}}
      whileInView="animate"
      viewport={{once:true}}
      custom={30}
      className='tracking-widest	 text-slate-100 text-center py-10 text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>Skills</motion.h2>

     <motion.div
     variants={container}
     initial="initial"
     transition={{duration:1}}
     whileInView="animate"
     viewport={{once:true}}
     custom={50}
      className=' flex flex-col  md:flex-row md:gap-0  '>
       <div className='flex flex-col justify-around  w-full border-2 py-8  mx-auto mb-[1.5rem] md:mb-0 mobile:py-[1.2rem]  md:w-[50%] lg:py-[3rem]  2xl:max-w-4xl'>
        <div className='flex  mx-auto pl-4 text-xl sm:text-[1.6rem] lg:text-[1.7rem]  xl:text-[1.9rem] mb-[1.5rem] md:mb-[2rem] lg:mb-14'>
           <span><HiOutlineDesktopComputer size={43} color='#eeeded'/></span>
           <span className='text-slate-100	ml-5'>frontend developpeur</span>
        </div>
        <div className='grid grid-cols-3 gap-8 sm:text-xl lg:text-2xl '>
          {icons.map(({id,name,icon})=>(
            <div key={id} className='flex flex-col justify-center items-center gap-2'>
                <span className='text-slate-100'>{name}</span>
                {icon}
            </div>
          )
          )}
        </div>
       </div>
       <div className='my-auto md:w-[48%] 2xl:max-w-4xl '>
        <img className='w-full' src={vsCodeImg} alt="vsCodeImg" />
       </div>
     </motion.div>
    </div>
  </div>
  )
}

export default Skills