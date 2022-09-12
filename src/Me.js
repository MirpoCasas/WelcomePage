import React from 'react';
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
import selfie from './icons/20220911_223943.jpg'

function Me() {

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
        name: "Tailwind",
        pic: tailpic
      }
    ]
  
    const techarrdone = techarr.map((tech) =>
      <div>
        <img alt="techpic" src={tech.pic} />
        <p>{tech.name}</p>
      </div>
    )
  
    return (
        <section id="me" className='Me'>
            <div className='firstPartMe'>
                <div className="Description">
                    <h2>Who am I?</h2>
            
                    <p>I'm an Argentinian dev, just starting out in the craft. I've been completing the FreeCodeCamp Curriculum and complementing it with other resources.
                        This is my first react app! I will be listing the projects I work on here.
                    </p>
                </div>
                <img src={selfie} alt='selfie' />
                <div className='Description'>
                    <ul>
                        <li><p>Age : 23</p></li>
                        <li><p>Nationality : Argentinian</p></li>
                        <li><p>Bilingual : Spanish & English</p></li>
                        <li><p>Location : Cordoba, Argentina</p></li>
                        <li><p>Studying translation and engineering</p></li>
                        <li><p>Basic level portuguese and french</p></li>
                    </ul>
                </div>
            </div>
        <div className='secondPartMe'>
          <h2>Technologies</h2>
          <div className='preTech'>
            <img alt="techModel" src={techModel} id='techModel' />
            <div className="Techs">
              {techarrdone}
            </div>
          </div>
        </div>
      </section>
    )
}
  
export default Me;