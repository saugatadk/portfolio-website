import styles from "./ProjectsStyles.module.css";
import secrets from "../../assets/secrets.png"
function Projects() {
  return (
    <section className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.container}>
            <a href="https://github.com/saugatadk/Secrets" target="_blank">
                <img src={secrets} alt="Secrets Project Image" />
                <h3>Secrets</h3>
                <p>Don't keep your secrets, share them anonymously!</p>
            </a>
        </div>

    </section>
  )
}

export default Projects