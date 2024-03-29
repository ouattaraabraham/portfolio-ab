import React ,{useState} from 'react'
import { CgCornerRightDown } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";




function Plans() {
const [open1,seOpen1]=useState(true) 
const [open2,seOpen2]=useState(true) 
const [open3,seOpen3]=useState(true) 


const handler1=()=>{
    seOpen1((e)=>!e)
}
const show1=open1?"block":"hidden"


const handler2=()=>{
    seOpen2((e)=>!e)
}
const show2=open2?"block":"hidden"

const handler3=()=>{
  seOpen3((e)=>!e)
}
const show3=open3?"block":"hidden"



  return (
    <div className='px-5 sm:px-10 md:px-7 pb-32'>
      <div  className='flex flex-col'>
        <div className='flex items-center gap-2 mb-5'>
          <h2 className='tracking-[.07em]  text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] font-montrealI font-semibold'>Prestation</h2>
          <span className='pt-2'>
          <CgCornerRightDown size={35}/>
          </span>
        </div>
        <div className='bg-slate-100 h-[1px]'></div>

        <div className='px-2 flex md:justify-end '>
      
         <div className='w-full md:w-[70%]'>
         {/* show1 */}
          <div >
            <div onClick={handler1}  className=' py-5 flex justify-between items-center text-xl sm:text-3xl  '>
              <span>Conception UX/UI</span>
              <button >
                {
                  open1? <RiSubtractFill/> :<FiPlus/>
                }
              </button>
            </div>
            <div className={`${show1} md:text-xl pb-2`}>
              <p >
              Pour concevoir, je me tourne vers des outils tels que Figma qui me permet de faire un récit visuel du projet, cela permet à mes clients de voir la marquette du projet afin de faire des ajustements si nécessaire.              </p>
            </div>
          </div>
          <div className='bg-slate-100 h-[1px]'></div>
          {/* show3 */}
          <div >
            <div onClick={handler3}  className=' py-5 flex justify-between items-center text-xl sm:text-3xl  '>
            <div className='flex items-center'>
             <span className='mr-5'>Development</span>
             <span><FaCode/></span>

            </div>
              <button >
                {
                  open3? <RiSubtractFill/> :<FiPlus/>
                }
              </button>
            </div>
            <div className={`${show3} md:text-xl pb-2`}>
              <p >
              En tant que développeur front-end , ma principale responsabilité est de développer le côté client d'un site Web. Cela implique la création et la mise en œuvre des éléments visuels avec lesquels les utilisateurs interagissent, tels que les boutons, les menus et les formulaires ect.. À l'aide de HTML , CSS , JavaScript et des framwork tel que React , et diverse librairie utile pour le projet.               </p>
            </div>
          </div>
          <div className='bg-slate-100 h-[1px]'></div>
          {/* show2 */}
          <div>
          <div onClick={handler2}  className=' py-5 flex justify-between items-center text-xl sm:text-3xl  '>
              <span>Processus</span>
              <button>
              {
                  open2? <RiSubtractFill/> :<FiPlus/>
                }
              </button>
            </div>
            <div className={`${show2} md:text-xl pb-2`}>
              <p>
               Je me focalise sur les attentes véritables de mes clients afin de satisfait leur besoin véritable, j'établis un cahier de charge et nous voyons ensemble ce qui est le mieux adapté pour le projet.

              </p>
            </div>
          </div>
          <div className='bg-slate-100 h-[1px]'></div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Plans