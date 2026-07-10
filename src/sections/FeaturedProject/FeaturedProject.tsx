import Section from "../../components/common/Section/Section";
import { featuredProject } from "../../data/projects";
import { useState, useEffect } from "react";
import styles from "./FeaturedProject.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FeaturedProject() {
  const [selectedImage, setSelectedImage] = useState(0);
  const currentImage = featuredProject.images[selectedImage];

  type DemoStatus = "checking" | "live" | "offline";

  const [demoStatus, setDemoStatus] = useState<DemoStatus>("checking");

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch("https://api.sinanbook.club/health/");

        if (!response.ok) {
          setDemoStatus("offline");
          return;
        }

        const data = await response.json();
        console.log(data.status)
        setDemoStatus(data.status === "healthy" ? "live" : "offline");
      } catch {
        setDemoStatus("offline");
      }
    }

    checkHealth();
  }, []);

  const statusConfig = {
    checking: {
      label: "Checking...",
      className: styles.checking,
      title: "",
    },
    live: {
      label: "Live",
      className: styles.live,
      title: "",
    },
    offline: {
      label: "Offline",
      className: styles.offline,
      title: "Demo is currently offline to minimize AWS infrastructure costs.",
    },
  };

  const currentStatus = statusConfig[demoStatus];

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
                src={currentImage.src}
                alt={currentImage.alt}
                className={styles.image}
              />
            </div>

            <div className={styles.thumbnailList}>
              {featuredProject.images.map((image, index) => (
                <button
                  key={image.caption}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`${styles.thumbnailButton} ${
                    selectedImage === index ? styles.active : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className={styles.thumbnailImage}
                    loading="lazy"
                  />

                  <span className={styles.thumbnailCaption}>
                    {image.caption}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.description}>{featuredProject.description}</p>

            <section className={styles.techStack}>
              <h3 className={styles.sectionTitle}>Built With</h3>

              <div className={styles.badges}>
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className={styles.badge}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className={styles.highlights}>
              <h3 className={styles.sectionTitle}>Technical Highlights</h3>

              <div className={styles.highlightGrid}>
                {featuredProject.highlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className={styles.highlightCard}
                  >
                    <h4 className={styles.highlightTitle}>{highlight.title}</h4>

                    <p className={styles.highlightDescription}>
                      {highlight.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
            <div className={styles.actions}>
              {featuredProject.liveDemo && (
                <div className={styles.demoAction}>
                  <a
                    href={featuredProject.liveDemo}
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

                  <span
                    className={`${styles.status} ${currentStatus.className}`}
                    title={currentStatus.title}
                  >
                    {currentStatus.label}
                  </span>
                </div>
              )}

              <a
                href={featuredProject.github}
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
