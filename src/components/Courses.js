

function Coruses(props) {
    

    if (props.lang === "English") {
    
        return (
            <section id='Courses' className="Courses pagePart">
                <h2 className="partTitle">Courses</h2>
                <div className="Courses_item">
                    <h3>FreeCodeCamp</h3>
                    <ul>
                        <li>
                            Responsive Web Design{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.freecodecamp.org/certification/Mirpo/responsive-web-design"
                            >
                                <button className="coursesLink">Credential</button>
                            </a>
                        </li>
                        <li>
                            JavaScript Algorithms and Data Structures{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.freecodecamp.org/certification/Mirpo/javascript-algorithms-and-data-structures"
                            >
                                <button className="coursesLink">Credential</button>
                            </a>
                        </li>
                        <li>
                            Front End Development Libraries{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://freecodecamp.org/certification/Mirpo/front-end-development-libraries"
                            >
                                <button className="coursesLink">Credential</button>
                            </a>
                        </li>
                        <li>
                            Data Visualization{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://freecodecamp.org/certification/Mirpo/data-visualization"
                            >
                                <button className="coursesLink">Credential</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>SoloLearn</h3>
                    <ul>
                        <li>
                            Python Core{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.sololearn.com/certificates/course/en/1628071/1073/landscape/png"
                            >
                                <button className="coursesLink">
                                    Credential(png Direct Download)
                                </button>
                            </a>
                        </li>
                        <li>
                            React + Redux{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://api2.sololearn.com/v2/certificates/CT-XDXCFD4L/image/png"
                            >
                                <button className="coursesLink">
                                    Credential(png Direct Download)
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>Udacity</h3>
                    <ul>
                        <li>Version Control with Git</li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>Airont Labs</h3>
                    <ul>
                        <li>Bootcamp for front-end devs. 14 weeks.</li>
                    </ul>
                </div>
            </section>
        )
    } else {
        return (
            <section id='Courses' className="Courses pagePart">
                <h2 className="partTitle">Cursos</h2>
                <div className="Courses_item">
                    <h3>FreeCodeCamp</h3>
                    <ul>
                        <li>
                            Diseño Web Adaptativo
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.freecodecamp.org/certification/Mirpo/responsive-web-design"
                            >
                                <button className="coursesLink">Credencial</button>
                            </a>
                        </li>
                        <li>
                        Algoritmos de JavaScript y Estructuras de Datos
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.freecodecamp.org/certification/Mirpo/javascript-algorithms-and-data-structures"
                            >
                                <button className="coursesLink">Credencial</button>
                            </a>
                        </li>
                        <li>
                        Librerías de desarrollo de la interfaz
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://freecodecamp.org/certification/Mirpo/front-end-development-libraries"
                            >
                                <button className="coursesLink">Credencial</button>
                            </a>
                        </li>
                        <li>
                        Visualización de Datos
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://freecodecamp.org/certification/Mirpo/data-visualization"
                            >
                                <button className="coursesLink">Credencial</button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>SoloLearn</h3>
                    <ul>
                        <li>
                            Python Core{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.sololearn.com/certificates/course/en/1628071/1073/landscape/png"
                            >
                                <button className="coursesLink">
                                    Credencial (png Direct Download)
                                </button>
                            </a>
                        </li>
                        <li>
                            React + Redux{" "}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://api2.sololearn.com/v2/certificates/CT-XDXCFD4L/image/png"
                            >
                                <button className="coursesLink">
                                    Credencial (png Direct Download)
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>Udacity</h3>
                    <ul>
                        <li>Control de Versiones con Git</li>
                    </ul>
                </div>
                <div className="Courses_item">
                    <h3>Airont Labs</h3>
                    <ul>
                        <li>Bootcamp para front-end devs. 14 semanas.</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Coruses