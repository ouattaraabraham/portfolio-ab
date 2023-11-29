import React from 'react'
import ReseauSociaux from './ReseauSociaux'

function Footer() {
  return (
    <div className='py-20 px-4 md:px-7 '>
      <div className=' text-slate-100 flex flex-col gap-10 items-center'>
      <ReseauSociaux/>
      <p className='text-lg text-center'>Designed and built by © Ouattara Abraham</p>
      </div>
    </div>
  )
}

export default Footer