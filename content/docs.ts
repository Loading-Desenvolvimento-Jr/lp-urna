export type Block =
  | { type: "p"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "list"; items: string[] }
  | { type: "callout"; tone: "info" | "warn"; title: string; text: string };

export type DocSection = { heading: string; blocks: Block[] };

export type Doc = {
  slug: string;
  title: string;
  summary: string;
  minutes: number;
  kind: "guia" | "tutorial" | "referência";
  sections: DocSection[];
};

export const docs: Doc[] = [
  {
    slug: "primeiros-passos",
    title: "Primeiros passos",
    summary:
      "O que é o Urna Loading, para quem ele foi feito e o que você precisa antes de abrir a primeira votação.",
    minutes: 3,
    kind: "guia",
    sections: [
      {
        heading: "O que é o Urna Loading",
        blocks: [
          {
            type: "p",
            text: "O Urna Loading é um aplicativo de votação para celular criado pela Loading Jr. Ele cobre o ciclo inteiro de uma eleição interna: alguém cria a eleição com seus cargos e candidatos, compartilha um código de seis caracteres, as pessoas entram por esse código, votam cargo a cargo e o resultado é apurado assim que a votação encerra.",
          },
          {
            type: "p",
            text: "Não existe cadastro, senha nem e-mail para o votante. A entrada é pelo código da sala, e a identidade é vinculada à instalação do app no aparelho.",
          },
        ],
      },
      {
        heading: "Dois papéis, um app",
        blocks: [
          {
            type: "list",
            items: [
              "Votante — entra com o código, acompanha a sala de espera, vota em cada cargo, revisa e confirma a cédula.",
              "Administrador — entra com a conta Google autorizada, cria a eleição, define cargos e candidatos, inicia, acompanha e encerra a votação.",
            ],
          },
        ],
      },
      {
        heading: "O que você precisa",
        blocks: [
          {
            type: "list",
            items: [
              "Um aparelho Android com o APK instalado ou um navegador para acessar a versão web, inclusive no iPhone e no computador.",
              "Conexão com a internet durante a votação.",
              "Para administrar: uma conta Google previamente autorizada pela organização.",
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Quer só experimentar?",
            text: "Existe uma sala de demonstração com o código AB7X2Q. A eleição de demonstração começa automaticamente assim que você entra.",
          },
        ],
      },
    ],
  },
  {
    slug: "guia-do-votante",
    title: "Guia do votante",
    summary:
      "Do código da sala até a confirmação da cédula — o passo a passo completo de quem vai votar.",
    minutes: 4,
    kind: "tutorial",
    sections: [
      {
        heading: "Entrar na votação",
        blocks: [
          {
            type: "steps",
            items: [
              "Abra o app e toque em Entrar em votação.",
              "Digite o código de seis caracteres que o administrador compartilhou.",
              "Toque em Entrar. Se o código estiver errado ou a sala já tiver fechado, o app avisa na hora.",
            ],
          },
        ],
      },
      {
        heading: "A sala de espera",
        blocks: [
          {
            type: "p",
            text: "Depois de entrar, você fica na sala de espera até o administrador iniciar a eleição. A tela mostra o status da votação e quantas pessoas já estão conectadas.",
          },
          {
            type: "p",
            text: "Você pode sair da sala de espera e voltar depois com o mesmo código, desde que a votação ainda não tenha começado.",
          },
        ],
      },
      {
        heading: "Votar",
        blocks: [
          {
            type: "steps",
            items: [
              "A votação acontece um cargo por vez, e a barra no topo mostra o progresso.",
              "Escolha um candidato ou selecione Voto em branco.",
              "Toque em Continuar para ir ao próximo cargo. Dá para voltar e trocar uma escolha antes de enviar.",
              "Na tela de revisão, confira todas as escolhas e confirme a cédula.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "A confirmação é definitiva",
            text: "Depois de confirmar, a cédula é registrada e não pode ser alterada. Cada instalação do app vota uma única vez por eleição.",
          },
        ],
      },
      {
        heading: "Depois do voto",
        blocks: [
          {
            type: "p",
            text: "Ao confirmar, aparece a tela de conclusão. Quando o administrador encerrar e publicar a apuração, você consegue consultar o resultado pelo botão Último resultado na tela inicial — ele mostra a última eleição encerrada em que aquele aparelho participou.",
          },
        ],
      },
    ],
  },
  {
    slug: "guia-do-administrador",
    title: "Guia do administrador",
    summary:
      "Como criar a eleição, montar cargos e candidatos, distribuir o código e conduzir a votação até o encerramento.",
    minutes: 6,
    kind: "tutorial",
    sections: [
      {
        heading: "Acesso administrativo",
        blocks: [
          {
            type: "p",
            text: "O acesso de administrador é feito com Google Sign-In e só funciona para contas cuja UID esteja na lista de administradores autorizados da organização. Se a sua conta não estiver liberada, o app recusa o acesso.",
          },
        ],
      },
      {
        heading: "Criar a eleição",
        blocks: [
          {
            type: "steps",
            items: [
              "Na tela inicial, toque em Criar eleição e entre com a conta Google autorizada.",
              "Dê um título à eleição — é o nome que os votantes veem no topo da tela.",
              "Cadastre os cargos na ordem em que devem ser votados.",
              "Adicione os candidatos de cada cargo.",
              "Defina a quantidade de eleitores habilitados. Esse número é a capacidade máxima da sala.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "O número de eleitores é congelado",
            text: "Ao iniciar a eleição, o app congela a lista com quem já reservou vaga. Aparelhos novos não entram depois disso, e o encerramento automático considera essa lista congelada — mesmo que nem todas as vagas tenham sido ocupadas.",
          },
        ],
      },
      {
        heading: "Distribuir o código da sala",
        blocks: [
          {
            type: "p",
            text: "Criada a eleição, o app gera um código de seis caracteres e oferece um botão para copiá-lo. Compartilhe esse código com quem vai votar — por mensagem, projetado na tela ou impresso.",
          },
          {
            type: "callout",
            tone: "info",
            title: "O código é um endereço, não uma senha",
            text: "Ele serve para encontrar a sala certa. Não trate o código como credencial secreta nem como prova de identidade de quem entra.",
          },
        ],
      },
      {
        heading: "Conduzir a votação",
        blocks: [
          {
            type: "list",
            items: [
              "Acompanhe em tempo real quantas pessoas entraram e quantas já concluíram o voto.",
              "Inicie a eleição quando o grupo estiver reunido. A partir daí a lista de participantes é congelada.",
              "Quem criou a eleição também pode votar, depois que ela começa.",
              "Cancele a eleição se algo der errado antes do início.",
              "Encerre manualmente a qualquer momento — o encerramento automático acontece sozinho quando todos os habilitados votam.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "apuracao-e-resultados",
    title: "Apuração e resultados",
    summary:
      "Como os votos são contados, o que acontece em caso de empate e quem pode publicar o resultado.",
    minutes: 3,
    kind: "referência",
    sections: [
      {
        heading: "Quando a apuração acontece",
        blocks: [
          {
            type: "p",
            text: "A apuração é calculada e publicada por um administrador autorizado depois que a eleição encerra. O encerramento pode ser automático — quando todos os eleitores congelados já votaram — ou manual, como salvaguarda.",
          },
        ],
      },
      {
        heading: "O que o resultado mostra",
        blocks: [
          {
            type: "list",
            items: [
              "Votos por candidato em cada cargo.",
              "Total de votos em branco.",
              "Vencedor de cada cargo.",
              "Empates, quando dois ou mais candidatos terminam com a mesma contagem.",
            ],
          },
          {
            type: "p",
            text: "Empates não são desempatados pelo app. Ele apresenta a situação e cabe à organização aplicar o próprio critério de desempate.",
          },
        ],
      },
      {
        heading: "Consulta pelo votante",
        blocks: [
          {
            type: "p",
            text: "Publicado o resultado, quem votou consegue consultá-lo pelo botão Último resultado na tela inicial do app.",
          },
        ],
      },
    ],
  },
  {
    slug: "seguranca-e-limites",
    title: "Segurança e limites",
    summary:
      "O que o Urna Loading garante, o que ele não garante e em que contexto ele deve ser usado.",
    minutes: 5,
    kind: "referência",
    sections: [
      {
        heading: "Para que contexto ele foi feito",
        blocks: [
          {
            type: "callout",
            tone: "warn",
            title: "Não use como urna pública",
            text: "O Urna Loading foi desenhado para votações internas de alta confiança — diretoria de empresa júnior, grêmio, coletivo, associação. Ele não substitui uma urna oficial nem atende a exigências de eleição pública.",
          },
        ],
      },
      {
        heading: "O que o app protege",
        blocks: [
          {
            type: "list",
            items: [
              "Um voto por instalação: a cédula usa o identificador do aparelho como chave, o que impede voto duplicado.",
              "Envio idempotente: se a conexão cair no meio do envio, reenviar não gera um segundo voto.",
              "Transações atômicas: validar participante, gravar cédula e atualizar contadores acontecem em uma operação só.",
              "Regras de acesso no servidor: cédulas inválidas e escritas fora das regras são recusadas.",
              "App Check: reduz uso do backend por clientes não legítimos.",
            ],
          },
        ],
      },
      {
        heading: "O que ele não garante",
        blocks: [
          {
            type: "list",
            items: [
              "Identidade de pessoa: o app identifica uma instalação, não um indivíduo. Reinstalar gera outro identificador.",
              "Sigilo absoluto do voto: quem administra o projeto no Firebase consegue, tecnicamente, correlacionar cédula e participante.",
              "Controle de quem entra: as primeiras instalações a reservar vaga tornam-se participantes.",
              "Proteção do código da sala contra tentativa e erro: não há limite de tentativas.",
            ],
          },
          {
            type: "p",
            text: "Levar o app a uma escala maior exigiria elegibilidade individual, recuperação segura de identidade, auditoria externa e uma análise formal de modelo de ameaça.",
          },
        ],
      },
    ],
  },
  {
    slug: "perguntas-frequentes",
    title: "Perguntas frequentes",
    summary: "Respostas rápidas para as dúvidas que mais aparecem antes de uma votação.",
    minutes: 3,
    kind: "guia",
    sections: [
      {
        heading: "Preciso criar uma conta para votar?",
        blocks: [
          {
            type: "p",
            text: "Não. Para votar basta o código da sala. Conta Google só é necessária para quem administra a eleição.",
          },
        ],
      },
      {
        heading: "Posso mudar meu voto?",
        blocks: [
          {
            type: "p",
            text: "Sim, enquanto você ainda não confirmou a cédula. Dá para voltar aos cargos anteriores e revisar tudo na tela de confirmação. Depois de confirmar, o voto é definitivo.",
          },
        ],
      },
      {
        heading: "O que acontece se o app fechar no meio da votação?",
        blocks: [
          {
            type: "p",
            text: "As escolhas ainda não enviadas são descartadas, mas você pode voltar à sala com o mesmo código e votar de novo, desde que a cédula ainda não tenha sido confirmada.",
          },
        ],
      },
      {
        heading: "Dá para votar pelo computador?",
        blocks: [
          {
            type: "p",
            text: "Sim. Acesse a versão web pelo navegador e entre com o código da sala. No Android, você também pode instalar o APK. A versão para iOS está prevista para o futuro; no iPhone, use a versão web.",
          },
        ],
      },
      {
        heading: "Quantas pessoas cabem em uma eleição?",
        blocks: [
          {
            type: "p",
            text: "O limite é o número de eleitores habilitados que o administrador define ao criar a eleição. Esse número é congelado quando a votação começa.",
          },
        ],
      },
    ],
  },
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
