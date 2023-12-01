import React, {useEffect, useRef } from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

import projet1 from '../assets/prj1.jpg'
import projet2 from '../assets/projet2.png'

import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'
import Img4 from '../assets/img4.jpg'
import Img5 from '../assets/img5.jpg'
import Img6 from '../assets/img6.jpg'


const dataImg=[Img1,Img2,Img3,Img4,Img5,Img6]
function SessionScrollY() {

    const selectRef=useRef(null)
    const triggerRef=useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        const pin = gsap.fromTo(selectRef.current,{
            translateX:0},{
                translateX: "-200vw",                
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
    },[])
  return (
       <section  className='overflow-hidden px-4 md:px-7 md:my-12'>
        
         <div ref={triggerRef} >
     
            <div ref={selectRef} className='w-fit h-screen flex items-center gap-4 md:gap-10 overflow-hidden'>
                
                {
                  dataImg.map((item,id)=>
                  <div key={id} className=' w-[282px] h-[225px]  md:w-[553px] md:h-[458px]  '>
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