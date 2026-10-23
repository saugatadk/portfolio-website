import styles from "./SkillsStyles.module.css";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "Bash / Shell"]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "Transformers & Attention",
      "Pandas",
      "NumPy",
      "ChromaDB",
      "LangChain"
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      "FastAPI",
      "Django REST",
      "Node.js",
      "Docker",
      "FastMCP",
      "FalkorDB",
      "AWS Bedrock",
      "AWS Rekognition"
    ]
  },
  {
    category: "Frontend, Mobile & Tools",
    skills: [
      "React",
      "React Native (Expo)",
      "Tailwind CSS",
      "Framer Motion",
      "Git & GitHub",
      "Linux",
      "Pytest",
      "OpenGL / GLSL"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.sectionSubtitle}>
          Technologies and tools I write code with regularly or have deployed in projects.
        </p>
      </div>

      {/* Clean Categorized Rows */}
      <div className={styles.skillsTable}>
        {skillCategories.map((group, gIdx) => (
          <div key={gIdx} className={styles.skillRow}>
            <div className={styles.rowCategory}>{group.category}</div>
            <div className={styles.rowItems}>
              {group.skills.map((skill, sIdx) => (
                <span key={sIdx} className={styles.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
