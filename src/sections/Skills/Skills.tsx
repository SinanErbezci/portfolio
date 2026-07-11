import Section from "../../components/common/Section/Section";
import styles from "./Skills.module.css";
import { skillGroups
    
 } from "../../data/projects";
export default function Skills() {
    return (
        <Section id="skills">
  <div className={styles.skills}>
    <header className={styles.header}>
      <p className={styles.eyebrow}>Technical Skills</p>

      <h2 className={styles.title}>
        Technologies & Qualifications
      </h2>

      <p className={styles.subtitle}>
        Technologies, tools, and qualifications used throughout my projects
        and professional development.
      </p>
    </header>

    <div className={styles.grid}>
      {skillGroups.map((group) => (
        <article
          key={group.title}
          className={styles.card}
        >
          <h3 className={styles.cardTitle}>
            {group.title}
          </h3>

          {group.items && (
            <div className={styles.badges}>
              {group.items.map((item) => (
                <span
                  key={item}
                  className={styles.badge}
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {group.education && (
            <div className={styles.listSection}>
              <h4 className={styles.listTitle}>
                Education
              </h4>

              <ul className={styles.list}>
                {group.education.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {group.certifications && (
            <div className={styles.listSection}>
              <h4 className={styles.listTitle}>
                Certifications
              </h4>

              <ul className={styles.list}>
                {group.certifications.map((item) => (
                  <li key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      ))}
    </div>
  </div>
</Section>
    )
}