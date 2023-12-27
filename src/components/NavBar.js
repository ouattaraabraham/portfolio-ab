import React ,{ useState } from 'react'
import { Link } from 'react-scroll';
import Profil from'../assets/avatar1.svg'
import star from '../assets/Star 1.svg'
import { motion , AnimatePresence } from "framer-motion"
import { Bs1Circle } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const dataReseaux=[
    {id:0,delay:.4,reseau:"Twitter",link:"",icon:<FaTwitter size={23}/>},
    {id:1,delay:.6,reseau:"Instagram",link:"https://www.instagram.com/abrahamcodeur/",icon:<AiFillInstagram size={23}/>},
    {id:0,delay:.8,reseau:"LinkedinIn",link:"https://www.linkedin.com/in/abraham-ouattara-8ba4a522b/",icon:<FaLinkedinIn size={23}/>},
    {id:0,delay:1,reseau:"Github",link:"https://github.com/ouattaraabraham",icon:<FaSquareGithub size={23}/>},
]
function NavBar() {
    const [open,setOpen]=useState(false)

    const fcOpen=()=>{
   setOpen(e=>!e)
   console.log("click");
    }

    const fcSetDown=()=>{
      setOpen(false)
    }

    const links=[
        {id:1,link:'About'},
        {id:2,link:'Skills'},
        {id:3,link:'Contact'},
    ]
  return (
    <motion.div
      initial={{y:-50 , opacity:0}}
      animate={{ y: 0 , opacity:1 }}
      transition={{delay: 0 , duration:0.5}}
     className='z-10 flex fixed top-0 py-2 px-4 sm:px-8 md:px-[3rem] md:py-[0.7rem]  w-full  justify-between items-center text-slate-100'>
        <div  className='cursor-pointer flex  items-center z-10'>
         <Link  className='hidden md:block' to='Home' smooth duration={500}>
           <img className='w-[4rem] ' src={star} alt="Profil" />
         </Link>

         <Link onClick={fcSetDown}  className=' md:hidden' to='Home' smooth duration={500}>
           <img className='w-[3rem]' src={star} alt="Profil" />
         </Link>
         </div>

           <ul className='hidden md:flex gap-8 text-xl'>
                { links.map(({id,link})=>
                <li  className='tracking-[.07em] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90' key={id}>
                  <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                )
                }
            </ul>
          {/* mobil-bar */}
         <button onClick={fcOpen} className='md:hidden z-10 mr-2 '>
         {open?<RxCross2 size={30} color='#000000'/> :<HiOutlineBars3CenterLeft size={30} color='#f2f2f2'/>}
         </button>
         
      <AnimatePresence>

        {open && 
        <motion.div
        initial={{y:-800 }}
        animate={{y:0}}
        transition={{delay: 0 , duration:1}}
        exit={{y:-800}}
         className='md:hidden  absolute flex flex-col  top-0 right-0 h-screen  w-full justify-center items-center bg-gradient-home text-black py-10 '>

            <ul className='text-center w-full'>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className='tracking-[.07em] text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='About' smooth duration={500}>About</Link>
                 </li>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className='tracking-[.07em] text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                  <Link onClick={fcOpen}  to='Skills' smooth duration={500}>Skills</Link>
                 </li>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className='tracking-[.07em] text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                  <Link onClick={fcOpen}  to='Contact' smooth duration={500}>Contact</Link>
                 </li>
                 <div className='w-full h-[1px] bg-black'></div>
            </ul>

            <div className='relative flex flex-col pt-9'>
              <h3>ouattara.abraham@gmail.com</h3>
                <div className='w-full flex justify-center pt-6'>
                {
                dataReseaux.map(({link,id,icon,delay})=>
                <motion.a
                initial={{y:-30 , opacity:0}}
                animate={{y:0 , opacity:1}}
                transition={{delay:delay , duration:.5}}

                 className="p-2 mx-2 bg-[#9c9c9cd4] rounded-full " key={id} href={link} target='blanc'>
                  {icon}
                </motion.a>
                )
                }
                </div>
                
            </div>
            
        </motion.div>   
            }
      </AnimatePresence>

    </motion.div>
  )
}

export default NavBar