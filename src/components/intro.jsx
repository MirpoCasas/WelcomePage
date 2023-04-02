import ilustration from "../icons/Coding.svg";
import "./intro.css"

function Intro() {
    return (<section id="Home" className="Intro pagePart">
    <h1 className="Intro-header">
        MARTIN CASAS <br />
        <span className='gradientText'>FRONT-END DEV.</span>
    </h1>
    <img className="Ilustration" src={ilustration} alt="coder art"></img>
    </section>
);
}

export default Intro

