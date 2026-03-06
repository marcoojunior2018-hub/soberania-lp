# Brainstorm de Design — Landing Page Soberania Digital

## Contexto
Landing page para Marco Antonio, Arquiteto de Sistemas de Conversão. Conceito visual definido pelo Brand System: **Dark Editorial Engineering** — fusão de editorial premium com engenharia técnica. Paleta: Grafite `#0F1117`, Aço `#1B1F2A`, Off-white `#F2F2F2`, Ultravioleta `#8B5CF6`, Platinum `#C7CEDB`.

---

<response>
<text>
## Abordagem 1: "Blueprint Noir"

**Movimento de Design:** Inspirado em plantas técnicas de engenharia (blueprints) traduzidas para o universo dark editorial.

**Princípios Centrais:**
1. Cada seção da página funciona como uma "prancha técnica" de um projeto de engenharia, com margens numeradas e linhas de referência.
2. A informação é apresentada como se fosse um relatório técnico de alta confidencialidade — sóbrio, preciso, irrefutável.
3. O grid de fundo não é decorativo, mas funcional: ele organiza visualmente os blocos de conteúdo como coordenadas em uma planta.

**Filosofia de Cor:** O Grafite Profundo é o "papel técnico". O Platinum são as linhas de cota e referência. O Ultravioleta marca apenas os pontos de decisão (CTAs), como um marcador de engenheiro destacando o que precisa de ação. O Verde de Status aparece exclusivamente em métricas positivas, como um indicador de "aprovado".

**Paradigma de Layout:** Layout assimétrico com uma coluna de "margem técnica" à esquerda (8% da largura) que contém numeração de seções e labels verticais (como "SEÇÃO 01 — DIAGNÓSTICO"). O conteúdo principal ocupa os 92% restantes com grid de 12 colunas. Seções alternam entre layouts de 7/5 e 5/7 para criar ritmo visual.

**Elementos de Assinatura:**
1. Linhas de cota (dimension lines) conectando métricas aos seus contextos, como em um desenho técnico.
2. Labels de seção rotacionados 90° na margem esquerda, em IBM Plex Mono, criando uma navegação vertical implícita.

**Filosofia de Interação:** Scroll suave com parallax sutil nas linhas de grid. Elementos de conteúdo entram com fade-in + translate-y de 20px. Cards de métricas fazem um "count-up" animado quando entram no viewport.

**Animação:** Linhas de grid se desenham progressivamente conforme o scroll (stroke-dashoffset). Números de métricas contam de 0 ao valor final em 1.5s com easing cubic-bezier. Transições entre seções usam um efeito de "corte técnico" — uma linha horizontal Platinum que se expande da esquerda para a direita.

**Sistema Tipográfico:** Manrope ExtraBold para H1/H2 em tamanhos grandes (clamp(2.5rem, 5vw, 4.5rem)). Inter Light para corpo com tracking generoso (+0.02em). IBM Plex Mono para todas as métricas, labels de seção e chips. Hierarquia: título > subtítulo > corpo > label técnico.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Abordagem 2: "Terminal Executivo"

**Movimento de Design:** Inspirado na estética de terminais de comando e interfaces de monitoramento de dados, mas filtrado por uma lente de luxo corporativo.

**Princípios Centrais:**
1. A página simula a experiência de acessar um "painel de controle" exclusivo — o visitante sente que está entrando em um sistema restrito.
2. Cada bloco de informação é apresentado como um "módulo" de um dashboard, com bordas finas e indicadores de status.
3. A tipografia mono é protagonista, não coadjuvante — ela define o tom de "engenharia de dados" desde o primeiro pixel.

**Filosofia de Cor:** O fundo Grafite é o "terminal". O Aço Escuro é o fundo dos módulos/cards. O Ultravioleta é usado como cor de "cursor ativo" — ele pulsa sutilmente nos CTAs, como um prompt de terminal esperando input. O Platinum é a cor de toda a estrutura (bordas, separadores, ícones). O Verde de Status aparece como indicador de "sistema online" nos chips de credibilidade.

**Paradigma de Layout:** Full-width com seções que ocupam 100vw, mas o conteúdo interno é contido em um max-width de 1200px. O hero é full-screen com o título posicionado no terço superior (regra dos terços). Seções de conteúdo usam um grid de 2 colunas assimétricas (40/60 ou 60/40) que se invertem alternadamente. A seção de métricas usa um layout de "dashboard" com 4 módulos em grid 2x2.

**Elementos de Assinatura:**
1. Um "cursor piscante" (blinking caret) ao final do H1, como se o sistema estivesse digitando a headline em tempo real.
2. Chips de credibilidade com um pequeno dot verde pulsante à esquerda, simulando um indicador de "status: ativo".

**Filosofia de Interação:** O hero carrega com um efeito de "boot sequence" — o título aparece caractere por caractere (typewriter effect) em 2s. Scroll revela seções com um efeito de "módulo carregando" (borda se desenha, depois o conteúdo faz fade-in). Hover nos cards de portfólio aplica um leve glow Ultravioleta na borda.

**Animação:** Typewriter no H1 com cursor piscante. Bordas dos cards se desenham com stroke-dasharray animation (0.8s). Números de métricas fazem count-up com fonte mono. Transição entre seções: fade-in com delay escalonado (stagger) de 100ms entre elementos filhos.

**Sistema Tipográfico:** Manrope ExtraBold para títulos, mas com IBM Plex Mono como secundária forte (usada em subtítulos, labels e toda a seção de métricas). Inter Regular apenas para parágrafos longos. A hierarquia é: Manrope (impacto) > Plex Mono (técnico) > Inter (legibilidade).
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## Abordagem 3: "Obsidian Editorial"

**Movimento de Design:** Inspirado em revistas de arquitetura e design de interiores de luxo (como Wallpaper*, Monocle), traduzido para o digital com camadas de profundidade.

**Princípios Centrais:**
1. A página é tratada como uma publicação editorial de página única — cada seção é uma "matéria" com composição visual própria.
2. O espaço negativo é o elemento de design mais importante. A sofisticação vem do que NÃO está na tela.
3. As imagens e os dados são tratados com o mesmo peso visual — uma métrica de CPL tem a mesma importância compositiva que uma foto de portfólio.

**Filosofia de Cor:** O Grafite Profundo é a "capa da revista". O Aço Escuro cria camadas de profundidade (como folhas sobrepostas). O Off-white é usado com parcimônia — apenas para texto principal e elementos que precisam de máximo destaque. O Platinum é a cor de "impressão secundária" (subtítulos, bordas, ícones). O Ultravioleta aparece apenas 3 vezes na página inteira: nos 3 CTAs, criando pontos focais magnéticos.

**Paradigma de Layout:** Layout editorial com seções que alternam entre composições radicalmente diferentes: hero full-bleed com texto sobreposto, seção de dor em 3 colunas iguais, seção de revelação em split-screen 50/50, seção de pilares em layout de "revista" (texto fluindo ao redor de um elemento central), seção de métricas em "spread" (ocupando toda a largura com números gigantes), seção de oferta centralizada com muito respiro.

**Elementos de Assinatura:**
1. Separadores de seção que são linhas finas Platinum com um pequeno label em Plex Mono no centro (ex: "— 03 —"), como numeração de capítulos em uma revista.
2. Pull quotes (citações destacadas) em Manrope ExtraBold, tamanho gigante, com opacidade de 10%, usadas como textura de fundo em seções-chave.

**Filosofia de Interação:** Scroll-triggered reveals com timing editorial — elementos aparecem com fade-in lento (600ms) e translate-y mínimo (12px), criando uma sensação de "desdobramento" calmo. Nenhum efeito de hover agressivo; apenas mudanças sutis de opacidade e cor. O CTA é o único elemento com transição de cor perceptível (Platinum → Ultravioleta no hover).

**Animação:** Fade-in com translate-y de 12px e duração de 600ms (easing: cubic-bezier(0.16, 1, 0.3, 1)). Separadores de seção se expandem horizontalmente (width: 0 → 100%) em 0.8s. Imagens de portfólio fazem um reveal com clip-path (inset se abre de 100% para 0%). Sem animações de loop ou pulso — tudo é triggered uma vez.

**Sistema Tipográfico:** Manrope ExtraBold em tamanhos dramáticos para H1 (clamp(3rem, 6vw, 5.5rem)) e H2 (clamp(1.8rem, 3vw, 2.8rem)). Inter Light (300) para corpo com line-height generoso (1.8). IBM Plex Mono exclusivamente para dados, chips e labels técnicos. Contraste extremo entre pesos: ExtraBold (800) vs Light (300).
</text>
<probability>0.07</probability>
</response>

---

## Decisão: Abordagem Escolhida

**Abordagem 3: "Obsidian Editorial"** é a escolhida.

Justificativa: Esta abordagem é a que melhor traduz o conceito "Dark Editorial Engineering" do Brand System. O tratamento editorial com espaço negativo como protagonista, a restrição cirúrgica do Ultravioleta a apenas 3 pontos focais (CTAs), e o sistema de separadores numerados criam uma experiência que é inequivocamente premium e técnica, sem cair no clichê de "dashboard tech" ou "blueprint decorativo". A filosofia de animação calma e intencional reflete perfeitamente os arquétipos Mago + Sábio + Governante: transforma com elegância, explica com clareza, estrutura com autoridade.
