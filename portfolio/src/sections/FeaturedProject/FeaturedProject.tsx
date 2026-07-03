import Section from "../../components/common/Section/Section";
import { featuredProject } from "../../data/projects";
import { useState } from "react";
import styles from "./FeaturedProject.module.css";

export default function FeaturedProject() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Section id="projects">
      <div className={styles.project}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Featured Project</p>

          <h2 className={styles.title}>{featuredProject.title}</h2>

          <p className={styles.subtitle}>{featuredProject.subtitle}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.gallery}>
            <div className={styles.imageContainer}>
              <img
                src={featuredProject.images[selectedImage].src}
                alt={featuredProject.images[selectedImage].label}
                className={styles.image}
              />
            </div>

            <div className={styles.thumbnailList}>
              {featuredProject.images.map((image, index) => (
                <button
                  key={image.label}
                  className={`${styles.thumbnailButton} ${
                    selectedImage === index ? styles.active : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  {image.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.description}>{featuredProject.description}</p>

            <section className={styles.techStack}>
              <h3>Built With</h3>

              <div className={styles.badges}>
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className={styles.badge}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.highlights}>
              <h3>Engineering Highlights</h3>

              <ul>
                {featuredProject.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </section>

            <div className={styles.actions}>
              <a
                href={featuredProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className={styles.primaryButton}
              >
                Live Demo
              </a>

              <a
                href={featuredProject.github}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryButton}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
