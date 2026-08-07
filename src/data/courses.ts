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
import certMcpAnthropic from "../assets/images/certificates/1785785865529.jpeg";
import certClaudeApiAnthropic from "../assets/images/certificates/1785781067553.jpeg";
import certClaudeCodeAnthropic from "../assets/images/certificates/1784656438277.jpeg";
import certAwsCloudPractitioner from "../assets/images/certificates/1783088705035.jpeg";
import certN8nRocketseat from "../assets/images/certificates/1755803448211.jpeg";
import certAlgoritmosUdemy from "../assets/images/certificates/UC-9415fdc4-18ed-4086-be99-2147eb16d0d0.jpg";
import certDesignPatternsUdemy from "../assets/images/certificates/UC-b36084ae-32c6-4ffb-a6b1-a084f6036f05.jpg";
import certClaude101 from "../assets/images/certificates/claude101.jpg";
import certNodeJsRocketseat from "../assets/images/certificates/Certificado_Node.js - 2021.jpg";
import certNlwIaRocketseat from "../assets/images/certificates/Certificado_NLW IA.jpg";
import certNlwExpertJavaRocketseat from "../assets/images/certificates/Certificado_NLW Expert trilha de Java.jpg";
import certNlwUniteDevopsRocketseat from "../assets/images/certificates/Certificado_NLW Unite - DevOps.jpg";
import certDockerRocketseat from "../assets/images/certificates/Certificado_Containers com Docker e Docker Compose.jpg";
import certReactRocketseat from "../assets/images/certificates/Certificado_Fundamentos do React.jpg";
import certDevopsCultureRocketseat from "../assets/images/certificates/Certificado_Fundamentos da Cultura DevOps.jpg";

// (Claude Partner Badge - Claude Code já aparece em "Badges conquistados",
// com imagem própria, então não repete aqui.)

export const courses: Course[] = [
  {
    institution: "Anthropic",
    title: "Introduction to Model Context Protocol",
    year: "Ago 2026",
    logo: anthropicLogo,
    certificateImage: certMcpAnthropic,
    description:
      "This course provides comprehensive coverage of the Model Context Protocol (MCP), focusing on building both MCP servers and clients using the Python SDK. You'll learn about MCP's three core primitives—tools, resources, and prompts—and understand how they integrate with Claude AI to create powerful applications without writing extensive integration code.",
  },
  {
    institution: "Anthropic",
    title: "Building with the Claude API",
    year: "Ago 2026",
    logo: anthropicLogo,
    certificateImage: certClaudeApiAnthropic,
    description:
      "Este curso em vídeo abrangente ensina desenvolvedores a integrar a IA Claude em aplicativos usando a API Anthropic. Por meio de exercícios práticos e exemplos, os participantes aprenderão a implementar IA conversacional, geração aumentada por recuperação de informações, fluxos de trabalho automatizados e a aproveitar os recursos multimodais do Claude para processar texto, imagens e documentos.",
  },
  {
    institution: "Anthropic",
    title: "Claude Code in Action",
    year: "Jul 2026",
    logo: anthropicLogo,
    certificateImage: certClaudeCodeAnthropic,
  },
  {
    institution: "Amazon Web Services (AWS)",
    title: "AWS Cloud Practitioner Essentials",
    year: "Jun 2026",
    logo: awsLogo,
    certificateImage: certAwsCloudPractitioner,
    description:
      "Concluí o curso AWS Cloud Practitioner Essentials, da AWS Training and Certification. O conteúdo trouxe uma base importante sobre computação em nuvem, serviços essenciais da AWS, segurança, infraestrutura global, armazenamento, redes, bancos de dados, migração e modelo de responsabilidade compartilhada. Mais um passo na minha jornada de aprofundamento em AWS e arquitetura de soluções em nuvem.",
  },
  {
    institution: "Anthropic",
    title: "Claude 101",
    year: "Jun 2026",
    logo: anthropicLogo,
    certificateImage: certClaude101,
  },
  { institution: "Harvard", title: "CS50's Course Web Development", year: "Out 2025", logo: harvardLogo },
  {
    institution: "Rocketseat",
    title: "Engenharia de Prompt",
    year: "Out 2025",
    logo: rocketseatLogo,
    credentialUrl: "https://app.rocketseat.com.br/certificates/997f7ded-22b8-4ddf-b0f3-3cb03d223669",
  },
  {
    institution: "Rocketseat",
    title: "Introdução a automação com n8n",
    year: "Ago 2025",
    logo: rocketseatLogo,
    certificateImage: certN8nRocketseat,
  },
  { institution: "DevSuperior", title: "Full Stack Java & React", year: "Abr 2024", logo: devSuperiorLogo },
  { institution: "Full Cycle", title: "Imersão Full Stack && Full Cycle", year: "Mai 2024", logo: fullCycleLogo },
  { institution: "NVIDIA", title: "Generative AI Explained", year: "Jun 2025", logo: nvidiaLogo },
  {
    institution: "Udemy",
    title: "Algoritmos e Lógica de Programação avançado",
    year: "Jun 2021",
    logo: udemyLogo,
    certificateImage: certAlgoritmosUdemy,
    credentialUrl: "https://ude.my/UC-9415fdc4-18ed-4086-be99-2147eb16d0d0",
  },
  {
    institution: "Udemy",
    title: "Design Patterns com Java - Entendendo Padrões de Projetos",
    year: "Set 2024",
    logo: udemyLogo,
    certificateImage: certDesignPatternsUdemy,
    credentialUrl: "https://ude.my/UC-b36084ae-32c6-4ffb-a6b1-a084f6036f05",
  },
  { institution: "HackerRank", title: "SQL (Basic) Certificate", year: "Jan 2025", logo: hackerrankLogo },
  {
    institution: "HackerRank",
    title: "Software Engineer Certificate",
    year: "Jan 2025",
    logo: hackerrankLogo,
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/9382276dc038",
  },
  {
    institution: "HackerRank",
    title: "Java (Basic) Certificate",
    year: "Jan 2023",
    logo: hackerrankLogo,
    credentialUrl: "https://www.hackerrank.com/certificates/iframe/e04bcfb8be45",
  },
  {
    institution: "Rocketseat",
    title: "NLW IA",
    year: "Set 2023",
    logo: rocketseatLogo,
    certificateImage: certNlwIaRocketseat,
  },
  {
    institution: "Rocketseat",
    title: "NLW Expert trilha de Java",
    year: "Fev 2024",
    logo: rocketseatLogo,
    certificateImage: certNlwExpertJavaRocketseat,
  },
  {
    institution: "Rocketseat",
    title: "NLW Unite - DevOps",
    year: "Abr 2024",
    logo: rocketseatLogo,
    certificateImage: certNlwUniteDevopsRocketseat,
  },
  {
    institution: "Rocketseat",
    title: "Clean Code",
    year: "Jul 2025",
    logo: rocketseatLogo,
    credentialUrl: "https://app.rocketseat.com.br/certificates/4efc2672-c5f9-475d-a9a6-a4a7dfb9f97a",
  },
  {
    institution: "Rocketseat",
    title: "Containers com Docker e Docker Compose",
    year: "Dez 2024",
    logo: rocketseatLogo,
    certificateImage: certDockerRocketseat,
    credentialUrl: "https://app.rocketseat.com.br/certificates/4c105935-66c1-48b9-9eed-64c4d61a1227",
  },
  {
    institution: "Rocketseat",
    title: "Fundamentos do React",
    year: "Mai 2025",
    logo: rocketseatLogo,
    certificateImage: certReactRocketseat,
    credentialUrl: "https://app.rocketseat.com.br/certificates/23a05669-94d4-4fac-8a5a-b623c3319831",
  },
  {
    institution: "Rocketseat",
    title: "Fundamentos da Cultura DevOps",
    year: "Jul 2024",
    logo: rocketseatLogo,
    certificateImage: certDevopsCultureRocketseat,
    credentialUrl: "https://app.rocketseat.com.br/certificates/0e5d1053-8574-43f4-a2fd-d30822816703",
  },
  {
    institution: "Rocketseat",
    title: "NodeJS",
    year: "Set 2022",
    logo: rocketseatLogo,
    certificateImage: certNodeJsRocketseat,
    credentialUrl: "https://app.rocketseat.com.br/certificates/af5bcd45-1dda-4958-a57a-49269d1407b9",
  },
];
