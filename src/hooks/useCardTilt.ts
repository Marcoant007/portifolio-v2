import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/gsap";

/**
 * Cursor-driven 3D tilt: writes --tilt-rx/--tilt-ry straight onto the DOM
 * node via pointer events, bypassing React state so movement never triggers
 * a re-render (same approach as usePointerSpotlight). Only attaches on
 * fine-pointer/hover-capable devices with no reduced-motion preference —
 * touch and reduced-motion get the flat CSS default (0deg/0deg).
 */
export function useCardTilt<T extends HTMLElement>(maxDeg = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover || prefersReducedMotion()) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxDeg;
      const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxDeg;
      node.style.setProperty("--tilt-rx", `${rotateX.toFixed(2)}deg`);
      node.style.setProperty("--tilt-ry", `${rotateY.toFixed(2)}deg`);
    };

    const resetTilt = () => {
      node.style.setProperty("--tilt-rx", "0deg");
      node.style.setProperty("--tilt-ry", "0deg");
    };

    node.addEventListener("pointermove", handlePointerMove, { passive: true });
    node.addEventListener("pointerleave", resetTilt, { passive: true });
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", resetTilt);
    };
  }, [maxDeg]);

  return ref;
}
