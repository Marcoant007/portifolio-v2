import { socialLinks, profile } from "../../data/profile";
import { SocialLinks } from "../ui/SocialLinks";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <p className={styles.note}>
          <strong>{profile.name}</strong> · {year}
        </p>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
