import techModel from './icons/Data report.svg'
import reduxpic from './icons/4691205_redux_icon.png'
import tailpic from './icons/9080637_brand_tailwind_icon.png'
import atompic from './icons/atom.png'
import bootstrappic from './icons/bootstrap.png'
import csspic from './icons/css-3.png'
import githubpic from './icons/github.png'
import htmlpic from './icons/html-5.png'
import pythonpic from './icons/python.png'
import sasspic from './icons/sass.png'
import jspic from './icons/js.png'
import tspic from './icons/typescript.svg'
import selfie from './icons/20220911_223943.jpg'

function Me(props) {

  const techarr = [
    {
      name: "React",
      pic: atompic
    },
    {
      name: "Bootstrap",
      pic: bootstrappic
    },
    {
      name: "CSS",
      pic:  csspic
    },
    {
      name: "Github",
      pic: githubpic
    },
    {
      name: "HTML5",
      pic: htmlpic
    },
    {
      name: "JavaScript",
      pic: jspic
    },
    {
      name: "Python",
      pic: pythonpic
    },
    {
      name: "SASS",
      pic: sasspic
    },
    {
      name: "Redux",
      pic: reduxpic
    },
    {
      name: "TypeScript",
      pic: tspic
    },
    {
      name: "Tailwind",
      pic: tailpic
    }
  ]

  const techarrdone = techarr.map((tech) =>
    <div key={tech.name}>
      <img alt="techpic" src={tech.pic} />
      <p>{tech.name}</p>
    </div>
  )

  let content = {
    english: {
      title: 'Who am I?',
      desc: "I'm an Argentinian dev, just starting out in the craft. I've been completing the FreeCodeCamp Curriculum and complementing it with other resources. This is my first react app! I will be listing the projects I work on here.",
      bullets: ['Age : 23', 'Nationality : Argentinian', 'Bilingual : Spanish & English', 'Location: Cordoba, Argentina', 'Studying translation and engineering', 'Basic level portuguese and french'],
      subtitle: 'Technologies'
    },
    spanish: {
      title: 'Quien soy?',
      desc: "Soy un desarrollador web Argentino, empezando a practicar. Realize los cursos de la parte Front End de FreeCodeCamp y los complemente con otros recursos.Estas es mi primera app en React! Estare publicando los proyectos en los que trabaje aqui.",
      bullets: ['Edad : 23', 'Nacionalidad : Argentino', 'Bilingue: Español & Ingles', 'Ubicacion: Cordoba, Argentina', 'Estudiante de Traductorado e Ingenieria', 'Nivel basico de portugues y frances'],
      subtitle: 'Tecnologias'
    }
  }


  props.language === "english"
    ? (content = content.spanish)
    : (content = content.english);
  
  
  return (
      <section id="me" className='Me'>
      <div className='firstPartMe'>
        <div className="Description">
          <h2>{content.title}</h2>
  
          <p>{content.desc}</p>
        </div>
        <img src={selfie} alt='selfie' />
        <div className='Description'>
          <ul>
            {content.bullets.map((item) => 
              <li><p>{item}</p></li>)}
            
          </ul>
        </div>
      </div>
      <div className='secondPartMe'>
        <h2>{content.subtitle}</h2>
        <div className='preTech'>
          <img alt="techModel" src={techModel} id='techModel' />
          <div className="Techs" id="style-5">
            {techarrdone}
          </div>
        </div>
      </div>
    </section>
  )
}
  
export default Me;