import { useMemo, useState } from "react";
import { FormBlock, Field, Input, Select, Textarea } from "./FormBlock";
import { ChipGroup } from "./ChipGroup";
import { ProgressPanel } from "./ProgressPanel";
import { DiagnosticSummary } from "./DiagnosticSummary";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { initialAnswers, buildDiagnosis, type Answers } from "@/lib/diagnosis";
import { buildWhatsAppMessage } from "@/lib/whatsapp";

const TIPOS = ["Empreendedor(a)", "Profissional liberal", "Empresa / Negócio", "Criador(a) de conteúdo", "Outro"];
const PAPEIS = ["Fundador(a) / Proprietário(a)", "Social media", "Gestor(a)", "Artista / Criador(a)", "Vendedor(a)", "Outro"];
const SEGMENTOS = ["Saúde", "Beleza", "Moda", "Gastronomia", "Educação", "Arte / Música", "Serviços", "Loja / Produto físico", "Influencer / Lifestyle", "Tecnologia", "Outro"];
const FASES = ["Estou começando", "Validando ideia", "Em crescimento", "Consolidado", "Outro"];
const PRESENCA = ["Inexistente", "Muito fraca", "Regular", "Boa", "Muito forte"];
const SITE = ["Sim", "Não", "Em construção"];
const REDES = ["Instagram", "TikTok", "WhatsApp", "YouTube", "Site", "Google Meu Negócio", "Nenhuma"];
const DIFICULDADES = ["Atrair clientes", "Gerar autoridade", "Criar conteúdo", "Vender mais", "Ter estratégia", "Gerenciar redes sociais", "Anúncios / Tráfego pago", "Fidelizar clientes", "Falta de tempo", "Outro"];
const NIVEIS = ["Iniciante", "Básico", "Intermediário", "Avançado"];
const FERRAMENTAS = ["Instagram", "TikTok", "Canva", "CapCut", "ChatGPT", "Claude", "Notion", "Google Drive", "Meta Ads", "WhatsApp Business", "Nenhuma"];
const INVESTIMENTOS = ["Até R$200", "R$200 a R$500", "R$500 a R$1.000", "R$1.000 a R$3.000", "R$3.000 a R$7.000", "Acima de R$7.000", "Depende da proposta"];
const URGENCIAS = ["Análise inicial", "Plano de conteúdo", "Consultoria", "Workshop", "Posts / Design", "Avatar / Book IA", "Edição de vídeo", "Direção + gravação", "Treinamento de equipe", "Automação"];
const PRAZOS = ["Agora", "Esta semana", "Este mês", "Só pesquisando"];
const PREFERENCIAS = ["Aprender a fazer sozinho(a)", "Contratar alguém para fazer por mim", "Treinar minha equipe", "Ter uma solução pronta", "Automatizar parte do processo", "Ainda não sei"];

export function DiagnosticForm() {
  const [a, setA] = useState<Answers>(initialAnswers);

  const set = <K extends keyof Answers>(k: K) => (v: Answers[K]) => setA((prev) => ({ ...prev, [k]: v }));

  const requiredChecks = useMemo(
    () => [
      { key: "Nome", ok: !!a.nome.trim() },
      { key: "WhatsApp", ok: !!a.whatsapp.trim() },
      { key: "Tipo", ok: !!a.tipo },
      { key: "Segmento", ok: !!a.segmento },
      { key: "Presença digital", ok: !!a.presencaDigital },
      { key: "Maior dificuldade", ok: a.dificuldades.length >= 1 },
      { key: "Nível digital", ok: !!a.nivelDigital },
      { key: "Investimento", ok: !!a.investimento },
    ],
    [a],
  );

  const done = requiredChecks.filter((r) => r.ok).length;
  const total = requiredChecks.length;
  const progress = Math.round((done / total) * 100);
  const missing = requiredChecks.filter((r) => !r.ok).map((r) => r.key);
  const ready = missing.length === 0;

  const diagnosis = useMemo(() => buildDiagnosis(a), [a]);
  const href = useMemo(() => buildWhatsAppMessage(a, diagnosis), [a, diagnosis]);

  return (
    <section id="diagnostico" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      {/* Mobile progress */}
      <div className="mb-6 lg:hidden">
        <ProgressPanel progress={progress} missing={missing} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-5">
          <FormBlock number={1} title="Quem é você?" subtitle="Conta um pouco sobre você para personalizarmos tudo.">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome *">
                <Input value={a.nome} onChange={(e) => set("nome")(e.target.value)} placeholder="Seu nome completo" />
              </Field>
              <Field label="WhatsApp *">
                <Input value={a.whatsapp} onChange={(e) => set("whatsapp")(e.target.value)} placeholder="(00) 00000-0000" />
              </Field>
              <Field label="Instagram / Site">
                <Input value={a.instagram} onChange={(e) => set("instagram")(e.target.value)} placeholder="@seuperfil ou seusite.com" />
              </Field>
              <Field label="Cidade / Estado">
                <Input value={a.cidade} onChange={(e) => set("cidade")(e.target.value)} placeholder="Ex: Belém / PA" />
              </Field>
            </div>
            <Field label="Você é *">
              <ChipGroup options={TIPOS} value={a.tipo} onChange={(v) => set("tipo")(v as string)} />
            </Field>
            <Field label="Papel principal">
              <Select value={a.papel} onChange={(e) => set("papel")(e.target.value)}>
                <option value="">Selecione seu papel</option>
                {PAPEIS.map((p) => <option key={p}>{p}</option>)}
              </Select>
            </Field>
          </FormBlock>

          <FormBlock number={2} title="Seu negócio ou projeto">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Qual o nome do seu negócio ou projeto?">
                <Input value={a.negocioNome} onChange={(e) => set("negocioNome")(e.target.value)} placeholder="Ex: Exemplo Café Especial" />
              </Field>
              <Field label="Em qual segmento você atua? *">
                <Select value={a.segmento} onChange={(e) => set("segmento")(e.target.value)}>
                  <option value="">Selecione seu segmento</option>
                  {SEGMENTOS.map((s) => <option key={s}>{s}</option>)}
                </Select>
              </Field>
            </div>
            <Field label="Qual a fase atual do seu negócio?">
              <ChipGroup options={FASES} value={a.fase} onChange={(v) => set("fase")(v as string)} />
            </Field>
          </FormBlock>

          <FormBlock number={3} title="Sua presença digital hoje">
            <Field label="Como você avalia sua presença digital atual? *">
              <ChipGroup options={PRESENCA} value={a.presencaDigital} onChange={(v) => set("presencaDigital")(v as string)} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Você possui site ou página principal?">
                <ChipGroup options={SITE} value={a.temSite} onChange={(v) => set("temSite")(v as string)} />
              </Field>
              <Field label="Redes ativas">
                <ChipGroup options={REDES} value={a.redes} onChange={(v) => set("redes")(v as string[])} multi />
              </Field>
            </div>
          </FormBlock>

          <FormBlock number={4} title="Suas maiores dificuldades" subtitle="Selecione até 3.">
            <ChipGroup options={DIFICULDADES} value={a.dificuldades} onChange={(v) => set("dificuldades")(v as string[])} multi max={3} />
            <Field label="Explique brevemente o que mais te trava">
              <Textarea value={a.dificuldadeTexto} onChange={(e) => set("dificuldadeTexto")(e.target.value)} rows={3} placeholder="Fale um pouco sobre o principal desafio hoje..." />
            </Field>
          </FormBlock>

          <FormBlock number={5} title="Ferramentas e nível digital">
            <div className="grid gap-4 lg:grid-cols-2">
              <Field label="Qual seu nível de domínio digital? *">
                <ChipGroup options={NIVEIS} value={a.nivelDigital} onChange={(v) => set("nivelDigital")(v as string)} />
              </Field>
              <Field label="Quais ferramentas você já utiliza?">
                <ChipGroup options={FERRAMENTAS} value={a.ferramentas} onChange={(v) => set("ferramentas")(v as string[])} multi />
              </Field>
            </div>
          </FormBlock>

          <FormBlock number={6} title="Investimento e solução desejada">
            <Field label="Qual investimento faz sentido para você agora? *">
              <ChipGroup options={INVESTIMENTOS} value={a.investimento} onChange={(v) => set("investimento")(v as string)} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="O que você busca com mais urgência?">
                <Select value={a.urgencia} onChange={(e) => set("urgencia")(e.target.value)}>
                  <option value="">Selecione sua prioridade</option>
                  {URGENCIAS.map((u) => <option key={u}>{u}</option>)}
                </Select>
              </Field>
              <Field label="Qual seu prazo?">
                <ChipGroup options={PRAZOS} value={a.prazo} onChange={(v) => set("prazo")(v as string)} />
              </Field>
            </div>
          </FormBlock>

          <DiagnosticSummary d={diagnosis} ready={ready} />

          <WhatsAppCTA href={href} disabled={!ready} missingCount={missing.length} />
        </div>

        <div className="hidden lg:block">
          <ProgressPanel progress={progress} missing={missing} />
        </div>
      </div>
    </section>
  );
}
