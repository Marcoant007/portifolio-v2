import type { EarnedBadge } from "../types";
import aiLiteracyBadge from "../assets/images/badges/ai-literacy.webp";
import awsEksBadge from "../assets/images/badges/aws-eks.webp";
import awsServerlessBadge from "../assets/images/badges/aws-serverless.webp";
import claudePartnerBadge from "../assets/images/badges/claude-partner.webp";
import confluentBadge from "../assets/images/badges/confluent-data-streaming.webp";
import ibmCybersecurityBadge from "../assets/images/badges/ibm-cybersecurity.webp";
import ibmMqBadge from "../assets/images/badges/ibm-mq-developer-essentials.png";
import ibmKafkaBadge from "../assets/images/badges/simplifying-data-pipelines-with-apache-kafka.png";

/**
 * Real earned badges (Credly and equivalents). Add a new one by dropping the
 * image in src/assets/images/badges/, importing it above, and pushing an
 * entry here — the grid and the lightbox pick it up automatically.
 */
export const earnedBadges: EarnedBadge[] = [
  {
    title: "Simplifying Data Pipelines with Apache Kafka",
    issuer: "IBM Skills Network",
    image: ibmKafkaBadge,
    description:
      "Formação intermediária sobre simplificação de pipelines de dados com Apache Kafka.",
    color: "#8b1043",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Emitida 5 de ago. de 2026",
    image: ibmCybersecurityBadge,
    description:
      "Conceitos fundamentais de segurança da informação: tipos de ameaças e ataques, princípios de confidencialidade/integridade/disponibilidade, gestão de riscos e boas práticas de defesa.",
    color: "#ec4899",
  },
  {
    title: "AI Literacy",
    issuer: "IBM SkillsBuild",
    date: "Emitida 4 de ago. de 2026",
    image: aiLiteracyBadge,
    description:
      "Alfabetização em inteligência artificial: como modelos de IA funcionam, onde se aplicam no dia a dia e considerações éticas e de responsabilidade no uso dessas ferramentas.",
    color: "#2dd4bf",
  },
  {
    title: "AWS Educate Getting Started with Serverless - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    date: "Emitida 4 de ago. de 2026",
    image: awsServerlessBadge,
    description:
      "Introdução à computação serverless na AWS — conceitos de funções como serviço, eventos e quando trocar servidores gerenciados por arquiteturas orientadas a eventos.",
    color: "#3b82f6",
  },
  {
    title: "AWS Knowledge: Amazon EKS - Training Badge",
    issuer: "Amazon Web Services Training and Certification",
    date: "Emitida 4 de ago. de 2026",
    image: awsEksBadge,
    description:
      "Fundamentos do Amazon Elastic Kubernetes Service: orquestração de containers gerenciada, arquitetura de cluster e integração com o ecossistema AWS.",
    color: "#ec4899",
  },
  {
    title: "Claude Partner Badge - Claude Code",
    issuer: "Anthropic",
    date: "Expira em 31 de jan. de 2027",
    image: claudePartnerBadge,
    description:
      "Reconhecimento da Anthropic pelo uso do Claude Code no fluxo de desenvolvimento — da automação de tarefas de engenharia à condução de projetos complexos com um agente de IA.",
    color: "#cc785c",
  },
  {
    title: "Data Streaming Engineer — Foundations",
    issuer: "Confluent Certified",
    image: confluentBadge,
    description:
      "Fundamentos de streaming de dados com Apache Kafka e Confluent: produtores/consumidores, tópicos e partições, e os padrões de arquitetura orientada a eventos em tempo real.",
    credentialUrl: "https://certificates.confluent.io/27cc15d5-19b6-44e7-bc7b-ae987dd0c0f7#acc.Y82Mh6cR",
    color: "#3b82f6",
  },
  {
    title: "IBM MQ Developer Essentials",
    issuer: "IBM",
    image: ibmMqBadge,
    description:
      "Conceitos fundamentais de mensageria com IBM MQ: criação e configuração de queue managers, e objetos como channels, queues e topics. Desenvolvimento de aplicações JMS para integração com IBM MQ, incluindo troubleshooting e resolução de problemas de conectividade.",
    color: "#8b1043",
  },
];
