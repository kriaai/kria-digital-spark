import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import type { Diagnosis } from "@/lib/diagnosis";

export function DiagnosticSummary({ d, ready }: { d: Diagnosis; ready: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-kria-purple/15 bg-gradient-to-br from-white via-white to-kria-purple-soft/60 p-5 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="mb-5 flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-kria-purple to-kria-purple-deep text-white">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">
            Seu resumo inicial está pronto
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {ready
              ? "Com base nas suas respostas, a Kria vai entender seu cenário e indicar o caminho mais inteligente para você economizar tempo, dinheiro e energia: aprender, automatizar, criar com IA, contratar uma solução pontual ou desenvolver um projeto personalizado."
              : "Preencha as etapas anteriores para gerar seu resumo inicial personalizado."}
          </p>
        </div>
      </div>

      {ready && (
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kria-purple">
              <TrendingUp className="h-4 w-4" />
              Maturidade digital
            </div>
            <div className="mt-2 font-display text-2xl font-black text-foreground">
              {d.maturidade}
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{d.investimentoSugerido}</p>
          </div>

          <div className="rounded-2xl border border-border bg-white p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-kria-orange">
              Pontos de melhoria
            </div>
            <ul className="mt-2 space-y-1.5">
              {d.pontosMelhoria.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kria-orange" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-4 md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-wider text-kria-purple">
              Próximos passos recomendados
            </div>
            <ul className="mt-2 space-y-2">
              {d.proximosPassos.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-kria-orange" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
