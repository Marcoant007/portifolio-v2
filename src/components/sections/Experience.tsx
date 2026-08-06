import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import styles from "./Experience.module.css";

export function ExperienceSection() {
  return (
    <Section id="experiencia" eyebrow="Trajetória" title="Experiência profissional">
      <div className={styles.timeline}>
        {experience.map((job, index) => (
          <RevealOnScroll
            key={`${job.company}-${job.role}`}
            as="article"
            className={styles.item}
            delay={index * 60}
          >
            <span className={`${styles.badge} ${job.current ? styles.badgeCurrent : ""}`}>
              {job.logo ? (
                <img className={styles.logo} src={job.logo} alt="" loading="lazy" decoding="async" />
              ) : (
                job.company[0]
              )}
            </span>

            <div className={styles.content}>
              <div className={styles.headRow}>
                <h3 className={styles.role}>
                  {job.role} <span className={styles.company}>· {job.company}</span>
                </h3>
                {job.current && <span className={styles.currentTag}>atual</span>}
              </div>

              <div className={styles.meta}>
                <span>{job.period}</span>
                <span>{job.location}</span>
              </div>

              <p className={styles.summary}>{job.summary}</p>

              {job.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
