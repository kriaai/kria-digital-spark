export type Answers = {
  nome: string;
  whatsapp: string;
  instagram: string;
  cidade: string;
  tipo: string;
  papel: string;
  negocioNome: string;
  segmento: string;
  fase: string;
  presencaDigital: string;
  temSite: string;
  identidadeVisual: string;
  redes: string[];
  dificuldades: string[];
  dificuldadeTexto: string;
  nivelDigital: string;
  ferramentas: string[];
  ferramentasOutro: string;
  investimento: string;
  urgencia: string[];
  urgenciaOutro: string;
  prazo: string;
  preferencia: string;
};

export const initialAnswers: Answers = {
  nome: "",
  whatsapp: "",
  instagram: "",
  cidade: "",
  tipo: "",
  papel: "",
  negocioNome: "",
  segmento: "",
  fase: "",
  presencaDigital: "",
  temSite: "",
  identidadeVisual: "",
  redes: [],
  dificuldades: [],
  dificuldadeTexto: "",
  nivelDigital: "",
  ferramentas: [],
  investimento: "",
  urgencia: "",
  prazo: "",
  preferencia: "",
};

export type Diagnosis = {
  maturidade: "Inicial" | "Em desenvolvimento" | "Consolidada";
  pontosMelhoria: string[];
  proximosPassos: string[];
  investimentoSugerido: string;
};

const presencaScore: Record<string, number> = {
  Inexistente: 0,
  "Muito fraca": 1,
  Regular: 2,
  Boa: 3,
  "Muito forte": 4,
};

const nivelScore: Record<string, number> = {
  Iniciante: 0,
  Básico: 1,
  Intermediário: 2,
  Avançado: 3,
};

const passosPorDificuldade: Record<string, string> = {
  "Atrair clientes": "Estruturar aquisição com conteúdo estratégico + tráfego pago segmentado",
  "Gerar autoridade": "Definir posicionamento claro e produzir conteúdo de referência com IA",
  "Criar conteúdo": "Montar rotina de conteúdo assistida por IA (roteiro, design e edição)",
  "Vender mais": "Estruturar oferta, script de vendas e jornada no WhatsApp",
  "Ter estratégia": "Triagem estratégica + plano de 90 dias personalizado",
  "Gerenciar redes sociais": "Rotina de gestão com social media + automação",
  "Anúncios / Tráfego pago": "Estruturação de campanhas com criativos testados",
  "Fidelizar clientes": "Programa de relacionamento e conteúdo de recorrência",
  "Falta de tempo": "Automações e delegação assistida por IA",
  Outro: "Sessão de descoberta para mapear o bloqueio específico",
};

export function buildDiagnosis(a: Answers): Diagnosis {
  const p = presencaScore[a.presencaDigital] ?? 0;
  const n = nivelScore[a.nivelDigital] ?? 0;
  const soma = p + n;

  const maturidade: Diagnosis["maturidade"] =
    soma <= 2 ? "Inicial" : soma <= 4 ? "Em desenvolvimento" : "Consolidada";

  const pontosMelhoria: string[] = [];
  if (p <= 1) pontosMelhoria.push("Presença digital ainda pouco visível — falta consistência");
  if (n <= 1) pontosMelhoria.push("Uso de IA e ferramentas pode evoluir para acelerar entregas");
  if (!a.temSite || a.temSite === "Não tenho") pontosMelhoria.push("Ausência de site/página principal reduz autoridade");
  if (a.redes.length <= 1) pontosMelhoria.push("Baixa presença em canais estratégicos");
  if (a.dificuldades.includes("Ter estratégia")) pontosMelhoria.push("Falta de estratégia clara direcionando as ações");
  if (pontosMelhoria.length === 0) pontosMelhoria.push("Base sólida — foco agora em escala, IA e diferenciação");

  const proximosPassos = a.dificuldades
    .slice(0, 3)
    .map((d) => passosPorDificuldade[d])
    .filter(Boolean);
  if (proximosPassos.length === 0) proximosPassos.push("Triagem estratégica para desenhar o próximo salto");

  const investimentoSugerido =
    a.investimento === "Até R$200"
      ? "Comece por um material pronto ou mini-treinamento com IA"
      : a.investimento === "R$200 a R$500"
        ? "Sessão pontual de orientação + pack de conteúdo com IA"
        : a.investimento === "R$500 a R$1.000"
          ? "Mini consultoria ou workshop focado no seu maior gargalo"
          : a.investimento === "R$1.000 a R$3.000"
            ? "Consultoria estratégica + início de automação/conteúdo com IA"
            : a.investimento === "R$3.000 a R$7.000"
              ? "Projeto combinando estratégia, criação com IA e execução"
              : a.investimento === "Acima de R$7.000"
                ? "Projeto personalizado completo com IA, conteúdo e automação"
                : "Vamos alinhar a proposta ideal conforme seu objetivo e prazo";

  return { maturidade, pontosMelhoria, proximosPassos, investimentoSugerido };
}
