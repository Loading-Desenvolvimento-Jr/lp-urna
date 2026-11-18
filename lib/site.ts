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
   * Informe o link direto do APK e o endereço da versão web.
   * Com valor `null`, a opção fica desativada até o link ser configurado.
   */
  access: {
    apk: "/downloads/Urna%20Loading.apk",
    web: "https://urna-35e78.web.app/",
  },
} as const;

export const nav = [
  { href: "/#produto", label: "O app" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/docs", label: "Documentação" },
  { href: "/#download", label: "Download" },
] as const;
