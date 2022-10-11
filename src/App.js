import model1 from './Attribution modeling.svg'
import './App.scss';
import Me from './components/Me.js';
import Courses from './components/Courses';
import Socials from './components/Socials';
import Projects from './components/Projects';
import { useState } from 'react';

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

function NavBar(props) {

  let sections = []

  props.language === "english"
  ? (sections = ['Quien soy', 'Cursos', 'Contacto'])
  : (sections = ['Who am I?', 'Courses', 'Contact']);

  return (
    <nav className="bar">
      <div className="selector">
        <select
            className="custom-select"
            value={props.language}
            onChange={e => props.handleSetLanguage(e.target.value)}
          >
            <option value="english">Español</option>
            <option value="spanish">English</option>
          </select></div>
      <div className="navbutton"><a href="#me" >{sections[0]}</a></div>
      <div className="navbutton"><a href="#Courses" >{sections[1]}</a></div>
      <div className="navbutton"><a href="#socials" >{sections[2]}</a></div>
    </nav>
  )  
}


function Intro(props) {

  let titles = []

  props.language === "english"
  ? (titles = ['Hola! Bienvenido', 'Mi nombre es Martin Casas. Soy un Desarrollador Front-End'])
  : (titles = ['Hi there! Welcome', "My name is Martin Casas. I'm a Front-End web developer."]);

  return (
    <section id="intro" className="Start">
    
        
      <p>
        {titles[0]}
      </p>

      <div className="Intro">
        <p>{titles[1]}</p>
        <img src={model1} width="800" height="800" alt="Boy" />
      </div>
    
    </section>
  );
}

function App() {

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div>
      <NavBar
        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Intro language={language}/>
      <Me language={language}/>
      <Courses language={language}/>
      <Projects language={language}/>
      <Socials language={language}/>
    </div>
  )
}

export default App;
