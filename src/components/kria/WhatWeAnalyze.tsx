import { Target, AlertTriangle, Bot, Layers, Wallet, Sparkles } from "lucide-react";

const ITEMS = [
  {
    icon: Target,
    title: "Objetivo de crescimento",
    desc: "Entendemos se você quer vender mais, atrair clientes, criar autoridade, melhorar sua imagem, lançar uma ideia, treinar equipe ou organizar processos.",
  },
  {
    icon: AlertTriangle,
    title: "Gargalo principal",
    desc: "Identificamos onde o negócio está travando: conteúdo, design, vídeo, atendimento, vendas, ferramentas, posicionamento, rotina ou falta de estratégia.",
  },
  {
    icon: Bot,
    title: "Nível com IA e tecnologia",
    desc: "Mapeamos o que você já sabe usar e o que precisa aprender para produzir mais rápido, se organizar melhor e economizar tempo.",
  },
  {
    icon: Layers,
    title: "Estrutura atual",
    desc: "Analisamos se você trabalha sozinho, tem equipe, já possui canais digitais, identidade visual, rotina de conteúdo, atendimento e materiais de venda.",
  },
  {
    icon: Wallet,
    title: "Orçamento e prioridade",
    desc: "Com base no investimento disponível, indicamos uma solução realista: algo rápido, uma entrega pontual, uma consultoria, um workshop ou um projeto completo.",
  },
  {
    icon: Sparkles,
    title: "Solução mais indicada",
    desc: "A Kria entende se faz mais sentido ensinar, criar por você, automatizar, montar um pack, fazer design, produzir vídeo, criar conteúdo com IA ou conectar você a parceiros.",
  },
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
