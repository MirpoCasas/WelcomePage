import drivepic from "../icons/drive.png";

function Contact(props) {
    
    if (props.lang === "English") {
        return (
            <section id='Contact' className="Contact pagePart">
                <h2 className="partTitle">Contact</h2>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/martincasas23/"
                >
                    LinkedIn
                </a>
                <br></br>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MirpoCasas"
                >
                    Github
                </a>
                <p>Email: mirpocasas@gmail.com</p>
                <p>Cel: +54 9 3513041288</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1XUWWGZkOJgRBW7pQRc5TIX5Zmptqa83J/view?usp=share_link"
                >
                    <button className="cvButton">
                        See CV on Drive
                        <img
                            alt="drive logo"
                            className="buttonImg"
                            src={drivepic}
                        ></img>
                    </button>
                </a>
            </section>
        );
    } else {
        return (
            <section id='Contact' className="Contact pagePart">
                <h2 className="partTitle">Contacto</h2>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/martincasas23/"
                >
                    LinkedIn
                </a>
                <br></br>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/MirpoCasas"
                >
                    Github
                </a>
                <p>Email: mirpocasas@gmail.com</p>
                <p>Cel: +54 9 3513041288</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://drive.google.com/file/d/1XUWWGZkOJgRBW7pQRc5TIX5Zmptqa83J/view?usp=share_link"
                >
                    <button className="cvButton btn">
                        Ver CV en Drive
                        <img
                            alt="drive logo"
                            className="buttonImg"
                            src={drivepic}
                        ></img>
                    </button>
                </a>
            </section>
        );
    }
}

export default Contact;
