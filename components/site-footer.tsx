import Link from "next/link";
import { Logo } from "@/components/logo";
import { docs } from "@/content/docs";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
            Produto
          </h3>
          <ul className="mt-4 space-y-2.5 text-[14px] text-muted">
            <li>
              <Link className="transition hover:text-primary" href="/#produto">
                O app
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-primary" href="/#como-funciona">
                Como funciona
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-primary" href="/#download">
                Download
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
            Documentação
          </h3>
          <ul className="mt-4 space-y-2.5 text-[14px] text-muted">
            {docs.slice(0, 4).map((doc) => (
              <li key={doc.slug}>
                <Link className="transition hover:text-primary" href={`/docs/${doc.slug}`}>
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Um projeto da{" "}
            <a
              href={site.authorUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary"
            >
              {site.author}
            </a>
          </p>
          <p>Desenvolvido com 💜 em Flutter.</p>
        </div>
      </div>
    </footer>
  );
}
