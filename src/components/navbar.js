import hammenu from "../icons/hamburger.svg";
import spanishflag from "../icons/spanish.png";
import englishflag from "../icons/english.svg";



function NavBar(props) {

    function handleMenu() {
        let dropdown = document.querySelector(".Dropdown")
        console.log("menu");

        dropdown.classList.toggle("hidden")
    }

    return (
        <nav className="NavBar st">
            <button onClick={props.handleLang}>
                <p className="langChangeText">{props.lang === "English" ? "Cambiar a ES" : "Switch to EN"}</p>
                <img
                    className="langFlag"
                    alt="flag"
                    src={props.lang === "English" ? spanishflag : englishflag}
                ></img>
            </button>
            <img className="menuImg" alt="menu" src={hammenu} onClick={handleMenu}></img>
            <div className="Dropdown hidden st">
                <a href="#Home">Home</a>
                <a href="#Desc">{props.lang === "English" ? "Myself" : "Yo"}</a>
                <a href="#Courses">{props.lang === "English" ? "Courses" : "Cursos"}</a>
                <a href="#Techs">{props.lang === "English" ? "Techs" : "Tecnologias"}</a>
                <a href="#Proyects">{props.lang === "English" ? "Proyects" : "Projectos"}</a>
                <a href="#Contact">{props.lang === "English" ? "Contect" : "Contacto"}</a>
            </div>
        </nav>
    );
}

export default NavBar;
