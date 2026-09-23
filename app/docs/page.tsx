import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { docs } from "@/content/docs";

export const metadata: Metadata = {
  title: "Documentação",
  description:
    "Guias e tutoriais do Urna Loading: primeiros passos, guia do votante, guia do administrador, apuração, segurança e perguntas frequentes.",
};

export default function DocsIndex() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo">
        <section className="relative overflow-hidden border-b border-line pb-16 pt-14 sm:pt-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-32 -top-40 size-[460px] rounded-full bg-primary-soft/45 blur-3xl animate-drift" />
            <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary-tint/70 to-transparent" />
          </div>

          <div className="shell max-w-3xl">
            <Reveal>
              <nav aria-label="Trilha" className="text-[13px] text-muted">
                <Link href="/" className="transition hover:text-primary">
                  Início
                </Link>
                <span className="px-2">/</span>
                <span className="text-ink">Documentação</span>
              </nav>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="display mt-6 text-[clamp(2.2rem,6vw,3.6rem)]">
                Documentação do Urna Loading
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p className="mt-5 text-[17px] leading-relaxed text-muted">
                Guias curtos e diretos para conduzir uma votação do começo ao fim — do
                lado de quem vota e do lado de quem organiza.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="shell grid gap-5 md:grid-cols-2">
            {docs.map((doc, i) => (
              <Reveal key={doc.slug} delay={i * 70}>
                <Link
                  href={`/docs/${doc.slug}`}
                  className="group flex h-full flex-col rounded-[24px] border border-line bg-surface p-8 transition duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-28px_rgba(107,67,181,0.45)]"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-full bg-primary-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
                      {doc.kind}
                    </span>
                    <span className="text-[12px] text-muted">
                      {doc.minutes} min de leitura
                    </span>
                  </div>

                  <h2 className="mt-5 text-[22px] font-bold tracking-[-0.015em]">
                    {doc.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {doc.summary}
                  </p>

                  <ul className="mt-6 space-y-1.5 border-t border-line pt-5">
                    {doc.sections.slice(0, 3).map((section) => (
                      <li key={section.heading} className="text-[13px] text-muted">
                        · {section.heading}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                    Abrir
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
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
