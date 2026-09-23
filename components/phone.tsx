import type { ReactNode } from "react";

/* ── Moldura ──────────────────────────────────────────────────────────────── */

export function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[390/800] w-full max-w-[320px] rounded-[44px] bg-ink p-[10px] shadow-[0_40px_80px_-30px_rgba(78,47,134,0.55),0_0_0_1px_rgba(31,41,55,0.08)] ${className}`}
    >
      <div className="relative size-full overflow-hidden rounded-[36px] bg-canvas">
        {/* Ilha dinâmica */}
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[86px] -translate-x-1/2 rounded-full bg-ink" />
        <div className="flex size-full flex-col pt-[38px] text-ink">{children}</div>
      </div>
    </div>
  );
}

/* ── Peças compartilhadas ─────────────────────────────────────────────────── */

function BackChevron() {
  return (
    <span className="grid size-8 place-items-center rounded-full border border-line bg-surface">
      <svg viewBox="0 0 24 24" className="size-4 stroke-ink" fill="none" strokeWidth={2.2}>
        <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[38px] items-center justify-center gap-1.5 rounded-[12px] bg-primary text-[12px] font-semibold text-white">
      {children}
    </div>
  );
}

/* ── Tela 1 · Entrar em votação ───────────────────────────────────────────── */

export function JoinScreen() {
  const code = ["A", "B", "7", "X", "2", "Q"];

  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-3">
      <BackChevron />

      <h3 className="mt-4 text-[17px] font-bold leading-tight">Entrar em votação</h3>
      <p className="mt-1 text-[11px] leading-relaxed text-muted">
        Digite o código para participar da eleição.
      </p>

      <div className="my-4 grid flex-1 place-items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/illustrations/join_election.svg"
          alt=""
          className="w-[150px] max-h-[150px] object-contain"
        />
      </div>

      <p className="text-[11px] font-semibold text-ink">Código da sala</p>
      <div className="mt-2 grid grid-cols-6 gap-1.5">
        {code.map((char, i) => (
          <div
            key={i}
            className={`grid h-[42px] place-items-center rounded-[10px] border bg-surface text-[15px] font-semibold ${
              i === 5 ? "border-primary border-2 text-primary" : "border-line text-ink"
            }`}
          >
            {char}
            {i === 5 && (
              <span className="sr-only">cursor</span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] leading-relaxed text-muted">
        Digite o código fornecido pelo administrador.
      </p>

      <div className="mt-4">
        <PrimaryButton>Entrar</PrimaryButton>
      </div>
    </div>
  );
}

/* ── Tela 2 · Votação ─────────────────────────────────────────────────────── */

function Option({
  name,
  meta,
  selected = false,
  muted = false,
}: {
  name: string;
  meta?: string;
  selected?: boolean;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-[14px] border bg-surface px-3 py-2.5 ${
        selected ? "border-primary bg-primary-tint" : "border-line"
      }`}
    >
      <span
        className={`grid size-4 shrink-0 place-items-center rounded-full border-2 ${
          selected ? "border-primary" : "border-line"
        }`}
      >
        {selected && <span className="size-2 rounded-full bg-primary" />}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`block truncate text-[12px] font-semibold ${
            muted ? "text-muted" : "text-ink"
          }`}
        >
          {name}
        </span>
        {meta && <span className="block truncate text-[10px] text-muted">{meta}</span>}
      </span>
    </div>
  );
}

export function VotingScreen() {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-3">
      <div className="flex items-center gap-2">
        <BackChevron />
        <span className="min-w-0 flex-1 truncate text-[11px] text-muted">
          Diretoria 2026
        </span>
        <span className="rounded-full bg-primary-tint px-2.5 py-1 text-[10px] font-semibold text-primary">
          1 de 3
        </span>
      </div>

      <h3 className="mt-3 text-[16px] font-bold">Presidência</h3>

      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-line">
        <div className="h-full w-1/3 rounded-full bg-primary" />
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-2">
        <Option name="Ana Ribeiro" meta="Chapa Conecta · nº 12" selected />
        <Option name="Bruno Tavares" meta="Chapa Avança · nº 23" />
        <Option name="Helena Costa" meta="Chapa Raiz · nº 31" />
        <Option name="Voto em branco" meta="Nenhum candidato" muted />
      </div>

      <div className="mt-4">
        <PrimaryButton>
          Continuar
          <svg viewBox="0 0 24 24" className="size-3.5 stroke-current" fill="none" strokeWidth={2.4}>
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </PrimaryButton>
      </div>
    </div>
  );
}

/* ── Tela 3 · Apuração ────────────────────────────────────────────────────── */

function ResultBar({
  name,
  votes,
  percent,
  winner = false,
}: {
  name: string;
  votes: number;
  percent: number;
  winner?: boolean;
}) {
  return (
    <div className="rounded-[14px] border border-line bg-surface px-3 py-2.5">
      <div className="flex items-baseline justify-between gap-2">
        <span className="truncate text-[12px] font-semibold">{name}</span>
        <span className="shrink-0 text-[10px] text-muted">
          {votes} votos · {percent}%
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className={`h-full rounded-full ${winner ? "bg-primary" : "bg-primary-soft"}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export function ResultScreen() {
  return (
    <div className="flex h-full flex-col px-5 pb-6 pt-3">
      <div className="flex items-center gap-2">
        <BackChevron />
        <span className="min-w-0 flex-1 truncate text-[11px] text-muted">
          Diretoria 2026
        </span>
        <span className="rounded-full bg-teal/15 px-2.5 py-1 text-[10px] font-semibold text-teal-deep">
          Encerrada
        </span>
      </div>

      <h3 className="mt-3 text-[16px] font-bold">Resultado</h3>
      <p className="mt-1 text-[11px] text-muted">Presidência · 48 de 48 votaram</p>

      <div className="mt-4 flex flex-1 flex-col gap-2">
        <ResultBar name="Ana Ribeiro" votes={27} percent={56} winner />
        <ResultBar name="Bruno Tavares" votes={14} percent={29} />
        <ResultBar name="Helena Costa" votes={5} percent={11} />
        <ResultBar name="Voto em branco" votes={2} percent={4} />
      </div>

      <div className="mt-4 rounded-[14px] bg-primary-tint px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
          Eleita
        </p>
        <p className="text-[12px] font-semibold text-ink">Ana Ribeiro</p>
      </div>
    </div>
  );
}
