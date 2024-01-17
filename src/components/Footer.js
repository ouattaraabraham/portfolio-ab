import React from 'react'
import ReseauSociaux from './ReseauSociaux'
function Footer() {
  return (
    <div className='py-20  px-5 sm:px-10 md:px-7 '>
      <div className=' text-slate-100 flex flex-col  items-center'>
      <ReseauSociaux/>
      <p className='text-lg text-center'>Designer et conçu par © Ouattara Abraham</p>
      </div>
    </div>
  )
}

export default Footer