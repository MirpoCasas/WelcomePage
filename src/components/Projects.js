import projectModel from './icons/Light bulb.svg'
import React from 'react'
import questionsPic from './icons/StackOverflow_Questions.png'


function Projects() {

    const projList = [
      {
        title: "StackExchange Questions",
        url: "https://stackoverflow-questions-51afc.web.app",
        pic: questionsPic,
        desc: "Interview project. Fetches StackExchange's questions and displays them on a grid in Material UI. The page uses Typescript + React"
      }
    ]
  
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
        <h1>These are my projects</h1>
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