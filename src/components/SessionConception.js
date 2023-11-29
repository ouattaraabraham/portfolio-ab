import React from 'react'
import IconFigma from '../assets/icon-figma.svg'
import ConceptionUxUi from './ConceptionUxUi'
function SessionConception() {
  return (
    <div className='overflow-hidden pb-16 px-4 md:px-7  mx-auto  text-slate-100 flex flex-col gap-20'>
       <ConceptionUxUi/>
        {/* video */}

        {/* <div className='mx-auto '>
           <video autoPlay loop muted className=''>
             <source src={Video} type='video/mp4' />
           </video>
        </div> */}

        {/* text-animate */}

        
        <div className='pt-12 md:pt-20 text-[12vw] mobile:text-[10vw] lg:text-[8.75vw] font-montrealI font-semibold	 flex gap-4   whitespace-nowrap animate-text '>
            <span > DESIGNER & DEVELOPPEMENT &</span>
            <span >DESIGNER & DEVELOPPEMENT &</span>
            <span >DESIGNER & DEVELOPPEMENT &</span>

        </div>

    </div>
  )
}

export default SessionConception