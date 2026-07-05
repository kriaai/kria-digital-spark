import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";
import { KriaLogo } from "./KriaLogo";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre a Kria", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass-card border-b border-white/40 rounded-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <KriaLogo className="h-11 w-11 shrink-0 object-contain" />
            <div className="min-w-0 leading-tight">
              <div className="truncate font-display text-lg font-bold text-foreground">Kria AI</div>
              <div className="truncate text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Estratégia & Presença Digital
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-kria-purple"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 rounded-full border border-kria-purple/25 bg-white px-5 py-2.5 text-sm font-semibold text-kria-purple shadow-[var(--shadow-soft)] transition-all hover:bg-kria-purple hover:text-white"
            >
              <Sparkles className="h-4 w-4" />
              Começar análise
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-white text-kria-purple lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="pb-4 lg:hidden">
            <nav className="flex flex-col gap-1 rounded-2xl border border-border bg-white p-2">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#diagnostico"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-gradient-to-r from-kria-orange to-kria-orange px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Começar análise
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
