import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Drives the sidebar's vertical scroll-progress indicator through
 * ScrollTrigger so it stays in sync with the Lenis-smoothed scroll position
 * instead of raw scroll events.
 */
export function useSidebarScroll() {
  const asideRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
