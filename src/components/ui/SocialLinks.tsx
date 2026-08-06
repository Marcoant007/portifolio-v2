import type { SocialLink } from "../../types";
import { GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from "./icons";
import styles from "./SocialLinks.module.css";

const ICONS: Record<SocialLink["icon"], typeof GithubIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  email: MailIcon,
  resume: MailIcon,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <ul className={styles.list}>
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <li key={link.label}>
            <a
              className={styles.link}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
