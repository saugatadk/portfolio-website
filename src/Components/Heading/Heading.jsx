import React, { useState } from "react";
import styles from "./HeadingStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import closeIconLight from "../../assets/closeMenuLight.png";
import closeIconDark from "../../assets/closeMenuDark.png";
import menuIconLight from "../../assets/openMenuLight.png"; 
import menuIconDark from "../../assets/openMenuDark.png"; 
import { useTheme } from "../../common/ThemeContext";

function Heading() {
  const {theme, toggleTheme} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeIcon = (theme === "light") ? closeIconLight : closeIconDark;
  const menuIcon = (theme === "light") ? menuIconLight : menuIconDark;
  const themeIcon = (theme === "light") ? sun : moon;

  return (
    <header className={styles.navbar} >
      <nav className={styles.navbarContainer}>
        <a href="/" className={styles.navbarTitle}>
          Saugat.
        </a>
        <div className={styles.navbarMenu}>
          <img
            className={styles.navbarMenuBtn}
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu control icon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.navbarMenuItems} ${
              menuOpen && styles.navbarMenuOpen
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color Mode Changer"
            onClick={toggleTheme}
          />
        </div>
      </nav>
    </header>
  );
}

export default Heading;
