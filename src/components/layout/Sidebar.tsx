import { useEffect, useState } from "react";
import type { Theme } from "../../hooks/useTheme";
import { useSidebarScroll } from "../../hooks/useSidebarScroll";
import { ThemeToggle } from "./ThemeToggle";
import { SocialLinks } from "../ui/SocialLinks";
import {
  MenuIcon,
  CloseIcon,
  HomeIcon,
  UserIcon,
  GraduationCapIcon,
  LayersIcon,
  FolderIcon,
  AwardIcon,
  VideoIcon,
} from "../ui/icons";
import { profile, socialLinks } from "../../data/profile";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { href: "#hero", label: "Início", icon: HomeIcon },
  { href: "#sobre", label: "Sobre", icon: UserIcon },
  { href: "#formacao", label: "Formação", icon: GraduationCapIcon },
  { href: "#stack", label: "Stack", icon: LayersIcon },
  { href: "#projetos", label: "Projetos", icon: FolderIcon },
  { href: "#badges", label: "Badges", icon: AwardIcon },
  { href: "#videos", label: "Vídeos", icon: VideoIcon },
];

interface SidebarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { asideRef, progressRef } = useSidebarScroll();

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileOpen);
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <button
        type="button"
        className={styles.menuToggle}
        aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((open) => !open)}
      >
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={`${styles.backdrop} ${mobileOpen ? styles.backdropVisible : ""}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <aside ref={asideRef} className={`${styles.sidebar} ${mobileOpen ? styles.open : ""}`}>
        <div ref={progressRef} className={styles.progress} aria-hidden="true" />

        <div className={styles.inner}>
          <div className={styles.profile}>
            <img src={profile.photo} alt="" className={styles.photo} />
            <a href="#hero" className={styles.name} onClick={closeMobile}>
              {profile.name}
            </a>
            <p className={styles.role}>{profile.role}</p>
            <SocialLinks links={socialLinks} />
          </div>

          <nav className={styles.nav} aria-label="Navegação principal">
            <ul className={styles.navList}>
              {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a className={styles.navLink} href={href} onClick={closeMobile}>
                    <Icon className={styles.navIcon} aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.footer}>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </aside>
    </>
  );
}
