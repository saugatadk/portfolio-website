import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectsStyles.module.css";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import { projects, categories } from "./projectsData";

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.28 },
      scale: { duration: 0.28 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 320, damping: 32 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.22 },
    },
  }),
};

function Projects() {
  const { theme } = useTheme();
  const githubIcon = theme === "light" ? githubLight : githubDark;

  const [activeCategory, setActiveCategory] = useState("All");
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [expandedBreakdown, setExpandedBreakdown] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  const paginate = useCallback(
    (newDirection) => {
      setExpandedBreakdown(false);
      setPage(([prevIndex]) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = filteredProjects.length - 1;
        if (nextIndex >= filteredProjects.length) nextIndex = 0;
        return [nextIndex, newDirection];
      });
    },
    [filteredProjects.length]
  );

  const goToIndex = (targetIndex) => {
    if (targetIndex === currentIndex) return;
    setExpandedBreakdown(false);
    const newDirection = targetIndex > currentIndex ? 1 : -1;
    setPage([targetIndex, newDirection]);
  };

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setExpandedBreakdown(false);
    setPage([0, 0]);
  };

  // Keyboard navigation (Left / Right Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") {
        paginate(1);
      } else if (e.key === "ArrowLeft") {
        paginate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold || velocity.x < -400) {
      paginate(1);
    } else if (offset.x > swipeThreshold || velocity.x > 400) {
      paginate(-1);
    }
  };

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
          <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
        <img src={githubIcon} alt="" aria-hidden="true" className={styles.githubIcon} />
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
          Interactive showcase of autonomous agents, PyTorch architectures, and applied systems.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className={styles.toolbar}>
        <div className={styles.categoryFilters} role="tablist" aria-label="Project categories">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.categoryPill} ${isActive ? styles.categoryPillActive : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                <span>{cat}</span>
                <span className={styles.categoryCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* Counter Indicator */}
        <div className={styles.counterBadge}>
          <span className={styles.counterCurrent}>
            {String(currentIndex + 1).padStart(2, "0")}
          </span>
          <span className={styles.counterDivider}>/</span>
          <span className={styles.counterTotal}>
            {String(filteredProjects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Spotlight Showcase Container with Mid-Height Side Arrows */}
      <div className={styles.spotlightWrapper}>
        <button
          type="button"
          className={`${styles.navSideBtn} ${styles.prevSideBtn}`}
          onClick={() => paginate(-1)}
          aria-label="Previous project (Left arrow)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className={styles.spotlightContainer}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {currentProject && (
              <motion.article
                key={currentProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className={styles.spotlightCard}
              >
                {/* Left Column: Visual Showcase */}
                <div className={styles.mediaColumn}>
                  <div className={styles.imageWrapper}>
                    <img
                      src={currentProject.image}
                      alt={`${currentProject.title} preview`}
                      className={styles.spotlightImage}
                    />
                    <div className={styles.imageOverlayBadge}>
                      <span className={styles.categoryBadgeText}>{currentProject.category}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Engineering Details */}
                <div className={styles.detailsColumn}>
                  <div className={styles.metaRow}>
                    <span className={styles.projectNumber}>
                      {String(currentIndex + 1).padStart(2, "0")} • {currentProject.category.toUpperCase()}
                    </span>
                  </div>

                  <h3 className={styles.projectTitle}>{currentProject.title}</h3>

                  <p className={styles.projectSummary}>{currentProject.summary}</p>

                  {/* Core Bullets */}
                  <ul className={styles.bulletList}>
                    {currentProject.bullets.map((bullet, idx) => (
                      <li key={idx} className={styles.bulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Optional Deep-Dive Breakdown Toggle */}
                  {currentProject.breakdown && (
                    <div className={styles.breakdownSection}>
                      <button
                        type="button"
                        className={styles.toggleBreakdownBtn}
                        onClick={() => setExpandedBreakdown((prev) => !prev)}
                        aria-expanded={expandedBreakdown}
                      >
                        <span>
                          {expandedBreakdown ? "Hide Technical Breakdown" : "View Technical Breakdown"}
                        </span>
                        <svg
                          className={`${styles.toggleIcon} ${
                            expandedBreakdown ? styles.toggleIconRotated : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedBreakdown && (
                          <motion.div
                            key="deepdive"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className={styles.expandableWrapper}
                          >
                            <ul className={styles.breakdownList}>
                              <li className={styles.breakdownItem}>
                                <strong className={styles.breakdownLabel}>Problem:</strong>
                                {currentProject.breakdown.problem}
                              </li>
                              <li className={styles.breakdownItem}>
                                <strong className={styles.breakdownLabel}>Architecture:</strong>
                                {currentProject.breakdown.architecture}
                              </li>
                              <li className={styles.breakdownItem}>
                                <strong className={styles.breakdownLabel}>Key Trade-off:</strong>
                                {currentProject.breakdown.tradeoff}
                              </li>
                              <li className={styles.breakdownItem}>
                                <strong className={styles.breakdownLabel}>Diagnosis & Fix:</strong>
                                {currentProject.breakdown.whatBroke}
                              </li>
                              <li className={styles.breakdownItem}>
                                <strong className={styles.breakdownLabel}>Validation:</strong>
                                {currentProject.breakdown.result}
                              </li>
                              {currentProject.breakdown.limitations && (
                                <li className={styles.breakdownItem}>
                                  <strong className={styles.breakdownLabel}>Limitation:</strong>
                                  {currentProject.breakdown.limitations}
                                </li>
                              )}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className={styles.tagRow}>
                    {currentProject.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tagPill}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className={styles.cardFooter}>
                    {currentProject.links.map((link, idx) => renderLink(link, idx))}
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={`${styles.navSideBtn} ${styles.nextSideBtn}`}
          onClick={() => paginate(1)}
          aria-label="Next project (Right arrow)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Clickable Progress Dots */}
      <div className={styles.bottomNavStrip}>
        <div className={styles.dotsContainer} role="tablist" aria-label="Project slide navigation">
          {filteredProjects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={currentIndex === idx}
              aria-label={`Go to ${p.title}`}
              className={`${styles.navDot} ${currentIndex === idx ? styles.navDotActive : ""}`}
              onClick={() => goToIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
