import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreBadges } from "@/components/store-badges";
import { JoinScreen, PhoneFrame, ResultScreen, VotingScreen } from "@/components/phone";
import { docs } from "@/content/docs";
import { site } from "@/lib/site";

/* ── Motivo gráfico assinatura: o código de seis caracteres ───────────────── */

function RoomCode({ code = "AB7X2Q", tone = "light" }: { code?: string; tone?: "light" | "dark" }) {
  return (
    <div className="flex gap-1.5" aria-label={`Código de sala ${code}`}>
      {code.split("").map((char, i) => (
        <span
          key={i}
          className={`grid size-9 place-items-center rounded-[10px] border text-[15px] font-semibold sm:size-11 sm:text-[17px] ${
            tone === "dark"
              ? "border-white/25 bg-white/10 text-white"
              : "border-line bg-surface text-ink"
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-tint px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary">
      {children}
    </span>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pt-16 lg:pb-28">
      {/* Fundo: manchas roxas suaves em movimento lento */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-32 size-[520px] rounded-full bg-primary-soft/50 blur-3xl animate-drift" />
        <div className="absolute -right-28 top-24 size-[460px] rounded-full bg-teal/10 blur-3xl animate-drift [animation-delay:-6s]" />
        <div className="absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-primary-tint/70 to-transparent" />
      </div>

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/80 px-4 py-2 text-[13px] font-medium text-primary backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-teal" />
              </span>
              Feito pela {site.author} · Android e iOS
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display mt-6 text-[clamp(2.4rem,7vw,4.4rem)] text-ink">
              A votação da sua organização{" "}
              <span className="relative inline-block text-primary">
                cabe no bolso
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  className="absolute inset-x-0 -bottom-1 h-2.5 w-full text-primary-soft"
                >
                  <path
                    d="M2 8c60-6 120-6 180-3s80 4 116 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              de todo mundo.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Crie a eleição, compartilhe um código de seis caracteres e acompanhe a
              apuração em tempo real. Sem cadastro, sem papel, sem planilha no fim da
              noite.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8">
              <StoreBadges />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                  Entrar é assim
                </p>
                <div className="mt-2.5">
                  <RoomCode />
                </div>
              </div>
              <p className="max-w-[15rem] text-[13px] leading-relaxed text-muted">
                Seis caracteres levam o votante direto para dentro da eleição certa.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-[60px] bg-gradient-to-br from-primary-soft/60 via-transparent to-teal/20 blur-2xl"
            />
            <div className="animate-float-slow">
              <PhoneFrame>
                <JoinScreen />
              </PhoneFrame>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Faixa de contextos de uso ────────────────────────────────────────────── */

const contexts = [
  "Empresas juniores",
  "Grêmios estudantis",
  "Coletivos",
  "Associações de bairro",
  "Centros acadêmicos",
  "Cooperativas",
  "Conselhos de classe",
  "Ligas acadêmicas",
];

function ContextStrip() {
  return (
    <section className="border-y border-line bg-surface py-6">
      <p className="shell text-center text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
        Pensado para votações internas de
      </p>
      <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...contexts, ...contexts].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-line bg-canvas px-5 py-2.5 text-[15px] font-medium text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Apresentação do app ──────────────────────────────────────────────────── */

const features = [
  {
    title: "Entrada por código",
    text: "Seis caracteres e pronto. O votante não cria conta, não informa e-mail e não espera aprovação para participar.",
    accent: "code",
  },
  {
    title: "Votação cargo a cargo",
    text: "Um cargo por tela, barra de progresso no topo e voto em branco sempre disponível. Dá para voltar e revisar antes de enviar.",
    accent: "progress",
  },
  {
    title: "Sala de espera ao vivo",
    text: "Antes de começar, todo mundo vê o status da eleição e quantas pessoas já estão conectadas na sala.",
    accent: "people",
  },
  {
    title: "Apuração automática",
    text: "Quando o último eleitor habilitado vota, a eleição encerra sozinha. Votos, brancos, vencedores e empates saem prontos.",
    accent: "chart",
  },
  {
    title: "Um voto por aparelho",
    text: "A cédula é gravada em uma transação única no servidor. Reenvio não duplica voto e segunda tentativa é recusada.",
    accent: "shield",
  },
  {
    title: "Painel do administrador",
    text: "Crie cargos e candidatos, congele o número de eleitores, acompanhe quem já votou e encerre quando quiser.",
    accent: "panel",
  },
];

function FeatureVisual({ accent }: { accent: string }) {
  if (accent === "code") {
    return (
      <div className="flex gap-1.5">
        {["A", "B", "7", "X", "2", "Q"].map((c, i) => (
          <span
            key={i}
            className="grid size-8 place-items-center rounded-lg border border-line bg-surface text-[13px] font-semibold text-ink"
          >
            {c}
          </span>
        ))}
      </div>
    );
  }

  if (accent === "progress") {
    return (
      <div className="w-full max-w-[230px] space-y-2.5">
        <div className="h-1.5 rounded-full bg-line">
          <div className="h-full w-2/3 rounded-full bg-primary" />
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-primary bg-primary-tint px-3 py-2">
          <span className="grid size-3.5 place-items-center rounded-full border-2 border-primary">
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-[12px] font-semibold text-ink">Ana Ribeiro</span>
        </div>
      </div>
    );
  }

  if (accent === "people") {
    return (
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2.5">
          {["bg-primary", "bg-primary-soft", "bg-teal", "bg-primary-dark"].map((c, i) => (
            <span key={i} className={`size-9 rounded-full border-2 border-surface ${c}`} />
          ))}
        </div>
        <span className="rounded-full bg-teal/15 px-3 py-1.5 text-[12px] font-semibold text-teal-deep">
          12 conectados
        </span>
      </div>
    );
  }

  if (accent === "chart") {
    return (
      <div className="flex h-16 items-end gap-2">
        {[56, 29, 11, 4].map((h, i) => (
          <span
            key={i}
            className={`w-9 rounded-lg ${i === 0 ? "bg-primary" : "bg-primary-soft"}`}
            style={{ height: `${Math.max(h, 8)}%` }}
          />
        ))}
      </div>
    );
  }

  if (accent === "shield") {
    return (
      <div className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3.5 py-2.5">
        <svg viewBox="0 0 24 24" className="size-5 stroke-teal-deep" fill="none" strokeWidth={2}>
          <path
            d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6l7-3z"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[12px] font-semibold text-ink">Cédula registrada</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[230px] space-y-2">
      {["Presidência", "Vice-presidência", "Tesouraria"].map((cargo, i) => (
        <div
          key={cargo}
          className="flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2"
        >
          <span className="text-[12px] font-medium text-ink">{cargo}</span>
          <span className="text-[11px] text-muted">{3 - i} candidatos</span>
        </div>
      ))}
    </div>
  );
}

function Product() {
  return (
    <section id="produto" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>O app</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.2rem)]">
              Tudo que uma eleição precisa, sem nada que ela não precisa.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Cada tela do Urna Loading existe para resolver um momento específico da
              votação — e nenhum a mais.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-[24px] border border-line bg-surface p-7 transition duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-28px_rgba(107,67,181,0.45)]">
                <div className="flex min-h-[84px] items-center">
                  <FeatureVisual accent={feature.accent} />
                </div>
                <h3 className="mt-6 text-[19px] font-bold tracking-[-0.01em]">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                  {feature.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Como funciona ────────────────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "O administrador cria a eleição",
    text: "Entra com a conta Google autorizada, cadastra os cargos e os candidatos e define quantos eleitores estão habilitados a votar.",
  },
  {
    n: "02",
    title: "Todo mundo entra pelo código",
    text: "O app gera um código de seis caracteres. Quem recebe digita, cai na sala de espera e vê a eleição começar em tempo real.",
  },
  {
    n: "03",
    title: "A apuração sai sozinha",
    text: "Cada pessoa vota cargo a cargo e confirma a cédula. Quando o último eleitor habilitado vota, a eleição encerra e o resultado é publicado.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <SectionLabel>Como funciona</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.2rem)]">
                Da criação ao resultado em três movimentos.
              </h2>
            </Reveal>

            <ol className="mt-12 space-y-10">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 90} as="li">
                  <div className="relative flex gap-6">
                    <div className="flex flex-col items-center">
                      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-[15px] font-bold text-white">
                        {step.n}
                      </span>
                      {i < steps.length - 1 && (
                        <span aria-hidden className="mt-2 w-px flex-1 bg-line" />
                      )}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-[20px] font-bold tracking-[-0.01em]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={160}>
            <div className="relative flex justify-center">
              <div
                aria-hidden
                className="absolute inset-x-6 inset-y-10 -z-10 rounded-[48px] bg-primary-tint"
              />
              <div className="flex items-end gap-4 pt-8 sm:gap-6">
                <div className="hidden w-[46%] max-w-[230px] translate-y-6 sm:block">
                  <PhoneFrame className="max-w-none">
                    <ResultScreen />
                  </PhoneFrame>
                </div>
                <div className="w-full max-w-[260px]">
                  <PhoneFrame className="max-w-none">
                    <VotingScreen />
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── Transparência ────────────────────────────────────────────────────────── */

function Transparency() {
  const points = [
    {
      title: "Um voto por instalação",
      text: "A cédula usa o identificador do aparelho como chave. Voto duplicado é recusado pelo servidor, não pela tela.",
    },
    {
      title: "Envio idempotente",
      text: "Se a conexão cair no meio do envio, reenviar não gera um segundo voto.",
    },
    {
      title: "Regras no servidor",
      text: "Validação de participante, gravação da cédula e contagem acontecem em uma transação atômica.",
    },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <div className="overflow-hidden rounded-[32px] bg-primary-dark text-white">
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:p-16">
            <div>
              <Reveal>
                <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em]">
                  Transparência
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-5 text-[clamp(1.9rem,4.2vw,2.9rem)]">
                  Dizemos exatamente o que o app garante — e o que ele não garante.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
                  O Urna Loading foi feito para votações internas de alta confiança. Ele
                  identifica uma instalação, não uma pessoa, e por isso não substitui uma
                  urna oficial. Está tudo documentado, sem letra miúda.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  href="/docs/seguranca-e-limites"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-[12px] bg-white px-6 text-[15px] font-semibold text-primary-dark transition hover:bg-primary-soft"
                >
                  Ler sobre segurança e limites
                  <svg viewBox="0 0 24 24" className="size-4 stroke-current" fill="none" strokeWidth={2.4}>
                    <path d="M5 12h14m-6-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div className="space-y-3.5">
              {points.map((point, i) => (
                <Reveal key={point.title} delay={i * 90}>
                  <div className="rounded-[20px] border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
                    <h3 className="text-[16px] font-semibold">{point.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/70">
                      {point.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Documentação ─────────────────────────────────────────────────────────── */

function DocsTeaser() {
  return (
    <section id="documentacao" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Documentação</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-5 text-[clamp(2rem,4.6vw,3.2rem)]">
                Guias e tutoriais para quem vota e para quem conduz.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link
              href="/docs"
              className="inline-flex h-12 items-center gap-2 rounded-[12px] border border-primary px-6 text-[15px] font-semibold text-primary transition hover:bg-primary-tint"
            >
              Ver tudo
              <svg viewBox="0 0 24 24" className="size-4 stroke-current" fill="none" strokeWidth={2.4}>
                <path d="M5 12h14m-6-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, i) => (
            <Reveal key={doc.slug} delay={i * 70}>
              <Link
                href={`/docs/${doc.slug}`}
                className="group flex h-full flex-col rounded-[24px] border border-line bg-canvas p-7 transition duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface hover:shadow-[0_24px_48px_-28px_rgba(107,67,181,0.45)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="rounded-full bg-primary-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                    {doc.kind}
                  </span>
                  <span className="text-[12px] text-muted">{doc.minutes} min de leitura</span>
                </div>
                <h3 className="mt-5 text-[19px] font-bold tracking-[-0.01em]">{doc.title}</h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">
                  {doc.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  Abrir guia
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 stroke-current transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    strokeWidth={2.4}
                  >
                    <path d="M5 12h14m-6-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Download ─────────────────────────────────────────────────────────────── */

function Download() {
  return (
    <section id="download" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[32px] bg-primary px-8 py-16 text-white sm:px-12 lg:px-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
            <div className="absolute -right-20 -top-24 size-[380px] rounded-full bg-white/10 blur-2xl animate-drift" />
            <div className="absolute -bottom-28 -left-16 size-[320px] rounded-full bg-teal/25 blur-2xl animate-drift [animation-delay:-8s]" />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Reveal>
                <h2 className="display text-[clamp(2rem,5vw,3.4rem)]">
                  Baixe o Urna Loading e abra sua primeira eleição hoje.
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/80">
                  Disponível para Android e iOS. Quem vota não precisa de conta — só do
                  código da sala.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-9">
                  <StoreBadges tone="light" />
                </div>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 text-[13px] text-white/60">
                  Quer testar antes? Entre na sala de demonstração com o código abaixo.
                </p>
                <div className="mt-3">
                  <RoomCode tone="dark" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={200} className="hidden justify-end lg:flex">
              <div className="w-[240px] rotate-3">
                <PhoneFrame className="max-w-none">
                  <JoinScreen />
                </PhoneFrame>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Página ───────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <ContextStrip />
        <Product />
        <HowItWorks />
        <Transparency />
        <DocsTeaser />
        <Download />
      </main>
      <SiteFooter />
    </>
  );
}
