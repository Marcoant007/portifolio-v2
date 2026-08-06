import { useEffect, useState } from "react";
import { Lightbox } from "./Lightbox";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import styles from "./ProjectGallery.module.css";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  onClose: () => void;
}

export function ProjectGallery({ title, images, onClose }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goPrev = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const goNext = () => setIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    if (!hasMultiple) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMultiple, images.length]);

  return (
    <Lightbox labelledBy="project-gallery-title" onClose={onClose} dialogClassName={styles.dialog} maxWidth="min(960px, 92vw)">
      <div className={styles.imageWrap}>
        <img className={styles.image} src={images[index]} alt={`${title} — captura ${index + 1}`} />

        {hasMultiple && (
          <>
            <button type="button" className={`${styles.nav} ${styles.navPrev}`} onClick={goPrev} aria-label="Imagem anterior">
              <ChevronLeftIcon width={20} height={20} />
            </button>
            <button type="button" className={`${styles.nav} ${styles.navNext}`} onClick={goNext} aria-label="Próxima imagem">
              <ChevronRightIcon width={20} height={20} />
            </button>
            <span className={styles.counter}>
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      <h3 id="project-gallery-title" className={styles.title}>
        {title}
      </h3>

      {hasMultiple && (
        <div className={styles.dots}>
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      )}
    </Lightbox>
  );
}
