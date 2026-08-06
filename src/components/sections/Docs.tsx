import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { docs } from "../../data/docs";
import { Section } from "../ui/Section";
import { ArrowUpRightIcon } from "../ui/icons";
import { revealCards } from "../../lib/gsap";
import styles from "./Docs.module.css";

export function Docs() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    revealCards(listRef.current, { y: 20, scale: 1, stagger: 0.06 });
  });

  return (
    <Section
      id="docs"
      eyebrow="Escrita"
      title="Documentação & notas técnicas"
      subtitle="Sem blog por enquanto — então as notas abaixo vêm direto dos READMEs dos meus próprios laboratórios."
    >
      <ul ref={listRef} className={styles.list}>
        {docs.map((doc) => (
          <li key={doc.href}>
            <div className={styles.item}>
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
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
