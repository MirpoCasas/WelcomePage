import placeholder from './icons/150x150.png'
import projectModel from './icons/Light bulb.svg'
import React from 'react'


function Projects() {

    const projList = [
      {
        title: "Drum Machine",
        url: "",
        pic: "",
        desc: ""
      },
      {
        title: "JavaScript Calculator",
        url: "",
        pic: "",
        desc: ""
      },
      {
        title: "Random Quote Machine",
        url: "",
        pic: "",
        desc: ""
      }
    ]
  
    const projectArr = projList.map((proj) => 
      <li className="card" key={proj.title}>
        <p>{proj.title}</p>
        <img alt='projectpic' src={placeholder} />
        <button>LINK</button>
      </li>
    )
  
    return (
      <div className="projects">
        <h2>These are my projects</h2>
        <div className='postProject'>
          <img alt='projectsModel' src={projectModel} />
          <ul className="cards">
            {projectArr}
          </ul>
        </div>
      </div>
    )
}
  
export default Projects;