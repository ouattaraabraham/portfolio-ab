import React from 'react'
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



function ReseauSociaux() {


  const dataReseaux=[
    {id:0,reseau:"Twitter",link:"",icon:<FaTwitter size={23}/>},
    {id:1,reseau:"Instagram",link:"https://www.instagram.com/abrahamcodeur/",icon:<AiFillInstagram size={23}/>},
    {id:0,reseau:"LinkedinIn",link:"https://www.linkedin.com/in/abraham-ouattara-8ba4a522b/",icon:<FaLinkedinIn size={23}/>},
    {id:0,reseau:"Github",link:"https://github.com/ouattaraabraham",icon:<FaSquareGithub size={23}/>},
]
  return (
    <div className='text-[1.1vw] w-full flex justify-center gap-4'>
        {
                dataReseaux.map(({link,id,icon})=>
                <a className="p-2 rounded-full border-2" key={id} href={link} target='blanc'>
                  {icon}
                </a>
                )
                }
    </div>
  )
}

export default ReseauSociaux