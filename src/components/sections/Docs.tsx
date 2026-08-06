import { docs } from "../../data/docs";
import { Section } from "../ui/Section";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { ArrowUpRightIcon } from "../ui/icons";
import styles from "./Docs.module.css";

export function Docs() {
  return (
    <Section
      id="docs"
      eyebrow="Escrita"
      title="Documentação & notas técnicas"
      subtitle="Sem blog por enquanto — então as notas abaixo vêm direto dos READMEs dos meus próprios laboratórios."
    >
      <ul className={styles.list}>
        {docs.map((doc) => (
          <li key={doc.href}>
            <RevealOnScroll as="div" className={styles.item}>
              <a href={doc.href} target="_blank" rel="noreferrer">
                <div className={styles.meta}>
                  <span>{doc.date}</span>
                  <span>·</span>
                  <span>{doc.source}</span>
                </div>
                <h3 className={styles.title}>{doc.title}</h3>
              </a>
              <p className={styles.summary}>{doc.summary}</p>
              <a className={styles.readMore} href={doc.href} target="_blank" rel="noreferrer">
                Ler no GitHub
                <ArrowUpRightIcon width={14} height={14} />
              </a>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </Section>
  );
}
