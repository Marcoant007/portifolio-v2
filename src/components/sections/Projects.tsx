import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import { Section } from "../ui/Section";
import { ProjectCard } from "../ui/ProjectCard";
import { ProjectGallery } from "../ui/ProjectGallery";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { ArrowUpRightIcon } from "../ui/icons";
import styles from "./Projects.module.css";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos em destaque"
      subtitle="Uma seleção do que mais representa como eu trabalho hoje — não necessariamente do mais recente."
    >
      <div className={styles.grid}>
        {featured.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={Math.min(index, 3) * 70}>
            <ProjectCard project={project} onExpand={() => setActiveProject(project)} />
          </RevealOnScroll>
        ))}
      </div>

      {rest.length > 0 && (
        <RevealOnScroll as="div" className={styles.more}>
          <div className={styles.moreHeader}>
            <h3 className={styles.moreTitle}>Outros projetos</h3>
            <a
              className={styles.githubLink}
              href="https://github.com/Marcoant007?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Ver todos no GitHub
              <ArrowUpRightIcon width={15} height={15} />
            </a>
          </div>

          <ul className={styles.moreList}>
            {rest.map((project) => (
              <li key={project.slug} className={styles.moreItem}>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.moreItemName}>
                  {project.name}
                </a>
                <span className={styles.moreItemStack}>{project.stack[0]}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      )}

      {activeProject?.images && (
        <ProjectGallery
          title={activeProject.name}
          images={activeProject.images}
          onClose={() => setActiveProject(null)}
        />
      )}
    </Section>
  );
}
