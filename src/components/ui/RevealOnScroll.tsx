import type { ElementType, ReactNode } from "react";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

interface RevealOnScrollProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, as: Tag = "div", className, delay = 0 }: RevealOnScrollProps) {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
