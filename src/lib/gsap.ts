import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

export const EASE = "power3.out";
export const EASE_SOFT = "power2.out";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Shared "cards cascade in as the grid scrolls into view" motion used by
 * every card-grid section (Projects, Badges, Education, Stack, Docs,
 * Videos) — fade + rise + slight scale, batched so it fires once per card
 * as it individually crosses the trigger line instead of waiting for the
 * whole grid.
 */
export function revealCards(
  container: HTMLElement | null,
  options?: { y?: number; scale?: number; stagger?: number },
) {
  if (!container) return;
  const cards = gsap.utils.toArray<HTMLElement>(container.children);
  if (cards.length === 0) return;

  if (prefersReducedMotion()) {
    gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
    return;
  }

  const { y = 32, scale = 0.94, stagger = 0.08 } = options ?? {};

  gsap.set(cards, { opacity: 0, y, scale, willChange: "transform, opacity" });

  ScrollTrigger.batch(cards, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: EASE,
        stagger,
        overwrite: true,
        onComplete: () => gsap.set(batch, { willChange: "auto" }),
      }),
  });
}

export { gsap, ScrollTrigger };
