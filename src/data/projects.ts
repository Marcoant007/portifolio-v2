import type { Project } from "../types";
import moneyzi1 from "../assets/images/projects/moneyzi-1.webp";
import mrxBaileysStore1 from "../assets/images/projects/mrx-baileys-store-1.webp";
import soundflow1 from "../assets/images/projects/soundflow-1.webp";

// Capas temáticas (não são screenshots reais) para os labs sem UI própria.
const QUARKUS_COVER = "https://img-c.udemycdn.com/course/480x270/2767294_9282_11.jpg?w=3840&q=75";
const GO_COVER =
  "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F03z5jvr1isyrsrm5unab.jpg";
const SPRING_COVER = "https://wallpaperaccess.com/full/9954240.jpg";
const SOCKET_COVER =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5ijpV6BGifG1bfLehpfaQShCoWsqUikEiVrJNM2Cn3TkGTG0WJXlv6Pn&s=10";

export const projects: Project[] = [
  {
    slug: "moneyzi-backend",
    name: "Moneyzi Backend",
    description: "Backend em TypeScript para um produto de controle financeiro pessoal, em desenvolvimento ativo.",
    stack: ["TypeScript", "Node.js"],
    repoUrl: "https://github.com/Marcoant007/moneyzi-backend",
    demoUrl: "https://moneyzi-backend.vercel.app",
    images: [moneyzi1],
    featured: true,
    status: "Em desenvolvimento",
  },
  {
    slug: "mrx-baileys-store",
    name: "mrx-baileys-store",
    description:
      "Atualização da lib baileys-store para a versão mais recente do Baileys (API não-oficial do WhatsApp Web), com persistência via Prisma — publicada como pacote no npm.",
    stack: ["TypeScript", "Prisma", "Node.js"],
    repoUrl: "https://github.com/Marcoant007/mrx-baileys-store",
    demoUrl: "https://www.npmjs.com/package/mrx-baileys-store",
    images: [mrxBaileysStore1],
    featured: true,
  },
  {
    slug: "soundflow",
    name: "SoundFlow",
    description:
      "Produto que explica por que o inglês falado soa tão diferente do escrito — linking, sons reduzidos, stress — para estudantes brasileiros de inglês.",
    stack: ["TypeScript", "Next.js"],
    repoUrl: "https://github.com/Marcoant007/SoundFlow",
    demoUrl: "https://sound-flow-mu.vercel.app",
    images: [soundflow1],
    featured: true,
  },
  {
    slug: "rinha-backend-2026",
    name: "Rinha de Backend 2026",
    description:
      "Detecção de fraude em transações com busca vetorial KNN: Nginx balanceando duas APIs e um serviço de vetores, tudo sob orçamento de 1 vCPU e 350MB. Terminei em 84º lugar na competição.",
    stack: ["Go", "Docker", "Nginx"],
    repoUrl: "https://github.com/Marcoant007/rinha-backend-2026",
    images: [GO_COVER],
    featured: true,
    status: "#84",
  },
  {
    slug: "duplicata-flow-lab",
    name: "Duplicata Flow Lab",
    description:
      "API de processamento em lote de duplicatas escriturais: upload de CSV, validação em cadeia (Chain of Responsibility), eventos assíncronos via RabbitMQ e rastreabilidade com tracing distribuído.",
    stack: ["Java 21", "Spring Boot", "Spring Batch", "RabbitMQ", "PostgreSQL", "Zipkin"],
    repoUrl: "https://github.com/Marcoant007/duplicata-flow-lab",
    images: [SPRING_COVER],
    featured: true,
  },
  {
    slug: "escritural-event-lab",
    name: "Escritural Event Lab",
    description:
      "Laboratório pessoal do ecossistema Quarkus: arquitetura hexagonal, eventos de domínio e mensageria com Kafka, evoluindo em fatias pequenas e sempre testadas.",
    stack: ["Java 21", "Quarkus", "Kafka", "PostgreSQL", "JUnit 5"],
    repoUrl: "https://github.com/Marcoant007/escritural-event-lab",
    images: [QUARKUS_COVER],
    featured: true,
    status: "Em evolução",
  },
  {
    slug: "socket-chat-io",
    name: "socket-chat.io",
    description: "Chat assíncrono em tempo real com Socket.IO — troca de mensagens instantânea entre usuários conectados.",
    stack: ["Node.js", "Socket.IO", "TypeScript"],
    repoUrl: "https://github.com/Marcoant007/socket-chat.io",
    images: [SOCKET_COVER],
    featured: true,
  },
  {
    slug: "quarkus-rabbit-queues",
    name: "Quarkus RabbitMQ Dead-Letter Queue",
    description:
      "Serviço de mensageria com Quarkus explorando filas de dead-letter no RabbitMQ para lidar com falhas de consumo de forma resiliente.",
    stack: ["Java", "Quarkus", "RabbitMQ"],
    repoUrl: "https://github.com/Marcoant007/quarkus-rabbit-queues",
    images: [QUARKUS_COVER],
    featured: true,
  },
  {
    slug: "geo-locator",
    name: "Geo-Locator",
    description: "Serviço RESTful em Quarkus para cadastro e busca de pontos de interesse por proximidade.",
    stack: ["Java", "Quarkus", "PostgreSQL"],
    repoUrl: "https://github.com/Marcoant007/geo-locator",
    images: [QUARKUS_COVER],
    featured: true,
  },

  // Outros projetos (inclui os do portfólio antigo)
  {
    slug: "notifications-service",
    name: "Notifications Service",
    description: "Serviço de notificações com NestJS e Kafka, desacoplando o disparo de eventos do processamento assíncrono.",
    stack: ["NestJS", "TypeScript", "Kafka"],
    repoUrl: "https://github.com/Marcoant007/notifications-service",
    featured: false,
  },
  {
    slug: "rentx-service-api",
    name: "RentX Service API",
    description:
      "API de aluguel de carros construída para aprofundar Node.js, TypeScript e Docker no desenvolvimento back-end moderno.",
    stack: ["Node.js", "TypeScript", "Docker"],
    repoUrl: "https://github.com/Marcoant007/rentx-service-api",
    featured: false,
  },
  {
    slug: "dsmeta",
    name: "DSMeta — Sales Registers",
    description:
      "Aplicação de registro de vendas construída na Semana Spring/React da DevSuperior, unindo API em Spring Boot a um front-end em React.",
    stack: ["Java", "Spring Boot", "React", "TypeScript"],
    repoUrl: "https://github.com/Marcoant007/Dsmeta",
    images: [SPRING_COVER],
    featured: false,
  },
  {
    slug: "players",
    name: "Players",
    description:
      "Cadastro de jogadores de futebol e seus times, com cards ao estilo Ultimate Team — projeto pessoal em Node.js e Angular.",
    stack: ["Angular", "TypeScript", "Node.js"],
    repoUrl: "https://github.com/Marcoant007/Players",
    featured: false,
  },
  {
    slug: "family-food",
    name: "Família Alicerce",
    description: "Cardápio digital com carrinho de pedidos por categoria, para um estabelecimento local de alimentação.",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Marcoant007/family-food",
    featured: false,
  },
  {
    slug: "youtube-express-api",
    name: "YouTube Express API",
    description: "API em Express que integra com a YouTube Data API para busca e listagem de vídeos.",
    stack: ["Node.js", "Express", "TypeScript"],
    repoUrl: "https://github.com/Marcoant007/youtube-express-api",
    featured: false,
  },
  {
    slug: "caderneta-de-vacina",
    name: "Caderneta de Vacina Online",
    description: "TCC do técnico em Informática: sistema Java Web para gestão de vacinas, com controle de acesso e sessões HTTP.",
    stack: ["Java", "JSP/Servlets", "SQL"],
    repoUrl: "https://github.com/Marcoant007/Caderneta-de-vacina",
    featured: false,
  },
  {
    slug: "happy",
    name: "Happy",
    description: "App do NLW da Rocketseat para localizar orfanatos e agendar visitas — meu primeiro contato com React Native.",
    stack: ["React Native", "TypeScript", "Node.js"],
    repoUrl: "https://github.com/Marcoant007/NLW-03-APP-HAPPY",
    featured: false,
  },
];
