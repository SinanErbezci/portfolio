import Section from "../../components/common/Section/Section";
import { featuredProject } from "../../data/projects";
import { useState } from "react";
import styles from "./FeaturedProject.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import architecture from "../../assets/images/bookclub-architecture.svg";
import cicd from "../../assets/images/bookclub-cicd.svg";
import applicationDashboard from "../../assets/images/application_dashboard.webp";
import kubernetesDashboard from "../../assets/images/k8s_database_dashboard.webp";

export default function FeaturedProject() {
  const [selectedImage, setSelectedImage] = useState(0);
  const currentImage = featuredProject.images[selectedImage];

  return (
    <Section id="projects">
      <div className={styles.project}>
        <header className="sectionHeader">
          <p className="sectionEyebrow">Featured Project</p>

          <h2 className="sectionTitle">{featuredProject.title}</h2>

          <p className="sectionSubtitle">{featuredProject.subtitle}</p>
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
                  aria-pressed={selectedImage === index}
                  aria-label={`Show ${image.caption} screenshot`}
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
                <div className={styles.liveDemo}>
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
                    className={`${styles.status} ${styles.onDemand}`}
                    title="The frontend remains available; AWS backend services are started on demand to manage costs."
                  >
                    On demand
                  </span>
                </div>
              )}

              <a
                href="https://github.com/SinanErbezci/bookclub/releases/tag/v1.6.0"
                target="_blank"
                rel="noreferrer"
                className={styles.actionLink}
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={styles.actionIcon}
                />
                <span>v1.6.0 Release</span>
              </a>

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

        {/* Architecture & Observability */}
        <section className={styles.infrastructure}>
          <header className={styles.infrastructureHeader}>
            <p className="sectionEyebrow">Infrastructure</p>
            <h3 className={styles.infrastructureTitle}>
              Architecture & Observability
            </h3>
            <p className={styles.infrastructureDescription}>
              An overview of BookClub's cloud architecture, GitOps deployment
              workflow, and monitoring infrastructure.
            </p>
          </header>

          {/* Architecture Diagrams */}
          <div className={styles.diagramGrid}>
            <figure className={styles.visualCard}>
              <a
                href={architecture}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visualLink}
                aria-label="Open full-size BookClub system architecture diagram"
              >
                <img
                  src={architecture}
                  alt="BookClub system architecture showing AWS EKS, Django, FastAPI, PostgreSQL, Redis, SQS, and monitoring"
                  className={styles.diagramImage}
                  loading="lazy"
                />
              </a>

              <figcaption className={styles.visualCaption}>
                System Architecture
              </figcaption>
            </figure>

            <figure className={styles.visualCard}>
              <a
                href={cicd}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visualLink}
                aria-label="Open full-size BookClub CI/CD and GitOps diagram"
              >
                <img
                  src={cicd}
                  alt="BookClub CI/CD workflow using GitHub Actions, Amazon ECR, deployment pull requests, Argo CD, and Amazon EKS"
                  className={styles.diagramImage}
                  loading="lazy"
                />
              </a>

              <figcaption className={styles.visualCaption}>
                CI/CD & GitOps Pipeline
              </figcaption>
            </figure>
          </div>

          {/* Monitoring Dashboards */}
          <div className={styles.monitoring}>
            <h4 className={styles.monitoringTitle}>Monitoring Dashboards</h4>

            <div className={styles.dashboardGrid}>
              <figure className={styles.visualCard}>
                <a
                  href={applicationDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visualLink}
                  aria-label="Open full-size application monitoring dashboard"
                >
                  <img
                    src={applicationDashboard}
                    alt="Grafana application monitoring dashboard"
                    className={styles.dashboardImage}
                    loading="lazy"
                  />
                </a>

                <figcaption className={styles.visualCaption}>
                  Application Monitoring
                </figcaption>
              </figure>

              <figure className={styles.visualCard}>
                <a
                  href={kubernetesDashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.visualLink}
                  aria-label="Open full-size Kubernetes and database monitoring dashboard"
                >
                  <img
                    src={kubernetesDashboard}
                    alt="Grafana Kubernetes and PostgreSQL monitoring dashboard"
                    className={styles.dashboardImage}
                    loading="lazy"
                  />
                </a>

                <figcaption className={styles.visualCaption}>
                  Kubernetes & Database Monitoring
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
}
