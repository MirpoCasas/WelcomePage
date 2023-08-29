import './App.css'
import { Route, Routes, Link, useLocation } from "react-router-dom"
import Home from './components/home'
import Proyects from './components/proyects'
import AboutMe from './components/aboutme'
import menu from './assets/menu.svg'
import { useState, useEffect } from 'react'

function App() {

  const content = {
    en: {
      lang: "en",
      home: {
        welcomeone: "Argentinian Dev.",
        welcometwo: "programming and translation student. Interested in Art, Cinema, Design, and History.",
        port: "Take a look at my projects",
        about: "About me",
        cont: "Contact"
      },
      proyects: {
        intro: "These are my proyects",
        movieFin: "This website shows recommended movies based on The Movie Database API. It was made as part of Airont Labs' bootcamp and later re-made, from Vainilla JS to React JS.",
        better: "This website is a landing page for my website building services. It's built on React JS with SASS. I enjoyed using more videos to add motion.",
        carsale: 'This website was made as a proyect for No Country. It is a car sale website, with a backend made in Node JS. Sadly, the website is not fully functional, as most of the team had to leave the proyect.',
        managym: 'This website was made as a proyect for No Country. It is a gym management website, with a backend made in Node JS. Sadly, the website is not fully functional, as most of the team had to leave the proyect.',
        todo: "This proyect will be developed in the coming weeks! Contact me if you wish to know more."
      },
      aboutme: {
        titleone: "About me:",
        intro: "I am 24 years old and I am from Cordoba, Argentina. I started studying programming in 2021 with a Front-End orientation. I have concentrated my efforts on React JS but I am open to any technology.",
        titletwo: "Languages:",
        langone: "English",
        langtwo: "Spanish",
        langthree: "French",
        langfour: "Portuguese",
        native: "Native",
        basic: "Basic",
        titlethree: "Studies:",
        studyone: "Airont Labs' Bootcamp:",
        studyonedesc: "Airont Labs is a software company that made a free Front-End development bootcamp, with topics from Vainilla JS to React JS. It lasted 14 weeks.",
        titlefour: "Experience:",
        expone: "No Country is an organization that seeks to give developers their first work experience with groups that make apps during a month, with AGILE methodologies. I developed for 2 proyects and was Team Leader of a total of 6. After 2 instances, No Country hands a completion certificate.",
        titlefive: "Courses and Certifications:",
        nocountry: "Completion Certificate",
        titlesix: "Technologies:",
        skillone: "Team Player:",
        skillonedesc: "I like working in teams where I can learn from others and contribute my knowledge.",
        skilltwo: "Amicable:",
        skilltwodesc: "I consider myself a warm and charismatic person and I like my teammates to feel comfortable.",
        skillthree: "Creative:",
        skillthreedesc: "I consider myself a creative person, I enjoy finding new ways to solve problems and I am always looking for new ways to improve my work.",
        gyftedtitle: 'More:',
        gyfted: 'I appreciate personal accomplishment, confidence, and recognition. I may be ready to sacrifice personal comfort, be prepared to work aloneand follow detailed rules and instructions To ensure job satisfaction, I take care to pick a challenging job that provides support.',
        gyfteddesc: 'This assesment was provided by gyfted.me',
        gyftedbutton: 'Full CV from Gyfted.me'
      }
    },
    es: {
      lang: "es",
      home: {
        welcomeone: "Dev. Argentino",
        welcometwo: "estudiante de programación y traducción. Interesado en arte, cine, diseño e historia",
        port: "Observa mis proyectos",
        about: "Acerca de mí",
        cont: "Contacto"
      },
      proyects: {
        intro: "Estos son mis proyectos",
        movieFin: "Este sitio web recomienda películas basado en la API de The Movie DataBase. Está hecha en originalmente Vainilla JS y fue rehecha en React.",
        better: "Este sitio web es para promocionar mis servicios de diseño y desarrollo web. Está  hecha con React JS y SASS. Me gusto usar videos para añadir movimiento a mis diseños.",
        carsale: 'Este sitio web fue hecho como proyecto para No Country. Es un sitio de venta de autos, con un backend hecho en Node JS. Lamentablemente, el sitio no está completamente funcional, ya que la mayoría del equipo tuvo que dejar el proyecto.',
        managym: 'Este sitio web fue hecho como proyecto para No Country. Es un sitio de gestion de gimnasios, con un backend hecho en Node JS. Lamentablemente, el sitio no está completamente funcional, ya que la mayoría del equipo tuvo que dejar el proyecto.',
        todo: "Este proyecto se va a desarrollar en las proximas semanas! Ponte en contacto conmigo si quieres saber mas."
      },
      aboutme: {
        titleone: "Acerca de mí:",
        intro: "Tengo 24 años y soy oriundo de Córdoba Capital, Argentina. Empece a estudiar programación en 2021 con una orientación hacia el Front-End. Capitalizo mis conocimientos en React, pero me considero abierto a cualquier tecnología.",
        titletwo: "Idiomas:",
        langone: "Ingles",
        langtwo: "Español",
        langthree: "Francés",
        langfour: "Portugués",
        native: "Nativo",
        basic: "Básico",
        titlethree: "Formación:",
        studyone: "Airont Labs Bootcamp:",
        studyonedesc: "Airont Labs es una empresa que organizo junto con Altimetrik un bootcamp para desarrolladores Front End. Durante 14 semanas se enseñaron conceptos desde Vainilla JS hasta React JS culminando con un proyecto de página web en React.",
        titlefour: "Experiencia:",
        expone: "No Country es una ONG que conecta estudiantes de programación y organizan proyectos reales con grupos con metodologías AGILE. Programe para dos proyectos y fui Team Leader para un total de seis equipos. Sigo realizando proyectos con su organización. Luego de superar la primera etapa 'Cohorte' y luego la etapa de 'Seleccionado' otorgan un certificado de cumplimiento e incluyen a una bolsa de trabajo con distintas empresas conectadas.",
        titlefive: "Cursos y Certificaciones:",
        nocountry: "Certificado de Seleccionado",
        titlesix: "Tecnologías:",
        skillone: "Trabajador en equipo:",
        skillonedesc: "Me gusta trabajar en equipos donde se pueda aprender de los demás y aportar mis conocimientos.",
        skilltwo: "Amigable:",
        skilltwodesc: "Me considero una persona cálida y carismática y me gusta que mis compañeros se sientan cómodos.",
        skillthree: "Creativo:",
        skillthreedesc: "Me gusta pensar en soluciones creativas a los problemas que se presentan y buscar maneras de mejorar mi trabajo.",
        gyftedtitle: 'Más:',
        gyfted: 'Aprecio el logro personal, la confianza y el reconocimiento. Puedo estar listo para sacrificar la comodidad personal, estar preparado para trabajar solo y seguir reglas e instrucciones detalladas. Para garantizar la satisfacción laboral, me aseguro de elegir un trabajo desafiante que brinde apoyo.',
        gyfteddesc: 'Esta evaluacion fue provista por gyfted.me',
        gyftedbutton: 'CV completo de Gyfted.me'
      }
    }
  }

  const [language, setLanguage] = useState(content.es)
  const [navState, setNavState] = useState('')
  const pathname = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleMenu() {
    if (navState === '') {
      setNavState('active')
      if (window.screen.width < 600) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      setNavState('')
      if (window.screen.width < 600) {
        document.body.style.overflow = 'auto'
      }
    }
  }

  return (
    <>
      <nav>
        <img src={menu} alt="Menu" onClick={() => handleMenu()} />
        <div className={'nav_menu ' + navState} onClick={() => handleMenu()}>
          <Link to='/'><div className="nav_menu_item"><p>Hogar</p></div></Link>
          <div className="nav_line"></div>
          <Link to='/proyects'><div className="nav_menu_item"><p>Proyectos</p></div></Link>
          <div className="nav_line"></div>
          <Link to='/aboutme'><div className="nav_menu_item"><p>Mas Info</p></div></Link>
          <div className="nav_line"></div>
          <div className="langswitch">

          <p onClick={()=>{setLanguage(content.es)}} style={language.lang === "es" ? {textDecoration: 'underline'}  :{textDecoration: 'none'}}>ES</p><p> - </p><p onClick={()=>{setLanguage(content.en)}} style={language.lang === "en" ? {textDecoration: 'underline'} : {textDecoration: 'none'}} >EN</p>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home  content={language.home}/>} />
        <Route path="/proyects" element={<Proyects  content={language.proyects}/>} />
        <Route path="/aboutme" element={<AboutMe  content={language.aboutme}/>} />
      </Routes>
    </>
  )
}

export default App
