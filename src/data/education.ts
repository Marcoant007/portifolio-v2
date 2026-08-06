import type { Course } from "../types";
import multivixLogo from "../assets/images/logos/multivix.jpg";
import senacLogo from "../assets/images/logos/senac.jpg";

// Formação acadêmica em destaque (faculdade + curso técnico), separada dos
// cursos avulsos em courses.ts.

export const education: Course[] = [
  {
    institution: "Multivix",
    title: "Bacharelado em Sistemas de Informação",
    year: "2023 — Cursando",
    inProgress: true,
    logo: multivixLogo,
    description: "Sistemas de informação, desenvolvimento de software, banco de dados, redes e gestão de TI.",
  },
  {
    institution: "Senac",
    title: "Técnico em Informática",
    year: "2018 — 2020",
    logo: senacLogo,
    description: "Formação técnica em informática, com ênfase em programação, redes e suporte técnico.",
  },
];
