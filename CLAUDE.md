# new-portifolio-v2 — contexto para Claude Code

Portfólio pessoal de Marco Antônio (backend Java/Quarkus/Spring, TypeScript/Node).
Vite + React 18 + TypeScript, sem framework de UI. Site estático de uma página só
(`App.tsx` monta as seções em ordem, sem roteamento).

Ver [PLANNING.md](PLANNING.md) para o histórico de decisões de conteúdo (por que cada
seção tem o que tem). Este arquivo é sobre **como trabalhar no código sem quebrar coisa**.

## Comandos

```
pnpm dev       # vite dev server
pnpm build     # tsc -b && vite build
pnpm lint      # tsc --noEmit (não há eslint nem testes — isso é a única checagem estática)
```

**Use pnpm, nunca npm.** `packageManager` no `package.json` está pinado em `pnpm@10.33.3`
e o lockfile fonte de verdade é `pnpm-lock.yaml`. Existe um `package-lock.json` na raiz
que é resíduo de um `npm install` rodado por engano numa sessão anterior — não é para
existir; se for mexer em dependências, rode `pnpm install` e ignore/pode apagar o
`package-lock.json` se sobrar de novo.

Não há suíte de testes. "Funciona" = `pnpm lint` passa + inspeção visual real (ver seção
de QA visual abaixo) — nunca declare uma mudança de UI pronta só porque compilou.

## Regra inegociável: conteúdo é real, não inventado

Nada de projeto, badge, certificado, empresa, número ou métrica fictícios. Todo dado em
`src/data/*.ts` tem que rastrear para uma fonte real e verificável:

- **Projetos** (`src/data/projects.ts`): vieram da GitHub API
  (`api.github.com/users/Marcoant007/repos`), não de memória/suposição.
- **Badges conquistados** (`src/data/badges.ts`): credenciais reais do Credly/emissor,
  com imagem baixada localmente (ver seção de assets).
- **Docs/posts** (`src/data/docs.ts`): READMEs reais de repositórios do usuário, não
  posts de blog inventados (não existe blog publicado).
- **Vídeos** (`src/data/videos.ts`): só existe 1 vídeo real; o resto do grid é
  explicitamente marcado com `isPlaceholder: true` — não invente outros vídeos "reais".

Se faltar dado real para preencher uma seção, pergunte ao usuário ou deixe um
placeholder **claramente marcado como tal** no código (ex.: `isPlaceholder: true` como em
`videos.ts`) e siga em frente — para conteúdo dinâmico externo (cards de stats do GitHub,
serviços de badge tipo shields.io) o usuário já pediu explicitamente para não ficar
testando/ajustando parâmetros de query à exaustão (theme, cores, variantes) só por
polimento cosmético; faça uma checagem rápida de que a abordagem funciona, deixe o
placeholder óbvio e deixe o ajuste fino para depois, a pedido dele. Isso não vale para
dado que afeta correção (número de repositórios, texto de badge, link de credencial) —
aí a verificação continua importando.

## Regra inegociável: assets de logo/imagem sempre locais

**Nunca** referencie no código uma URL de CDN de terceiro (LinkedIn `media.licdn.com`,
`img-c.udemycdn.com`, `wallpaperaccess.com`, `encrypted-tbn0.gstatic.com`, etc.) como
`src` de imagem. Duas razões concretas, já vividas neste projeto:

1. URLs do LinkedIn (`media.licdn.com/...?e=<unix-timestamp>&...`) **expiram** — o
   parâmetro `e=` é um timestamp de validade de ~poucos meses. Qualquer logo assim vai
   quebrar sozinho depois.
2. Vários hosts de imagem "temática" usados como capa de projeto sem screenshot
   próprio (`img-c.udemycdn.com`, `wallpaperaccess.com`, `encrypted-tbn0.gstatic.com`
   em `src/data/projects.ts`) não são CDNs estáveis/pensados para hotlink — podem
   bloquear referrer, sumir ou mudar sem aviso. **Isso já está na base hoje como
   dívida técnica conhecida** — ao mexer em `projects.ts`, prefira migrar essas capas
   para uma imagem local ou para o preview abstrato gerado (gradiente + inicial) em vez
   de adicionar mais hotlinks desse tipo.

Fluxo correto para adicionar um logo/badge/screenshot real:

1. Baixe o arquivo real com `curl -sL -o <destino> "<url>" -w "HTTP:%{http_code} SIZE:%{size_download}\n"`
   e confira `HTTP:200` e um `SIZE` condizente com uma imagem de verdade (não uma página
   de erro de alguns bytes).
2. Salve em `src/assets/images/<categoria>/` (`badges/`, `logos/`, `projects/`,
   `certificates/`, `profile/`), formato `.webp` quando possível.
3. Importe estaticamente no `src/data/*.ts` correspondente (`import x from
   "../assets/images/..."`) — nunca uma string de URL remota — para que o Vite
   empacote o arquivo e ele pare de depender de rede externa em produção.

Exceção aceita: `src/data/githubAchievements.ts` usa hotlink direto para
`github.githubassets.com` — é CDN de primeira parte do próprio GitHub, URL sem token de
expiração, considerado estável. Não é padrão a seguir para outros domínios.

Existe uma skill de projeto (`/real-asset` — ver `.claude/skills/real-asset/`) que
encapsula esse fluxo passo a passo.

## Arquitetura e convenções

```
src/
  components/
    layout/     Header, Footer, ThemeToggle
    ui/         componentes reutilizáveis: Section, Tag, ProjectCard, ProjectGallery,
                IconChip, Lightbox, SocialLinks, icons.tsx (SVGs inline, sem lib de ícones)
    sections/   uma seção por arquivo, todas montadas em App.tsx: Hero, About,
                Experience, Education, Stack, Projects, Badges, Docs, Videos
  data/         dados tipados (profile, stack, projects, experience, education, courses,
                badges, githubAchievements, docs, videos) — zero JSX/lógica de UI aqui
  hooks/        useTheme, useSmoothScroll (Lenis), useHeaderScroll, usePointerSpotlight
  lib/gsap.ts   setup do GSAP + ScrollTrigger e o helper compartilhado `revealCards`
  types/        interfaces em index.ts, uma por tipo de dado (Project, StackItem, etc.)
  styles/       tokens.css (design tokens) + global.css (reset/utilitários)
```

- **CSS Modules por componente** (`Componente.module.css`), sem Tailwind/styled-components.
  Cores/espaçamento/tipografia vêm sempre das custom properties de `tokens.css` — não
  hardcode hex/rem soltos num module.css se já existe um token equivalente.
- **Dados e UI são separados de propósito**: adicionar/editar conteúdo é sempre mexer em
  `src/data/*.ts`, nunca em JSX. Se você está editando um `.tsx` em `sections/` só para
  trocar texto/link, provavelmente devia estar editando o `data/*.ts` correspondente.
- **Animações de scroll** passam por `lib/gsap.ts`: `revealCards()` é o padrão
  "cards entram em cascata" usado por todo grid (Projects, Badges, Education, Stack,
  Docs, Videos) — reuse em vez de escrever um novo `ScrollTrigger` do zero. Todo `useGSAP`
  novo deve checar `prefersReducedMotion()` antes de animar.
- **Tema**: dark é o padrão (`color-scheme: dark` no `:root`), light via
  `[data-theme="light"]` + toggle persistido em `localStorage`. O `index.html` tem um
  script inline que aplica o tema antes do primeiro paint — não mexer nisso sem entender
  que é para evitar flash de tema errado.

## QA visual (obrigatório para qualquer mudança de layout/CSS/animação)

Sessões anteriores deixaram um rastro de scripts de verificação descartáveis
(`.verify-fix.cjs`, `.verify-gsap.cjs`, `.verify-fixedheight.cjs`,
`.verify-fixedheight2.cjs`, `.verify-hashfix.cjs`, `.verify-titleclip.cjs` — todos já
removidos do repo, mas o padrão se repetiu tantas vezes que virou sinal de bugs de
layout recorrentes: clipping de título, altura fixa de seção, scroll/hash). Antes de
declarar uma mudança visual pronta:

1. Suba o dev server (`pnpm dev`) e confirme HTTP 200 em `http://localhost:5173`.
2. Tire screenshot full-page via Playwright (`npx playwright@1.62.1 screenshot ...` — já
   usado neste projeto, não precisa instalar como dependência) em **dark e light**, e em
   pelo menos uma largura mobile (~390px) e desktop (~1440px).
3. Olhe especificamente para: texto cortado/clipado, alturas fixas que quebram com
   conteúdo maior, scroll horizontal indesejado, o toggle de tema, e o progress bar do
   header (`useHeaderScroll`).
4. Apague qualquer script/screenshot temporário do repo ao terminar — não deixe
   `.verify-*.cjs` ou `.png` soltos na raiz (use o scratchpad, não a raiz do projeto).

Existe uma skill de projeto (`/visual-qa`) que faz esse loop de forma padronizada em vez
de reinventar um script novo a cada sessão.

## Como estender

- **Novo projeto**: objeto em `src/data/projects.ts` (`featured: true` entra no grid
  principal); se não tiver screenshot real, prefira o preview abstrato a mais um hotlink
  temático.
- **Novo badge/certificação**: baixar imagem real (ver fluxo de assets acima), importar
  e adicionar em `src/data/badges.ts` ou `src/data/courses.ts`.
- **Novo post/nota técnica**: `src/data/docs.ts`, sempre apontando pra um README real.
- **Trocar vídeo placeholder**: `src/data/videos.ts`, trocar `youtubeId` e remover
  `isPlaceholder`.
