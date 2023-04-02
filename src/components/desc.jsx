import mypic from "../icons/mypic.jpg";
import "./desc.css"

function Desc(props) {

    function showModal() {
        console.log("show modal");
        let modal = document.querySelector(".Modal");
        let body = document.querySelector("body");
        let ofuscator = document.querySelector(".Ofuscator");
        modal.style.display = "flex";
        ofuscator.style.display = "block";
        body.style.overflow = "hidden";
    }
    
    let text = ""
    let btn = ""

    if (props.lang === "English") {
        btn = "More Details"
        text = "I am an Argentinian web developer. Started studying programming on my own in early 2022 and currently taking part in Airont Labs’ bootcamp for Front End developers."
    } else {
        btn = "Mas detalles"
        text = "Soy un desarrollador web Argentino. Empece a estudiar programacion por mi cuenta a comienzos de 2022 y estoy actualmente tomando parte del bootcamp para Front End Devs de Airont Labs"
    }

    return (
        <section id='Desc' className="Desc pagePart">
            <img className="Pic" src={mypic} alt="Martin Casas"></img>
            <div className="Desc_part">
                <p>
                    {text}
                </p>
                <button onClick={showModal}>{btn}</button>
            </div>
        </section>
    );
}

export default Desc
