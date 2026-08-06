import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { stack, stackCategories } from "../../data/stack";
import { Section } from "../ui/Section";
import { IconChip } from "../ui/IconChip";
import { gsap, EASE, revealCards, prefersReducedMotion } from "../../lib/gsap";
import styles from "./Stack.module.css";

export function Stack() {
  const headingsRef = useRef<Array<HTMLElement | null>>([]);
  headingsRef.current = [];
  const addHeadingRef = (el: HTMLElement | null) => {
    if (el) headingsRef.current.push(el);
  };

  const gridsRef = useRef<Array<HTMLDivElement | null>>([]);
  gridsRef.current = [];
  const addGridRef = (el: HTMLDivElement | null) => {
    if (el) gridsRef.current.push(el);
  };

  useGSAP(() => {
    gridsRef.current.forEach((grid) => revealCards(grid, { y: 20, scale: 0.9, stagger: 0.04 }));

    if (!prefersReducedMotion()) {
      headingsRef.current.forEach((heading) => {
        gsap.from(heading, {
          opacity: 0,
          y: 16,
          duration: 0.5,
          ease: EASE,
          scrollTrigger: { trigger: heading, start: "top 90%" },
        });
      });
    }
  });

  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Linguagens & tecnologias"
      subtitle="O que eu uso no dia a dia — e o que exploro nos meus laboratórios pessoais."
    >
      {stackCategories.map((category) => {
        const items = stack.filter((item) => item.category === category);
        return (
          <div key={category} className={styles.group}>
            <h3 ref={addHeadingRef} className={styles.groupTitle}>
              {category}
            </h3>
            <div ref={addGridRef} className={styles.grid}>
              {items.map((item) => (
                <IconChip key={item.name} {...item} />
              ))}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
