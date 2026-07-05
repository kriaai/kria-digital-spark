import { Compass, Globe2, PenTool, Users, Lightbulb, Bot } from "lucide-react";

const ITEMS = [
  { icon: Compass, title: "Posicionamento", desc: "Como sua marca é percebida e o que pode te diferenciar." },
  { icon: Globe2, title: "Presença Digital", desc: "Seu site, redes sociais e autoridade online." },
  { icon: PenTool, title: "Estratégia de Conteúdo", desc: "Qualidade, frequência e alinhamento com seu público." },
  { icon: Users, title: "Aquisição de Clientes", desc: "Como você atrai, converte e fideliza clientes." },
  { icon: Lightbulb, title: "Oportunidades", desc: "Ações práticas e estratégicas para você crescer." },
  { icon: Bot, title: "Organização", desc: "Melhore sua empresa com IA." },
];

export function WhatWeAnalyze() {
  return (
    <section id="solucoes" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
        O que a Kria AI analisa para você
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((i) => (
          <div
            key={i.title}
            className="rounded-3xl border border-white/60 bg-white/85 p-5 text-center shadow-[var(--shadow-soft)] backdrop-blur transition-transform hover:-translate-y-1"
          >
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-kria-purple-soft text-kria-purple">
              <i.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-display text-sm font-bold text-foreground">{i.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
