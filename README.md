# Landing page — Urna Loading

Site de apresentação do [Urna Loading](https://github.com/), o aplicativo de votação
da Loading Jr. Next.js 16 (App Router) + Tailwind CSS v4 + TypeScript.

## Rodando

```sh
npm install
npm run dev
```

O site sobe em `http://localhost:3000`.

```sh
npm run build   # build de produção
npm run lint    # eslint
```

## Estrutura

```text
app/
├── layout.tsx            # Poppins, metadata, Open Graph
├── globals.css           # tokens de design e animações
├── page.tsx              # landing (hero, produto, como funciona, docs, download)
├── sitemap.ts
└── docs/
    ├── page.tsx          # índice da documentação
    └── [slug]/page.tsx   # guia individual, gerado estaticamente
components/
├── site-header.tsx       # topo fixo com menu mobile
├── site-footer.tsx
├── phone.tsx             # moldura de celular + telas do app recriadas em CSS
├── app-access.tsx        # download do APK, acesso web e iOS em breve
├── reveal.tsx            # revelação no scroll (IntersectionObserver)
└── logo.tsx
content/
└── docs.ts               # conteúdo dos guias e tutoriais
lib/
└── site.ts               # nome, textos base e links do APK e da versão web
public/
├── brand/urna-mark.svg   # marca, extraída do export do Figma
└── illustrations/        # ilustrações reaproveitadas do app
```

## Identidade visual

Os tokens são espelhados de `lib/core/design_system/` do app Flutter, para o site e o
aplicativo não divergirem:

| Token           | Hex       | Uso                          |
| --------------- | --------- | ---------------------------- |
| `primary`       | `#6B43B5` | ações, destaques             |
| `primary-dark`  | `#4E2F86` | bloco de transparência       |
| `primary-soft`  | `#D8C2FF` | grifos, gráficos secundários |
| `primary-tint`  | `#F0EDF8` | fundos de apoio              |
| `teal`          | `#00C1B2` | acento pontual               |
| `canvas`        | `#F8F9FA` | fundo da página              |
| `ink` / `muted` | `#1F2937` / `#666666` | texto           |

Tipografia: Poppins (400/500/600/700), carregada via `next/font`.

## O que falta preencher

1. **Links de acesso** — em `lib/site.ts`, preencha `access.apk` com o link direto
   do arquivo APK (ou um caminho em `public`, como `/downloads/urna-loading.apk`)
   e `access.web` com o endereço da versão web. Enquanto forem `null`, os botões
   indicam "Link em breve" e não são clicáveis. O iOS permanece desativado como
   opção futura; usuários de iPhone podem participar pela versão web.
2. **Screenshots reais do app** — hoje as telas no site são recriadas em CSS a partir
   do design system (`components/phone.tsx`). Trocar por capturas reais é opcional.
3. **Imagem de Open Graph** — adicionar `app/opengraph-image.png` (1200×630).
4. **Domínio** — ajustar `site.url` em `lib/site.ts` antes do deploy.

## Editando a documentação

Os guias ficam em `content/docs.ts`, um array de objetos. Cada guia tem seções, e cada
seção é uma lista de blocos: `p` (parágrafo), `list`, `steps` (passo a passo numerado)
e `callout` (destaque, com tom `info` ou `warn`). Adicionar um guia novo é adicionar um
item ao array — a rota, o índice lateral, o rodapé e o sitemap se atualizam sozinhos.

## Deploy

Projeto pronto para a Vercel: importar o repositório e publicar, sem variáveis de
ambiente.
