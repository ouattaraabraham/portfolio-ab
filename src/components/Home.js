import React from 'react'
import profil from '../assets/img-lg.png'
import Hero from '../assets/hero.webp'
function Home() {
  return (
    <div name='Home' className="px-4 md:px-10 w-full ">
        <div className='py-[8rem] flex flex-col gap-[5vw] lg:gap-0 lg:grid lg:grid-cols-3  '>       
            <div className='flex flex-col gap-[2vw] mobile:gap-[3vw] lg:col-span-2   '>
                <div className='tracking-wide font-montrealI font-semibold	 text-[7.5vw] mobile:text-[7vw] sm:text-[7vw]  md:text-[5vw] lg:text-[5vw]  mx-auto'>
                    <h2 className=' leading-[.8em]'>CREATIVE</h2>
                    <h2 className='text-center	'> DESIGNER &</h2>
                    <h2 className='leading-[.8em]'>
                      <span>FRONTEND</span>
                      <span className='ml-5'>DEVELOPER</span>
                    </h2>
                 </div>
                <div className='text-[4vw] mobile:text-[3vw] md:text-[2.5vw] flex gap-[5vw] justify-center items-center my-5'>
                    <span className='border border-slate-700 rounded-lg px-3'>ultra Style</span>
                    <span className='border border-slate-700 rounded-lg px-3'>performant</span>
                </div>  
            </div>
            {/* img */}
            <div className=''>
              <div className='relative lg:bottom-[2rem] rotate-[6deg] border-2 w-[10em] h-[13em] lg:w-[17vw] lg:h-[28vw] mx-auto overflow-hidden'>
                <img className='object-cover w-full h-full object-center	' src={Hero} alt="Hero" />
              </div>
            </div>    
        </div>
    </div>
  )
}

export default Home