import { useState } from "react";

import "./App.css";
import Modal from "./components/modal";
import Intro from "./components/intro.js";
import Desc from "./components/desc.js";
import Courses from "./components/courses.js";
import Projects from "./components/projects.js";
import Techs from "./components/techs.js";
import Contact from "./components/contact.js";
import blackgithub from "./icons/github.png";

import NavBar from "./components/navbar";

function App() {
    let languageStoredInLocalStorage = localStorage.getItem("lang");
    let [lang, setLang] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );

    window.addEventListener("scroll", handleNavScroll);

    function closeModal() {
        let modal = document.querySelector(".Modal");
        let body = document.querySelector("body");
        let ofuscator = document.querySelector(".Ofuscator");
        ofuscator.style.display = "none";
        modal.style.display = "none";
        body.style.overflow = "auto";
    }

    function handleLang() {
        if (lang === "English") {
            setLang("Spanish");
        } else {
            setLang("English");
        }
    }

    let lastScrollY = window.scrollY

    function handleNavScroll() {
        let navbar = document.querySelector(".NavBar");
        let dropdown = document.querySelector(".Dropdown");

        if (window.scrollY > 300) {
            navbar.classList.remove("st");
            dropdown.classList.remove("st");
        } else {
            navbar.classList.add("st");
            dropdown.classList.add("st");
        }
        
        if (window.scrollY > 900) {
            if (window.scrollY > lastScrollY) {
                navbar.classList.add("hidden")
                dropdown.classList.add("hidden")
            }else{
                navbar.classList.remove("hidden")
            }

        }

        lastScrollY = window.scrollY
        
    }

    return (
        <div className="page">
            <div onClick={closeModal} className="Ofuscator"></div>
            <Modal lang={lang} />
            <NavBar
                lang={lang}
                handleLang={handleLang}
            />
            <Intro />
            <Desc lang={lang} />
            <Courses lang={lang} />
            <Techs lang={lang} />
            <Projects lang={lang} />
            <Contact lang={lang} />
        </div>
    );
}

export default App;
