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
                {props.lang === "English" ? "Cambiar a ES" : "Switch to EN"}
                <img
                    className="langFlag"
                    alt="flag"
                    src={props.lang === "English" ? spanishflag : englishflag}
                ></img>
            </button>
            <img className="menuImg" alt="menu" src={hammenu} onClick={handleMenu}></img>
            <div className="Dropdown hidden st">
                <a href="#Home">Home</a>
                <a href="#Desc">{props.lang === "English" ? "Yo" : "Myself"}</a>
                <a href="#Courses">{props.lang === "English" ? "Cursos" : "Courses"}</a>
                <a href="#Techs">{props.lang === "English" ? "Tecnologias" : "Techs"}</a>
                <a href="#Proyects">{props.lang === "English" ? "Projectos" : "Proyects"}</a>
                <a href="#Contact">{props.lang === "English" ? "Cotacto" : "Contact"}</a>
            </div>
        </nav>
    );
}

export default NavBar;
