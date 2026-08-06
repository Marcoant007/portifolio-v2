# Planejamento — Portfólio v2

## Stack técnica

- **Vite + React 18 + TypeScript** (mudança em relação ao plano inicial de HTML/CSS/JS puro, a pedido do usuário: "React com TypeScript bonitinho, seguindo boas práticas de componentização").
- CSS Modules por componente (`Componente.module.css`) + um design system global em `src/styles/tokens.css` (cores/tipografia/espaçamento como CSS custom properties) e `src/styles/global.css` (reset + utilitários).
- Sem bibliotecas de UI/ícones externas: ícones de stack vêm da CDN pública do **devicon** (versão fixa `2.17.0`, URLs validadas uma a uma via HTTP antes de usar); ícones de UI (github, linkedin, sol/lua, etc.) são SVGs inline em `src/components/ui/icons.tsx`.
- Sem dependência de build extra (Tailwind, styled-components) — mantém o bundle enxuto, alinhado ao pedido de performance.

## Estrutura de pastas

```
src/
  components/
    layout/     Header, Footer, ThemeToggle
    ui/         Section, Tag, ProjectCard, SocialLinks, RevealOnScroll, icons.tsx
    sections/   Hero, Stack, Projects, Badges, Docs, Videos (uma por seção do briefing)
  data/         profile.ts, stack.ts, projects.ts, docs.ts (dados tipados, sem lógica de UI)
  hooks/        useTheme (dark/light + localStorage), useRevealOnScroll (IntersectionObserver)
  types/        interfaces compartilhadas (Project, StackItem, DocPost, VideoItem, SocialLink)
  styles/       tokens.css, global.css
```

Separação de dados (`src/data`) e componentes é proposital: trocar/atualizar conteúdo (novo projeto, novo post) não deve exigir mexer em JSX.

## Design system

- **Dark mode como padrão**, light mode via toggle (persistido em `localStorage`, com script inline no `index.html` que aplica o tema antes do primeiro paint para não piscar).
- Paleta: 1 accent (índigo/violeta, `hsl(243, ...)`) + neutros (`--bg`, `--surface`, `--border`, `--text-primary/secondary/tertiary`), com valores diferentes por tema.
- Tipografia: **Space Grotesk** (display/headings) + **Inter** (corpo) + **JetBrains Mono** (labels técnicos, tags de stack) — carregadas via Google Fonts com `font-display: swap`.
- Micro-interações: hover states sutis (translateY + accent), fade/slide-in on scroll via `RevealOnScroll` (respeita `prefers-reduced-motion`).

## Conteúdo por seção — decisões e fontes

1. **Hero** — nome, cargo, bio adaptados do currículo do portfólio antigo (`meu-portifolio/index.html`). Sem foto de perfil por enquanto (ver "Pendências").
2. **Stack** — 21 tecnologias reais do currículo/repositórios (Java, Quarkus, Spring, Node, NestJS, TS, Angular, Postgres, MySQL, Redis, RabbitMQ, Kafka, Prisma, Docker, AWS, Git, Jest, JUnit), agrupadas em Frontend / Backend / Dados & Mensageria / Ferramentas.
3. **Projetos** — pesquisado via GitHub API (`api.github.com/users/Marcoant007/repos`) para pegar a atividade **real e atual**, não só o que estava no portfólio antigo (que tinha só projetos de bootcamp de 2022-2024). Resultado: 6 projetos em destaque (labs de arquitetura/mensageria recentes — `duplicata-flow-lab`, `escritural-event-lab`, `quarkus-rabbit-queues`, `SoundFlow`, `rentx-service-api`, `Dsmeta`) + 6 secundários, ordenados por relevância para o momento atual (backend Java/Quarkus/Spring), não por data.
4. **Badges** — shields.io + github-readme-stats (a implementar).
5. **Documentação/Posts** — sem blog publicado. Por decisão do usuário, a seção usa **READMEs reais de repositórios** (`escritural-event-lab`, `duplicata-flow-lab`, `rinha-backend-2026`) como "notas técnicas", com resumo e link para o README no GitHub. Nada inventado.
6. **Vídeos** — só existe 1 vídeo real (demo do projeto "Caderneta de Vacina" no YouTube, linkado no portfólio antigo). Por decisão do usuário, a seção fica com esse vídeo real + 1 item placeholder claramente marcado (`isPlaceholder: true` em `src/data/videos.ts`) para o usuário substituir depois.

## Pendências / próximos passos

- [ ] **Imagens**: por pedido do usuário, parei de copiar screenshots/fotos do portfólio antigo. Os `ProjectCard` devem renderizar um preview abstrato (gradiente + inicial do projeto) quando `project.image` não existir, e usar a imagem real quando o campo for preenchido. O usuário vai adicionar as imagens depois em `src/assets/images/`.
- [ ] Construir os componentes de `layout/` (Header/nav + menu mobile, Footer) e `ui/` (ProjectCard, IconChip) que ainda faltam.
- [ ] Construir as 6 seções (`sections/*.tsx`) e montá-las em `App.tsx`.
- [ ] Badges (GitHub stats/streak via imagens dinâmicas do github-readme-stats + shields.io, com cores combinando com a paleta).
- [ ] Rodar `npm run dev`, revisar responsividade (mobile/tablet/desktop) e o toggle de tema no navegador antes de dar como concluído.

## Como estender depois

- **Novo projeto**: adicionar um objeto em `src/data/projects.ts` (`featured: true` entra no grid principal).
- **Novo post/nota técnica**: adicionar em `src/data/docs.ts`.
- **Trocar vídeo placeholder**: editar `src/data/videos.ts`, trocar `youtubeId` e remover `isPlaceholder`.
- **Adicionar screenshot de projeto**: colocar o arquivo em `src/assets/images/projects/`, importar no `projects.ts` e preencher o campo `image`.
