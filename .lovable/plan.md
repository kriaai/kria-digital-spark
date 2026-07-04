# Kria AI — Landing de Diagnóstico

Landing page single-page em português, responsiva, com formulário-quiz interativo que gera diagnóstico local e envia tudo pré-preenchido para o WhatsApp da Kria.

## Design system (src/styles.css)

- Paleta clara premium: fundo `oklch(0.99 0.01 300)` (branco lilás), primary roxo `oklch(0.55 0.22 285)`, accent laranja `oklch(0.72 0.19 45)`, cards brancos puros.
- Tokens novos: `--kria-purple`, `--kria-purple-soft`, `--kria-orange`, `--gradient-hero` (branco→lilás claro), `--shadow-card` (sombra roxa suave), `--shadow-glow` para CTA laranja.
- Fonte: Plus Jakarta Sans (headings) + Inter (body), via `<link>` em `__root.tsx`.
- Bordas 2xl, glassmorphism leve (`backdrop-blur` + `bg-white/70`) nos cards de benefício e barra de progresso.

## Rota única

- `src/routes/index.tsx` substitui placeholder. `head()` com título, description, OG tags em pt-BR ("Kria AI — Diagnóstico da sua presença digital").
- `__root.tsx`: atualizar meta padrão para Kria AI + adicionar `<link>` das fontes.

## Componentes (`src/components/kria/`)

1. `Header.tsx` — logo K (SVG inline roxo/laranja) + "Kria AI", menu (Início, Soluções, Sobre a Kria, Cases, Conteúdos, Contato) com scroll suave para âncoras, botão laranja "Começar diagnóstico" que rola até o form.
2. `Hero.tsx` — título com "sua presença digital" em laranja, subtítulo, 3 cards benefício (ícones Lucide: Clock, Target, Sparkles), imagem da consultora à direita (imagem gerada via imagegen: retrato feminino roxo/laranja com skyline lilás).
3. `ProgressPanel.tsx` — barra lateral sticky no desktop (lg:), topo sticky no mobile. Mostra % baseado em campos obrigatórios preenchidos + card "Dica".
4. `DiagnosticForm.tsx` — orquestra estado global (useState único com objeto `answers`), renderiza 7 blocos em cards.
5. `FormBlock.tsx` — card numerado reutilizável (número em círculo laranja, título, children).
6. `ChipGroup.tsx` — chips selecionáveis single/multi (com limite opcional de 3), estado ativo com fill laranja + check.
7. `DiagnosticSummary.tsx` — bloco 7, gera resumo local via função pura `buildDiagnosis(answers)` (regras: maturidade baseada em presença digital + nível; próximos passos baseados nas dificuldades top; investimento sugerido).
8. `WhatsAppCTA.tsx` — botão laranja grande com ícone WhatsApp; monta mensagem com `encodeURIComponent` e abre `https://wa.me/559185091584?text=...`.
9. `HowItWorks.tsx` — 3 passos com setas.
10. `WhatWeAnalyze.tsx` — 5 cards (Posicionamento, Presença Digital, Estratégia de Conteúdo, Aquisição, Oportunidades).
11. `Testimonial.tsx` — depoimento da CEO + stats (+120 negócios, +R$8M, 98%).
12. `FinalCTA.tsx` — faixa final com botão laranja.
13. `Footer.tsx` — mínimo com links e copyright.

## Lógica do formulário

Estado único:
```
{ nome, whatsapp, instagram, cidade, tipo, papel, negocioNome, segmento, fase,
  presencaDigital, temSite, redes[], dificuldades[] (max 3), dificuldadeTexto,
  nivelDigital, ferramentas[], investimento, urgencia, prazo }
```

Campos obrigatórios (8): `nome, whatsapp, tipo, segmento, presencaDigital, dificuldades.length>=1, nivelDigital, investimento`. Progresso = preenchidos/8 × 100.

Botão CTA desabilitado até 100% (mostra tooltip com campos faltantes).

## Mensagem WhatsApp

Template pt-BR com quebras de linha `%0A`, emojis discretos, todas as 15 seções organizadas + diagnóstico gerado. Função `buildWhatsAppMessage(answers, diagnosis)` em `src/lib/whatsapp.ts`.

## Diagnóstico local (`src/lib/diagnosis.ts`)

Função pura retorna `{ maturidade: 'Inicial'|'Em desenvolvimento'|'Consolidada', pontosMelhoria: string[], proximosPassos: string[], investimentoSugerido: string }` com regras simples baseadas nas respostas. Sem API.

## Responsividade

- Mobile: progresso no topo sticky, hero empilhado (imagem embaixo), chips com `flex-wrap`, cards full-width com `px-4`.
- Desktop lg: grid 3 colunas (nav lateral etapas | form | painel progresso), hero 2 colunas.
- Uso do padrão `grid-cols-[minmax(0,1fr)_auto]` no header + `min-w-0`/`shrink-0` conforme guideline.

## Assets

- 1 imagem gerada (imagegen fast, 1024×1280): retrato consultora ruiva, blazer claro, fundo lilás com skyline sutil, salvo em `src/assets/kria-consultora.jpg`.
- Logo K construído como SVG inline (não gera imagem).

## Fora de escopo

Sem backend, sem envio de e-mail, sem persistência — o WhatsApp é o único destino. Sem rotas extras (âncoras `#solucoes`, `#sobre`, etc. rolam dentro da index).
