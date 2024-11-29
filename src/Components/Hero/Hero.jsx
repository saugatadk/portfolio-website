import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import  twitterLight from "../../assets/twitter-light.svg";
import  twitterDark from "../../assets/twitter-dark.svg";
import  githubLight from "../../assets/github-light.svg";
import  githubDark from "../../assets/github-dark.svg";
import  linkedInLight from "../../assets/linkedin-light.svg";
import  linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = (theme === "light") ? sun : moon;
  const twitterIcon = (theme === "light") ? twitterLight : twitterDark;
  const githubIcon = (theme === "light") ? githubLight : githubDark;
  const linkedInIcon = (theme === "light") ? linkedInLight : linkedInDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profile Picture of Saugat"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Changer"
          onClick={toggleTheme}
        />
      </div>
        <div className={styles.info}>
          <h1>
              Saugat
              <br />
              Adhikari
          </h1>
          <h2>
              Full Stack Developer
          </h2>
          
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
            Skilled in crafting scalable web applications with expertise in front-end, back-end, and database technologies.
          </p>                       
            <a href={CV} download>
              <button className="hover">
                Resume
              </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
