import { site } from "@/lib/site";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden className="size-6 shrink-0 fill-current">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden className="size-6 shrink-0">
      <path fill="#00c1b2" d="M47 19 316 288l-62 62L34 130A31 31 0 0 1 47 19z" />
      <path fill="#d8c2ff" d="M34 130 254 350 47 493a31 31 0 0 1-13-25z" />
      <path fill="#6b43b5" d="m254 350 62-62 78 45a31 31 0 0 1 0 54l-78 45z" />
      <path fill="#ffffff" d="m316 288-62-62 62-62 78 45a31 31 0 0 1 0 79z" opacity="0" />
    </svg>
  );
}

type BadgeProps = {
  href: string | null;
  glyph: React.ReactNode;
  caption: string;
  label: string;
  tone?: "dark" | "light";
};

function Badge({ href, glyph, caption, label, tone = "dark" }: BadgeProps) {
  const base =
    "group inline-flex h-[58px] items-center gap-3 rounded-[14px] border px-5 transition duration-300";
  const skin =
    tone === "dark"
      ? "border-ink bg-ink text-white hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(31,41,55,0.7)]"
      : "border-white/25 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20";

  const content = (
    <>
      {glyph}
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] opacity-70">
          {caption}
        </span>
        <span className="text-[15px] font-semibold">{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`${base} ${skin} cursor-default opacity-60`}
        aria-disabled
        title="Publicação em andamento"
      >
        {content}
      </span>
    );
  }

  return (
    <a className={`${base} ${skin}`} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export function StoreBadges({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { ios, android } = site.stores;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge
        href={ios}
        tone={tone}
        glyph={<AppleGlyph />}
        caption={ios ? "Baixar na" : "Em breve na"}
        label="App Store"
      />
      <Badge
        href={android}
        tone={tone}
        glyph={<PlayGlyph />}
        caption={android ? "Disponível no" : "Em breve no"}
        label="Google Play"
      />
    </div>
  );
}
