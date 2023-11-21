import React from 'react'
import profil from '../assets/img-lg.png'
function Home() {
  return (
    <div name='Home' className="relative w-full h-screen bg-gradient-test">
        <div className=' sm:flex justify-center'>       
            <div className='px-4 pt-24 md:pt-32 md:px-10'>
                <div className='font-medium	text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] w-fit mx-auto font-signature'>
                    <h2 className=''>creative</h2>
                    <h2 className='flex justify-center'> Designer &</h2>
                    <h2 className=''>Frontend Developer </h2>
                </div>
                <div className='flex gap-4 justify-center items-center my-5 text-lg '>
                    <span className='border-2 py-1 px-3 rounded-xl'>ultra Style</span>
                    <span className='border-2 py-1 px-3 rounded-xl'>performant</span>
                </div>  
            </div>
            {/* img */}
            <div className='rotate-90'>
               <div className=' mx-auto w-[300px] h-[250px] sm:h-[100vh] sm:w-[26vw] md:w-[28vw]  bg-black'>
               </div>
            </div> 
        </div>
    </div>
  )
}

export default Home