import type { StackItem } from "../../types";
import styles from "./IconChip.module.css";

export function IconChip({ name, iconUrl, invertOnDark, invertOnLight }: StackItem) {
  return (
    <div className={styles.chip}>
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
