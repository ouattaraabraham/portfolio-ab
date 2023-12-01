import React ,{useState} from 'react'
import { CgCornerRightDown } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";


function Plans() {
const [open1,seOpen1]=useState(false) 
const [open2,seOpen2]=useState(false) 


const handler1=()=>{
    seOpen1((e)=>!e)
    console.log(open1);
}

const show2=open2?"block":"hidden"

const handler2=()=>{
    seOpen2((e)=>!e)
    console.log(open1);
}

const show1=open1?"block":"hidden"
  return (
    <div className='px-4 md:px-7 pb-32'>
      <div  className='flex flex-col gap-5'>
        <div className='flex items-center gap-2'>
          <h2 className='tracking-[.07em] text-[2.5rem] md:text-[3rem] lg:text-[3.25rem] font-montrealI font-semibold'>Pestation</h2>
          <span className='pt-2'>
          <CgCornerRightDown size={35}/>
          </span>
        </div>
        <div className='bg-slate-100 h-[1px]'></div>

        <div className='px-2 flex md:justify-end '>
          {/* show1 */}
         <div className='w-full md:w-[70%]'>
          <div >
            <div onClick={handler1}  className=' py-5 flex justify-between items-center text-xl sm:text-3xl  '>
              <span>Conception UX/UI</span>
              <button >
                {
                  open1? <RiSubtractFill/> :<FiPlus/>
                }
              </button>
            </div>
            <div className={`${show1} md:text-xl`}>
              <p >
              Mon processus commence par prévoir l'élaboration d'un récit visuel pour le projet, le rendant mémorable, frappant et beau. Pour garantir un résultat réussi, j’accorde une grande importance à une compréhension approfondie du cahier des charges du projet et des besoins du client. Cela implique d'identifier les objectifs du projet, les spécifications fonctionnelles et de mener des recherches approfondies pour mieux comprendre les concurrents et les publics cibles.
              </p>
            </div>
          </div>
          <div className='bg-slate-100 h-[1px]'></div>
          {/* show2 */}
          <div>
          <div onClick={handler2}  className=' py-5 flex justify-between items-center text-xl sm:text-3xl  '>
              <span>Procesus</span>
              <button>
              {
                  open2? <RiSubtractFill/> :<FiPlus/>
                }
              </button>
            </div>
            <div className={`${show2} md:text-xl`}>
              <p>
              Le développement Webflow est au cœur de ce que je propose, en mettant l'accent sur une conception personnalisée adaptée à vos besoins spécifiques, différenciant ainsi votre entreprise de la concurrence. L'objectif principal est de fournir un site Web réactif, performant, au pixel près et offrant une expérience utilisateur fluide avec des animations et des interactions soigneusement conçues. De l'espacement, de la composition et de la typographie au mouvement, à l'interaction et à la fonctionnalité, j'aligne méticuleusement chaque élément pour créer un site Web transparent, réactif et visuellement époustouflant.             lllllllllllllllllllllldddddddddddddddddddddhhhhhhhh
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