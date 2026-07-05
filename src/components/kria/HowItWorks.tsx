import { FileText, Search, Send } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    title: "1. Você conta onde está travando",
    desc: "Responda sobre seu negócio, projeto, rotina, presença digital, ferramentas, dificuldades e investimento disponível.",
  },
  {
    icon: Search,
    title: "2. A Kria identifica o melhor caminho",
    desc: "Analisamos se o seu problema precisa de estratégia, conteúdo, design, vídeo, automação, treinamento, IA ou execução profissional.",
  },
  {
    icon: Send,
    title: "3. Você decide com mais clareza",
    desc: "Suas respostas viram um resumo inicial no WhatsApp da Kria. Indicamos o que você pode fazer sozinho, o que pode otimizar com IA, o que vale contratar e o que a Kria pode resolver por você.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-center font-display text-2xl font-bold text-foreground sm:text-3xl">
        Como funciona
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.title}
            className="glass-card flex items-start gap-4 rounded-3xl p-5"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-kria-purple-soft text-kria-purple">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
