

export default function Courses(props) {


  let titles = []

  props.language === "english"
    ? (titles = ['Estos son los cursos en los cuales trabaje', 'credencial','En curso'])
    : (titles = ['These are the courses I have worked on', "credential",'Ongoing']);

  return (
    <section id="Courses">
      <div>
        <h1>{titles[0]}</h1>
        <div className='CourseList'>
          <div className="CourseItem">
            <h2>FreeCodeCamp</h2>
            <ul>
              <li>Responsive Web Design - <a target="_blank" rel='noreferrer' href="https://www.freecodecamp.org/certification/Mirpo/responsive-web-design">{titles[1]}</a></li>
              <li>JavaScript Algorithms and Data Structures - <a target="_blank" rel='noreferrer' href="https://www.freecodecamp.org/certification/Mirpo/javascript-algorithms-and-data-structures">{titles[1]}</a></li>
              <li>Front End Development Libraries - <a target="_blank" rel='noreferrer' href="https://freecodecamp.org/certification/Mirpo/front-end-development-libraries">{titles[1]}</a></li>
              <li>Data Visualization - <a target="_blank" rel='noreferrer' href="https://freecodecamp.org/certification/Mirpo/data-visualization">{titles[1]}</a></li>
              <li>Python - {titles[2]}</li>
            </ul>
          </div>
          <div className="CourseItem">
            <h2>SoloLearn</h2>
            <ul>
              <li>Python Core - <a target="_blank" rel='noreferrer' href="https://www.sololearn.com/certificates/course/en/1628071/1073/landscape/png">{titles[1]} (png)</a></li>
              <li>React + Redux - <a target="_blank" rel='noreferrer' href="https://api2.sololearn.com/v2/certificates/CT-XDXCFD4L/image/png">{titles[1]} (png)</a></li>
            </ul>
          </div>
          <div className="CourseItem">
            <h2>Open BootCamp</h2>
            <ul>
              <li>HTML & CSS</li>
            </ul>
            <h2>Udacity</h2>
            <ul>
              <li>Version Control with Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
