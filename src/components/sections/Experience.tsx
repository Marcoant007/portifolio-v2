import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { experience } from "../../data/experience";
import { Section } from "../ui/Section";
import { gsap, EASE, prefersReducedMotion } from "../../lib/gsap";
import styles from "./Experience.module.css";

export function ExperienceSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const items = gsap.utils.toArray<HTMLElement>(timelineRef.current!.children);

      gsap.set(items, { opacity: 0, x: (i: number) => (i % 2 === 0 ? -56 : 56) });
      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: EASE,
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
      });

      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 65%",
          scrub: 0.6,
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <Section id="experiencia" eyebrow="Trajetória" title="Experiência profissional">
      <div ref={rootRef} className={styles.timelineWrap}>
        <div ref={lineRef} className={styles.line} aria-hidden="true" />
        <div ref={timelineRef} className={styles.timeline}>
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className={styles.item}>
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
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
