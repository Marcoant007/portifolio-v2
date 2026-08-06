import { useState } from "react";
import type { Theme } from "../../hooks/useTheme";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "../ui/icons";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Formação" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#badges", label: "Badges" },
  { href: "#docs", label: "Documentação" },
  { href: "#videos", label: "Vídeos" },
];

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { headerRef, progressRef } = useHeaderScroll();

  return (
    <header ref={headerRef} className={styles.header}>
      <div ref={progressRef} className={styles.progress} aria-hidden="true" />
      <div className={`container ${styles.bar}`}>
        <a href="#hero" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <span className={styles.logoMark}>{"<"}/{">"}</span>
          marco.dev
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className={styles.navLink} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className={styles.menuButton}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`${styles.mobilePanel} ${mobileOpen ? styles.open : ""}`}>
        <nav aria-label="Navegação móvel">
          <ul className={`container ${styles.mobileList}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a className={styles.mobileLink} href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
