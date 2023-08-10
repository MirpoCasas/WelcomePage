import movieFin from "../assets/movifindermockup.png";
import proyectImg from "../assets/proyects.svg";
import placeholder from "../assets/tocome.svg";
import { useState, useRef } from "react";
import navArrow from "../assets/navarrow.svg";
import PropTypes from "prop-types";
import betterImg from "../assets/better-img.png";
import { motion } from "framer-motion";

export default function Proyects(props) {
  Proyects.propTypes = {
    content: PropTypes.object.isRequired,
  };

  let info = [
    {
      name: "movieFin",
      img: movieFin,
      desc: props.content.movieFin,
      link: "https://moviefinder-mc.vercel.app",
      repolink: "https://github.com/MirpoCasas/Airont-Labs-Project-One",
    },
    {
      name: "betterImg",
      img: betterImg,
      desc: props.content.better,
      link: "https://betterdesigns.netlify.app",
      repolink: "https://github.com/MirpoCasas/BetterDesigns",
    },
    {
      name: "placeholder",
      img: placeholder,
      desc: props.content.todo,
    }
  ];

  const [buttonIndex, setButtonIndex] = useState(0);


  const variantsPic = {
    start: {
      y: -100,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };


  /* function to increment buttonIndex up to 5*/
  function incrementButtonIndex() {
    if (buttonIndex < 2) {
      setButtonIndex(buttonIndex + 1);
    } else {
      return
    }
  }

  /* function to decrement buttonIndex down to 0*/
  function decrementButtonIndex() {
    if (buttonIndex > 0) {
      setButtonIndex(buttonIndex - 1);
    } else {
      return
    }
  }

  function handleAnimation() {
    switch (buttonIndex) {
      case 0:
        return {
          x: 0
        }
      case 1:
        return {
          x: 'calc(20vw - 455px)'
        }
      case 2:
        return {
          x: 'calc(20vw - 565px)'
        }
      default:
        break;
    }
  }

  const [preview, setPreview] = useState(info[0])



  return (
    <div className="proyects">
      <div className="proyects_first">
        <motion.img
          className=""
          src={proyectImg}
          alt=""
          variants={variantsPic}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
        />
        <p>{props.content.intro}</p>
      </div>
      <div className="newProyectApp">
        <div className="viewer">
          <h3>{preview.name}</h3>
          <img src={preview.img} alt="" />
          <p>{preview.desc}</p>
        </div>
        <div className="sidebar">
          <button className="Next Button" onClick={decrementButtonIndex}>
            <img src={navArrow} alt="" />
          </button>
          <div className="SidebarViewport">
            <motion.div className="proyectButtons" animate={handleAnimation}>
              {info.map((item, index) => {
                return (
                  <div
                    className="proyectButton"
                    key={index}
                    onClick={() => setPreview(item)}
                  >
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
          <button className="Prev Button" onClick={incrementButtonIndex}>
            <img src={navArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
