import type { StackItem } from "../types";

const DEVICON = "https://cdn.jsdelivr.net/npm/devicon@2.17.0/icons";

export const stack: StackItem[] = [
  // Frontend
  { name: "HTML5", category: "Frontend", iconUrl: `${DEVICON}/html5/html5-original.svg`, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", iconUrl: `${DEVICON}/css3/css3-original.svg`, color: "#1572B6" },
  { name: "JavaScript", category: "Frontend", iconUrl: `${DEVICON}/javascript/javascript-original.svg`, color: "#F7DF1E" },
  { name: "TypeScript", category: "Frontend", iconUrl: `${DEVICON}/typescript/typescript-original.svg`, color: "#3178C6" },
  { name: "Angular", category: "Frontend", iconUrl: `${DEVICON}/angular/angular-original.svg`, color: "#DD0031" },
  { name: "React", category: "Frontend", iconUrl: `${DEVICON}/react/react-original.svg`, color: "#61DAFB" },
  { name: "React Native", category: "Frontend", iconUrl: `${DEVICON}/react/react-original.svg`, color: "#61DAFB" },

  // Backend
  { name: "Java", category: "Backend", iconUrl: `${DEVICON}/java/java-original.svg`, color: "#ED8B00" },
  { name: "Spring", category: "Backend", iconUrl: `${DEVICON}/spring/spring-original.svg`, color: "#6DB33F" },
  { name: "Quarkus", category: "Backend", iconUrl: `${DEVICON}/quarkus/quarkus-original.svg`, color: "#4695EB" },
  { name: "Node.js", category: "Backend", iconUrl: `${DEVICON}/nodejs/nodejs-original.svg`, color: "#339933" },
  { name: "NestJS", category: "Backend", iconUrl: `${DEVICON}/nestjs/nestjs-original.svg`, color: "#E0234E" },
  {
    name: "Fastify",
    category: "Backend",
    iconUrl: `${DEVICON}/fastify/fastify-original.svg`,
    color: "#B8BFC6",
    invertOnLight: true,
  },

  // Dados & Mensageria
  { name: "PostgreSQL", category: "Dados & Mensageria", iconUrl: `${DEVICON}/postgresql/postgresql-original.svg`, color: "#4A90C4" },
  { name: "MySQL", category: "Dados & Mensageria", iconUrl: `${DEVICON}/mysql/mysql-original.svg`, color: "#5D9FCB" },
  { name: "Redis", category: "Dados & Mensageria", iconUrl: `${DEVICON}/redis/redis-original.svg`, color: "#DC382D" },
  { name: "RabbitMQ", category: "Dados & Mensageria", iconUrl: `${DEVICON}/rabbitmq/rabbitmq-original.svg`, color: "#FF6600" },
  { name: "Kafka", category: "Dados & Mensageria", iconUrl: `${DEVICON}/apachekafka/apachekafka-original.svg`, color: "#B4B7B9" },
  {
    name: "Prisma",
    category: "Dados & Mensageria",
    iconUrl: `${DEVICON}/prisma/prisma-original.svg`,
    color: "#8FA5C2",
    invertOnDark: true,
  },

  // DevOps & Observabilidade
  { name: "Docker", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/docker/docker-original.svg`, color: "#2496ED" },
  { name: "Kubernetes", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/kubernetes/kubernetes-plain.svg`, color: "#326CE5" },
  {
    name: "AWS",
    category: "DevOps & Observabilidade",
    iconUrl: `${DEVICON}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
    color: "#FF9900",
    invertOnDark: true,
  },
  {
    name: "GitHub Actions",
    category: "DevOps & Observabilidade",
    iconUrl: `${DEVICON}/github/github-original.svg`,
    color: "#B4B7B9",
    invertOnDark: true,
  },
  { name: "Grafana", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/grafana/grafana-original.svg`, color: "#F46800" },
  { name: "Prometheus", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/prometheus/prometheus-original.svg`, color: "#E6522C" },
  { name: "Kibana", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/kibana/kibana-plain.svg`, color: "#F04E98" },
  { name: "DataDog", category: "DevOps & Observabilidade", iconUrl: `${DEVICON}/datadog/datadog-original.svg`, color: "#8C5BC7" },

  // Ferramentas
  { name: "Git", category: "Ferramentas", iconUrl: `${DEVICON}/git/git-original.svg`, color: "#F05033" },
  { name: "Maven", category: "Ferramentas", iconUrl: `${DEVICON}/maven/maven-original.svg`, color: "#F69923" },
  { name: "Jest", category: "Ferramentas", iconUrl: `${DEVICON}/jest/jest-plain.svg`, color: "#C1425F" },
  { name: "JUnit", category: "Ferramentas", iconUrl: `${DEVICON}/junit/junit-plain.svg`, color: "#DC514A" },
  { name: "SonarQube", category: "Ferramentas", iconUrl: `${DEVICON}/sonarqube/sonarqube-original.svg`, color: "#4E9BD5" },
  { name: "Snyk", category: "Ferramentas", iconUrl: `${DEVICON}/snyk/snyk-original.svg`, color: "#0C4A6E" },
  { name: "Postman", category: "Ferramentas", iconUrl: `${DEVICON}/postman/postman-original.svg`, color: "#FF6C37" },
  { name: "IntelliJ IDEA", category: "Ferramentas", iconUrl: `${DEVICON}/intellij/intellij-original.svg`, color: "#000000" },
];

export const stackCategories = [
  "Frontend",
  "Backend",
  "Dados & Mensageria",
  "DevOps & Observabilidade",
  "Ferramentas",
] as const;
