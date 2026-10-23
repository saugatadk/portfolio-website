import styles from "./SkillsStyles.module.css";

const skillRows = [
  {
    category: "Languages",
    items: [
      { name: "Python", evidence: "daily" },
      { name: "C / C++", evidence: "familiar" },
      { name: "JavaScript / TypeScript", evidence: "daily" },
      { name: "SQL", evidence: "used in Badi" }
    ]
  },
  {
    category: "ML & AI",
    items: [
      { name: "PyTorch", evidence: "daily" },
      { name: "Scikit-Learn", evidence: "used in Customer Segmentation" },
      { name: "FastMCP", evidence: "used in Badi" },
      { name: "FalkorDB", evidence: "used in Badi" },
      { name: "AWS Bedrock", evidence: "used in krishiMitra" }
    ]
  },
  {
    category: "Backend & Cloud",
    items: [
      { name: "FastAPI", evidence: "used in Badi" },
      { name: "Django REST", evidence: "used in krishiMitra" },
      { name: "Node.js", evidence: "used in PrashnaAI" },
      { name: "Docker", evidence: "used in Badi" },
      { name: "AWS (S3, DynamoDB)", evidence: "used in krishiMitra" }
    ]
  },
  {
    category: "Tools & Frameworks",
    items: [
      { name: "React & React Native", evidence: "used in krishiMitra & PrashnaAI" },
      { name: "Git & GitHub", evidence: "daily" },
      { name: "Linux & Bash", evidence: "daily" },
      { name: "Pytest", evidence: "used in Badi" }
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

      {/* 4 Plain Rows */}
      <div className={styles.skillsTable}>
        {skillRows.map((row, rIdx) => (
          <div key={rIdx} className={styles.skillRow}>
            <div className={styles.rowCategory}>{row.category}</div>
            <div className={styles.rowItems}>
              {row.items.map((item, iIdx) => (
                <div key={iIdx} className={styles.skillItem}>
                  <span className={styles.skillName}>{item.name}</span>
                  <span className={styles.skillEvidence}>({item.evidence})</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
