import socialModel from './icons/Social Communication.svg';

export default function Socials() {
  return (
    <section id="socials" className='socials'>
      <h2>These are my Socials</h2>
      <div className='socialCont'>
        <div className='socialLinks'>
          <a href="https://www.linkedin.com/in/martincasas23/">LinkedIn</a>
          <br></br>
          <a href="https://github.com/MirpoCasas">Github</a>
          <p>My email: mirpocasas@gmail.com</p>
          <p>Phone: +54 9 351 3041288</p>
          <p>I'm open to job offers!</p>

        </div>
        <img alt='socialModel' src={socialModel} />
      </div>
    </section>
  );
}
