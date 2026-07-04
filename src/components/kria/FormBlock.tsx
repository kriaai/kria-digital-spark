import type { ReactNode } from "react";

type Props = {
  number: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
};

export function FormBlock({ number, title, subtitle, children, id }: Props) {
  return (
    <div
      id={id}
      className="rounded-3xl border border-white/60 bg-white/85 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7"
    >
      <div className="mb-5 flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-kria-purple to-kria-purple-deep font-display text-sm font-black text-white">
          {number}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-foreground/80">{label}</label>
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-kria-purple focus:ring-2 focus:ring-kria-purple/20"
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-kria-purple focus:ring-2 focus:ring-kria-purple/20"
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-kria-purple focus:ring-2 focus:ring-kria-purple/20"
    />
  );
}
