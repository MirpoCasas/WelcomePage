import model1 from './Attribution modeling.svg'
import './App.scss';
import Me from './components/Me.js';
import Courses from './components/Courses';
import Socials from './components/Socials';
import Projects from './components/Projects';



function NavBar() {
  return (
    <nav className="bar">
      <div className="navbutton"><a href="#me" >Who am I?</a></div>
      <div className="navbutton"><a href="#Courses" >Courses</a></div>
      <div className="navbutton"><a href="#socials" >Contact</a></div>
      <div className="navbutton"><p></p></div>
    </nav>
  )  
}


function Intro() {
  return (
    <section id="intro" className="Start">
    
        
      <p>
        Hi there! Welcome
      </p>

      <div className="Intro">
        <p>My name is Martin Casas. I'm a Front-End web developer.</p>
        <img src={model1} width="800" height="800" alt="Boy" />
      </div>
    
    </section>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Me />
      <Courses />
      <Projects />
      <Socials />
    </div>
  )
}

export default App;
