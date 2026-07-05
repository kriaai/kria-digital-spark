import type { Answers, Diagnosis } from "./diagnosis";

const WHATSAPP_NUMBER = "559185091584";

function line(label: string, value: string | string[]) {
  const v = Array.isArray(value) ? value.join(", ") : value;
  return v && v.trim() ? `*${label}:* ${v}` : "";
}

export function buildWhatsAppMessage(a: Answers, d: Diagnosis): string {
  const parts = [
    "Olá, Kria AI! Acabei de responder a análise inicial. 👇",
    "",
    "━━ QUEM É VOCÊ ━━",
    line("Nome", a.nome),
    line("WhatsApp", a.whatsapp),
    line("Instagram/Site", a.instagram),
    line("Cidade/Estado", a.cidade),
    line("Tipo", a.tipo),
    line("Papel principal", a.papel),
    "",
    "━━ NEGÓCIO / PROJETO ━━",
    line("Nome do negócio", a.negocioNome),
    line("Segmento", a.segmento),
    line("Fase", a.fase),
    "",
    "━━ PRESENÇA DIGITAL ━━",
    line("Avaliação atual", a.presencaDigital),
    line("Site/página", a.temSite),
    line("Redes ativas", a.redes),
    "",
    "━━ DIFICULDADES ━━",
    line("Principais", a.dificuldades),
    line("Explicação", a.dificuldadeTexto),
    "",
    "━━ FERRAMENTAS E NÍVEL ━━",
    line("Nível digital / IA", a.nivelDigital),
    line("Ferramentas", a.ferramentas),
    "",
    "━━ INVESTIMENTO E SOLUÇÃO ━━",
    line("Investimento", a.investimento),
    line("Solução desejada", a.urgencia),
    line("Prazo", a.prazo),
    line("Prefere", a.preferencia),
    "",
    "━━ RESUMO INICIAL ━━",
    `*Maturidade digital:* ${d.maturidade}`,
    "*Pontos de melhoria:*",
    ...d.pontosMelhoria.map((p) => `• ${p}`),
    "*Próximos passos recomendados:*",
    ...d.proximosPassos.map((p) => `• ${p}`),
    `*Caminho sugerido:* ${d.investimentoSugerido}`,
    "",
    "Quero avançar com a Kria AI 🚀",
  ];

  const message = parts.filter((l) => l !== "").join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
