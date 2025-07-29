import React, {useState, useEffect} from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/myimg.jpg";
import  twitterLight from "../../assets/twitter-light.svg";
import  twitterDark from "../../assets/twitter-dark.svg";
import  githubLight from "../../assets/github-light.svg";
import  githubDark from "../../assets/github-dark.svg";
import  linkedInLight from "../../assets/linkedin-light.svg";
import  linkedInDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import {motion} from "framer-motion";

function Hero() {
  const {theme} = useTheme();
  const twitterIcon = (theme === "light") ? twitterLight : twitterDark;
  const githubIcon = (theme === "light") ? githubLight : githubDark;
  const linkedInIcon = (theme === "light") ? linkedInLight : linkedInDark;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Full Stack Developer",
    "Computer Engineer",
    "Tech Enthusiast",
    "Programmer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
  
    return () => clearInterval(interval);
  }, [titles.length]);


  return (
    <section id="about" className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile Picture of Saugat"
        />
      </div>
        <div className={styles.info}>
          <h1>
              Saugat
              <br />
              Adhikari
          </h1>
          {/* <h2 className={styles.rotatingTitle}>
          {titles[currentIndex]}
          </h2>  */}
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#4a90e2",
                }}
              >
                {titles[currentIndex]}
              </motion.h2>

          <span>
            <a href="https://x.com/whoissaugat" target="_blank">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
            <a href="https://github.com/saugatadk" target="_blank">
              <img src={githubIcon} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/saugat-adhikari-2b57b12a8/" target="_blank">
              <img src={linkedInIcon} alt="LinkedIn icon" />
            </a>
          </span>
          <p className={styles.description}>
            AI/ML Engineer & Full Stack Developer building intelligent applications.
          </p>                       
            <a href="#contact">
              <button className="hover">
                Contact Me
              </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
