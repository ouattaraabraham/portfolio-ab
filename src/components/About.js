import React from 'react'

function About() {
  return (
   <div  id='About' className='px-4 md:px-7 pt-20 md:pt-28 pb-12 flex justify-end '> 
    <div className='mx-auto'>
      <div className='flex justify-end max-w-screen-xl '>
        <div className=' flex flex-col gap-5 md:max-w-[80%] lg:max-w-[69%] 	 '>
          <div className=' md:hidden text-center'>
              <h1 className='tracking-[.07em] text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>About</h1>
          </div>
              <p className='text-[1.5rem] sm:text-[1.7rem] sm:leading-[2.5rem] lg:text-[2.2rem] lg:leading-[3rem] '>
              Bienvenue dans mon monde de développeur front-end professionnel . Je m'appelle Abraham Ouattara et je suis un développeur expérimenté spécialisé dans la création de solutions frontend de haute qualité, efficaces et visuellement attrayantes. Grâce à mon expertise, j'aide les entreprises et les organisations à atteindre leurs objectifs en ligne et à se démarquer dans le paysage numérique concurrentiel.
              </p>
              {/* <br />
              <p className='text-lg sm:text-2xl lg:text-3xl '>
              With over 2 years of  hands-on experience in Webflow, I bring a unique blend of design and development skills to every project. My goal is to deliver digital experiences that not only engage and inspire but also achieve tangible results for my clients. When working on websites, I place a strong emphasis on crafting unique layouts, captivating interactions, and good use of typography, blend together these elements to create a seamless user experience that leaves a lasting impression.
              </p> */}
        </div>
        </div>
      </div>

    </div>
  )
}

export default About