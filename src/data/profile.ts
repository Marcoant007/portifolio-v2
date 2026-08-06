import type { SocialLink } from "../types";
import profilePhoto from "../assets/images/profile/marco.jpg";

export const profile = {
  name: "Marco Antônio",
  role: "Software Engineer · Backend",
  location: "Vitória, Espírito Santo — Brasil",
  tagline:
    "Backend Engineer | Java Developer | Spring Boot · Quarkus · Kafka · RabbitMQ | Microservices & Sistemas Distribuídos",
  bio: "Desenvolvedor Backend especializado em Java (Spring Boot, Quarkus) e arquiteturas de microservices, com foco em sistemas distribuídos, mensageria, automações e integrações de alta complexidade, atuando em projetos de missão crítica com foco em performance, escalabilidade e confiabilidade.",
  photo: profilePhoto,
  aboutParagraphs: [
    "Sou o Marco — tenho 28 anos e moro em Vitória, no Espírito Santo. Curto tanto destrinchar um problema de arquitetura complexo quanto simplificar algo que virou um nó.",
    "Profissionalmente, sou Desenvolvedor Backend especializado em Java (Spring Boot, Quarkus) e arquiteturas de microservices, com foco em sistemas distribuídos, mensageria, automações e integrações de alta complexidade, atuando em projetos de missão crítica com foco em performance, escalabilidade e confiabilidade.",
    "Possuo experiência prática com Java (Spring Boot e Quarkus) e Node.js, no desenvolvimento de APIs REST, processamento assíncrono, integração entre sistemas e arquiteturas orientadas a eventos.",
    "Atuo diretamente com Kafka, RabbitMQ, Amazon SQS, além de bancos relacionais como PostgreSQL e MySQL, cache com Redis, e ambientes conteinerizados com Docker e pipelines de CI/CD.",
    "Tenho forte preocupação com qualidade de software, trabalhando com testes automatizados (unitários, integração e aceitação), além de observabilidade com Grafana e Kibana em ambiente produtivo.",
    "Apesar do meu foco principal ser backend, também já atuei como full stack com Angular, React e Vue, o que me permite uma visão mais completa de produto e integração entre camadas.",
    "Busco constantemente evoluir tecnicamente, contribuir com times colaborativos e participar de soluções que realmente gerem impacto no negócio por meio de engenharia de software bem construída.",
  ],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Marcoant007", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marco-antonnio-araujo/", icon: "linkedin" },
  { label: "Email", href: "mailto:marcoantnovo@gmail.com", icon: "email" },
];
