import { useRef, useState, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { earnedBadges } from "../../data/badges";
import { githubAchievements } from "../../data/githubAchievements";
import type { EarnedBadge, GithubAchievement } from "../../types";
import { Section } from "../ui/Section";
import { Lightbox } from "../ui/Lightbox";
import { ArrowUpRightIcon } from "../ui/icons";
import { gsap, EASE, revealCards, prefersReducedMotion } from "../../lib/gsap";
import { useCardTilt } from "../../hooks/useCardTilt";
import { usePointerSpotlight } from "../../hooks/usePointerSpotlight";
import styles from "./Badges.module.css";
import lightboxStyles from "../ui/Lightbox.module.css";

const CREDLY_PROFILE_URL = "https://www.credly.com/users/marcoantdev/badges/credly";

function BadgeCard({ badge, onOpen }: { badge: EarnedBadge; onOpen: () => void }) {
  const tiltRef = useCardTilt<HTMLButtonElement>();
  const spotlightRef = usePointerSpotlight<HTMLButtonElement>();
  const setRefs = (node: HTMLButtonElement | null) => {
    tiltRef.current = node;
    spotlightRef.current = node;
  };

  return (
    <button
      ref={setRefs}
      type="button"
      className={styles.badgeCard}
      onClick={onOpen}
      style={{ "--tech-color": badge.color } as CSSProperties}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.dots} aria-hidden="true" />
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
    </button>
  );
}

function AchievementCard({ achievement }: { achievement: GithubAchievement }) {
  const spotlightRef = usePointerSpotlight<HTMLAnchorElement>();

  return (
    <a
      ref={spotlightRef}
      className={styles.achievement}
      href={achievement.href}
      target="_blank"
      rel="noreferrer"
      title={achievement.title}
      style={{ "--tech-color": achievement.color } as CSSProperties}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.dots} aria-hidden="true" />
      <img
        className={styles.achievementImage}
        src={achievement.image}
        alt=""
        loading="lazy"
        decoding="async"
        width={88}
        height={88}
      />
      <span className={styles.achievementTitleRow}>
        <span className={styles.achievementTitle}>{achievement.title}</span>
        {achievement.tier && <span className={styles.achievementTier}>{achievement.tier}</span>}
      </span>
    </a>
  );
}

export function Badges() {
  const [activeBadge, setActiveBadge] = useState<EarnedBadge | null>(null);

  const headingsRef = useRef<Array<HTMLElement | null>>([]);
  headingsRef.current = [];
  const addHeadingRef = (el: HTMLElement | null) => {
    if (el) headingsRef.current.push(el);
  };

  const badgeGridRef = useRef<HTMLDivElement | null>(null);
  const achievementGridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    revealCards(badgeGridRef.current);
    revealCards(achievementGridRef.current);

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
      id="badges"
      eyebrow="Métricas"
      title="Badges & certificações"
      subtitle="Estatísticas geradas dinamicamente a partir do GitHub e os badges conquistados ao longo do caminho."
    >
      <div className={styles.earnedGroup}>
        <div ref={addHeadingRef} className={styles.earnedHeader}>
          <h3 className={styles.certGroupTitle}>Badges conquistados</h3>
          <a className={styles.credlyLink} href={CREDLY_PROFILE_URL} target="_blank" rel="noreferrer">
            Ver perfil no Credly
            <ArrowUpRightIcon width={14} height={14} />
          </a>
        </div>
        <div ref={badgeGridRef} className={styles.badgeGrid}>
          {earnedBadges.map((badge) => (
            <BadgeCard key={badge.title} badge={badge} onOpen={() => setActiveBadge(badge)} />
          ))}
        </div>
      </div>

      <div className={styles.earnedGroup}>
        <h3 ref={addHeadingRef} className={styles.certGroupTitle}>
          Conquistas no GitHub
        </h3>
        <div ref={achievementGridRef} className={styles.achievementGrid}>
          {githubAchievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </div>

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
