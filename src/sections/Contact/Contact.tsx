import Section from "../../components/common/Section/Section";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Section id="contact">
      <div className={styles.contact}>
        <header className="sectionHeader">
          <p className="sectionEyebrow">Contact</p>
          <h2 className="sectionTitle">Get In Touch</h2>
        </header>

        <div className={styles.links}>
          <a
            href="mailto:sinanerbezci.se@gmail.com"
            className={styles.contactLink}
          >
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>sinanerbezci.se@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />

            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/SinanErbezci"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />

            <span>GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
