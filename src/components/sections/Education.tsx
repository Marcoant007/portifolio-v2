import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { education } from "../../data/education";
import { courses } from "../../data/courses";
import type { Course } from "../../types";
import { Section } from "../ui/Section";
import { Lightbox } from "../ui/Lightbox";
import { ArrowUpRightIcon, ExpandIcon } from "../ui/icons";
import { gsap, EASE, revealCards, prefersReducedMotion } from "../../lib/gsap";
import styles from "./Education.module.css";
import lightboxStyles from "../ui/Lightbox.module.css";

function monogram(institution: string) {
  const letter = institution.replace(/[^\p{L}]/gu, "")[0];
  return (letter ?? institution[0] ?? "?").toUpperCase();
}

function FeaturedCard({ item }: { item: Course }) {
  return (
    <article className={styles.featuredCard}>
      <span className={styles.featuredLogo}>
        {item.logo ? <img src={item.logo} alt="" loading="lazy" decoding="async" /> : monogram(item.institution)}
      </span>

      <div className={styles.featuredBody}>
        <div className={styles.featuredHeadRow}>
          <h3 className={styles.featuredTitle}>{item.title}</h3>
          {item.inProgress && <span className={styles.statusPill}>Cursando</span>}
        </div>

        <div className={styles.featuredMeta}>
          <span className={styles.featuredInstitution}>{item.institution}</span>
          {item.year && <span>{item.year}</span>}
        </div>

        {item.description && <p className={styles.featuredDescription}>{item.description}</p>}
      </div>
    </article>
  );
}

function CourseCard({ course, onOpen }: { course: Course; onOpen: () => void }) {
  return (
    <button type="button" className={styles.courseCard} onClick={onOpen}>
      <span className={styles.courseLogo}>
        {course.logo ? <img src={course.logo} alt="" loading="lazy" decoding="async" /> : monogram(course.institution)}
      </span>
      <span className={styles.courseText}>
        <span className={styles.courseInstitution}>{course.institution}</span>
        <span className={styles.courseTitle}>{course.title}</span>
        {course.year && <span className={styles.courseYear}>{course.year}</span>}
      </span>
      <span className={styles.courseCertHint} aria-hidden="true">
        <ExpandIcon width={13} height={13} />
      </span>
    </button>
  );
}

export function Education() {
  const [activeItem, setActiveItem] = useState<Course | null>(null);

  const featuredGridRef = useRef<HTMLDivElement | null>(null);
  const groupTitleRef = useRef<HTMLHeadingElement | null>(null);
  const courseGridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    revealCards(featuredGridRef.current, { y: 24, scale: 0.97 });
    revealCards(courseGridRef.current);

    if (groupTitleRef.current && !prefersReducedMotion()) {
      gsap.from(groupTitleRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.5,
        ease: EASE,
        scrollTrigger: { trigger: groupTitleRef.current, start: "top 90%" },
      });
    }
  });

  return (
    <Section
      id="formacao"
      eyebrow="Formação"
      title="Formação & cursos"
      subtitle="Graduação, curso técnico e os cursos e certificações mais relevantes ao longo da carreira."
    >
      <div ref={featuredGridRef} className={styles.featuredGrid}>
        {education.map((item) => (
          <FeaturedCard key={`${item.institution}-${item.title}`} item={item} />
        ))}
      </div>

      <h3 ref={groupTitleRef} className={styles.groupTitle}>
        Cursos & certificados
      </h3>
      <div ref={courseGridRef} className={styles.courseGrid}>
        {courses.map((course) => (
          <CourseCard
            key={`${course.institution}-${course.title}`}
            course={course}
            onOpen={() => setActiveItem(course)}
          />
        ))}
      </div>

      {activeItem && (
        <Lightbox
          labelledBy="education-lightbox-title"
          onClose={() => setActiveItem(null)}
          maxWidth={activeItem.certificateImage ? "min(640px, 92vw)" : undefined}
        >
          {activeItem.certificateImage ? (
            <div className={styles.certificateImageWrap}>
              <img className={styles.certificateImage} src={activeItem.certificateImage} alt="" />
            </div>
          ) : activeItem.logo ? (
            <img className={lightboxStyles.image} src={activeItem.logo} alt="" width={120} height={120} />
          ) : (
            <span className={styles.lightboxMonogram}>{monogram(activeItem.institution)}</span>
          )}
          <h3 id="education-lightbox-title" className={lightboxStyles.title}>
            {activeItem.title}
          </h3>
          <span className={lightboxStyles.issuer}>{activeItem.institution}</span>
          {activeItem.year && <span className={lightboxStyles.date}>{activeItem.year}</span>}
          {activeItem.description && <p className={lightboxStyles.description}>{activeItem.description}</p>}
          {activeItem.credentialUrl && (
            <a className={lightboxStyles.credentialLink} href={activeItem.credentialUrl} target="_blank" rel="noreferrer">
              Ver credencial
              <ArrowUpRightIcon width={14} height={14} />
            </a>
          )}
        </Lightbox>
      )}
    </Section>
  );
}
