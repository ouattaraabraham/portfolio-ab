import React , {useState} from 'react'
import {  motion } from "framer-motion"
import Avatar1 from '../assets/avatar1.svg'
import Avatar2 from '../assets/avatar2.svg'
import Avatar3 from '../assets/avatar3.svg'

import { TbPointFilled } from "react-icons/tb";

function Temoignage() {

  const [temoin,seTemoin]=useState(0)

  const handlerChange=(id,e)=>{
    seTemoin(id)

  }

  const data=[
    {
      id:0,
      avatar: Avatar3,
      temoignage:"Abraham Ouattara  est responsable du développement de notre site Web qui a joué un rôle déterminant dans la croissance de notre entreprise. ",
      name:"Dave Albert ",
      activite:"( West Third Enterprises, Inc. )",
    },
    {
      id:1,
      avatar: Avatar2,
      temoignage:"Abraham Ouattara est l'un des meilleurs professionnels avec une communication facile, j'aime sa manière de bosser ",
      name:"Alvin Engler",
      activite:"( CEO, West Third Enterprises, Inc. )",
    },
    {
      
      id:2,
      avatar: Avatar1,
      temoignage:"C'est un réel plaisir pour moi de travailler avec Abraham Ouattara qui a toujours été à la hauteur de mes attentes, c'est le genre de développeur qui sait réellement ce qu'il fait",
      name:"Pascal Tremblay",
      activite:"( Creative Lead, Good Kind )",
    },
   
  ]

  let temoinCurent=data.filter(item=>item.id===temoin)


  return (
    <div className=' py-36 '>
      <motion.div 
        initial={{y:100 , opacity:0,}}
        whileInView={{y:0 , opacity:1,}}
        viewport={{once:true}}
        transition={{ duration:1}}
       className='text-center px-8 md:px-7 mx-auto flex flex-col items-center   max-w-xl '>
          <h2 className='pb-10 font-bold text-md md:text-2xl'>Témoignage</h2>

          <div className='flex flex-col items-center pb-6'>
             <img className='w-16' src={temoinCurent[0].avatar} alt="profil" />
              <h3 className=' font-semibold	py-2'>
              {temoinCurent[0].name}
              </h3>
              <p className=''>
              {temoinCurent[0].activite}
              </p>          
            </div>
            <p className='text-sm	md:text-xl pb-8'>
              {temoinCurent[0].temoignage}
            </p>
      
        
          <div className='flex '>
            {
              data.map((item)=> {
                const btnTrue=item.id===temoin
                console.log('btnTrue :'+btnTrue)
              return (
                <button  onClick={(e)=>{handlerChange(item.id)}} key={item.id}>
                <TbPointFilled  color={!btnTrue?'#656d7c' :''} size={35} />
              </button>
             
              )
              }
              )
            }
          </div>
       </motion.div>
    </div>
  )
}

export default Temoignage