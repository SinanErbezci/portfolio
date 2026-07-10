import profileImage from "../../assets/images/profile.webp";
import Section from "../../components/common/Section/Section";
import { profile } from "../../data/profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section>
      <div className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I'm</p>

          <h1 className={styles.name}>
            {profile.name}
          </h1>

          <div className={styles.headline}>
            {profile.headline}
          </div>

          <div className={styles.education}>
            {profile.degrees.map((degree) => (
              <p key={degree}>{degree}</p>
            ))}
          </div>

          <p className={styles.summary}>
            {profile.summary}
          </p>

<div className={styles.actions}>
  <a
    href="/Sinan-Erbezci-Resume.pdf"
    target="_blank"
    rel="noreferrer"
    className={styles.primaryButton}
  >
    <FontAwesomeIcon icon={faFileLines} />
    <span className="ms-1">Resume</span>
  </a>

  <a
    href="https://github.com/SinanErbezci"
    target="_blank"
    rel="noreferrer"
    className={styles.secondaryButton}
  >
    <FontAwesomeIcon icon={faGithub} />
    <span className="ms-1">GitHub</span>
  </a>

  <a
    href="https://linkedin.com/in/your-linkedin"
    target="_blank"
    rel="noreferrer"
    className={styles.secondaryButton}
  >
    <FontAwesomeIcon icon={faLinkedin} />
    <span className="ms-1">LinkedIn</span>
  </a>
</div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src={profileImage}
            alt="Sinan Erbezci"
            className={styles.image}
          />
        </div>
      </div>
    </Section>
  );
}