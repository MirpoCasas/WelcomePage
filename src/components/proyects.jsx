import movieFin from '../assets/movifindermockup.png'
import proyectImg from '../assets/proyects.svg'
import placeholder from '../assets/tocome.svg'
import { useState, useRef } from 'react'
import navArrow from '../assets/navarrow.svg'
import PropTypes from 'prop-types'



export default function Proyects(props) {

  Proyects.propTypes = {
    content: PropTypes.object.isRequired
  }

 let info = [
  {
   img: movieFin,
   desc: props.content.movieFin
  },
  {
   img: placeholder,
   desc: props.content.todo
  },
  {
   img: placeholder,
   desc: props.content.todo
  },
  {
   img: placeholder,
   desc: props.content.todo,
  },
  {
   img: placeholder,
   desc: props.content.todo,
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
    <p>{props.content.intro}</p>
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