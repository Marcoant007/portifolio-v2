import { profile, socialLinks } from "../../data/profile";
import { SocialLinks } from "../ui/SocialLinks";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Apresentação">
      <div className="container">
        <RevealOnScroll>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Atualmente na Luiza Labs
          </span>

          <h1 className={styles.name}>{profile.name}</h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <div className={styles.actions}>
            <a className={styles.cta} href="#projetos">
              Ver projetos
            </a>
            <SocialLinks links={socialLinks} />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
