import React from 'react'
import landing1 from '../assets/landing-3.jpg'
import landing2 from '../assets/landing-4.jpg'

import { CiShare1 } from "react-icons/ci";


function Projets() {
  return (
       <div name='Project'  className='px-4 md:px-7 w-full '>

       <h2 className='tracking-[.07em] text-slate-200 text-center pb-10 text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>Projet</h2>
        <div className=' flex flex-col  md:flex-row md:gap-4 max-w-screen-xl mx-auto'>

          {/* card 1 */}
          <div className='w-full mb-6 md:mb-0'>
            {/* img */}
            <div className='w-full max-h-[420px] md:h-[400px] overflow-hidden rounded-lg '>
            <a target='blank' href=' https://ouattaraabraham.github.io/lux-hotel/'>
              <img className='w-full h-full object-cover object-top hover:scale-105 transition duration-500 cursor-pointer' src={landing1} alt="Projet3" />
            </a>
            </div>
            {/* txt */}
            <a target='blank' href=' https://ouattaraabraham.github.io/lux-hotel/'>
            <div className='text-slate-100 bg-[#1f2020] p-4 rounded-b-lg'>
              <h2 className='text-[1.3em]'>Lux hotel</h2>
              <div className='flex justify-between items-center pt-3'>
                <span>Designer & Develpement</span>
                <span> <CiShare1/></span>
              </div>
            </div>
            </a>
          </div>
         {/* card 2 */}
         <div className='w-full'>
            {/* img */}
            <div className='w-full max-h-[420px] md:h-[400px] overflow-hidden rounded-lg'>
            <a href='https://ouattaraabraham.github.io/event-fiesta/' target='blank'>
              <img className='w-full h-full object-cover object-top hover:scale-105 transition duration-500 cursor-pointer' src={landing2} alt="Projet2" />
            </a>
            </div>
            {/* txt */}
            <a href='https://ouattaraabraham.github.io/event-fiesta/' target='blank'>
              <div className='text-slate-100 bg-[#1f2020] p-4 rounded-b-lg'>
                <h2 className='text-[1.3em]'>Event fiesta</h2>
                <div className='flex justify-between items-center pt-3'>
                <span>Designer & Develpement</span>
                <span> <CiShare1/></span>
              </div>
            </div>
            </a>
          </div>

        </div>

       </div>
  )
}

export default Projets