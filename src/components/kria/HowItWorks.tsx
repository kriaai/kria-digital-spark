import { FileText, Search, Send } from "lucide-react";
import step1 from "@/assets/how-step-1.jpg";
import step2 from "@/assets/how-step-2.jpg";
import step3 from "@/assets/how-step-3.jpg";

const STEPS = [
  {
    icon: FileText,
    image: step1,
    title: "1. Você responde e mostra seu cenário",
    desc: "Você preenche um diagnóstico rápido contando sobre seu negócio, rotina, presença digital, ferramentas, dificuldades, objetivos e capacidade de investimento. Assim, a Kria entende o seu momento real antes de indicar qualquer solução.",
  },
  {
    icon: Search,
    image: step2,
    title: "2. A Kria analisa o que faz mais sentido",
    desc: "Com base nas suas respostas, avaliamos onde a IA pode economizar tempo, reduzir esforço, organizar processos ou melhorar seus resultados. Identificamos se o melhor caminho envolve conteúdo, design, vídeo, automação, estratégia, treinamento ou execução.",
  },
  {
    icon: Send,
    image: step3,
    title: "3. Você recebe clareza para decidir o próximo passo",
    desc: "Suas respostas viram um direcionamento inicial no WhatsApp da Kria. Mostramos o que você pode fazer sozinho, o que vale otimizar com IA, o que pode contratar com apoio profissional e quais soluções da Kria podem acelerar seu resultado.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
        {STEPS.map((s) => (
          <article
            key={s.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-[var(--shadow-soft)] backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-kria-purple-soft/40">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 text-kria-purple shadow-[var(--shadow-soft)] backdrop-blur">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-white/60 px-6 py-4 text-center backdrop-blur">
        <p className="text-sm text-muted-foreground sm:text-base">
          Sem complicação, sem termos técnicos e sem fórmula genérica — a ideia é mostrar com clareza o que faz sentido para o seu caso.
        </p>
      </div>
    </section>
  );
}
