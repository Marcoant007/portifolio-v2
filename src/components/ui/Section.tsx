import type { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <RevealOnScroll className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </RevealOnScroll>
        {children}
      </div>
    </section>
  );
}
