import React from 'react'
import { useState } from 'react';
import { Bs1Circle } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";



function NavBar() {
    const [open,setOpen]=useState(false)

    const fcOpen=()=>{
   setOpen(e=>!e)
    }

    const links=[
        {id:0,link:'about'},
        {id:0,link:'skills'},
        {id:0,link:'contact'},
    ]
  return (
    <div className='flex fixed w-full px-4 bg-slate-700 justify-between items-center'>
        <div className='flex items-center'><span className='py-2 pr-1'><Bs1Circle size={30}/></span><span>Ab-img</span></div>
        {/* mobil-bar */}
         <button onClick={fcOpen} className='md:hidden z-10'>
         {open?<HiOutlineBars3CenterLeft size={30}/>:<RxCross2 size={30}/>}
         </button>
         {/* links-mobil */}  
        {open && 
            <ul className='absolute flex flex-col top-0 left-0 h-screen w-full bg-slate-500 justify-center items-center'>
            { links.map(({id,link})=>
            <li className='py-4' key={id}>{link}</li>
         )
         }
            </ul>
            }
           

         {/* md-bar */}
         <ul className='hidden md:flex'>
         { links.map(({id,link})=>
            <li key={id}>{link}</li>
         )
         }
         </ul>
    </div>
  )
}

export default NavBar