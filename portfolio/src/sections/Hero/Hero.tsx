import profileImage from "../../assets/images/profile.jpg";
import Section from "../../components/common/Section/Section";
import { profile } from "../../data/profile";

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
            <button className={styles.primaryButton}>
              View Projects
            </button>

            <button className={styles.secondaryButton}>
              GitHub
            </button>
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