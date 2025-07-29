import React from "react";
import styles from "./EducationStyles.module.css";

const Education = () => {
  const educationData = [
    {
      title: "Bachelor in Computer Engineering",
      duration: "2023 - Present",
      institution: "Paschimanchal Campus, Tribhuvan University",
      address: "Lamachaur, Pokhara, Nepal",
    },
    {
      title: "High School",
      duration: "2020 - 2022",
      institution: "Orchid Science College",
      address: "Bharatpur-10, Chitwan, Nepal",
    },
    {
      title: "Primary School",
      duration: "2007 - 2019",
      institution: "Greenland Public School",
      address: "Bharatpur-12, Chitwan, Nepal",
    },
  ];

  return (
    <section className={styles.education} id="education">
      <h2 className={styles.educationTitle}>Education</h2>
      <div className={styles.educationTree}>
        {educationData.map((item, index) => (
          <div key={index} className={styles.educationNode}>
            <div className={styles.educationContent}>
              <h3 className={styles.educationItemTitle}>{item.title}</h3>
              <p className={styles.educationDuration}>{item.duration}</p>
              <p className={styles.educationInstitution}>{item.institution}</p>
              <p className={styles.educationAddress}>{item.address}</p>
            </div>
            {index !== educationData.length - 1 && (
              <div className={styles.educationConnector}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
 