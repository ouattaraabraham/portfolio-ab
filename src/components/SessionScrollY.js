import React, {useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

// import projet1 from '../assets/prj1.jpg'
// import projet2 from '../assets/projet2.png'

import Img1 from '../assets/landingPage-1.jpg'
import Img2 from '../assets/landingPage-2.jpg'
import Img3 from '../assets/landingPage-3.jpg'
import Img4 from '../assets/landingPage-4.jpg'
import Img5 from '../assets/landingPage-5.jpg'


const dataImg=[Img1,Img2,Img3,Img4,Img5,]
function SessionScrollY() {
  const windowSize = useRef(window.innerWidth);

  const media=windowSize.current<768 ?-1350 :-2200

    const selectRef=useRef(null)
    const triggerRef=useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{


        const pin = gsap.fromTo(selectRef.current,{
            translateX:0},{
                translateX: `${media}px`,                
                ease:"none",
                duration:1,
                scrollTrigger:{
                    trigger:triggerRef.current,
                    start: "center 50%",
                    scrub:0.6,
                    pin:true
                }
            }
            )
       return ()=>{
         pin.kill()
       }     
    },[media])
  return (
       <section  className='overflow-hidden px-4 md:px-7 md:my-12'>
        
         <div ref={triggerRef} >
     
            <div ref={selectRef} className='w-[3000px] md:w-fit h-screen flex items-center overflow-hidden'>
                
                {
                  dataImg.map((item,id)=>
                  <div key={id} className=' w-[282px] h-[225px]  md:w-[560px] md:h-[454px]  pr-6 md:pr-10'>
                    <img className='hover:scale-105 transition duration-500 cursor-pointer rounded-xl w-full h-full object-cover ' src={item} alt="projet" />
                  </div>
                  )
                }
            </div>

         </div>
       </section>
  )
}

export default SessionScrollY