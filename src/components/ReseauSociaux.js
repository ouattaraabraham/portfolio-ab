import React from 'react'
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function ReseauSociaux() {

    const reseaux=[
        {id:0,reseau:"Twitter",icon:<FaTwitter size={20}/>},
        {id:1,reseau:"Instagram",icon:<AiFillInstagram size={20}/>},
        {id:0,reseau:"LinkedinIn",icon:<FaLinkedinIn size={20}/>},
        {id:0,reseau:"Github",icon:<FaSquareGithub size={20}/>},

    ]
  return (
    <div className='flex gap-2'>
      {
        reseaux.map(({id,icon})=>
        <span className=" p-2 rounded-2xl bg-slate-400" key={id}>{icon}</span>)
      }
      <span>

      </span>
    </div>
  )
}

export default ReseauSociaux