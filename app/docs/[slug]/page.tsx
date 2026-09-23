import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { type Block, docs, getDoc } from "@/content/docs";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.summary,
    openGraph: { title: doc.title, description: doc.summary },
  };
}

/* ── Renderização dos blocos ──────────────────────────────────────────────── */

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p className="text-[16px] leading-[1.75] text-muted">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[16px] leading-[1.7] text-muted">
            <span
              aria-hidden
              className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary-soft"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="space-y-4">
        {block.items.map((item, i) => (
          <li key={item} className="flex gap-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary-tint text-[13px] font-bold text-primary">
              {i + 1}
            </span>
            <span className="pt-1 text-[16px] leading-[1.7] text-muted">{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  const warn = block.tone === "warn";

  return (
    <aside
      className={`rounded-[20px] border p-6 ${
        warn
          ? "border-warning/40 bg-warning-soft"
          : "border-primary/20 bg-primary-tint"
      }`}
    >
      <p
        className={`text-[15px] font-bold ${warn ? "text-warning-ink" : "text-primary"}`}
      >
        {block.title}
      </p>
      <p
        className={`mt-2 text-[15px] leading-[1.7] ${
          warn ? "text-warning-ink/85" : "text-ink/75"
        }`}
      >
        {block.text}
      </p>
    </aside>
  );
}

/* ── Página ───────────────────────────────────────────────────────────────── */

export default async function DocPage({ params }: Params) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const index = docs.findIndex((d) => d.slug === doc.slug);
  const previous = docs[index - 1];
  const next = docs[index + 1];

  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="shell grid gap-12 py-12 lg:grid-cols-[250px_1fr] lg:gap-16 lg:py-16">
        {/* Índice lateral */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            Documentação
          </p>
          <nav className="mt-4 flex flex-col gap-1">
            {docs.map((item) => {
              const active = item.slug === doc.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-[12px] px-3.5 py-2.5 text-[14px] transition ${
                    active
                      ? "bg-primary-tint font-semibold text-primary"
                      : "text-muted hover:bg-primary-tint/60 hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>

        <article className="min-w-0 max-w-2xl">
          <nav aria-label="Trilha" className="text-[13px] text-muted">
            <Link href="/" className="transition hover:text-primary">
              Início
            </Link>
            <span className="px-2">/</span>
            <Link href="/docs" className="transition hover:text-primary">
              Documentação
            </Link>
          </nav>

          <div className="mt-5 flex items-center gap-2.5">
            <span className="rounded-full bg-primary-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary">
              {doc.kind}
            </span>
            <span className="text-[12px] text-muted">{doc.minutes} min de leitura</span>
          </div>

          <h1 className="display mt-5 text-[clamp(2rem,5vw,3rem)]">{doc.title}</h1>
          <p className="mt-4 text-[17px] leading-relaxed text-muted">{doc.summary}</p>

          <div className="mt-12 space-y-12">
            {doc.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60} as="section">
                <h2
                  id={`s-${i}`}
                  className="scroll-mt-28 text-[23px] font-bold tracking-[-0.015em]"
                >
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.blocks.map((block, j) => (
                    <BlockView key={j} block={block} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Navegação entre guias */}
          <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/docs/${previous.slug}`}
                className="rounded-[20px] border border-line bg-surface p-5 transition hover:border-primary/30"
              >
                <span className="text-[12px] text-muted">Anterior</span>
                <span className="mt-1 block text-[16px] font-semibold text-ink">
                  {previous.title}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/docs/${next.slug}`}
                className="rounded-[20px] border border-line bg-surface p-5 text-right transition hover:border-primary/30 sm:col-start-2"
              >
                <span className="text-[12px] text-muted">Próximo</span>
                <span className="mt-1 block text-[16px] font-semibold text-ink">
                  {next.title}
                </span>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
