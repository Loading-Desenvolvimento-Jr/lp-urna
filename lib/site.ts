export const site = {
  name: "Urna Loading",
  tagline: "A votação da sua organização cabe no bolso de todo mundo.",
  description:
    "Urna Loading é o aplicativo de votação da Loading Jr. Crie uma eleição, compartilhe um código de seis caracteres e acompanhe a apuração em tempo real — direto do celular.",
  url: "https://urnaloading.com.br",
  author: "Loading Jr.",
  authorUrl: "https://www.instagram.com/loadingjr/",
  email: "contato@loadingjr.com.br",
  figma:
    "https://www.figma.com/design/qYWN4HHQZ5ejQiMyGkZtOZ/urna-loading?node-id=9-1452",
  /**
   * Quando o app for publicado, basta preencher as duas URLs abaixo.
   * Com valor `null`, os selos aparecem em estado "Em breve" e não clicáveis.
   */
  stores: {
    ios: null as string | null,
    android: null as string | null,
  },
} as const;

export const nav = [
  { href: "/#produto", label: "O app" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/docs", label: "Documentação" },
  { href: "/#download", label: "Download" },
] as const;
