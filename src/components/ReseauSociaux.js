import React from 'react'
import { FaTwitter,FaSquareGithub } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";



function ReseauSociaux() {


  const dataReseaux=[
    {id:0,reseau:"Facebook",link:"https://web.facebook.com/AbwebDeveloperDesigne/",icon:<FaFacebookF className='group-hover:text-black' size={20}/>},
    {id:1,reseau:"Instagram",link:"https://www.instagram.com/abrahamcodeur/",icon:<AiFillInstagram className='group-hover:text-black' size={20}/>},
    {id:0,reseau:"LinkedinIn",link:"https://www.linkedin.com/in/abraham-ouattara-8ba4a522b/",icon:<FaLinkedinIn className='group-hover:text-black' size={20}/>},
    {id:0,reseau:"Github",link:"https://github.com/ouattaraabraham",icon:<FaSquareGithub className='group-hover:text-black' size={20}/>},
]
  return (
    <div name='reseaux sociaux'  className='text-[1.1vw] w-full flex justify-center mb-10 flex-wrap'>
        {
                dataReseaux.map(({link,id,icon})=>
                <a className="p-2 m-2 lg:m-3 rounded-full border-[2px] group hover:bg-slate-100" key={id} href={link} target='blanc'>
                  {icon}
                </a>
                )
                }
    </div>
  )
}

export default ReseauSociaux