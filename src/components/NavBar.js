import React from 'react'
import { useState } from 'react';
import { Bs1Circle } from "react-icons/bs";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import ReseauSociaux from './ReseauSociaux';



function NavBar() {
    const [open,setOpen]=useState(false)

    const fcOpen=()=>{
   setOpen(e=>!e)
    }

    const links=[
        {id:0,link:'Hom'},
        {id:0,link:'About'},
        {id:0,link:'Contact'},
    ]
  return (
    <div className='z-10 flex fixed top-0 py-2 w-full px-2  justify-between items-center md:px-8 bg-gradient-test'>
        <div className=' flex  items-center z-10'> <img className='w-8 h8 my-2 mr-2' src="/profil.svg" alt="" /><span>Ab-img</span></div>
        {/* mobil-bar */}
         <button onClick={fcOpen} className='z-10 mr-2 '>
         {open?<RxCross2 size={30}/> :<HiOutlineBars3CenterLeft size={30}/>}
         </button>
         
        {open && 
        <div className='absolute flex flex-col gap-10 top-0 right-0 h-screen  w-full justify-around items-center bg-slate-200 py-10'>
            <ul className=''>
                { links.map(({id,link})=>
                <li className='py-5 text-4xl md:text-5xl hover:cursor-pointer hover:scale-90' key={id}>{link}</li>
                )
                }
            </ul>
            <ReseauSociaux/>
        </div>   
            }
    </div>
  )
}

export default NavBar