import { useState } from "react";
import { earnedBadges } from "../../data/badges";
import { courses } from "../../data/courses";
import type { EarnedBadge } from "../../types";
import { Section } from "../ui/Section";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Lightbox } from "../ui/Lightbox";
import { ArrowUpRightIcon } from "../ui/icons";
import styles from "./Badges.module.css";
import lightboxStyles from "../ui/Lightbox.module.css";

const GITHUB_USER = "Marcoant007";
const CREDLY_PROFILE_URL = "https://www.credly.com/users/marcoantdev/badges/credly";

// Dynamically generated cards (shields.io / streak-stats / github-readme-stats).
// These are third-party services — swap query params (theme, colors) or the
// underlying service any time without touching the layout below.
const statCards = [
  {
    alt: "GitHub stats",
    src: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&hide_border=true&title_color=8B8FFF&icon_color=8B8FFF&text_color=A6ACB8`,
  },
  {
    alt: "Linguagens mais usadas",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&hide_border=true&title_color=8B8FFF&text_color=A6ACB8`,
  },
  {
    alt: "Streak de commits",
    src: `https://streak-stats.demolab.com/?user=${GITHUB_USER}&theme=dark&hide_border=true&background=00000000`,
  },
];

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const card = (
    <>
      <span className={styles.courseLogo}>
        {course.logo ? (
          <img src={course.logo} alt="" loading="lazy" decoding="async" />
        ) : (
          course.institution[0]
        )}
      </span>
      <span className={styles.courseText}>
        <span className={styles.courseInstitution}>{course.institution}</span>
        <span className={styles.courseTitle}>{course.title}</span>
      </span>
      {course.year && <span className={styles.courseYear}>{course.year}</span>}
    </>
  );

  return course.credentialUrl ? (
    <a className={styles.courseCard} href={course.credentialUrl} target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : (
    <div className={styles.courseCard}>{card}</div>
  );
}

function BadgeCard({ badge, onOpen }: { badge: EarnedBadge; onOpen: () => void }) {
  return (
    <button type="button" className={styles.badgeCard} onClick={onOpen}>
      <img
        className={styles.badgeImage}
        src={badge.image}
        alt=""
        loading="lazy"
        decoding="async"
        width={132}
        height={132}
      />
      <span className={styles.badgeTitle}>{badge.title}</span>
      <span className={styles.badgeIssuer}>{badge.issuer}</span>
      {badge.date && <span className={styles.badgeDate}>{badge.date}</span>}
    </button>
  );
}

export function Badges() {
  const [activeBadge, setActiveBadge] = useState<EarnedBadge | null>(null);

  return (
    <Section
      id="badges"
      eyebrow="Métricas"
      title="Badges & certificações"
      subtitle="Estatísticas geradas dinamicamente a partir do GitHub, mais os cursos e certificados mais relevantes."
    >
      <div className={styles.stats}>
        {statCards.map((card) => (
          <RevealOnScroll key={card.alt} className={styles.statCard}>
            <img src={card.src} alt={card.alt} loading="lazy" decoding="async" />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className={styles.earnedGroup}>
        <div className={styles.earnedHeader}>
          <h3 className={styles.certGroupTitle}>Badges conquistados</h3>
          <a className={styles.credlyLink} href={CREDLY_PROFILE_URL} target="_blank" rel="noreferrer">
            Ver perfil no Credly
            <ArrowUpRightIcon width={14} height={14} />
          </a>
        </div>
        <div className={styles.badgeGrid}>
          {earnedBadges.map((badge) => (
            <BadgeCard key={badge.title} badge={badge} onOpen={() => setActiveBadge(badge)} />
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <h3 className={styles.certGroupTitle}>Cursos & formações</h3>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard key={`${course.institution}-${course.title}`} course={course} />
          ))}
        </div>
      </RevealOnScroll>

      {activeBadge && (
        <Lightbox labelledBy="badge-lightbox-title" onClose={() => setActiveBadge(null)}>
          <img
            className={lightboxStyles.image}
            src={activeBadge.image}
            alt=""
            width={200}
            height={200}
          />
          <h3 id="badge-lightbox-title" className={lightboxStyles.title}>
            {activeBadge.title}
          </h3>
          <span className={lightboxStyles.issuer}>{activeBadge.issuer}</span>
          {activeBadge.date && <span className={lightboxStyles.date}>{activeBadge.date}</span>}
          <p className={lightboxStyles.description}>{activeBadge.description}</p>
          {activeBadge.credentialUrl && (
            <a
              className={lightboxStyles.credentialLink}
              href={activeBadge.credentialUrl}
              target="_blank"
              rel="noreferrer"
            >
              Ver credencial
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          )}
        </Lightbox>
      )}
    </Section>
  );
}
