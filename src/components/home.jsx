import home1 from '../assets/home1.svg'
import home2 from '../assets/home2.svg'
import home3 from '../assets/home3.svg'
import home4 from '../assets/home4.svg'
import './home.scss'

export default function Home() {
 return (
  <div className="Start">
   <div className='first pagePart'>
    <div className="Stripe"></div>
    <p className="">Dev. Argentino  estudiante de programacion y traduccion. Interesado en Arte, Cine, Diseño e Historia </p>
    <img src={home1} alt="" />
   </div>
   <div className='second pagePart'>
    <img src={home2} alt="" />
    <div className='pack'>
     <p>Observa mis proyectos</p>
     <button>Portfolio</button>
    </div>
   </div>
   <div className='third pagePart'>
    <div className="Circle"></div>
    <div className='pack'>
     <p>Acerca de mi</p>
     <button>Info</button>
    </div>
    <img src={home3} alt="" />
   </div>
   <div className='fourth pagePart'>
    <img src={home4} alt="" />
    <div>
     <p className="">Contacto</p>
    </div>
   </div>
  </div>
 )
}
