import usflag from '../icons/twitter_us.png'
import arflag from '../icons/twitter_ar.png'
import brflag from '../icons/twitter_br.png'
import spaflag from '../icons/twitter_spa.png'
import frflag from '../icons/twitter_france.png'
import crossSvg from "../icons/cross.svg";

function Modal(props) {
    
    function closeModal() {
        let modal = document.querySelector(".Modal");
        let body = document.querySelector("body");
        let ofuscator = document.querySelector(".Ofuscator");
        ofuscator.style.display = "none";
        modal.style.display = "none";
        body.style.overflow = "auto";
    }


    if (props.lang === "English") {
        
    

        return (
            <div className="Modal">
                <img
                    onClick={closeModal}
                    src={crossSvg}
                    alt="close modal"
                    className="Modal-closer"
                ></img>
                <ul>
                    <li>
                        Bilingual:{" "}
                        <ul>
                            <li>
                                Spanish{" "}
                                <img
                                    className="flagEmoji"
                                    alt="spanish flag"
                                    src={spaflag}
                                ></img>
                            </li>
                            <li>
                                English{" "}
                                <img
                                    className="flagEmoji"
                                    alt="usa flag"
                                    src={usflag}
                                ></img>
                            </li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        Also a student of:
                        <ul>
                            <li>Mechanical Engineering 🔧</li>
                            <li>English Translation 💬</li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        Also basic speaker of:
                        <ul>
                            <li>
                                French{" "}
                                <img
                                    className="flagEmoji"
                                    alt="france flag"
                                    src={frflag}
                                ></img>
                            </li>
                            <li>
                                Portuguese{" "}
                                <img
                                    className="flagEmoji"
                                    alt="brazil flag"
                                    src={brflag}
                                ></img>
                            </li>
                        </ul>
                    </li>
                    <hr></hr>
                    <li>
                        Located in Cordoba, Argentina{" "}
                        <img className="flagEmoji" alt="argenitna flag" src={arflag}></img>
                    </li>
                </ul>
                <p>
                    I wish to study and hone my craft as a developer 💻 as I find the job of
                    solving the puzzles it creates fascinating ✨. I hope to someday become
                    multilingual and disiplined in the multiple areas I am studying 🤓 so as
                    to combine them in different projects 🌎. The posibility of working
                    abroad from home is very aluring 👷🏼‍♂️, but to be honest, the chance to
                    work with my cat 😺 arround is the cherry on top 💞 .
                </p>
            </div>
        )
    } else {
        return (
            <div className="Modal">
            <img
                onClick={closeModal}
                src={crossSvg}
                alt="close modal"
                className="Modal-closer"
            ></img>
            <ul>
                <li>
                    Bilingue:{" "}
                    <ul>
                        <li>
                            Español{" "}
                            <img
                                className="flagEmoji"
                                alt="spanish flag"
                                src={spaflag}
                            ></img>
                        </li>
                        <li>
                            Ingles{" "}
                            <img
                                className="flagEmoji"
                                alt="usa flag"
                                src={usflag}
                            ></img>
                        </li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    Estudiante de:
                    <ul>
                        <li>Ingenieria Mecanica 🔧</li>
                        <li>Traductorado de Ingles 💬</li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    Tambien hablante basico de:
                    <ul>
                        <li>
                            Frances{" "}
                            <img
                                className="flagEmoji"
                                alt="france flag"
                                src={frflag}
                            ></img>
                        </li>
                        <li>
                            Portugués{" "}
                            <img
                                className="flagEmoji"
                                alt="brazil flag"
                                src={brflag}
                            ></img>
                        </li>
                    </ul>
                </li>
                <hr></hr>
                <li>
                    Ubicado en Cordoba, Argentina{" "}
                    <img className="flagEmoji" alt="argenitna flag" src={arflag}></img>
                </li>
            </ul>
            <p>
                Me gustaria mejorar y seguir estudiando como programador 💻 ya que resolver
                los problemas que plantea fascinante✨. Espero algun dia ser poliglota y ademas
                disciplinado en las areas que estudio 🤓 asi poder combinarlas en distintos projectos 🌎.
                La posibilidad de trabajar para el exterior o desde casa 👷🏼‍♂️ es llamativa, pero honestamente
                lo que mas me llama es la posibilidad de trabajar con mi gata alrededor 😺 💞 .
            </p>
        </div>
        )
    }
};

export default Modal;