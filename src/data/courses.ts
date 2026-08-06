import type { Course } from "../types";
import anthropicLogo from "../assets/images/logos/anthropic.webp";
import awsLogo from "../assets/images/logos/aws.webp";
import harvardLogo from "../assets/images/logos/harvard.webp";
import rocketseatLogo from "../assets/images/logos/rocketseat.webp";
import devSuperiorLogo from "../assets/images/logos/devsuperior.webp";
import fullCycleLogo from "../assets/images/logos/fullcycle.webp";
import nvidiaLogo from "../assets/images/logos/nvidia.webp";
import udemyLogo from "../assets/images/logos/udemy.webp";
import hackerrankLogo from "../assets/images/logos/hackerrank.webp";

// (Claude Partner Badge - Claude Code já aparece em "Badges conquistados",
// com imagem própria, então não repete aqui.)

export const courses: Course[] = [
  {
    institution: "Anthropic",
    title: "Introduction to Model Context Protocol",
    year: "Ago 2026",
    logo: anthropicLogo,
    description:
      "This course provides comprehensive coverage of the Model Context Protocol (MCP), focusing on building both MCP servers and clients using the Python SDK. You'll learn about MCP's three core primitives—tools, resources, and prompts—and understand how they integrate with Claude AI to create powerful applications without writing extensive integration code.",
  },
  {
    institution: "Anthropic",
    title: "Building with the Claude API",
    year: "Ago 2026",
    logo: anthropicLogo,
    description:
      "Este curso em vídeo abrangente ensina desenvolvedores a integrar a IA Claude em aplicativos usando a API Anthropic. Por meio de exercícios práticos e exemplos, os participantes aprenderão a implementar IA conversacional, geração aumentada por recuperação de informações, fluxos de trabalho automatizados e a aproveitar os recursos multimodais do Claude para processar texto, imagens e documentos.",
  },
  { institution: "Anthropic", title: "Claude Code in Action", year: "Jul 2026", logo: anthropicLogo },
  {
    institution: "Amazon Web Services (AWS)",
    title: "AWS Cloud Practitioner Essentials",
    year: "Jun 2026",
    logo: awsLogo,
    description:
      "Concluí o curso AWS Cloud Practitioner Essentials, da AWS Training and Certification. O conteúdo trouxe uma base importante sobre computação em nuvem, serviços essenciais da AWS, segurança, infraestrutura global, armazenamento, redes, bancos de dados, migração e modelo de responsabilidade compartilhada. Mais um passo na minha jornada de aprofundamento em AWS e arquitetura de soluções em nuvem.",
  },
  { institution: "Anthropic", title: "Claude 101", year: "Jun 2026", logo: anthropicLogo },
  { institution: "Harvard", title: "CS50's Course Web Development", year: "Out 2025", logo: harvardLogo },
  { institution: "Rocketseat", title: "Engenharia de Prompt", year: "Out 2025", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "Introdução a automação com n8n", year: "Ago 2025", logo: rocketseatLogo },
  { institution: "DevSuperior", title: "Full Stack Java & React", year: "Abr 2024", logo: devSuperiorLogo },
  { institution: "Full Cycle", title: "Imersão Full Stack && Full Cycle", year: "Mai 2024", logo: fullCycleLogo },
  { institution: "NVIDIA", title: "Generative AI Explained", year: "Jun 2025", logo: nvidiaLogo },
  { institution: "Udemy", title: "Algoritmos e Lógica de Programação avançado", year: "Jan 2021", logo: udemyLogo },
  {
    institution: "Udemy",
    title: "Design Patterns com Java - Entendendo Padrões de Projetos",
    year: "Jan 2025",
    logo: udemyLogo,
  },
  { institution: "HackerRank", title: "SQL (Basic) Certificate", year: "Jan 2025", logo: hackerrankLogo },
  { institution: "HackerRank", title: "Software Engineer Certificate", year: "Jan 2025", logo: hackerrankLogo },
  { institution: "HackerRank", title: "Java (Basic) Certificate", year: "Jan 2023", logo: hackerrankLogo },
  { institution: "Rocketseat", title: "NLW IA", year: "Set 2023", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "NLW Expert trilha de Java", year: "Fev 2024", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "NLW Unite - DevOps", year: "Abr 2024", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "Clean Code", year: "Jul 2025", logo: rocketseatLogo },
  {
    institution: "Rocketseat",
    title: "Containers com Docker e Docker Compose",
    year: "Dez 2024",
    logo: rocketseatLogo,
  },
  { institution: "Rocketseat", title: "Fundamentos do React", year: "Mai 2025", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "Fundamentos da Cultura DevOps", year: "Jul 2024", logo: rocketseatLogo },
  { institution: "Rocketseat", title: "NodeJS", year: "Set 2022", logo: rocketseatLogo },
];
