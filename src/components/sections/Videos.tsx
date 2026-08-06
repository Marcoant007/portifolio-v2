import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { videos } from "../../data/videos";
import type { VideoItem } from "../../types";
import { Section } from "../ui/Section";
import { PlayIcon } from "../ui/icons";
import { revealCards } from "../../lib/gsap";
import styles from "./Videos.module.css";

function YoutubeFacade({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={styles.facadeButton}
      style={{ backgroundImage: `url(https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg)` }}
      onClick={() => setPlaying(true)}
      aria-label={`Assistir: ${title}`}
    >
      <span className={styles.playButton}>
        <PlayIcon />
      </span>
    </button>
  );
}

function VideoCard({ video }: { video: VideoItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.frame}>
        {video.isPlaceholder ? (
          <div className={styles.placeholder}>adicione um vídeo em src/data/videos.ts</div>
        ) : (
          <YoutubeFacade youtubeId={video.youtubeId} title={video.title} />
        )}
      </div>
      <h3 className={styles.title}>{video.title}</h3>
      <p className={styles.description}>{video.description}</p>
    </article>
  );
}

export function Videos() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    revealCards(gridRef.current);
  });

  return (
    <Section id="videos" eyebrow="Vídeos" title="Me acompanhe também no youtube">
      <div ref={gridRef} className={styles.grid}>
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>
    </Section>
  );
}
