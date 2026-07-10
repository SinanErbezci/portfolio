import Section from "../../components/common/Section/Section";
import styles from "./AdditionalProject.module.css";
import { otherProjects } from "../../data/projects";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


export default function AdditonalProjects() {
  return (
    <Section id="other-projects">
      <div className={styles.projects}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Additional Projects</p>

          <h2 className={styles.title}>Other Engineering Projects</h2>

          <p className={styles.subtitle}>
            Additional projects spanning computer vision, machine learning, and
            interactive web development.
          </p>
        </header>

        <div className={styles.grid}>
          {otherProjects.map((project) => (
<article key={project.id} className={styles.card}>
  <img
    src={project.image}
    alt={project.title}
    className={styles.image}
    loading="lazy"
  />

  <div className={styles.content}>
    <div>
      <h3 className={styles.projectTitle}>
        {project.title}
      </h3>

      <p className={styles.projectSubtitle}>
        {project.subtitle}
      </p>
    </div>

    <p className={styles.description}>
      {project.description}
    </p>

    <div className={styles.badges}>
      {project.technologies.map((tech) => (
        <span
          key={tech}
          className={styles.badge}
        >
          {tech}
        </span>
      ))}
    </div>

    {(project.github || project.liveDemo) && (
      <div className={styles.actions}>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className={styles.actionLink}
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.actionIcon}
            />
            <span>Live Demo</span>
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={styles.actionLink}
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={styles.actionIcon}
            />
            <span>Source Code</span>
          </a>
        )}
      </div>
    )}
  </div>
</article>
          ))}
        </div>
      </div>
    </Section>
  );
}
