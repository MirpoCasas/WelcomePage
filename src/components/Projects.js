import projectModel from './icons/Light bulb.svg'
import React from 'react'
import questionsPic from './icons/StackOverflow_Questions.png'


function Projects(props) {

  let projList = {
    english: [
      {
        title: "StackExchange Questions",
        url: "https://stackoverflow-questions-51afc.web.app",
        pic: questionsPic,
        desc: "Interview project. Fetches StackExchange's questions and displays them on a grid in Material UI. The page uses Typescript + React"
      }
    ],
    spanish: [
      {
        title: "Preguntas de StackExchange",
        url: "https://stackoverflow-questions-51afc.web.app",
        pic: questionsPic,
        desc: "Proyecto para una entrevista. Busca preguntas de StackExrchange con su API y las plasma en una grilla de Material UI. La pagina usa Typescript + React"
      }
    ]
  }
  
  props.language === "english"
    ? (projList = projList.spanish)
    : (projList = projList.english);
  
  let titulo = ""
  
  props.language === "english"
    ? (titulo = 'Estos son mis proyectos')
    : (titulo = 'These are my projects');
  
  const projectArr = projList.map((proj) => 
      <div className="card" key={proj.title}>
        <h1>{proj.title}</h1>
        <img alt='projectpic' src={proj.pic} />
        <p>{proj.desc}</p>
        <div className='button_holder'>
          <a target='_blank' rel='noreferrer' href={proj.url}>LINK</a>
        </div>
      </div>
  )
  
  
  return (
    <div className="projects">
      <h1>{titulo}</h1>
      <div className='postProject'>
        <img alt='projectsModel' src={projectModel} />
        <div className="card-wrapper">
          {projectArr}
        </div>
      </div>
    </div>
  )
}
  
export default Projects;