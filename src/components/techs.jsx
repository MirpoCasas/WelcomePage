import reduxpic from "../icons/redux.svg";
import tailpic from "../icons/tailwind.svg";
import atompic from "../icons/atom.png";
import bootstrappic from "../icons/bootstrap.png";
import csspic from "../icons/css-3.png";
import githubpic from "../icons/whitegithub.svg";
import htmlpic from "../icons/html-5.png";
import pythonpic from "../icons/python.png";
import sasspic from "../icons/sass.png";
import jspic from "../icons/js.png";
import tspic from "../icons/typescript.svg";
import bashpic from "../icons/bash.png";
import materialpic from "../icons/material-ui-1.svg";
import postgrepic from "../icons/postgresql.svg";
import figmapic from "../icons/figma.png";
import "./techs.css"
/* import blackgithub from "../icons/github.png"; */



function Techs(props) {

    let title = ""

    if (props.lang === "English") {
        title = "Techs"
    } else {
        title = "Tecnologias"
    }

    return(
    <section id='Techs' className="Techs pagePart">
            <h2 className="partTitle">{title}</h2>
        <div className="Techs_array">
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={jspic}></img>
                <p>JavaScript</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={tspic}></img>
                <p>Typescript</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={sasspic}></img>
                <p>SASS</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={pythonpic}
                ></img>
                <p>Python</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={htmlpic}></img>
                <p>HTML</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={githubpic}
                ></img>
                <p>Git/GitHub</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={csspic}></img>
                <p>CSS</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={bootstrappic}
                ></img>
                <p>Bootstrap</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={atompic}></img>
                <p>React</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={tailpic}></img>
                <p>Tailwind</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={reduxpic}
                ></img>
                <p>Redux</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={materialpic}
                ></img>
                <p>Material UI</p>
            </div>
            <div className="Techs_item">
                <img className="techpic" alt="tech" src={bashpic}></img>
                <p>Bash</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={postgrepic}
                ></img>
                <p>Postgre SQL</p>
            </div>
            <div className="Techs_item">
                <img
                    className="techpic"
                    alt="tech"
                    src={figmapic}
                ></img>
                <p>Figma</p>
            </div>
             
        </div>
    </section>
    )
}

export default Techs;