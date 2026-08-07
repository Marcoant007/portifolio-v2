import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { profile, socialLinks } from "../../data/profile";
import { SocialLinks } from "../ui/SocialLinks";
import { gsap, EASE, prefersReducedMotion } from "../../lib/gsap";
import styles from "./Hero.module.css";

export function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);
  itemsRef.current = [];

  const addItemRef = (el: HTMLElement | null) => {
    if (el) itemsRef.current.push(el);
  };

  useGSAP(
    () => {
      const items = itemsRef.current;
      const reduceMotion = prefersReducedMotion();

      gsap.fromTo(
        items,
        { opacity: 0, y: reduceMotion ? 0 : 22 },
        {
          opacity: 1,
          y: 0,
          duration: reduceMotion ? 0.01 : 0.7,
          ease: EASE,
          stagger: reduceMotion ? 0 : 0.12,
          delay: 0.1,
        },
      );

      if (!reduceMotion && glowRef.current) {
        gsap.to(glowRef.current, {
          y: 160,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    },
    { scope: rootRef },
  );

  return (
    <section id="hero" className={styles.hero} aria-label="Apresentação" ref={rootRef}>
      <spline-viewer
        class={styles.splineBg}
        url="https://prod.spline.design/gx6Uyx4sAsyTX7XE/scene.splinecode"
        aria-hidden="true"
      />
      <div ref={glowRef} className={styles.glow} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />
      <div className="container">
        <span ref={addItemRef} className={styles.badge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Atualmente na Luiza Labs
        </span>

        <h1 ref={addItemRef} className={styles.name}>
          {profile.name}
        </h1>
        <p ref={addItemRef} className={styles.role}>
          {profile.role}
        </p>
        <p ref={addItemRef} className={styles.tagline}>
          {profile.tagline}
        </p>

        <div ref={addItemRef} className={styles.actions}>
          <a className={styles.cta} href="#projetos">
            Ver projetos
          </a>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </section>
  );
}
