import { Quote } from "lucide-react";
import consultora from "@/assets/kria-consultora.jpg";

export function Testimonial() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="flex items-start gap-4">
          <Quote className="h-8 w-8 shrink-0 text-kria-orange" />
          <div className="min-w-0">
            <p className="text-base italic text-foreground/85 sm:text-lg">
              "Informação sem estratégia não gera resultados. Aqui, unimos inteligência, criatividade
              e metodologia para transformar sua presença digital em crescimento real."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src={consultora}
                alt="Kria AI"
                loading="lazy"
                width={80}
                height={80}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-kria-purple/20"
              />
              <div>
                <div className="font-display text-sm font-bold text-foreground">Kria AI</div>
                <div className="text-xs text-muted-foreground">CEO & Estratégia Digital</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { n: "+120", l: "negócios analisados" },
            { n: "98%", l: "satisfação dos clientes" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-white p-3 text-center">
              <div className="font-display text-xl font-black text-kria-purple sm:text-2xl">
                {s.n}
              </div>
              <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
