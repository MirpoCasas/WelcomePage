import './App.css'
import { Route, Routes, Link, useLocation } from "react-router-dom"
import Home from './components/home'
import Proyects from './components/proyects'
import AboutMe from './components/aboutme'
import menu from './assets/menu.svg'
import { useState, useEffect } from 'react'

function App() {

  const [navState, setNavState] = useState('')
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function handleMenu() {
    if (navState === '') {
      setNavState('active')
    } else {
      setNavState('')
    }
  }

  return (
    <>
      <nav>
        <img src={menu} alt="Menu" onClick={() => handleMenu()}/>
        <div className={'nav_menu '+ navState} onClick={()=>handleMenu()}>
          <Link to='/'><div className="nav_menu_item"><p>Hogar</p></div></Link>
          <div className="nav_line"></div>
          <Link to='/proyects'><div className="nav_menu_item"><p>Proyectos</p></div></Link>
          <div className="nav_line"></div>
          <Link to='/aboutme'><div className="nav_menu_item"><p>Mas Info</p></div></Link>
        </div>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyects" element={<Proyects />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
    </>
  )
}

export default App
