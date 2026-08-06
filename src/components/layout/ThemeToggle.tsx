import type { Theme } from "../../hooks/useTheme";
import { SunIcon, MoonIcon } from "../ui/icons";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
      title={theme === "dark" ? "Tema claro" : "Tema escuro"}
    >
      <SunIcon className={`${styles.icon} ${styles.iconSun}`} />
      <MoonIcon className={`${styles.icon} ${styles.iconMoon}`} />
    </button>
  );
}
