import styles from "./SkillsStyles.module.css";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import checkMarkLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const {theme} = useTheme();
  const checkMark = (theme === "light") ? checkMarkLight : checkMarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="HTML" />
        <SkillList src={checkMark} skill="CSS" />
        <SkillList src={checkMark} skill="JavaScript" />
        <SkillList src={checkMark} skill="TypeScript" />
        <SkillList src={checkMark} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="C" />
        <SkillList src={checkMark} skill="C++" />
        <SkillList src={checkMark} skill="Python" />
        <SkillList src={checkMark} skill="Node" />
        <SkillList src={checkMark} skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Git" />
        <SkillList src={checkMark} skill="SQL" />
        <SkillList src={checkMark} skill="NoSQL" />
        <SkillList src={checkMark} skill="BootStrap" />
        <SkillList src={checkMark} skill="Tailwind CSS" />
        <SkillList src={checkMark} skill="EJS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="TensorFlow" />
        <SkillList src={checkMark} skill="PyTorch" />
        <SkillList src={checkMark} skill="Scikit-learn" />
        <SkillList src={checkMark} skill="Pandas" />
        <SkillList src={checkMark} skill="NumPy" />
        <SkillList src={checkMark} skill="Matplotlib" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMark} skill="Machine Learning" />
        <SkillList src={checkMark} skill="Deep Learning" />
        <SkillList src={checkMark} skill="NLP" />
        <SkillList src={checkMark} skill="Computer Vision" />
        <SkillList src={checkMark} skill="Data Analysis" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
