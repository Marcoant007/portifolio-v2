import { useEffect } from "react";
import type { ReactNode } from "react";
import { CloseIcon } from "./icons";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  onClose: () => void;
  children: ReactNode;
  labelledBy: string;
  /** extra class merged onto the dialog — use it to override max-width per use case */
  dialogClassName?: string;
}

/** Generic modal shell: overlay + dialog + close button, Escape key and backdrop click both close it. */
export function Lightbox({ onClose, children, labelledBy, dialogClassName }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={[styles.dialog, dialogClassName].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <CloseIcon width={18} height={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
