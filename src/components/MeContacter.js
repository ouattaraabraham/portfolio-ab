import React from 'react'

function MeContacter() {
  return (
  <div id='Contact' className='px-4 md:px-7  pb-12  text-white	'>
    <div className='py-8 mx-auto text-center text-slate-10 rounded-xl border flex flex-col gap-5 items-center sm:py-10  sm:max-w-2xl'>
      <h2>Interested in collaborating with me?</h2>
      <p className='lg:text-lg'>
       I’m always open to discussing product design work or partnership opportunities.    
      </p>
      <button className='border-2 px-4 py-2 rounded-xl bg-gradient-btn'>Start a conversation</button>
    </div>
  </div>
  )
}

export default MeContacter