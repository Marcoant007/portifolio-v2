import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, EASE, prefersReducedMotion } from "../../lib/gsap";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.from(headerRef.current!.children, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: EASE,
      stagger: 0.08,
      scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
    });
  });

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div ref={headerRef} className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 id={`${id}-heading`} className={styles.title}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
