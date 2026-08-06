import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { gsap, EASE, prefersReducedMotion } from "../../lib/gsap";
import styles from "./About.module.css";

export function About() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -48, rotateY: -24, rotateX: 5 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 90%",
            end: "center center",
            scrub: 0.6,
          },
        },
      );

      gsap.from(textRef.current!.children, {
        opacity: 0,
        y: 22,
        duration: 0.6,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: rootRef },
  );

  return (
    <Section id="sobre" eyebrow="Quem sou eu" title="Sobre mim">
      <div ref={rootRef} className={styles.grid}>
        <div className={styles.photoWrap}>
          <div ref={cardRef} className={styles.photoFrame}>
            <img
              className={styles.photo}
              src={profile.photo}
              alt={profile.name}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div ref={textRef} className={styles.text}>
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
