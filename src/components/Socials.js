import socialModel from './icons/Social Communication.svg';

export default function Socials(props) {
  
  let titles = []

  props.language === "english"
  ? (titles = ['Estos son mis medios de contacto', 'Mi correo', 'Tel','Estoy abierto a ofertas laborales!'])
  : (titles = ['These are my socials', "My email", 'Phone', "I'm open to job offers!"]);

  return (
    <section id="socials" className='socials'>
      <h2>{titles[0]}</h2>
      <div className='socialCont'>
        <div className='socialLinks'>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martincasas23/">LinkedIn</a>
          <br></br>
          <a target="_blank" rel="noreferrer" href="https://github.com/MirpoCasas">Github</a>
          <p>{titles[1]}: mirpocasas@gmail.com</p>
          <p>{titles[2]}: +54 9 351 3041288</p>
          <p>{titles[3]}</p>

        </div>
        <img alt='socialModel' src={socialModel} />
      </div>
    </section>
  );
}
