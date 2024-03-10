"use client";

import { useState, useEffect } from "react";
import styles from "./loader.module.scss";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import esflag from "@/public/utils/esflag.svg";
import gbflag from "@/public/utils/gbflag.svg";
import Image from "next/image";
import { useLangContext } from "./langContext";
import { useOverflowContext } from "./overflowContext";

const bebas = Bebas_Neue({ subsets: ["latin-ext"], weight: ["400"] });

export default function Loader({}) {
  const [isOpen, setIsOpen] = useState(true);
  const [animationState, setAnimationState] = useState("visible");
  const { lang, setLang } = useLangContext();
  const { setOverflow } = useOverflowContext();


  function closeLoader(idiom : "es" | "en") {
    setLang(idiom);
    setAnimationState("hidden");
    setTimeout(() => {
      setIsOpen(false);
      setOverflow(false);
    }, 1300);
  }
  const spinnerVariants = {
    start: {
      opacity: 1,
    },
    outing: {
      opacity: 0,
      transition: {
        delay: 3,
        duration: 1,
      },
    },
  };

  const loaderItemVariants = {
    start: {
      opacity: 1,
    },
    outing: {
      opacity: 0,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
  };

  const loaderVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <motion.div
      className={styles.loader}
      animate={animationState}
      variants={loaderVariants}
      style={isOpen ? {} : { display: "none" }}
    >
      <div className={styles.loader_greet}>
        <div className={`${styles.greet} ${bebas.className}`}>
          <div className={styles.greetLang} onClick={() => closeLoader('en')}>
            <Image src={gbflag} alt="UK Flag"></Image>
            <p>Hi!</p>
          </div>
          /
          <div className={styles.greetLang} onClick={() => closeLoader('es')}>
            <Image src={esflag} alt="ES Flag"></Image>
            <p>Hola!</p>
          </div>
        </div>
      </div>
      <motion.div
        className={styles.loader_first}
        variants={spinnerVariants}
        initial="start"
        animate="outing"
      >
        <motion.div
          className={styles.lds_ellipsis}
          variants={loaderItemVariants}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
