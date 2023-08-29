import movieFin from "../assets/movifindermockup.png";
import proyectImg from "../assets/proyects.svg";
import placeholder from "../assets/tocome.svg";
import { useState, useEffect } from "react";
import navArrow from "../assets/navarrow.svg";
import PropTypes from "prop-types";
import styles from "../assets/styles/proyects.module.scss";
import managymPic from "../assets/managym_ss.png";
import carsalePic from "../assets/carsale_ss.png";
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
      name: "AUTOSUSADOS",
      img: carsalePic,
      desc: props.content.carsale,
      repolink: "https://github.com/MirpoCasas/BetterDesigns",
    },
    {
      name: "ManaGym",
      img: managymPic,
      desc: props.content.managym,
      link: "https://betterdesigns.netlify.app",
      repolink: "https://github.com/MirpoCasas/BetterDesigns",
    },
    {
      name: "placeholder",
      img: placeholder,
      desc: props.content.todo,
    },
  ];

  const [buttonIndex, setButtonIndex] = useState(0);
  const [buttonWidth, setButtonWidht] = useState(300);
  const [buttonport, setButtonport] = useState('40vw');

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

  const handleResize = () => {
    console.log("resize");
    if (window.innerWidth < 801) {
      setButtonWidht(156);
      setButtonport('70vw');
    } else {
      setButtonWidht(300);
      setButtonport('40vw');
    }
  };

  useEffect(() => {
    handleResize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  /* function to increment buttonIndex up to 5*/
  function incrementButtonIndex() {
    if (buttonIndex < 4) {
      setButtonIndex(buttonIndex + 1);
    } else {
      return;
    }
  }

  /* function to decrement buttonIndex down to 0*/
  function decrementButtonIndex() {
    if (buttonIndex > 0) {
      setButtonIndex(buttonIndex - 1);
    } else {
      return;
    }
  }

  
  function handleAnimation() {
    const gaplenth = 16;
    let firstoffset = buttonWidth * 0.5 + buttonWidth + gaplenth;
    let subsequentoffset = buttonWidth + gaplenth;
    switch (buttonIndex) {
      case 0:
        return {
          x: 0,
        };
      case 1:
        return {
          x: `calc(${buttonport+'*.5'} - ${firstoffset}px)`,
        };
      case 2:
        return {
          x: `calc(${buttonport+'*.5'} - ${firstoffset + subsequentoffset}px)`,
        };
      case 3:
        return {
          x: `calc(${buttonport+'*.5'} - ${firstoffset + subsequentoffset * 2}px)`,
        };
      case 4:
        return {
          x: `calc(${buttonport+'*.5'} - ${firstoffset + subsequentoffset * 3 - buttonWidth*.6 }px)`,
        };
      default:
        break;
    }
  }

  const [preview, setPreview] = useState(info[0]);

  return (
    <div className={styles.proyects}>
      <div className={styles.proyects_first}>
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
      <div className={styles.newProyectApp}>
        <div className={styles.viewer}>
          <h3>{preview.name}</h3>
          <img src={preview.img} alt="" />
          <p>{preview.desc}</p>
          <div className={styles.viewer_buttonHolder}>
            {preview.link && <button href=''>View website deployed</button>}
            {preview.repolink && <button href=''>View code on Github</button>}
          </div>
        </div>
        <div className={styles.sidebar}>
          <button
            className={`${styles.Next} ${styles.Button}`}
            onClick={decrementButtonIndex}
          >
            <img src={navArrow} alt="" />
          </button>
          <div className={styles.SidebarViewport}>
            <motion.div
              className={styles.proyectButtons}
              animate={handleAnimation}
            >
              {info.map((item, index) => {
                return (
                  <div
                    className={styles.proyectButton}
                    key={index}
                    onClick={() => setPreview(item)}
                  >
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
          <button
            className={`${styles.Prev} ${styles.Button}`}
            onClick={incrementButtonIndex}
          >
            <img src={navArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
