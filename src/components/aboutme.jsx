/* eslint-disable react/no-unescaped-entities */
import codeAcSVG from "../assets/codeacademy.svg";
import myPic from "../assets/mypic.jpg";
import newTab from "../assets/newtab.svg";
import eflogo from "../assets/eflogo.svg";
import udemy from "../assets/udemy.svg";
import nocountry from "../assets/nocountry.svg";
import sololearn from "../assets/sololearn.svg";
import bash from "../assets/bash.svg";
import blender from "../assets/blender.svg";
import css from "../assets/css.svg";
import d3 from "../assets/d3.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html5.svg";
import jspic from "../assets/javascritp.svg";
import materialui from "../assets/materialui.svg";
import postgre from "../assets/postgresql.svg";
import pyth from "../assets/python.svg";
import reactPic from "../assets/react.svg";
import reduxPic from "../assets/redux.svg";
import sass from "../assets/sass.svg";
import tailwind from "../assets/tailwind.svg";
import tspic from "../assets/typescrypt.svg";
import nextjs from "../assets/nextjs.svg";
import framermotion from "../assets/framer.svg";
import threejspic from "../assets/threejsicon.svg";
import usaflag from "../assets/usflag.svg";
import brazilflag from "../assets/brazilflag.svg";
import franceflag from "../assets/franceflag.svg";
import spainflag from "../assets/spainflag.svg";
import certified from "../assets/certified.svg";
import theshine from "../assets/theshine.jpg";
import thelight from "../assets/thelight.png";
import mrrobot from "../assets/mrrobot.jpg";
import drive from "../assets/drive.svg";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import amelens from "../assets/amelielens.jpg";
import kendrick from "../assets/kendrick.jpg";
import linkingpark from "../assets/linkinpark.jpg";

AboutMe.propTypes = {
  content: PropTypes.object.isRequired,
};

function AboutMe(props) {
  let techArr = [
    {
      name: "JavaScript",
      pic: jspic,
    },
    {
      name: "SASS",
      pic: sass,
    },
    {
      name: "CSS",
      pic: css,
    },
    {
      name: "HTML",
      pic: html,
    },
    {
      name: "TypreScript",
      pic: tspic,
    },
    {
      name: "Next JS",
      pic: nextjs,
    },
    {
      name: "React",
      pic: reactPic,
    },
    {
      name: "Redux",
      pic: reduxPic,
    },
    {
      name: "Framer",
      pic: framermotion,
    },
    {
      name: "D3",
      pic: d3,
    },
    {
      name: "Git",
      pic: git,
    },
    {
      name: "Github",
      pic: github,
    },
    {
      name: "Material UI",
      pic: materialui,
    },
    {
      name: "PostgreSQL",
      pic: postgre,
    },
    {
      name: "Python",
      pic: pyth,
    },
    {
      name: "Tailwind",
      pic: tailwind,
    },
    {
      name: "Three JS",
      pic: threejspic,
    },
    {
      name: "Blender",
      pic: blender,
    },
    {
      name: "Bash",
      pic: bash,
    },
  ];

  const langVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const techVariants = {
    start: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const langItemVariants = {
    start: {
      opacity: 0,
      x: -20,
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const variantsMovies = {
    start: (custom) => ({
      x: custom,
    }),
    hovered: (custom) => ({
      x: custom * 3,
      rotate: custom * 0.2,
      transition: {
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="AboutMe">
      <div className="maininfo">
        <motion.div
          className="imgHolder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <img src={myPic} alt="" className="myPic" />
          <a
            href="https://docs.google.com/document/d/15Yh0JehLV1lT_BOYHknOFt2_RHZbrShW/edit?usp=sharing&ouid=118097342686006691495&rtpof=true&sd=true"
            style={{ textDecoration: "none" }}
            target="_blank" rel="noreferrer" 
          >
            <button>
              CV en drive <img src={drive} alt="drive photo" />
            </button>
          </a>
        </motion.div>
        <div className="mainInfo_body">
          <h2>Martin Casas</h2>
          <h3 className="subtitle">{props.content.titleone}</h3>
          <p>{props.content.intro}</p>
        </div>
      </div>
      <div className="langs">
        <h3 className="subtitle">{props.content.titletwo}</h3>
        <motion.div
          className="langs_cont"
          initial="start"
          whileInView="end"
          variants={langVariants}
          viewport={{ once: true }}
        >
          <motion.div className="langs_item" variants={langItemVariants}>
            <img className="langs_flag" src={usaflag} alt="" />
            <p className="langs_name">{props.content.langone}</p>
            <p className="langs_q">{props.content.native}</p>
          </motion.div>
          <motion.div className="langs_item" variants={langItemVariants}>
            <img className="langs_flag" src={spainflag} alt="" />
            <p className="langs_name">{props.content.langtwo}</p>
            <p className="langs_q">{props.content.native}</p>
          </motion.div>
          <motion.div className="langs_item" variants={langItemVariants}>
            <img className="langs_flag" src={franceflag} alt="" />
            <p className="langs_name">{props.content.langthree}</p>
            <p className="langs_q">{props.content.basic}</p>
          </motion.div>
          <motion.div className="langs_item" variants={langItemVariants}>
            <img className="langs_flag" src={brazilflag} alt="" />
            <p className="langs_name">{props.content.langfour}</p>
            <p className="langs_q">{props.content.basic}</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="formation">
        <h3 className="subtitle">{props.content.titlethree}</h3>
        <h4>{props.content.studyone}</h4>
        <p>{props.content.studyonedesc}</p>
        <h3 className="subtitle">{props.content.titlefour}</h3>
        <h4>No Country:</h4>
        <p>{props.content.expone}</p>
      </div>
      <h3 className="subtitle">{props.content.titlefive}</h3>
      <div className="courses">
        <div className="courses_div">
          <div className="courses_item">
            <img src={codeAcSVG} alt="Code Academy" id="codeacademy" />
            <a
              href="https://www.freecodecamp.org/certification/Mirpo/responsive-web-design"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              <p>
                Responsive Web Design{" "}
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
            <a
              href="https://www.freecodecamp.org/certification/Mirpo/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              <p>
                JavaScript Algorithms and Data Structures
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
            <a
              href="https://www.freecodecamp.org/certification/Mirpo/front-end-development-libraries"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              <p>
                Front End development libraries
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
            <a
              href="https://www.freecodecamp.org/certification/Mirpo/data-visualization"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              <p>
                Data Visualization
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
          </div>
          <div className="courses_item">
            <img src={sololearn} alt="" />
            <a
              href="https://www.sololearn.com/Certificate/CT-DSTO49E4/png"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              {" "}
              <p>
                Python Core{" "}
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
            <a
              href="https://api2.sololearn.com/v2/certificates/CT-XDXCFD4L/image/png"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              {" "}
              <p>
                React + Redux{" "}
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
          </div>
        </div>
        <div className="courses_div">
          <div className="courses_item">
            <img src={udemy} alt="Udemy" />
            <p>Version Control with Git</p>
          </div>
          <div className="courses_item">
            <img src={eflogo} alt="Education First" />
            <a
              href="https://www.efset.org/cert/HyUovd"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              {" "}
              <p>
                C2 SET Certificate
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
          </div>
          <div className="courses_item">
            <img src={nocountry} alt="No Country" />
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noreferrer"
              className="courses_course"
            >
              <p>
                {props.content.nocountry}{" "}
                <img src={newTab} alt="new tab" className="newTab" />
              </p>
            </a>
          </div>
        </div>
      </div>
      <h3 className="subtitle">{props.content.titlesix}</h3>
      <div className="Techs">
        <motion.div
          className="Techs_holder"
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          variants={techVariants}
        >
          {techArr.map((element) => {
            return (
              <motion.div
                key={element.index}
                className="Techs_item"
                variants={langItemVariants}
              >
                <img
                  src={element.pic}
                  alt={element.name}
                  className="Techs_pic"
                />
                <p>{element.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="Skills">
        <h3 className="subtitle">Soft Skills:</h3>
        <div className="Skills_item">
          <h4>{props.content.skillone}</h4>
          <p>{props.content.skillonedesc}</p>
        </div>
        <div className="Skills_item">
          <h4>{props.content.skilltwo}</h4>
          <p>{props.content.skilltwodesc}</p>
        </div>
        <div className="Skills_item">
          <h4>{props.content.skillthree}</h4>
          <p>{props.content.skillthreedesc}</p>
        </div>
        <div className="Skills_item">
          <h4>{props.content.gyftedtitle}</h4>
          <p className="gyfted">{props.content.gyfted}</p>
        </div>
        <div className="certification">
          <p className="certificationText">{props.content.gyfteddesc}</p>
          <img
            src={certified}
            alt="Gyfted.me Certification Badge"
            className="Gcert"
          />
          <a href="https://docs.google.com/document/d/1quQv8NEghs7t-fLwgtsqvk-rgeFXbNYRIR0a1qMdyI8/edit?usp=sharing" target="_blank" rel="noreferrer" >
            <button>{props.content.gyftedbutton}</button>
          </a>
        </div>
      </div>
      <div className="interests" style={{ display: "none" }}>
        <h3>Personal Interests</h3>
        <p>
          I enjoy playing the guitar, excercising, and learning new things. I am
          also a big fan of video games and movies.
        </p>
        <div className="interests_holder">
          <div className="moviesHolder">
            <h4>Cinema!</h4>
            <p>I enjoy movies that explore the posibilities of the medium!</p>

            <motion.div initial="start" whileHover="hovered" className="movies">
              <motion.img
                src={mrrobot}
                alt="Mr Robot"
                className="movie"
                variants={variantsMovies}
                custom={75}
              />
              <motion.img
                src={theshine}
                alt="Mr Robot"
                className="movie"
                variants={variantsMovies}
                custom={-75}
              />
              <motion.img
                src={thelight}
                alt="Mr Robot"
                className="movie"
                variants={variantsMovies}
                custom={0}
              />
            </motion.div>
          </div>
          <div className="musicHolder">
            <h4>Music</h4>
            <motion.div className="musics" initial="start" whileHover="hovered">
              <motion.img
                className="musicDisk"
                src={kendrick}
                alt="Music"
                variants={variantsMovies}
                custom={-75}
              ></motion.img>
              <motion.img
                className="musicDisk"
                src={amelens}
                alt="Music"
                variants={variantsMovies}
                custom={75}
              ></motion.img>
              <motion.img
                className="musicDisk"
                src={linkingpark}
                alt="Music"
                variants={variantsMovies}
                custom={0}
              ></motion.img>
            </motion.div>
          </div>
          <div className="gamesHolder">
            <h4>Gaming</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
