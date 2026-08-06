import type { Course } from "../types";

// Para colocar a logo de uma instituição: salve a imagem em
// src/assets/images/logos/ (ex: rocketseat.png), importe aqui em cima:
//
//   import rocketseatLogo from "../assets/images/logos/rocketseat.png";
//
// e adicione `logo: rocketseatLogo` no objeto correspondente lá embaixo.
// Sem `logo`, o card cai automaticamente num monograma com a inicial.

export const courses: Course[] = [
  { institution: "Rocketseat", title: "Clean Code", year: "2025" /* logo: rocketseatLogo */ },
  { institution: "Rocketseat", title: "Containers com Docker e Docker Compose", year: "2025" /* logo: rocketseatLogo */ },
  { institution: "Rocketseat", title: "Fundamentos da Cultura DevOps", year: "2025" /* logo: rocketseatLogo */ },
  { institution: "Rocketseat", title: "Fundamentos do React", year: "2025" /* logo: rocketseatLogo */ },
  { institution: "Rocketseat", title: "Ignite — Trilha Backend NodeJS", year: "2023" /* logo: rocketseatLogo */ },
  { institution: "HCode", title: "Design Patterns com Java", year: "2025" /* logo: hcodeLogo */ },
  { institution: "Full Cycle", title: "Semana Full Stack", year: "2024" /* logo: fullCycleLogo */ },
  { institution: "HackerRank", title: "Java (Basic) Certificate", year: "2025" /* logo: hackerrankLogo */ },
];
