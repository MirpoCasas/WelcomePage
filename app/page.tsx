"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import selfie from "../public/mypic.png";
import { Bebas_Neue, Azeret_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import Modal from "./assets/modal";
import Loader from "./assets/loader";
import { motion } from "framer-motion";
import navarrow from "../public/navarrow.svg";
import catgif from "@/public/coding.gif";
import byecat from "@/public/byecat.gif";
import moviefin_ss from "@/public/moviefin_ss.png";
import better_ss from "@/public/better_ss.png";
import managym_ss from "@/public/managym_ss.png";
import catonpc from "@/public/catonpc.gif";
import javascriptpic from "@/public/techs/javascript-svgrepo-com.svg";
import typescriptpic from "@/public/techs/typescript-svgrepo-com.svg";
import sasspic from "@/public/techs/sass-svgrepo-com.svg";
import reactpic from "@/public/techs/react-svgrepo-com.svg";
import nextjspic from "@/public/techs/next-js-svgrepo-com.svg";
import translate from "@/public/translate.svg";
import pagecontent from "@/public/pagecontent.json";
import darkTheme from "@/public/darkTheme.svg";
import { useLangContext } from "./assets/langContext";
import { useOverflowContext } from "./assets/overflowContext";

const bebas = Bebas_Neue({ subsets: ["latin-ext"], weight: ["400"] });
const azert = Azeret_Mono({ subsets: ["latin-ext"], weight: ["400", "300"] });

type ExperiencesItemProps = {
  title: string;
  desc: string;
  variants: {
    open: {
      maxHeight: string;
    };
    closed: {
      maxHeight: string;
    };
  };
};

type PortfolioItemProps = {
  title: string;
  desc: string;
  srccode?: string;
  deploy?: string;
  img: {
    src: string;
  };
  techs: string[];
};

function ExperiencesItem(props: ExperiencesItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className={styles.Experiences_item} animate={isOpen ? "open" : "closed"} variants={props.variants}>
      <div className={styles.Experiences_title} onClick={() => setIsOpen(!isOpen)}>
        <h3>{props.title}</h3>
        <motion.div animate={isOpen ? { rotate: "180deg" } : { rotate: "0deg" }}>
          <Image src={navarrow} alt="nav arrow"></Image>
        </motion.div>
      </div>
      <p>{props.desc}</p>
    </motion.div>
  );
}

function PortfolioItem(props: PortfolioItemProps) {
  return (
    <div className={styles.Portfolio_item} style={{ backgroundImage: `url(${props.img.src})` }}>
      <div className={styles.Portfolio_gradient}>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className={styles.Portfolio_bottom}>
          <div className={styles.TechImgs}>
            {props.techs.includes("javascript") && <Image className={styles.TechImg} src={javascriptpic} alt="JavaScript"></Image>}
            {props.techs.includes("typescript") && <Image className={styles.TechImg} src={typescriptpic} alt="Typescript"></Image>}
            {props.techs.includes("next") && <Image className={styles.TechImg} src={nextjspic} alt="Next JS"></Image>}
            {props.techs.includes("react") && <Image className={styles.TechImg} src={reactpic} alt="react"></Image>}
            {props.techs.includes("sass") && <Image className={styles.TechImg} src={sasspic} alt="Sass"></Image>}
          </div>
          {props.srccode && (
            <a target="_blank" rel="noopener noreferrer" href={props.srccode}>
              <button className={styles.Btn_portfolio}>Repo</button>
            </a>
          )}
          {props.deploy && (
            <a target="_blank" rel="noopener noreferrer" href={props.deploy}>
              <button className={styles.Btn_portfolio}>Deploy</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const carrouselleVariantsMob = {
    "1": {
      x: 0,
    },
    "2": {
      x: -340,
    },
    "3": {
      x: -680,
    },
  };
  const carrouselleVariantsTab = {
    "1": {
      x: 0,
    },
    "2": {
      x: -850,
    },
    "3": {
      x: -1700,
    },
  };
  const carrouselleVariantsDesk = {
    "1": {
      x: 60,
    },
    "2": {
      x: -990,
    },
    "3": {
      x: -2040,
    },
  };

  const variantsItemMob = {
    open: {
      maxHeight: "580px",
    },
    closed: {
      maxHeight: "50px",
    },
  };
  const variantsItemTab = {
    open: {
      maxHeight: "530px",
    },
    closed: {
      maxHeight: "60px",
    },
  };
  const variantsItemDesk = {
    open: {
      maxHeight: "500px",
    },
    closed: {
      maxHeight: "70px",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [carrouselleIndex, setCarrouselleIndex] = useState(1);
  const [carrouselleVariants, setCarrouselleVariants] = useState(carrouselleVariantsMob);
  const [variantsItem, setVariantsItem] = useState(variantsItemMob);
  const [dimmensions, setDimmensions] = useState([2000, 930]);
  const [pageContent, setPageContent] = useState(pagecontent.es);
  const { lang, setLang } = useLangContext();
  const { overflow, setOverflow } = useOverflowContext();
  const [loading, setLoading] = useState(false);

  const handleClickLang = () => {
    setLoading(true);
    setLang(lang === "en" ? "es" : "en");
    setTimeout(() => setLoading(false), 500); // hide after 0.5 seconds
  };
  const handleClickTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  function upIndex() {
    if (carrouselleIndex === 3) {
      return;
    }
    setCarrouselleIndex(carrouselleIndex + 1);
  }

  function downIndex() {
    if (carrouselleIndex === 1) {
      return;
    }
    setCarrouselleIndex(carrouselleIndex - 1);
  }

  function handleResize() {
    console.log("resize");

    setDimmensions([window.innerWidth, window.innerHeight]);
    if (window.innerWidth > 1500) {
      setCarrouselleVariants(carrouselleVariantsDesk);
      setVariantsItem(variantsItemDesk);
    } else if (window.innerWidth > 900) {
      setCarrouselleVariants(carrouselleVariantsTab);
      setVariantsItem(variantsItemTab);
    } else {
      setCarrouselleVariants(carrouselleVariantsMob);
      setVariantsItem(variantsItemMob);
    }
  }

  // rezise use effect
  useEffect(() => {
    handleResize();
    if (typeof window !== "undefined") {
      setDimmensions([window.innerWidth, window.innerHeight]);
      window.addEventListener("resize", handleResize);
    }

    // Scroll to top on load
    window.onload = function () {
      window.scrollTo(0, 0);
    };

    // Scroll to top on refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // overflow use effect
  useEffect(() => {
    if (isOpen) {
      setOverflow(true);
    }
  }, [isOpen, setOverflow]);

  // Languague use effect
  useEffect(() => {
    if (lang === "en") {
      setPageContent(pagecontent.en);
    } else if (lang === "es") {
      setPageContent(pagecontent.es);
    }
  }, [lang]);

  function closingModal() {
    setIsOpen(false);
    setOverflow(false);
  }

  useEffect(() => {
    const selectedTheme: string | null = localStorage.getItem("theme");
    if (selectedTheme) {
      document.documentElement.setAttribute("data-theme", selectedTheme);
    }
  }, []);

  return (
    <main className={`${styles.main} ${azert.className}`}>
      <div className={styles.translatebutton}>
        <button>
          <Image src={translate} alt="Change Language" onClick={handleClickLang}></Image>
        </button>
        <button>
          <Image src={darkTheme} alt="Theme Switch" onClick={handleClickTheme}></Image>
        </button>
        {loading && <div className={styles.spinner}></div>}
      </div>
      <div className={styles.Header}>
        <div className={styles.Header_name}>
          <h2 className={bebas.className}>WEB</h2>
          <p className={azert.className}>Martin Casas</p>
          <h2 className={bebas.className}>Dev</h2>
        </div>
        <Image src={selfie} alt="my selfie"></Image>
      </div>
      <p className={`${styles.rightToLeft} ${bebas.className}`}>
        {" "}
        || OPEN TO: FULLSTACK - FRONT END - BACKEND || OPEN TO: FULLSTACK - FRONT END - BACKEND || OPEN TO: FULLSTACK - FRONT END - BACKEND || OPEN TO: FULLSTACK - FRONT END - BACKEND || OPEN TO:
        FULLSTACK - FRONT END - BACKEND || OPEN TO: FULLSTACK - FRONT END - BACKEND
      </p>
      <div className={styles.Preface}>
        <h2>{pageContent.Preface.Title}</h2>
        <div className={styles.Preface_content}>
          <p className={styles.Preface_text}>{pageContent.Preface.Content}</p>
          <div className={styles.Preface_cat}>
            <Image src={catgif} alt="coding cat"></Image>
          </div>
        </div>
        <button className={`${azert.className} ${styles.Btn}`} onClick={() => setIsOpen(true)}>
          {pageContent.Preface.Button}
        </button>
      </div>
      <div className={styles.Portfolio}>
        <h2>Portfolio:</h2>
        <p>{pageContent.Portfolio.Desc}</p>
        <p style={{ fontSize: ".5em" }}>{`${carrouselleIndex} / 3`}</p>
        <div className={styles.Portfolio_carrouselle}>
          <div className={styles.Portfolio_nav}>
            <Image src={navarrow} alt="nav arrow" style={{ rotate: "90deg" }} onClick={() => downIndex()}></Image>
            <Image src={navarrow} alt="nav arrow" style={{ rotate: "-90deg" }} onClick={() => upIndex()}></Image>
          </div>
          <motion.div className={styles.Portfolio_items} initial="1" animate={`${carrouselleIndex}`} variants={carrouselleVariants}>
            <PortfolioItem
              title={pageContent.Portfolio.First.Title}
              desc={pageContent.Portfolio.First.Content}
              srccode={"https://github.com/MirpoCasas/Airont-Labs-Project-One"}
              deploy={"https://moviefinder-mc.vercel.app"}
              img={moviefin_ss}
              techs={["javascript", "sass"]}
            />
            <PortfolioItem
              title={pageContent.Portfolio.Second.Title}
              desc={pageContent.Portfolio.Second.Content}
              srccode={"https://github.com/No-Country/s9-14-ft-node-react"}
              deploy={"https://managym.vercel.app"}
              img={managym_ss}
              techs={["next", "sass"]}
            />
            <PortfolioItem
              title={pageContent.Portfolio.Third.Title}
              desc={pageContent.Portfolio.Third.Content}
              srccode={"https://github.com/MirpoCasas/BetterDesigns"}
              deploy={"https://betterdesigns.netlify.app"}
              img={better_ss}
              techs={["react", "sass"]}
            />
          </motion.div>
        </div>
      </div>
      <div className={styles.Experiences}>
        <h2>{pageContent.Experiences.Title}</h2>
        <div className={styles.Experiences_items}>
          <ExperiencesItem title={pageContent.Experiences.First.Title} variants={variantsItem} desc={pageContent.Experiences.First.Content} />
          <div className={styles.Bar}></div>
          <ExperiencesItem title={pageContent.Experiences.Second.Title} variants={variantsItem} desc={pageContent.Experiences.Second.Content} />
          <div className={styles.Bar}></div>
          <ExperiencesItem title={pageContent.Experiences.Third.Title} variants={variantsItem} desc={pageContent.Experiences.Third.Content} />
          <div className={styles.Bar}></div>
        </div>
      </div>
      <div className={styles.Skills} style={{ padding: "20px" }}>
        <h2>{pageContent.Skills.Title}</h2>
        <div className={styles.Skills_items}>
          <p>-HTML & CSS</p>
          <p>-JavaScript</p>
          <p>-Typescript</p>
          <p>-Git</p>
          <p>-React JS</p>
          <p>-Redux</p>
          <p>-Next JS</p>
          <p>-Matter JS</p>
          <p>-Material UI</p>
          <p>-Framer Motion</p>
          <p>-Three JS</p>
          <p>-Node JS</p>
          <p>-Express JS</p>
          <p>-GraphQL</p>
          <p>-SQL</p>
          <p>-MySQL</p>
          <p>-MongoDB</p>
        </div>
      </div>
      <div className={styles.Contact}>
        <div className={styles.Contact_main}>
          <h2>{pageContent.Contact.Title}</h2>
          <div className={styles.Contact_links}>
            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/MirpoCasas">
              Github
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/martinfcasas/">
              LinkedIn
            </Link>
            <Link target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/15Yh0JehLV1lT_BOYHknOFt2_RHZbrShW/edit?usp=sharing&ouid=118097342686006691495&rtpof=true&sd=true">
              CV download
            </Link>
            <p className={styles.Contact_mail}> Email: martincasasdev@gmail.com</p>
          </div>
        </div>
        <p>{pageContent.Contact.Greet}</p>
        <Image src={byecat} alt="cat goodbye" className={styles.goodbyecat}></Image>
      </div>
      {isOpen && (
        <Modal handleClose={() => closingModal()}>
          <div className={styles.modal_me}>
            <div className={styles.modal_contone}>
              <Image src={catonpc} alt="cat on pc"></Image>
            </div>
            <div className={styles.modal_conttwo}>
              <p>{pageContent.Modal.First}</p>
              <p>{pageContent.Modal.Second}</p>
              <p>{pageContent.Modal.Third}</p>
              <p>{pageContent.Modal.Fourth}</p>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
