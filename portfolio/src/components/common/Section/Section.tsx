import type { ReactNode } from "react";

import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}