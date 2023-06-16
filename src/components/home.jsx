import home1 from '../assets/home1.svg'
import home2 from '../assets/home2.svg'
import home3 from '../assets/home3.svg'
import home4 from '../assets/home4.svg'
import { Link } from 'react-router-dom'
import linkedinlogo from '../assets/linkedinlogo.svg'
import githublogo from '../assets/github.svg'
import arflag from '../assets/arflag.svg'
import PropTypes from 'prop-types'


export default function Home(props) {

 Home.propTypes = {
  content: PropTypes.object.isRequired
 }

 return (
  <div className="home">
   <div className="stripe_gp">
    <div className="stripe_cont">
     <div className="stripe"></div>
    </div>
   </div>
   <div className='home_first pagePart'>
    <p className="">{props.content.welcomeone}<img src={arflag} alt="Argentina flag" className='ArFlag'/>{props.content.welcometwo}</p>
    <img className='fade-in-bottom home_img' src={home1} alt="" />
   </div>
   <div className='home_second pagePart'>
    <img className='fade-in-bottom home_img' src={home2} alt="" />
    <div className='pack'>
     <h2>{props.content.port}</h2>
     <Link to='/proyects'>
     <button>Portfolio</button>
     </Link>
    </div>
   </div>
   <div className="circle_gp">
    <div className="circle_cont">
     <div className="circle">
     </div>
    </div>
   </div>
   <div className='home_third pagePart'>
    <div className='pack'>
     <h2>{props.content.about}</h2>
     <Link to="/aboutme">
     <button>Info</button>
     </Link>
    </div>
    <img className="home_img" src={home3} alt="" />
   </div>
   <div className='home_fourth pagePart'>
    <img className='fade-in-bottom contact_img home_img' src={home4} alt="" />
    <div className='contact'>
     <h2 className="">{props.content.cont}</h2>
     <a href="https://www.linkedin.com/in/martinfcasas/" target="_blank" rel='noreferrer'><img src={linkedinlogo} alt="LinkedIn" className='contact_logo'/>Linkedin</a>
     <a href="https://github.com/MirpoCasas" target="_blank" rel='noreferrer'><img src={githublogo} alt="Github" className='contact_logo'/>GitHub</a>
     <p>Email: mirpocasas@gmail.com</p>
    </div>
   </div>
  </div>
 )
}
