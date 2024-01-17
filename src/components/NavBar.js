import React ,{ useState } from 'react'
import { Link } from 'react-scroll';
import star from '../assets/Star.svg'
import { motion , AnimatePresence } from "framer-motion"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const dataReseaux=[
    {id:0,delay:.4,reseau:"Facebook",link:"https://web.facebook.com/AbwebDeveloperDesigne/",icon:<FaFacebookF size={23}/>},
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
        {id:1,link:'A propos'},
        {id:2,link:'Project'},
        {id:3,link:'Contact'},
    ]
  return (
    <motion.div
      initial={{y:-50 , opacity:0}}
      animate={{ y: 0 , opacity:1 }}
      transition={{delay: 0 , duration:0.5}}
     className=' z-10  flex fixed top-0 py-2 pr-5 pl-2 sm:px-8 md:px-[3rem] md:py-[0.7rem]  w-full  justify-between items-center text-[#8d8d8d]'>
        <div  className='cursor-pointer flex  items-center z-10'>
         <Link  className='hidden md:block' to='Home' smooth duration={500}>
           <img className='w-[4rem] ' src={star} alt="Profil" />
         </Link>

         <Link onClick={fcSetDown}  className=' md:hidden' to='Home' smooth duration={500}>
           <img className='w-[3rem]' src={star} alt="Profil" />
         </Link>
         </div>

           <ul className='hidden md:flex gap-8 text-xl text-white'>
                { links.map(({id,link})=>
                <li  className='tracking-[.07em] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90' key={id}>
                  <Link to={link} smooth duration={500}>{link}</Link>
                </li>
                )
                }
            </ul>
          {/* mobil-bar */}
         <button onClick={fcOpen} className='md:hidden z-10 '>
         {open?<RxCross2 size={30} color='white'/> :<HiOutlineBars3CenterLeft size={30} color='white'/>}
         </button>
         
      <AnimatePresence>

        {open && 
        <motion.div
        initial={{y:-800 }}
        animate={{y:0}}
        transition={{delay: 0 , duration:1}}
        exit={{y:-800}}
         className='bg-[#1a1a1a] text-[#8d8d8d] md:hidden  absolute flex flex-col  top-0 right-0 h-screen  w-full justify-between items-center  py-36 '>

            <ul className='text-center w-full '>
                 <div className='w-full h-[1px] bg-white'></div>
                 <li className='tracking-[.07em] text-[2.6rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                <Link onClick={fcOpen}  to='A propos' smooth duration={500}>A propos</Link>
                 </li>
                 <div className='w-full h-[1px] bg-white'></div>
                 <li className='tracking-[.07em] text-[2.6rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                  <Link onClick={fcOpen}  to='Project' smooth duration={500}>Project</Link>
                 </li>
                 <div className='w-full h-[1px] bg-white'></div>
                 <li className='tracking-[.07em] text-[2.6rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >
                  <Link onClick={fcOpen}  to='Contact' smooth duration={500}>Contact</Link>
                 </li>
                 <div className='w-full h-[1px] bg-white'></div>
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

                 className="p-2 mx-2 text-white  bg-[#7d7c7cd4] rounded-full " key={id} href={link} target='blanc'>
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