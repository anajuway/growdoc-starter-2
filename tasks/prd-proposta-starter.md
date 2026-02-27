# PRD: Página de Proposta Comercial — GrowDoc Starter

## Introduction

Criar uma página web de proposta comercial para o plano **GrowDoc Starter** (R$2.500/mês).
A página funciona como uma landing page de vendas enviada a potenciais clientes médicos via link (Vercel).
Ela deve encantar, convencer e converter — combinando identidade visual GrowDoc com design elegante e animado dos templates de referência.

A página é **genérica** (mesma para todos os clientes) e **estática** (sem personalização por nome/foto).

---

## Goals

- Apresentar o plano Starter de forma visualmente impactante e encantadora
- Comunicar claramente os 4 entregáveis com seus benefícios reais
- Gerar confiança por meio de portfólio de LPs reais e depoimentos de médicos
- Direcionar o médico ao checkout com CTA claro e repetido
- Ser 100% responsiva (mobile-first) e hospedável na Vercel gratuitamente
- Servir como estrutura base reutilizável para os planos Program e Program Plus

---

## User Stories

### US-001: Seção Hero
**Description:** Como médico que recebe o link, quero ver imediatamente do que se trata a proposta e sentir que é algo de qualidade.

**Acceptance Criteria:**
- [ ] Logo GrowDoc visível no topo (arquivo PNG do Manual de Marca)
- [ ] Headline impactante: ex. "Sua presença digital, do zero ao profissional"
- [ ] Subtítulo com contexto: plano Starter, 1 mês, R$2.500
- [ ] CTA primário visível no hero ("Quero começar agora")
- [ ] Fundo escuro (#131515) com accent verde (#01FEC2)
- [ ] Animação de entrada com Framer Motion
- [ ] Verify in browser using dev-browser skill

### US-002: Seção "Por que a GrowDoc"
**Description:** Como médico, quero entender por que a GrowDoc é diferente e por que devo confiar neles.

**Acceptance Criteria:**
- [ ] 3-4 diferenciais em cards com ícone (Lucide React)
- [ ] Ex: "Time especializado em médicos", "Método validado", "Resultado comprovado"
- [ ] Animação ao scroll (whileInView Framer Motion)
- [ ] Verify in browser using dev-browser skill

### US-003: Seção de Entregáveis
**Description:** Como médico, quero saber exatamente o que vou receber no plano Starter.

**Acceptance Criteria:**
- [ ] 4 cards detalhados: Landing Page, Ficha Google Meu Negócio, Ensaio ART.IA, Plataforma GrowDoc
- [ ] Cada card com: ícone, título, descrição expandida do benefício
- [ ] Ficha Google destacar: configurada com palavras-chave específicas para SEO (busca orgânica)
- [ ] Nota de upsell discreta: "Atualizações recorrentes disponíveis nos planos de recorrência"
- [ ] Layout grid responsivo (1 col mobile, 2 col tablet, 2 col desktop)
- [ ] Verify in browser using dev-browser skill

### US-004: Seção Ensaio ART.IA (Antes e Depois)
**Description:** Como médico, quero ver o resultado real do ensaio fotográfico com IA para entender a transformação.

**Acceptance Criteria:**
- [ ] Comparação visual lado a lado: foto bruta vs. resultado profissional (Aline Nigre)
- [ ] Label "Antes" e "Depois" sobre as fotos
- [ ] Texto explicando que é feito sem sair de casa, com fotos de celular
- [ ] Imagens otimizadas (next/image)
- [ ] Verify in browser using dev-browser skill

### US-005: Seção de Portfólio de LPs
**Description:** Como médico, quero ver exemplos reais de landing pages criadas pela GrowDoc.

**Acceptance Criteria:**
- [ ] Grid com cards linkando para as 16 LPs reais do portfólio
- [ ] Cada card com nome do médico/clínica e link clicável
- [ ] Visual elegante (hover effect, borda verde)
- [ ] Verify in browser using dev-browser skill

### US-006: Seção "Como Funciona" (Fluxo Pós-Pagamento)
**Description:** Como médico, quero saber o que acontece depois que eu fechar o plano.

**Acceptance Criteria:**
- [ ] Timeline ou steps numerados com os 7 passos do fluxo
- [ ] Destaque para o WhatsApp como canal principal
- [ ] Menção ao time: Gestor de Tráfego, Designer, Copy, Editor, Suporte
- [ ] Animação sequencial dos steps ao scroll
- [ ] Verify in browser using dev-browser skill

### US-007: Seção de Depoimentos
**Description:** Como médico, quero ver prova social de outros médicos que já usaram a GrowDoc.

**Acceptance Criteria:**
- [ ] 4 cards de depoimento: Dr. Carlos Trindade, Dra. Aline Ribeiro, Dr. Fabiano Winckler, Dr. Romollo Pelegrino
- [ ] Cada card: nome, especialidade, texto do depoimento, estrelas
- [ ] Layout em grid (1 col mobile, 2 col desktop)
- [ ] Hover effect nos cards
- [ ] Verify in browser using dev-browser skill

### US-008: Seção da Proposta (Resumo + Valor)
**Description:** Como médico, quero ver claramente o que estou comprando, o valor e as condições.

**Acceptance Criteria:**
- [ ] Card/box destacado com: nome do plano, valor (R$2.500), prazo (1 mês)
- [ ] Lista dos 4 entregáveis resumidos com checkmark verde
- [ ] Condições gerais: proposta válida 5 dias, LP hospedada no domínio GrowDoc, sem estorno
- [ ] Design premium (borda verde, fundo escuro, destaque visual)
- [ ] Verify in browser using dev-browser skill

### US-009: CTA Final + Footer
**Description:** Como médico, quero um botão claro para finalizar a compra.

**Acceptance Criteria:**
- [ ] Botão grande e destacado: "Quero começar agora" → link de checkout
- [ ] URL do checkout: https://pay.barte.com/payment-link/5f010996-9f70-46c4-af5c-900f7bc0d32a
- [ ] CTA repetido ao menos 3x na página (hero, seção proposta, final)
- [ ] Footer com logo GrowDoc e slogan "GROW OR DIE"
- [ ] Verify in browser using dev-browser skill

### US-010: Qualidade técnica e deploy
**Description:** Como desenvolvedora, quero que a página esteja pronta para hospedagem na Vercel.

**Acceptance Criteria:**
- [ ] `npm run build` sem erros
- [ ] `npm run lint` sem erros críticos
- [ ] Todas as imagens usando `next/image`
- [ ] Fontes Axiforma carregadas via `@font-face` (arquivos .ttf locais)
- [ ] Cores GrowDoc definidas no `tailwind.config.ts`
- [ ] Responsiva em mobile (375px), tablet (768px) e desktop (1280px)

---

## Functional Requirements

- FR-1: A página deve ser uma single-page application Next.js com App Router
- FR-2: As cores da marca GrowDoc devem ser configuradas como tokens no Tailwind
- FR-3: As fontes Axiforma devem ser carregadas via `@font-face` com os arquivos .ttf do projeto
- FR-4: Todas as animações devem usar Framer Motion com `whileInView` e `viewport={{ once: true }}`
- FR-5: O botão de CTA deve abrir o link de checkout em nova aba
- FR-6: As imagens do ensaio ART.IA devem ser servidas via `next/image` com otimização
- FR-7: A página deve funcionar sem JavaScript desabilitado (progressive enhancement)
- FR-8: O logo GrowDoc deve vir dos arquivos PNG em `Manual de Marca GROWDOC/Logos em PNG/`

---

## Non-Goals

- Sem personalização por nome/foto do médico (genérica)
- Sem backend, banco de dados ou formulários
- Sem analytics ou tracking nesta versão
- Sem modo escuro/claro (apenas dark mode fixo)
- Sem sistema de CMS ou edição sem código
- Não inclui os planos Program ou Program Plus

---

## Design Considerations

- **Paleta:** Fundo `#131515`, accent `#01FEC2`, texto branco `#FFFFFF`
- **Fonte:** Axiforma (SemiBold para títulos, Regular para corpo)
- **Estilo geral:** Dark mode elegante, seções bem espaçadas, gradientes sutis
- **Referência de estrutura:** templates `launch-ui` e `mckays` em `/Users/anajulia/pages_templates/`
- **Referência de conteúdo:** PDFs em `Proposta Starter (exemplo)/`
- **Imagens disponíveis:** `Materiais Visuais/` (fundos, troféus), `Ensaio Fotográfico IA/` (antes/depois)

---

## Technical Considerations

- **Framework:** Next.js 15 + App Router + TypeScript
- **Estilo:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Imagens:** next/image (otimização automática)
- **Deploy:** Vercel (gratuito, push no GitHub)
- **Fontes:** Axiforma via `@font-face` nos arquivos .ttf locais
- **Logos:** PNG do Manual de Marca (copiar para `public/`)

---

## Success Metrics

- Página carrega em menos de 3s no mobile
- Todos os CTAs levam ao checkout correto
- Build sem erros na Vercel
- Design aprovado visualmente antes do deploy

---

## Open Questions

- Usar vídeo de fundo ou animação no hero, ou imagem estática?
- Mostrar o portfólio de LPs com screenshot (captura automática) ou só links?
- Adicionar seção de FAQ com condições gerais?
