import { Clock, Sparkles, Target } from "lucide-react";
import consultora from "@/assets/kria-consultora.jpg";

const BENEFITS = [
  { icon: Clock, title: "2 a 5 min", sub: "para responder" },
  { icon: Target, title: "100%", sub: "personalizado" },
  { icon: Sparkles, title: "Indicação", sub: "estratégica" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-kria-purple/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-kria-orange/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-kria-purple/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-kria-purple backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Diagnóstico gratuito
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Descubra o que está travando{" "}
            <span className="text-gradient-orange">sua presença digital</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Receba um diagnóstico personalizado do seu negócio, marca pessoal ou projeto e descubra o
            que realmente precisa mudar para crescer.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-kria-orange-soft text-kria-orange">
                  <b.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-sm font-bold text-foreground">{b.title}</div>
                  <div className="truncate text-xs text-muted-foreground">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#diagnostico"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-kria-orange to-[oklch(0.68_0.2_30)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
            >
              Começar meu diagnóstico
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-kria-purple/25 bg-white px-6 py-3 text-sm font-semibold text-kria-purple hover:bg-kria-purple-soft"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-kria-purple/30 via-kria-purple/10 to-kria-orange/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-[var(--shadow-card)]">
            <img
              src={consultora}
              alt="Consultora Kria AI"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-kria-orange text-white">
                <span className="font-display text-sm font-black">K</span>
              </div>
              <div className="leading-tight">
                <div className="text-xs font-bold text-foreground">Kria AI</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Estratégia & Resultados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
