import { Lightbulb, ShieldCheck } from "lucide-react";

type Props = {
  progress: number;
  missing: string[];
};

export function ProgressPanel({ progress, missing }: Props) {
  const done = missing.length === 0;
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="glass-card rounded-3xl p-5 sm:p-6">
        <div className="flex items-baseline justify-between">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Seu progresso
          </h4>
          <span className="font-display text-3xl font-black text-kria-orange">{progress}%</span>
        </div>

        <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-kria-purple-soft">
          <div
            className="h-full rounded-full bg-gradient-to-r from-kria-orange to-[oklch(0.68_0.2_30)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-xs text-muted-foreground">
          {done
            ? "Tudo pronto! Envie seu diagnóstico."
            : `Faltam ${missing.length} ${missing.length === 1 ? "etapa" : "etapas"} para seu diagnóstico completo`}
        </p>
      </div>

      <div className="mt-4 rounded-3xl border border-kria-orange/20 bg-kria-orange-soft/60 p-5">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-kria-orange">
            <Lightbulb className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-foreground">Dica</div>
            <p className="mt-1 text-xs leading-relaxed text-foreground/70">
              Responda com sinceridade para receber um diagnóstico mais preciso e estratégico.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 hidden rounded-3xl border border-border bg-white/70 p-5 lg:block">
        <div className="flex items-start gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-kria-purple-soft text-kria-purple">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="text-sm font-bold text-foreground">Seus dados estão seguros</div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Não compartilhamos suas informações com terceiros.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
