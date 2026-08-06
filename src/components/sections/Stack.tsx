import { stack, stackCategories } from "../../data/stack";
import { Section } from "../ui/Section";
import { IconChip } from "../ui/IconChip";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Linguagens & tecnologias"
      subtitle="O que eu uso no dia a dia — e o que exploro nos meus laboratórios pessoais."
    >
      {stackCategories.map((category, index) => {
        const items = stack.filter((item) => item.category === category);
        return (
          <RevealOnScroll key={category} className={styles.group} delay={index * 60}>
            <h3 className={styles.groupTitle}>{category}</h3>
            <div className={styles.grid}>
              {items.map((item) => (
                <IconChip key={item.name} {...item} />
              ))}
            </div>
          </RevealOnScroll>
        );
      })}
    </Section>
  );
}
