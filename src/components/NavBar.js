import React from 'react'
import { useState } from 'react';
import Profil from'../assets/avatar1.svg'
import { Bs1Circle } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const dataReseaux=[
    {id:0,reseau:"Twitter",icon:<FaTwitter size={23}/>},
    {id:1,reseau:"Instagram",icon:<AiFillInstagram size={23}/>},
    {id:0,reseau:"LinkedinIn",icon:<FaLinkedinIn size={23}/>},
    {id:0,reseau:"Github",icon:<FaSquareGithub size={23}/>},
]
function NavBar() {
    const [open,setOpen]=useState(false)

    const fcOpen=()=>{
   setOpen(e=>!e)
    }

    const links=[
        {id:1,link:'About'},
        {id:2,link:'Skills'},
        {id:3,link:'Contact'},
    ]
  return (
    <div className='z-10 flex fixed top-0 py-2 px-4 sm:px-8 md:px-10  w-full  justify-between items-center text-slate-100'>
        <div className=' flex  items-center z-10'> <img className='w-8 h8 my-2 mr-2' src={Profil} alt="Profil" /></div>
        {/* mobil-bar */}

           <ul className='hidden md:flex gap-8'>
                { links.map(({id,link})=>
                <li className='font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90' key={id}>{link}</li>
                )
                }
            </ul>

         <button onClick={fcOpen} className='md:hidden z-10 mr-2 '>
         {open?<RxCross2 size={30} color='#000000'/> :<HiOutlineBars3CenterLeft size={30} color='#f2f2f2'/>}
         </button>
         
        {open && 
  
        <div className='md:hidden  absolute flex flex-col gap-10 top-0 right-0 h-screen  w-full justify-center items-center bg-slate-200 text-black py-10 '>

            <ul className='text-center w-full'>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className=' text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >About</li>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className=' text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >Skills</li>
                 <div className='w-full h-[1px] bg-black'></div>
                 <li className=' text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold py-5  hover:cursor-pointer hover:scale-90 ' >Contact</li>
                 <div className='w-full h-[1px] bg-black'></div>
            </ul>

            <div className='flex flex-col gap-8'>
              <h3>ouattara.abraham@gmail.com</h3>
                <div className='w-full flex justify-center gap-4'>
                {
                dataReseaux.map(({id,icon})=>
                <span className="p-2 bg-[#d3cabd] rounded-full border-2" key={id}>{icon}</span>)
                }
                </div>
            </div>
     
        </div>   
            }
    </div>
  )
}

export default NavBar