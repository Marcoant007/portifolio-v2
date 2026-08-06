import type { Experience } from "../types";

// Para colocar a logo de uma empresa: salve a imagem em
// src/assets/images/logos/ (ex: zup.png), importe aqui em cima:
//
//   import zupLogo from "../assets/images/logos/zup.png";
//
// e adicione `logo: zupLogo` no objeto correspondente lá embaixo.
// Sem `logo`, o card cai automaticamente num monograma com a inicial.

export const experience: Experience[] = [
  {
    company: "Zup Innovation",
    role: "Senior Software Engineer",
    period: "Jul 2026 — Atual",
    current: true,
    location: "Uberlândia, MG",
    summary:
      "Novo ciclo como Software Engineer Sênior, dando sequência à atuação com sistemas backend distribuídos e arquitetura de microservices.",
    highlights: [],
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQEPrNNXCXG9_g/img-crop_100/B4EZfA_oolHcAY-/0/1751289597787?e=1787788800&v=beta&t=IANNvP2z8oUuV5TxiX8mCeJfGsXbAIXkuCcqiUVwb2I",
  },
  {
    company: "Luizalabs",
    role: "Software Engineer (SRE)",
    period: "Jan 2026 — Jun 2026",
    location: "São Paulo, Brasil / Remoto",
    summary: "Confiabilidade e observabilidade de sistemas backend em ambiente distribuído de alta complexidade.",
    highlights: [
      "Investigação e resolução de falhas em produção — logs, contratos entre serviços, filas, workers e fluxos de missão crítica",
      "Evolução da observabilidade com Grafana, Kibana e métricas, identificando erros e gargalos antes que afetem o cliente",
      "Desenvolvimento e manutenção de serviços backend em Java, com APIs, mensageria e integrações",
      "Automações que reduzem trabalho manual e tornam fluxos operacionais mais confiáveis",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGYEfbUwYeVJQ/company-logo_100_100/company-logo_100_100/0/1720719174919/luizalabs_logo?e=1787788800&v=beta&t=2yqWs-dDXX_Ezm1CwrQfURoDu2QIDO-3taqkEwtNuvU",
  },
  {
    company: "Luizalabs",
    role: "Software Engineer Full Stack",
    period: "Jan 2025 — Jun 2026",
    location: "São Paulo, Brasil",
    summary: "Melhorias em aplicações internas conectando frontend, backend e APIs para times operacionais.",
    highlights: [
      "Visão completa entre interface, regra de negócio, integração e persistência",
      "Colaboração com produto, design e engenharia para soluções técnicas sustentáveis",
      "Manutenção e evolução de sistemas internos com foco em clareza de código e estabilidade",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGYEfbUwYeVJQ/company-logo_100_100/company-logo_100_100/0/1720719174919/luizalabs_logo?e=1787788800&v=beta&t=2yqWs-dDXX_Ezm1CwrQfURoDu2QIDO-3taqkEwtNuvU",
  },
  {
    company: "Luizalabs",
    role: "Software Engineer Backend Mid Level",
    period: "Set 2024 — Jan 2025",
    location: "São Paulo, Brasil",
    summary:
      "Backend Pleno em Java 21 com Quarkus e Spring no setor de logística, no projeto Magalog — solução estratégica da Magalu para otimização de entregas e movimentação de mercadorias.",
    highlights: [
      "Observabilidade com Grafana e Kibana, com atuação proativa na resolução de problemas",
      "Testes automatizados (unitários, integração e aceitação) para qualidade e confiabilidade",
      "Mensageria com Kafka, RabbitMQ e Amazon SQS",
      "Participação em decisões técnicas, refatorações e documentação entre squads",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGYEfbUwYeVJQ/company-logo_100_100/company-logo_100_100/0/1720719174919/luizalabs_logo?e=1787788800&v=beta&t=2yqWs-dDXX_Ezm1CwrQfURoDu2QIDO-3taqkEwtNuvU",
  },
  {
    company: "Yooga",
    role: "Software Engineer Mid Level",
    period: "Fev 2022 — Ago 2024",
    location: "Vitória, Espírito Santo",
    summary: "Backend no Squad Fiscal — APIs, integrações externas e automação de processos para a legislação tributária.",
    highlights: [
      "API de integração com WhatsApp para envio automatizado de mensagens — nova funcionalidade comercial do produto",
      "Webhook integrado ao Redis para eventos de pedidos (aceito, cancelado, entregue) com notificação automática via WhatsApp",
      "Boletins diários via WhatsApp com RabbitMQ para acompanhamento de vendas, estoque e fluxo de caixa",
      "Estruturação, desde o início, da integração de Pix via Itaú",
    ],
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFXQzki85X9yw/company-logo_100_100/company-logo_100_100/0/1630497623144/yoogatecnologia_logo?e=1787788800&v=beta&t=6DNFjJmsBtQ6VZtPG0DcY9kBFPMoWmPBmiLwUNfQo_o",
  },
  {
    company: "ETAURE",
    role: "Desenvolvedor Full Stack",
    period: "Nov 2020 — Fev 2022",
    location: "Vitória, Espírito Santo, Brasil",
    summary: "Full stack em sistemas internos — da autenticação à gestão de processos e interfaces de usuário.",
    highlights: [
      "Aplicações web conectando frontend, backend, banco de dados e regras de negócio",
      "Soluções para organização e automação de processos internos",
    ],
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHIug08mqYs2w/company-logo_100_100/company-logo_100_100/0/1724359324615/etaurebr_logo?e=1787788800&v=beta&t=w06YMh6PsHEDBTr1ikeOHBDFFxPvhk3zkgR1q9EuTuY",
  },
];
