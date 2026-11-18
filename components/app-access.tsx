import { site } from "@/lib/site";

function AppleGlyph() {
  return (
    <svg viewBox="0 0 384 512" aria-hidden className="size-6 shrink-0 fill-current">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function DownloadGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

function WebGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </svg>
  );
}

type BadgeProps = {
  href: string | null;
  glyph: React.ReactNode;
  caption: string;
  label: string;
  tone?: "dark" | "light";
  download?: boolean;
};

function Badge({ href, glyph, caption, label, tone = "dark", download = false }: BadgeProps) {
  const base =
    "group inline-flex h-[58px] items-center gap-3 rounded-[14px] border px-5 transition duration-300";
  const skin =
    tone === "dark"
      ? "border-ink bg-ink text-white"
      : "border-white/25 bg-white/10 text-white backdrop-blur";
  const hover = tone === "dark"
    ? "hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(31,41,55,0.7)]"
    : "hover:-translate-y-0.5 hover:bg-white/20";

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
        role="link"
        className={`${base} cursor-not-allowed border-slate-300 bg-slate-200 text-slate-600`}
        aria-disabled
        title={label === "iOS" ? "Versão para iOS em breve. Use a versão web para participar pelo navegador." : "Link ainda não disponível"}
      >
        {content}
      </span>
    );
  }

  return (
    <a className={`${base} ${skin} ${hover}`} href={href} download={download || undefined} target={download ? undefined : "_blank"} rel={download ? undefined : "noopener noreferrer"}>
      {content}
    </a>
  );
}

export function AppAccess({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { apk, web } = site.access;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge
        href={apk}
        tone={tone}
        glyph={<DownloadGlyph />}
        caption={apk ? "Android · Download direto" : "Android · Link em breve"}
        label="Baixar APK"
        download
      />
      <Badge
        href={web}
        tone={tone}
        glyph={<WebGlyph />}
        caption={web ? "Versão web · Sem instalar" : "Versão web · Link em breve"}
        label="Participar online"
      />
      <Badge
        href={null}
        tone={tone}
        glyph={<span className="opacity-60 blur-[0.6px]"><AppleGlyph /></span>}
        caption="Em breve"
        label="iOS"
      />
    </div>
  );
}
