import { Lock } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Props = {
  href: string;
  disabled: boolean;
  missingCount: number;
};

export function WhatsAppCTA({ href, disabled, missingCount }: Props) {
  return (
    <div className="space-y-3">
      <a
        href={disabled ? undefined : href}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
        onClick={(e) => disabled && e.preventDefault()}
        className={`group flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 text-center font-display text-base font-bold text-white shadow-[var(--shadow-glow)] transition-all sm:text-lg ${
          disabled
            ? "cursor-not-allowed bg-muted-foreground/40"
            : "bg-gradient-to-r from-kria-orange to-[oklch(0.68_0.2_30)] hover:scale-[1.01]"
        }`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        Enviar minhas respostas para a Kria no WhatsApp
      </a>
      <p className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <Lock className="h-3 w-3" />
        {disabled
          ? `Faltam ${missingCount} campo${missingCount === 1 ? "" : "s"} obrigatório${missingCount === 1 ? "" : "s"} para enviar`
          : "A análise completa e a proposta personalizada serão feitas no atendimento, de acordo com seu objetivo, urgência, nível de entrega e investimento disponível."}
      </p>
    </div>
  );
}
