import model1 from './Attribution modeling.svg'
import socialModel from './icons/Social Communication.svg'
import './App.css';
import Me from './Me.js';



function NavBar() {
  return (
    <div className="bar">
      <div className="navbutton"><a href="#me" >Who am I?</a></div>
      <div className="navbutton"><a href="#courses" >Courses</a></div>
      <div className="navbutton"><a href="#socials" >Contact</a></div>
      <div className="navbutton"><p></p></div>
    </div>
  )  
}


function Intro() {
  return (
    <section id="intro" className="App">
      <header className="App-header">
        
        <p>
          Hi there! Welcome
        </p>

        <div className="Intro">
          <p>My name is Martin Casas. I'm a Front-End web developer.</p>
          <img src={model1} width="800"S height="800" alt="Boy" />
        </div>
      </header>
    </section>
  );
}

function Courses() {


  return (
    <section id="courses">
      <div>
        <h1>These are the courses I have worked on.</h1>
        <div className='CourseList'>
        <div>
          <h2>FreeCodeCamp</h2>
            <ul>
              <li>HTML and CSS</li>
              <li>Javascript</li>
              <li>Front End libraries</li>
              <li>Python - OnGoing</li>
            </ul>
          </div>
          <div>
            <h2>SoloLearn</h2>
            <ul>
              <li>Python Core</li>
              <li>React + Redux</li>
            </ul>
          </div>
          <div>
            <h2>Open BootCamp</h2>
            <ul>
              <li>HTML & CSS</li>
            </ul>
            <h2>Udacity</h2>
            <ul>
              <li>Version Control with Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Socials() {
  return (
    <section id="socials" className='socials'>
      <h2>This are my Socials</h2>
      <div className='socialCont'>
        <div className='socialLinks'>
          <a href="https://www.linkedin.com/in/martincasas23/">LinkedIn</a>
          <br></br>
          <a href="https://github.com/MirpoCasas">Github</a>
          <p>My email: mirpocasas@gmail.com</p>
          <p>Phone: +54 9 351 3041288</p>
          <p>I'm open to job offers!</p>
        </div>
        <img alt='socialModel' src={socialModel} />
      </div>
    </section>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Intro />
      <Me />
      <Courses />
      <Socials />
    </div>
  )
}

export default App;
