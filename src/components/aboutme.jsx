/* eslint-disable react/no-unescaped-entities */
import codeAcSVG from '../assets/codeacademy.svg'
import myPic from '../assets/mypic.jpg'
import newTab from '../assets/newtab.svg'
import udemy from '../assets/udemy.svg'
import nocountry from '../assets/nocountry.svg'
import sololearn from '../assets/sololearn.svg'
import bash from '../assets/bash.svg'
import blender from '../assets/blender.svg'
import css from '../assets/css.svg'
import d3 from '../assets/d3.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import html from '../assets/html5.svg'
import jspic from '../assets/javascritp.svg'
import materialui from '../assets/materialui.svg'
import postgre from '../assets/postgresql.svg'
import pyth from '../assets/python.svg'
import reactPic from '../assets/react.svg'
import reduxPic from '../assets/redux.svg'
import sass from '../assets/sass.svg'
import tailwind from '../assets/tailwind.svg'
import tspic from '../assets/typescrypt.svg'
import { Link } from 'react-router-dom'

function AboutMe() {

 let techArr = [
  {
   name: 'Bash',
   pic: bash
  },
  {
   name: 'Blender',
   pic: blender
  },
  {
   name: 'CSS',
   pic: css
  },
  {
   name: 'D3',
   pic: d3
  },
  {
   name: 'Git',
   pic: git
  },
  {
   name: 'Github',
   pic: github
  },
  {
   name: 'HTML',
   pic: html
  },
  {
   name: 'JavaScript',
   pic: jspic
  },
  {
   name: 'Material UI',
   pic: materialui
  },
  {
   name: 'PostgreSQL',
   pic: postgre
  },
  {
   name: 'Python',
   pic: pyth
  },
  {
   name: 'React',
   pic: reactPic
  },
  {
   name: 'Redux',
   pic: reduxPic
  },
  {
   name: 'SASS',
   pic: sass
  },
  {
   name: 'Tailwind',
   pic: tailwind
  },
  {
   name: 'TypreScript',
   pic: tspic
  }
 ]

 return (
  <div className="AboutMe">
   <div className="maininfo">
    <div className="imgHolder">
     <img src={myPic} alt="" className='myPic' />
    </div>
    <div className="mainInfo_body">
     <h2>Martin Casas</h2>
     <h3 className='subtitle'>Acerca de mi:</h3>
     <p>Tengo 24 años y soy oriundo de Cordoba Capital, Argentina. Empece a estudiar programacion en 2021 con una orientacion hacia el Front-End. Capitalizo mis conocimientos en React pero me considero abierto a cualquier tecnologia.</p>
    </div>
   </div>
   <div className="langs">
    <h3 className='subtitle'>Idiomas:</h3>
    <div className="langs_item"></div>
   </div>
   <div className="formation">
    <h3 className='subtitle'>Formacion:</h3>
    <h4>Airont Labs bootcamp:</h4>
    <p>Airont Labs es una empresa que organizo junto con Altimetrik un bootcamp para desarrolladores Front End. Durante 14 semanas se enseñaron conceptos desde Vainilla JS hasta React JS culminando con un proyecto de pagina web en React.</p>
    <h4>No Country:</h4>
    <p>No Country es una ONG que conecta estudiantes de programacion y organizan proyectos reales con grupos con metodologias AGILE. Programe para dos proyectos y fui Team Leader para un total de seis equipos. Sigo realizando proyectos con su organizacion. Luego de superar la primera etapa 'Cohorte' y luego la etapa de 'Seleccionado' otorgan un certificado de cumplimiento e incluyen a una bolsa de trabajo con distintas empresas conectadas.</p>
   </div>
   <h3 className='subtitle'>Cursos y certificaciomes:</h3>
   <div className='courses'>
    <div className="courses_div">
     <div className="courses_item">
      <img src={codeAcSVG} alt="Code Academy" id='codeacademy' />
      <Link className='courses_course'><p>Responsive Web Design <img src={newTab} alt="new tab" className='newTab' /></p></Link>
      <Link className='courses_course'><p>JavaScript Algorithms and Data Structures<img src={newTab} alt="new tab" className='newTab' /></p></Link>
      <Link className='courses_course'><p>Front End development libraries<img src={newTab} alt="new tab" className='newTab' /></p></Link>
      <Link className='courses_course'><p>Data Visualization<img src={newTab} alt="new tab" className='newTab' /></p></Link>
     </div>
     <div className="courses_item">
      <img src={sololearn} alt="" />
      <Link className='courses_course'> <p>Python Core <img src={newTab} alt="new tab" className='newTab' /></p></Link>
      <Link className='courses_course'> <p>React + Redux <img src={newTab} alt="new tab" className='newTab' /></p></Link>
     </div>
    </div>
    <div className="courses_div">
     <div className="courses_item">
      <img src={udemy} alt="Udemy" />
      <Link className='courses_course'> <p>Version Control with Git <img src={newTab} alt="new tab" className='newTab' /></p></Link>
     </div>
     <div className="courses_item">
      <img src={nocountry} alt="No Country" />
      <Link className='courses_course'><p>Certificado de Seleccionado <img src={newTab} alt="new tab" className='newTab' /></p></Link>
     </div>
    </div>
   </div>
   <h4 className='subtitle'>Tecnologias:</h4>
   <div className="Techs">
    <div className="Techs_holder">
     {techArr.map((element) => {
      return (
       <div key={element.index} className='Techs_item'>
        <img src={element.pic} alt={element.name} className='Techs_pic' />
        <p>{element.name}</p>
       </div>
      )
     })}
    </div>
   </div>
   <div className="Skills"></div>
   <div className="interests"></div>
  </div>
 )
}

export default AboutMe