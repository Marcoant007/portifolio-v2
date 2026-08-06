import type { SocialLink } from "../types";

export const profile = {
  name: "Marco Antônio",
  role: "Software Engineer · Backend",
  location: "Vitória, Espírito Santo — Brasil",
  tagline:
    "Construo APIs e sistemas de mensageria em Java, com foco em microservices, sistemas distribuídos e código que aguenta produção.",
  bio: "Atuo como Software Engineer Sênior na Zup Innovation, com Java (Spring Boot, Quarkus) e Node.js, em sistemas distribuídos, mensageria (Kafka, RabbitMQ, Amazon SQS) e integrações de alta complexidade. Gosto de entender uma tecnologia a fundo construindo do zero — a maioria dos meus repositórios recentes são laboratórios pessoais de arquitetura hexagonal e processamento em lote.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Marcoant007", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marco-antonnio-araujo/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/mrcx07/", icon: "instagram" },
  { label: "Email", href: "mailto:marcoantnovo@gmail.com", icon: "email" },
];
