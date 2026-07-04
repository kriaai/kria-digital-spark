export function Footer() {
  return (
    <footer className="mt-8 border-t border-border/60 bg-white/60 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 text-center sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-kria-purple to-kria-purple-deep font-display text-sm font-black text-white">
            K
          </div>
          <div className="text-left leading-tight">
            <div className="font-display text-sm font-bold text-foreground">Kria AI</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Estratégia & Presença Digital
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kria AI · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
