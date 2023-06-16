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
        titlesix: "Technologies:"
      }
    },
    es: {
      lang: "es",
      home: {
        welcomeone: "Dev. Argentino",
        welcometwo: "estudiante de programacion y traduccion. Interesado en Arte, Cine, Diseño e Historia",
        port: "Observa mis proyectos",
        about: "Acerca de mi",
        cont: "Contacto"
      },
      proyects: {
        intro: "Estos son mis proyectos",
        movieFin: "Este sitio web recomienda peliculas basado en la API de The Movie DataBase. Esta hecha en originalmente Vainilla JS y fue re-hecha en React.",
        todo: "Este proyecto se va a desarrollar en las proximas semanas! Ponte en contacto conmigo si quieres saber mas."
      },
      aboutme: {
        titleone: "Acerca de mi:",
        intro: "Tengo 24 años y soy oriundo de Cordoba Capital, Argentina. Empece a estudiar programacion en 2021 con una orientacion hacia el Front-End. Capitalizo mis conocimientos en React pero me considero abierto a cualquier tecnologia.",
        titletwo: "Idiomas:",
        langone: "Ingles",
        langtwo: "Español",
        langthree: "Frances",
        langfour: "Portugues",
        native: "Nativo",
        basic: "Basico",
        titlethree: "Formacion:",
        studyone: "Airont Labs Bootcamp:",
        studyonedesc: "Airont Labs es una empresa que organizo junto con Altimetrik un bootcamp para desarrolladores Front End. Durante 14 semanas se enseñaron conceptos desde Vainilla JS hasta React JS culminando con un proyecto de pagina web en React.",
        titlefour: "Experience:",
        expone: "No Country es una ONG que conecta estudiantes de programacion y organizan proyectos reales con grupos con metodologias AGILE. Programe para dos proyectos y fui Team Leader para un total de seis equipos. Sigo realizando proyectos con su organizacion. Luego de superar la primera etapa 'Cohorte' y luego la etapa de 'Seleccionado' otorgan un certificado de cumplimiento e incluyen a una bolsa de trabajo con distintas empresas conectadas.",
        titlefive: "Cursos y Certificaciones:",
        nocountry: "Certificacdo de Seleccionado",
        titlesix: "Tecnologias:"
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
