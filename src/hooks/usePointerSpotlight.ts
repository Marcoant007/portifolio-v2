import { useEffect, useRef } from "react";

/**
 * Cursor-following spotlight: writes --mouse-x/--mouse-y straight onto the
 * DOM node via pointer events, bypassing React state so movement never
 * triggers a re-render. Only attaches on fine-pointer/hover-capable
 * devices — touch gets the CSS-only static fallback (see IconChip.module.css).
 */
export function usePointerSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
      node.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    };

    node.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => node.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return ref;
}
