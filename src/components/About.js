import React from 'react'

function About() {
  return (
   <div className='px-4 md:px-7 pt-40 pb-32 flex justify-end '> 

   <div className='flex justify-end max-w-screen-xl'>
      <div className=' flex flex-col gap-5	text-[#ffffff] md:max-w-[80%] lg:max-w-[70%] 	 '>
        <div >
            <h1 className='text-[2.75rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>About</h1>
        </div>
            <p className='text-lg sm:text-2xl lg:text-3xl'>

            Hi I’m Josh, an experienced Digital Designer crafting beautiful interactive experiences. My 10 year career has seen me work for a variety of London-based agencies who specialise in digital marketing, advertising and ecommerce, which has given me a holistic knowledge of what brands need to succeed in the digital world.            
            </p>
            {/* <br />
            <p className='text-lg sm:text-2xl lg:text-3xl '>
            With over 2 years of  hands-on experience in Webflow, I bring a unique blend of design and development skills to every project. My goal is to deliver digital experiences that not only engage and inspire but also achieve tangible results for my clients. When working on websites, I place a strong emphasis on crafting unique layouts, captivating interactions, and good use of typography, blend together these elements to create a seamless user experience that leaves a lasting impression.
            </p> */}
      </div>
      </div>

    </div>
  )
}

export default About