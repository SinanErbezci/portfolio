import { Link, NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            Sinan Erbezci
          </Link>

          <div className={styles.links}>
            <NavLink to="/projects" className={styles.navLink}>
              Projects
            </NavLink>

            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>

            <NavLink to="/contact" className={styles.navLink}>
              Contact
            </NavLink>

            <a
              href="https://github.com/SinanErbezci"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}