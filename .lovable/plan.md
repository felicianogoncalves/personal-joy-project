## Portfolio Dark Tech — estilo da referência

Vou montar uma landing page single-route inspirada na imagem: fundo preto, tipografia display enorme em maiúsculas, hero com imagens laterais (servidores / código), grelha de stack tecnológica, e cards de projetos selecionados.

> Nota: não me deste o nome ainda. Vou usar **"YOURNAME"** + **"E-COMMERCE & DEVOPS ENGINEER"** como placeholder no hero — diz-me depois o nome real e troco numa linha.

### Estrutura (single page com âncoras na nav)

1. **Hero**
   - Layout 3 colunas: imagem servidores (esq) · título central · imagem de código (dir)
   - Título display gigante condensado e bold (ex: Anton ou Bebas Neue), tudo maiúsculas
   - Subtítulo: "E-COMMERCE & DEVOPS ENGINEER"
   - Tagline: "Architecting scalable solutions for global brands and high-growth platforms."
   - Imagens geradas via `imagegen` (servidores neon + editor de código violeta)

2. **The Core Stack** (Services)
   - Header "THE CORE STACK / Technologies driving innovation"
   - Grelha 3×2 com ícones: Shopify, Docker, Terraform, Kubernetes, React, + 1 (ex: AWS)
   - Cada item: ícone + nome + descritor curto

3. **Selected Projects**
   - 4 cards horizontais com imagem topo + título + descrição curta
   - Exemplos: Global Shopify Migration, AWS Serverless Architecture, DevOps Pipeline Optimization, Custom E-commerce Platform
   - Imagens abstratas geradas (planeta, ondas, pipeline, têxtil)

4. **About** — bloco curto sobre experiência

5. **Contact** — email + ícones LinkedIn / GitHub / Twitter

6. **Footer** — nav links (About · Services · Projects · Contact) + ícones sociais

### Direção visual

- **Fundo:** preto puro `#000` / `#0a0a0a`, cards `#111` com borda subtil
- **Texto:** branco puro no hero, cinzentos para body
- **Acento:** roxo/violeta elétrico (`#a855f7`) puxado do código violeta da referência
- **Tipografia:** Anton (display, headlines) + Inter (body) — instalados via `@fontsource`
- **Tom:** técnico, denso, premium — sem gradientes coloridos genéricos, sem emojis

### Técnico

- Rota única `src/routes/index.tsx` (substitui placeholder atual)
- Componentes em `src/components/`: `Hero`, `CoreStack`, `Projects`, `About`, `Contact`, `Footer`, `Nav`
- Tokens de cor + fonts em `src/styles.css` (oklch, semantic tokens)
- Lucide icons para Shopify/Docker/etc onde existirem; SVG inline para os que faltam
- SEO: title, meta description, og tags no `head()` do route
- Sem backend necessário — pure frontend

### Fora de scope (posso adicionar depois)

- Formulário de contacto funcional (precisa Lovable Cloud)
- Páginas individuais por projeto
- Blog / CMS
- Animações scroll-driven complexas (mantenho fade/hover subtis)

Confirma e implemento. Se quiseres dar-me o nome agora, ainda melhor.