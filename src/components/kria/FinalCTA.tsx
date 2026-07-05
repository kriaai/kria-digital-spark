import { WhatsAppIcon } from "./WhatsAppIcon";

export function FinalCTA() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white via-kria-purple-soft/40 to-white p-6 shadow-[var(--shadow-card)] sm:p-8">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-kria-orange/20 blur-3xl" />
        <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kria-orange text-white">
            <WhatsAppIcon className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Pronto para descobrir como a IA pode destravar seu negócio?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Leva de 2 a 5 minutos. Envie sua análise inicial para a Kria no WhatsApp e receba o próximo passo recomendado.
            </p>
          </div>
          <a
            href="#diagnostico"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-kria-orange to-[oklch(0.68_0.2_30)] px-6 py-3 font-display text-sm font-bold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            Começar análise inicial
          </a>
        </div>
      </div>
    </section>
  );
}
