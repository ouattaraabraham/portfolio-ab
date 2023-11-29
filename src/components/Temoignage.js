import React , {useState ,useEffect,useRef} from 'react'
import Avatar1 from '../assets/avatar1.svg'
import Avatar2 from '../assets/avatar2.svg'
import Avatar3 from '../assets/avatar3.svg'

import { TbPointFilled } from "react-icons/tb";

function Temoignage() {

  const ref=useRef(0)
  const [temoin,seTemoin]=useState(1)

  const handlerChange=(id,e)=>{
    seTemoin(id)
    console.log("ref :"+ref.current);
    // window.location.reload();
  }

  const data=[
    {
      id:0,
      avatar: Avatar1,
      temoignage:"“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”",
      name:"Pascal Tremblay",
      activite:"Creative Lead, Good Kind",
    },
    {
      id:1,
      avatar: Avatar2,
      temoignage:"“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”",
      name:"Alvin Engler",
      activite:"CEO, West Third Enterprises, Inc.",
    },
    {
      id:3,
      avatar: Avatar3,
      temoignage:"“dave a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”",
      name:"Dave Albert ",
      activite:" West Third Enterprises, Inc.",
    },
  ]

  let temoinCurent=data.filter(item=>item.id===temoin)


  useEffect(()=>{
    console.log("temoignage change :"+temoin);
 
  },[temoin])
  return (
    <div className=' py-36 '>
      <div className='px-4 md:px-7 mx-auto flex flex-col items-center   max-w-xl '>
          <h2 className='font-bold text-lg md:text-2xl'>Testimonials</h2>
          <div ref={ref} className='animate-temoignage text-center flex flex-col pt-16 pb-6 gap-6 items-center'>
            <img className='w-16' src={temoinCurent[0].avatar} alt="profil" />
            <p className='md:text-xl '>
              {temoinCurent[0].temoignage}
            </p>
            <div>
              <h3 className='pb-2 font-semibold	'>
              {temoinCurent[0].name}
              </h3>
              <p >
              {temoinCurent[0].activite}
              </p>
            </div>
          </div>
          <div className='flex '>
            {
              data.map((item)=> {
                const btnTrue=item.id===temoin
                console.log('btnTrue :'+btnTrue)
              return (
                <button  onClick={(e)=>{handlerChange(item.id)}} key={item.id}>
                <TbPointFilled  color={btnTrue?'#082fb2' :''} size={35} />
              </button>
             
              )
              }
              )
            }
          </div>
       </div>
    </div>
  )
}

export default Temoignage