import { profile } from "../../data/profile";
import { Section } from "../ui/Section";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="sobre" eyebrow="Quem sou eu" title="Sobre mim">
      <div className={styles.grid}>
        <RevealOnScroll className={styles.photoWrap}>
          <div className={styles.photoFrame}>
            <img
              className={styles.photo}
              src={profile.photo}
              alt={profile.name}
              loading="lazy"
              decoding="async"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll className={styles.text} delay={80}>
          {profile.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
}
