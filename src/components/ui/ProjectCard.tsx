import type { Project } from "../../types";
import { Tag } from "./Tag";
import { GithubIcon, ArrowUpRightIcon, ExpandIcon } from "./icons";
import styles from "./ProjectCard.module.css";

function initials(name: string) {
  return name
    .replace(/[^\p{L}\p{N} ]/gu, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

interface ProjectCardProps {
  project: Project;
  onExpand?: () => void;
}

export function ProjectCard({ project, onExpand }: ProjectCardProps) {
  const cover = project.images?.[0];

  return (
    <article className={styles.card}>
      {cover ? (
        <button type="button" className={styles.media} onClick={onExpand} aria-label={`Ver imagens de ${project.name}`}>
          <img
            className={styles.image}
            src={cover}
            alt={`Preview de ${project.name}`}
            loading="lazy"
            decoding="async"
          />
          <span className={styles.expandHint}>
            <ExpandIcon width={16} height={16} />
            {project.images && project.images.length > 1 ? `${project.images.length} imagens` : "Ampliar"}
          </span>
        </button>
      ) : (
        <div className={styles.media}>
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderMonogram}>{initials(project.name)}</span>
          </div>
        </div>
      )}

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.name}</h3>
          {project.status && <span className={styles.status}>{project.status}</span>}
        </div>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a className={styles.link} href={project.repoUrl} target="_blank" rel="noreferrer">
            <GithubIcon width={15} height={15} />
            Repositório
          </a>
          {project.demoUrl && (
            <a className={styles.link} href={project.demoUrl} target="_blank" rel="noreferrer">
              <ArrowUpRightIcon width={15} height={15} />
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
