import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, isCoarsePointer } from "../lib/gsap";

/**
 * Drives the sidebar's vertical scroll-progress indicator through
 * ScrollTrigger so it stays in sync with the Lenis-smoothed scroll position
 * instead of raw scroll events. Skipped on touch devices: the sidebar (and
 * its progress rail) is collapsed off-canvas there, so it's pure per-frame
 * scroll-listener overhead with nothing on screen to show for it.
 */
export function useSidebarScroll() {
  const asideRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (isCoarsePointer()) return;

    gsap.set(progressRef.current, { scaleY: 0, transformOrigin: "top" });

    ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(progressRef.current, { scaleY: self.progress });
      },
    });
  });

  return { asideRef, progressRef };
}
