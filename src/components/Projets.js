import React from 'react'
import Projet3 from '../assets/prj1.jpg'
import Projet2 from '../assets/prj2.jpg'
import { CiShare1 } from "react-icons/ci";


function Projets() {
  return (
       <div className='px-4 md:px-7 w-full '>

       <h2 className='tracking-[.07em] text-slate-200 text-center pb-10 text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>Projet</h2>
        <div className=' flex flex-col  md:flex-row md:gap-4 max-w-screen-xl mx-auto'>

          {/* card 1 */}
          <div className='w-full mb-6 md:mb-0'>
            {/* img */}
            <div className='w-full max-h-[420px] md:h-[400px] overflow-hidden rounded-lg '>
              <img className='w-full h-full object-cover object-bottom hover:scale-105 transition duration-500 cursor-pointer' src={Projet3} alt="Projet3" />
            </div>
            {/* txt */}
            <div className='text-slate-100 bg-[#1f2020] p-4 rounded-b-lg'>
              <h2 className='text-[1.5em]'>projet</h2>
              <div className='flex justify-between items-center pt-3'>
                <span>Designer & Develpement</span>
                <span> <CiShare1/></span>
              </div>
            </div>
          </div>
         {/* card 2 */}
         <div className='w-full'>
            {/* img */}
            <div className='w-full max-h-[420px] md:h-[400px] overflow-hidden rounded-lg'>
              <img className='w-full h-full object-cover object-bottom hover:scale-105 transition duration-500 cursor-pointer' src={Projet2} alt="Projet2" />
            </div>
            {/* txt */}
            <div className='text-slate-100 bg-[#1f2020] p-4 rounded-b-lg'>
              <h2 className='text-[1.5em]'>projet</h2>
              <div className='flex justify-between items-center pt-3'>
                <span>Designer & Develpement</span>
                <span> <CiShare1/></span>
              </div>
            </div>
          </div>

        </div>

       </div>
  )
}

export default Projets