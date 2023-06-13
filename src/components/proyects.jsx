import movieFin from '../assets/image3.png'
import proyectImg from '../assets/proyects.svg'
import placeholder from '../assets/placeholder.svg'
import { useState, useRef } from 'react'
import navArrow from '../assets/navarrow.svg'


export default function Proyects() {

 let info = [
  {
   img: movieFin,
   desc: 'This website lists recommended movies from TMDB API and lists them in a grid. It also displays movie info and trailers. Made as part of Airont Labs’ Bootcamp'
  },
  {
   img: placeholder,
   desc: 'This is my website for adverticing my software services'
  },
  {
   img: placeholder,
   desc: 'This website aims to provide an easy tool for fighting game players to publish, share and practice combos.'
  },
  {
   img: placeholder,
   desc: 'This is a podcast ranking and reviewing website.',
  },
  {
   img: placeholder,
   desc: 'This is a compendium of my js practice proyects.',
  }
 ]
 const divRef = useRef(null);

 function scrollTo (direction){
  if (direction === 'up') {
   divRef.current.scroll({
    top: 0,
    behavior: "smooth"
   })
   }else {
    divRef.current.scroll({
     top: 700,
     behavior: "smooth"
   });
  }
 }

 const [preview, setPreview] = useState(info[0])

 return (
  <div className='proyects'>
   <div className='proyects_first'>
    <img className='fade-in-bottom' src={proyectImg} alt="" />
    <p>Estos son mis proyectos</p>
   </div>
   <div>
    <div className="proyectApp">
     <div className="sideHolder" ref={divRef}>
      <button className="sideHolder_navButton up" onClick={()=>scrollTo('up')}><img src={navArrow} alt="" /></button>
      <div className="sideHolder_item" onClick={() => setPreview(info[0])}><p>movieFinder</p></div>
      <div className="sideHolder_item" onClick={() => setPreview(info[1])}><p>BetterDesigns</p></div>
      <div className="sideHolder_item" onClick={() => setPreview(info[2])}><p>ComboMaster</p></div>
      <div className="sideHolder_item" onClick={() => setPreview(info[3])}><p>Podcaster</p></div>
      <div className="sideHolder_item" onClick={() => setPreview(info[4])}><p>JS trials</p></div>
      <button className="sideHolder_navButton down" onClick={()=>scrollTo('down')}><img src={navArrow} alt="" /></button>
     </div>
     <div className="mainView">
      <img src={preview.img} alt="" />
      <p>{preview.desc}</p>
     </div>
    </div>
   </div>
  </div>
 )
}