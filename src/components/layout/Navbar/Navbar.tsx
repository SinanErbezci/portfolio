import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
<nav className={styles.navbar}>
  <div className="container">
    <div className={styles.content}>
      <a href="#" className={styles.logo}>
        Sinan Erbezci
      </a>

      <div className={styles.links}>
        <a href="#projects" className={styles.navLink}>
          Projects
        </a>

        <a href="#skills" className={styles.navLink}>
          Skills
        </a>

        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </div>
    </div>
  </div>
</nav>
  );
}