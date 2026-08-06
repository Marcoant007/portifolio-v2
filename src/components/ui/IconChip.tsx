import type { CSSProperties } from "react";
import type { StackItem } from "../../types";
import { usePointerSpotlight } from "../../hooks/usePointerSpotlight";
import styles from "./IconChip.module.css";

export function IconChip({ name, iconUrl, color, invertOnDark, invertOnLight }: StackItem) {
  const spotlightRef = usePointerSpotlight<HTMLDivElement>();

  return (
    <div ref={spotlightRef} className={styles.chip} style={{ "--tech-color": color } as CSSProperties}>
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.dots} aria-hidden="true" />
      <span className={styles.iconWrap}>
        <img
          className={[styles.icon, invertOnDark && styles.invertDark, invertOnLight && styles.invertLight]
            .filter(Boolean)
            .join(" ")}
          src={iconUrl}
          alt=""
          loading="lazy"
          decoding="async"
          width={34}
          height={34}
        />
      </span>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
