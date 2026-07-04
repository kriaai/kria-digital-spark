import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  options: string[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  multi?: boolean;
  max?: number;
};

export function ChipGroup({ options, value, onChange, multi, max }: Props) {
  const selected = Array.isArray(value) ? value : value ? [value] : [];

  const toggle = (opt: string) => {
    if (!multi) {
      onChange(opt);
      return;
    }
    const arr = selected.includes(opt)
      ? selected.filter((s) => s !== opt)
      : max && selected.length >= max
        ? selected
        : [...selected, opt];
    onChange(arr);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              active
                ? "border-kria-orange bg-kria-orange-soft text-kria-orange shadow-[var(--shadow-soft)]"
                : "border-border bg-white text-foreground/70 hover:border-kria-purple/40 hover:text-kria-purple",
            )}
          >
            {opt}
            {active && <Check className="h-3.5 w-3.5" />}
          </button>
        );
      })}
    </div>
  );
}
