import styles from "./ProjectsStyles.module.css";
import secrets from "../../assets/secrets.png";
import simon from "../../assets/simon.png";
import blogPost from "../../assets/blogpost.png";
import drumKit from "../../assets/drumkit.png";
import toDoList from "../../assets/todolist.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={secrets}
          link="https://github.com/saugatadk/Secrets"
          h3="Secrets"
          p="Don't keep your secrets, share them anonymously!"
        />

        <ProjectCard
          src={simon}
          link="https://saugatadk.github.io/Simon-Game/"
          h3="Simon Game"
          p="Play the classic Simon memory game instantly."
        />

        <ProjectCard
          src={toDoList}
          link="https://github.com/saugatadk/todolist-v2"
          h3="To Do List"
          p="A To-Do-List app to manage your daily tasks."
        />

        <ProjectCard
          src={drumKit}
          link="https://saugatadk.github.io/Drum-Kit/"
          h3="Drum Kit"
          p="Play the Drums online."
        />

        <ProjectCard
          src={blogPost}
          link="https://github.com/saugatadk/blog-post-v1"
          h3="Blog Post Website"
          p="A web app to easily upload your blogs to the internet."
        />
      </div>
    </section>
  );
}

export default Projects;
