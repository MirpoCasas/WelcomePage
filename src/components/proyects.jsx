import movieFin from '../assets/movifindermockup.png'
import proyectImg from '../assets/proyects.svg'
import placeholder from '../assets/tocome.svg'
import { useState, useRef } from 'react'
import navArrow from '../assets/navarrow.svg'
import PropTypes from 'prop-types'
import betterImg from '../assets/better-img.png'



export default function Proyects(props) {

  Proyects.propTypes = {
    content: PropTypes.object.isRequired
  }

  let info = [
    {
      name: "movieFin",
      img: movieFin,
      desc: props.content.movieFin,
      link: 'https://moviefinder-mc.vercel.app',
      repolink: 'https://github.com/MirpoCasas/Airont-Labs-Project-One'
    },
    {
      name: 'betterImg',
      img: betterImg,
      desc: props.content.better,
      link: 'https://betterdesigns.netlify.app',
      repolink: 'https://github.com/MirpoCasas/BetterDesigns'
    },
    {
      name: 'placeholder',
      img: placeholder,
      desc: props.content.todo
    },
    {
      name: 'placeholder',
      img: placeholder,
      desc: props.content.todo,
    },
    {
      name: 'placeholder',
      img: placeholder,
      desc: props.content.todo,
    }
  ]
  const divRef = useRef(null);

  function scrollTo(direction) {
    if (direction === 'up') {
      divRef.current.scroll({
        top: 0,
        behavior: "smooth"
      })
    } else {
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
      <div className="proyectApp">
        <div className="sideHolder" ref={divRef}>
          <button className="sideHolder_navButton up" onClick={() => scrollTo('up')}><img src={navArrow} alt="" /></button>
          <div className="sideHolder_item" onClick={() => setPreview(info[0])}><p>movieFinder</p></div>
          <div className="sideHolder_item" onClick={() => setPreview(info[1])}><p>BetterDesigns</p></div>
          <div className="sideHolder_item" onClick={() => setPreview(info[2])}><p>ComboMaster</p></div>
          <div className="sideHolder_item" onClick={() => setPreview(info[3])}><p>Podcaster</p></div>
          <div className="sideHolder_item" onClick={() => setPreview(info[4])}><p>JS trials</p></div>
          <button className="sideHolder_navButton down" onClick={() => scrollTo('down')}><img src={navArrow} alt="" /></button>
        </div>
        <div className="mainView">
          <img src={preview.img} alt="Proyect image" id={preview.name} />
          <p>{preview.desc}</p>
          {preview.link != null &&
            <div className='mainView_buttonHolder'>
            <a href={preview.link}><button>To page</button></a>
            <a href={preview.repolink}><button>To Repo</button></a>
            </div>
          }
        </div>
      </div>
    </div>
  )
}