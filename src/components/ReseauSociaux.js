import React from 'react'
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function ReseauSociaux() {


    const dataReseaux=[
        {id:0,reseau:"Twitter",icon:<FaTwitter size={23}/>},
        {id:1,reseau:"Instagram",icon:<AiFillInstagram size={23}/>},
        {id:0,reseau:"LinkedinIn",icon:<FaLinkedinIn size={23}/>},
        {id:0,reseau:"Github",icon:<FaSquareGithub size={23}/>},
    ]
  return (
    <div className='text-[1.1vw] w-full flex justify-center gap-4'>
      {
        dataReseaux.map(({id,icon})=>
        <span className="p-2 rounded-full border-2" key={id}>{icon}</span>)
      }
      <span>

      </span>
    </div>
  )
}

export default ReseauSociaux