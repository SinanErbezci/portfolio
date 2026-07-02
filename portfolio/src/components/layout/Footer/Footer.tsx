import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Sinan Erbezci
        </p>
      </div>
    </footer>
  );
}