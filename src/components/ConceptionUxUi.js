import React from 'react'
// import { useLottie } from "lottie-react";
// import AnimeFigma from '../video/Animation - 1700750403883.json'
import Video from '../video/video2.mp4'


function ConceptionUxUi() {
    // const options = {
    //     animationData: AnimeFigma,
    //     loop: true
    //   };
    //   const { View } = useLottie(options);

  return (
        <div className='pt-36 md:pt-48 mx-auto max-w-[1200px] flex flex-col md:flex-row items-center'>
          <div className='pb-2 md:leading-relaxed flex flex-col gap-2 items-center text-[7vw] sm:text-[5vw] xl:text-[4vw]'>
          <div className=' md:w-full'>
            <span className='md:block md:pl-4 '>  UI Design  </span>
            <span className='md:block '>UX Design</span>
          </div>
            <span className='md:pl-4 md:w-full '> Development</span>
          </div>
          <div className='flex justify-center overflow-hidden'>
            <div className=' flex justify-center items-center border-2	 overflow-hidden rounded-[600px] w-[90vw] h-[50vw] md:w-[55vw] md:h-[30vw]'>
               <video autoPlay loop muted className=''>
                <source src={Video} type='video/mp4' />
               </video>
            </div> 
          </div>

        </div>  )
}

export default ConceptionUxUi