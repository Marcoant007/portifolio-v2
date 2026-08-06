import type { StackItem } from "../types";

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";

export const stack: StackItem[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", iconUrl: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS3", category: "Frontend", iconUrl: `${DEVICON}/css3/css3-original.svg` },
  { name: "JavaScript", category: "Frontend", iconUrl: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "TypeScript", category: "Frontend", iconUrl: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Angular", category: "Frontend", iconUrl: `${DEVICON}/angular/angular-original.svg` },
  { name: "React", category: "Frontend", iconUrl: `${DEVICON}/react/react-original.svg` },
  { name: "React Native", category: "Frontend", iconUrl: `${DEVICON}/react/react-original.svg` },

  // Backend
  { name: "Java", category: "Backend", iconUrl: `${DEVICON}/java/java-original.svg` },
  { name: "Spring", category: "Backend", iconUrl: `${DEVICON}/spring/spring-original.svg` },
  { name: "Quarkus", category: "Backend", iconUrl: `${DEVICON}/quarkus/quarkus-original.svg` },
  { name: "Node.js", category: "Backend", iconUrl: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "NestJS", category: "Backend", iconUrl: `${DEVICON}/nestjs/nestjs-original.svg` },
  { name: "Fastify", category: "Backend", iconUrl: `${DEVICON}/fastify/fastify-original.svg`, invertOnLight: true },

  // Dados & Mensageria
  { name: "PostgreSQL", category: "Dados & Mensageria", iconUrl: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "MySQL", category: "Dados & Mensageria", iconUrl: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "Redis", category: "Dados & Mensageria", iconUrl: `${DEVICON}/redis/redis-original.svg` },
  { name: "RabbitMQ", category: "Dados & Mensageria", iconUrl: `${DEVICON}/rabbitmq/rabbitmq-original.svg` },
  { name: "Kafka", category: "Dados & Mensageria", iconUrl: `${DEVICON}/apachekafka/apachekafka-original.svg` },
  {
    name: "Prisma",
    category: "Dados & Mensageria",
    iconUrl: `${DEVICON}/prisma/prisma-original.svg`,
    invertOnDark: true,
  },

  // DevOps & Observabilidade
  { name: "Docker", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/docker/docker-original.svg` },
  { name: "Kubernetes", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
  {
    name: "AWS",
    category: "DevOps & Observabilidade",
    iconUrl: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    invertOnDark: true,
  },
  {
    name: "GitHub Actions",
    category: "DevOps & Observabilidade",
    iconUrl: `${DEVICON}/github/github-original.svg`,
    invertOnDark: true,
  },
  { name: "Grafana", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/grafana/grafana-original.svg` },
  { name: "Prometheus", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/prometheus/prometheus-original.svg` },
  { name: "Kibana", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/kibana/kibana-plain.svg` },
  { name: "DataDog", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/datadog/datadog-original.svg` },

  // Ferramentas
  { name: "Git", category: "Ferramentas", iconUrl: `${DEVICON}/git/git-original.svg` },
  { name: "Maven", category: "Ferramentas", iconUrl: `${DEVICON}/maven/maven-original.svg` },
  { name: "Jest", category: "Ferramentas", iconUrl: `${DEVICON}/jest/jest-plain.svg` },
  { name: "JUnit", category: "Ferramentas", iconUrl: `${DEVICON}/junit/junit-plain.svg` },
  { name: "SonarQube", category: "Ferramentas", iconUrl: `${DEVICON}/sonarqube/sonarqube-original.svg` },
];

export const stackCategories = [
  "Frontend",
  "Backend",
  "Dados & Mensageria",
  "DevOps & Observabilidade",
  "Ferramentas",
] as const;
