import type { DocPost } from "../types";

/**
 * Sourced from the READMEs of my own repositories — real technical
 * documentation rather than blog posts.
 */
export const docs: DocPost[] = [
  {
    title: "Arquitetura hexagonal na prática com Quarkus",
    summary:
      "Como mantenho o domínio isolado de framework em um laboratório de Quarkus: portas e adapters, eventos de domínio, Kafka via SmallRye Reactive Messaging e testes de integração com Dev Services (containers efêmeros, sem infra manual).",
    date: "Julho 2026",
    href: "https://github.com/Marcoant007/escritural-event-lab#readme",
    source: "README · escritural-event-lab",
  },
  {
    title: "Processamento em lote com Spring Batch e mensageria desacoplada",
    summary:
      "Decisões técnicas por trás de uma API de importação de CSV: pipeline de validação em Chain of Responsibility, publicação de eventos no RabbitMQ para não travar o batch em uma chamada externa, e tracing distribuído com Zipkin.",
    date: "Junho 2026",
    href: "https://github.com/Marcoant007/duplicata-flow-lab#readme",
    source: "README · duplicata-flow-lab",
  },
  {
    title: "Detecção de fraude com busca vetorial em Go",
    summary:
      "Arquitetura da minha submissão para a Rinha de Backend 2026: transformação de transações em vetores de 14 dimensões, busca KNN entre ~3 milhões de referências e um orçamento apertado de CPU e memória.",
    date: "Maio 2026",
    href: "https://github.com/Marcoant007/rinha-backend-2026#readme",
    source: "README · rinha-backend-2026",
  },
];
