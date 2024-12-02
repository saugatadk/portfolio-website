import React, { useState } from "react";
import styles from "./HeadingStyles.module.css";
import closeIcon from "../../assets/closeIcon.png"; // Replace with your actual URL or use an online resource
import menuIcon from "../../assets/menuIcon.png"; // Replace with your actual URL or use an online resource

function Heading() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
        </div>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}

export default Heading;
