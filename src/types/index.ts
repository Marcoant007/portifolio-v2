export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram" | "email" | "resume";
}

export type StackCategory =
  | "Frontend"
  | "Backend"
  | "Dados & Mensageria"
  | "DevOps & Observabilidade"
  | "Ferramentas";

export interface StackItem {
  name: string;
  category: StackCategory;
  iconUrl: string;
  /** brand color driving the hover spotlight (glow, dots, border) */
  color: string;
  /** some brand marks render dark-on-transparent and need inversion on dark backgrounds */
  invertOnDark?: boolean;
  /** the inverse case: light-on-transparent marks that disappear on a light background */
  invertOnLight?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  /**
   * Real screenshots, ordered — the first is the card thumbnail. Omit to
   * render the generated abstract preview. More than one enables a
   * click-to-expand gallery with prev/next navigation.
   */
  images?: string[];
  featured: boolean;
  status?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  location: string;
  summary: string;
  highlights: string[];
  /** optional company logo; omit to render a monogram badge */
  logo?: string;
}

export interface EarnedBadge {
  title: string;
  issuer: string;
  image: string;
  description: string;
  /** display string, e.g. "Emitida 5 de ago. de 2026" or "Expira em 31 de jan. de 2027" */
  date?: string;
  credentialUrl?: string;
}

export interface Course {
  institution: string;
  title: string;
  /** display string, e.g. "Jul 2026" or "2024 — Cursando" */
  year?: string;
  description?: string;
  /** optional institution logo; omit to render a monogram badge */
  logo?: string;
  /** external verification link (Credly, Udemy, etc.) — shown when there's no certificateImage */
  credentialUrl?: string;
  /** attached certificate image (screenshot/scan) — click-to-view in a lightbox, like LinkedIn's "see credential" */
  certificateImage?: string;
  /** shows a "Cursando" status pill instead of treating the entry as completed */
  inProgress?: boolean;
}

export interface GithubAchievement {
  title: string;
  image: string;
  href: string;
  /** multiplier badge, e.g. "x2" — omit for single-tier achievements */
  tier?: string;
  /** brand color driving the hover spotlight (glow, dots, border), matching the achievement's art */
  color: string;
}

export interface DocPost {
  title: string;
  summary: string;
  date: string;
  href: string;
  source: string;
}

export interface VideoItem {
  title: string;
  description: string;
  youtubeId: string;
  isPlaceholder?: boolean;
}
