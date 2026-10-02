import { Compass, Wand2, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { KriaLogo } from "./KriaLogo";


const BENEFITS = [
  { icon: Compass, title: "Leitura inicial", sub: "do seu cenário" },
  { icon: Wand2, title: "Soluções", sub: "IA, conteúdo e automação" },
  { icon: ArrowRight, title: "Próximo passo", sub: "recomendado" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-kria-purple/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-kria-orange/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[1fr_1.15fr]">
          <div className="relative hidden sm:block">
            <div className="pointer-events-none absolute inset-x-6 bottom-4 -z-10 h-24 rounded-full bg-kria-purple/25 blur-3xl" />
            <img
              src="/images/consultora-kria.webp"
              alt="Consultora Kria AI"
              className="mx-auto w-full max-w-[160px] object-contain drop-shadow-2xl md:max-w-[200px] lg:max-w-md"
            />
          </div>

          <div className="min-w-0 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-kria-purple/20 bg-transparent px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-kria-purple">
              <KriaLogo className="h-7 w-7 object-contain" />
              Soluções criativas com IA
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Seu negócio precisa de um próximo passo. <span className="text-gradient-orange">A Kria ajuda a criar.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg mx-auto lg:mx-0">
              Fotos de produto com IA, conteúdo e sites para apresentar melhor sua marca. Conte o que você precisa e encontre a solução que faz sentido para o seu momento.
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
                  <div className="min-w-0 leading-tight text-left">
                    <div className="text-sm font-bold text-foreground">{b.title}</div>
                    <div className="text-xs text-muted-foreground">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#diagnostico"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-kria-orange to-[oklch(0.68_0.2_30)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
              >
                Encontrar minha solução
              </a>

              <a
                href={`https://wa.me/559185091584?text=${encodeURIComponent("Olá, Kria AI! Quero conversar sobre uma solução para meu negócio.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-kria-purple/25 bg-white px-6 py-3 text-sm font-semibold text-kria-purple hover:bg-kria-purple-soft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ir direto pro WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Análise inicial em 2 a 5 minutos. Atendimento e proposta pelo WhatsApp.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
