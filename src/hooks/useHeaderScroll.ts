import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";

/**
 * Drives the header's scroll-progress bar and "is-scrolled" state through
 * ScrollTrigger so both stay in sync with the Lenis-smoothed scroll position
 * instead of raw scroll events.
 */
export function useHeaderScroll() {
  const headerRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left" });

    ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(progressRef.current, { scaleX: self.progress });
        headerRef.current?.classList.toggle("is-scrolled", self.scroll() > 8);
      },
    });
  });

  return { headerRef, progressRef };
}
