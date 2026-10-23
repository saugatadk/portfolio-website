import { motion } from "framer-motion";
import styles from "./ProjectsStyles.module.css";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import { caseStudies, compactProjects, alsoBuilt } from "./projectsData";

function Projects() {
  const { theme } = useTheme();
  const githubIcon = theme === "light" ? githubLight : githubDark;

  const renderLink = (link, idx) => {
    if (link.isVideo) {
      return (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={idx === 0 ? styles.primaryBtn : styles.secondaryBtn}
        >
          <svg
            className={styles.btnIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span>{link.label}</span>
        </a>
      );
    }
    if (link.isExternal) {
      return (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryBtn}
        >
          <svg
            className={styles.btnIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          <span>{link.label}</span>
        </a>
      );
    }
    return (
      <a
        key={idx}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.secondaryBtn}
      >
        <img
          src={githubIcon}
          alt=""
          aria-hidden="true"
          className={styles.githubIcon}
        />
        <span>{link.label}</span>
      </a>
    );
  };

  return (
    <section className={styles.container} id="projects">
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <p className={styles.sectionSubtitle}>
          Case studies and software built during my engineering degree, focusing on graph
          agents, vision models, and applied systems.
        </p>
      </div>

      {/* Part 1: Case Studies */}
      <div className={styles.caseStudiesList}>
        {caseStudies.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className={styles.caseStudyCard}
          >
            <div className={styles.caseStudyImageWrapper}>
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className={styles.caseStudyImage}
                loading="lazy"
              />
            </div>

            <div className={styles.caseStudyBody}>
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <ul className={styles.breakdownList}>
                <li className={styles.breakdownItem}>
                  <strong className={styles.breakdownLabel}>Problem:</strong>
                  {project.problem}
                </li>
                <li className={styles.breakdownItem}>
                  <strong className={styles.breakdownLabel}>Architecture:</strong>
                  {project.architecture}
                </li>
                <li className={styles.breakdownItem}>
                  <strong className={styles.breakdownLabel}>Decision & Trade-off:</strong>
                  {project.tradeoff}
                </li>
                <li className={styles.breakdownItem}>
                  <strong className={styles.breakdownLabel}>What Broke & Diagnosis:</strong>
                  {project.whatBroke}
                </li>
                <li className={styles.breakdownItem}>
                  <strong className={styles.breakdownLabel}>Result:</strong>
                  {project.result}
                </li>
                {project.limitations && (
                  <li className={styles.breakdownItem}>
                    <strong className={styles.breakdownLabel}>Limitations:</strong>
                    {project.limitations}
                  </li>
                )}
              </ul>

              {/* Single Tag Row */}
              <div className={styles.tagRow}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.cardFooter}>
              {project.links.map((link, idx) => renderLink(link, idx))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Part 2: Compact Entries */}
      <div className={styles.subSectionHeader}>
        <h3 className={styles.subSectionTitle}>Applied Models & Web Tools</h3>
        <p className={styles.subSectionSubtitle}>
          Compact entries for standalone PyTorch architectures and full-stack utilities.
        </p>
      </div>

      <div className={styles.compactGrid}>
        {compactProjects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35 }}
            className={styles.compactCard}
          >
            <div className={styles.compactImageWrapper}>
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className={styles.compactImage}
                loading="lazy"
              />
            </div>

            <div className={styles.compactBody}>
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <ul className={styles.compactBullets}>
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className={styles.compactBullet}>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Single Tag Row */}
              <div className={styles.tagRow}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.cardFooter}>
              {project.links.map((link, idx) => renderLink(link, idx))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Part 3: Also Built */}
      <div className={styles.alsoBuiltContainer}>
        <div className={styles.alsoBuiltHeader}>
          <h3 className={styles.alsoBuiltTitle}>Also Built</h3>
          <p className={styles.alsoBuiltSubtitle}>
            Earlier coursework, graphics engines, and algorithmic exploration.
          </p>
        </div>

        <ul className={styles.alsoBuiltList}>
          {alsoBuilt.map((item, idx) => (
            <li key={idx} className={styles.alsoBuiltItem}>
              <div className={styles.alsoBuiltContent}>
                <h4 className={styles.alsoBuiltItemTitle}>{item.title}</h4>
                <p className={styles.alsoBuiltItemDesc}>{item.description}</p>
              </div>
              <div className={styles.alsoBuiltLinks}>
                {item.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.alsoBuiltLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
