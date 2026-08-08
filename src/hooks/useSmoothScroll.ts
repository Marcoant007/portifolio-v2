import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion, isCoarsePointer } from "../lib/gsap";

/**
 * Drives page scroll through Lenis and syncs it to GSAP's ticker so
 * ScrollTrigger reads smoothed positions instead of raw scroll events.
 * Skipped under prefers-reduced-motion and on touch devices — native scroll
 * behavior stays, and ScrollTrigger still works fine off native scroll
 * events without Lenis in the loop.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      anchors: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Lenis owns scroll from here on, so a native browser hash-jump (direct
    // link to a section, restored scroll on refresh) fights it and gets
    // snapped back — driving the same jump through Lenis keeps it and
    // ScrollTrigger in sync, so already-passed triggers fire immediately
    // instead of leaving their targets stuck hidden.
    if (window.location.hash) {
      requestAnimationFrame(() => {
        lenis.scrollTo(window.location.hash, { immediate: true, force: true });
      });
    }

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);
}
