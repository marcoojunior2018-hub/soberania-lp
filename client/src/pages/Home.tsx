import Header from '@/components/Header';
import SectionDivider from '@/components/SectionDivider';
import { pushToDataLayer } from '@/lib/gtm';
import FadeIn from '@/components/FadeIn';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import {
  Target,
  TrendingUp,
  ShieldCheck,
  Zap,
  UserX,
  Clock,
  ChevronDown,
  ExternalLink,
  Globe,
  BarChart3,
  FileText,
  MapPin,
  Database,
  Megaphone,
  Server,
  Terminal,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DiagnosticModal from '@/components/DiagnosticModal';
import profilePic from '@/assets/marco.svg'; // Using as fallback conceptually

/* ───────────────────── CDN/LOCAL URLs ───────────────────── */
const HERO_BG = '/foto-sessao-hero.webp';
const GRID_BG = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 1H0M1 0v40' stroke='rgba(255, 255, 255, 0.05)' stroke-width='1'/%3E%3C/svg%3E";
const MACBOOK_MOCKUP = '/mockup-placeholder.png'; // Will be replaced by realistic 3D isometric mockup

const WA_LINK = 'https://wa.me/5541987505634?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20Auditoria%20de%20Soberania.';

/* ───────────────────── HERO ───────────────────── */
function HeroSection({ onOpenCTA }: { onOpenCTA: () => void }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0F1117' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${GRID_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Hero image — right side on desktop */}
      <div className="absolute inset-0 lg:left-[40%] opacity-55 lg:opacity-80">
        <img
          src={HERO_BG}
          alt="Marco Antonio - Estruturador de Captação e Engenharia de Vendas no Google"
          className="w-full h-full object-cover object-[55%_top] lg:object-center bg-[#0F1117]"
          style={{ transform: 'scaleX(-1)' }}
          onError={(e) => { e.currentTarget.src = '/marco-hero.jpg' }}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          width={800}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1117] via-[#0F1117]/60 lg:via-[#0F1117]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-[#0F1117]/30 to-transparent" />
      </div>

      <div className="relative z-10 container pt-36 pb-28 lg:pt-32 lg:pb-32">
        <div className="max-w-2xl lg:max-w-[760px]">
          {/* Chip */}
          <FadeIn>
            <span className="chip mb-8 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Especialista em Captação para Mercado Imobiliário e Negócios Premium
            </span>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={100}>
            <h1 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(2rem,4vw,3.4rem)] leading-[1.18] lg:leading-[1.12] tracking-tight mb-8">
              Estruture sua captação <br className="block lg:hidden" /> no Google e pare de depender de <br className="hidden lg:block" /><span className="text-[#C7CEDB80] inline-block mt-2 lg:mt-0">portais, indicação e improviso.</span>
            </h1>
          </FadeIn>

          {/* Subtitle & Bullets */}
          <FadeIn delay={200}>
            <div className="mb-14">
              <p className="text-[#C7CEDB] text-lg lg:text-xl leading-relaxed max-w-[640px] mb-8" style={{ fontWeight: 300 }}>
                Estruturo máquinas de aquisição no Google para negócios premium que precisam de previsibilidade e lucro auditável.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#C7CEDB90] text-sm md:text-base font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                  R$ 3M+ gerenciados
                </li>
                <li className="flex items-center gap-3 text-[#C7CEDB90] text-sm md:text-base font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                  Cases reais e auditáveis
                </li>
                <li className="flex items-center gap-3 text-[#C7CEDB90] text-sm md:text-base font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" />
                  Estrutura e implantação em 7 a 14 dias
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
              <button
                data-gtm="cta"
                data-cta-position="hero"
                onClick={() => {
                  pushToDataLayer('cta_open_modal', {
                    cta_position: 'hero',
                    cta_text: 'AGENDAR DIAGNÓSTICO',
                    modal_name: 'agendar_diagnostico',
                    path_type: 'modal'
                  });
                  onOpenCTA();
                }}
                className="btn-sheen inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8B5CF6] text-white font-headline font-bold text-sm sm:text-base tracking-[0.05em] hover:bg-[#7C4FE0] transition-colors duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                AGENDAR DIAGNÓSTICO
              </button>
              <a
                href="#sistema"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sistema')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[#C7CEDB20] text-[#F2F2F2] font-headline font-bold text-sm tracking-[0.05em] hover:bg-[#ffffff05] hover:border-[#C7CEDB40] transition-all duration-300 w-full sm:w-auto"
              >
                ENTENDER O SISTEMA ↓
              </a>
            </div>

            {/* Chips de apoio */}
            <div className="flex flex-wrap gap-2 items-center justify-center lg:justify-start">
              <span className="font-mono-brand text-[10px] sm:text-xs text-[#C7CEDB60] tracking-wider uppercase">
                Atendimento executivo
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C7CEDB30] mx-1"></span>
              <span className="font-mono-brand text-[10px] sm:text-xs text-[#C7CEDB60] tracking-wider uppercase">
                Foco em ROI
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C7CEDB30] mx-1"></span>
              <span className="font-mono-brand text-[10px] sm:text-xs text-[#C7CEDB60] tracking-wider uppercase">
                Sem pacotes engessados
              </span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1117] to-transparent" />
    </section>
  );
}

/* ───────────────────── DOR ───────────────────── */
function PainSection() {
  const cards = [
    {
      icon: UserX,
      title: 'Leads Desqualificados',
      text: 'Você recebe contatos, mas a maioria é curiosa ou fora do perfil de compra ideal. O time de vendas perde tempo atendendo quem não vai fechar.',
    },
    {
      icon: Zap,
      title: 'Invisibilidade Orgânica',
      text: 'Seu negócio simplesmente não aparece quando o cliente com dinheiro na mão pesquisa pelo serviço. Seu concorrente leva a venda por estar melhor posicionado.',
    },
    {
      icon: Clock,
      title: 'Dependência de Indicação',
      text: 'Não há previsibilidade no caixa. A operação vive de altos e baixos porque você não controla a própria captação de clientes.',
    },
  ];

  return (
    <section className="py-20 lg:py-32" style={{ background: '#0F1117' }}>
      <div className="container">
        <FadeIn>
          <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight text-center mb-4">
            O problema do seu negócio não é falta de marketing. É falta de infraestrutura.
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-[#C7CEDB80] text-center max-w-3xl mx-auto mb-16 text-lg" style={{ fontWeight: 300 }}>
            Se você depende de portais genéricos ou se o seu cliente pesquisa no Google e encontra o seu concorrente antes de você, você está perdendo dinheiro todos os dias.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 120}>
              <div className="glass-card p-8 lg:p-10 h-full group">
                <card.icon className="w-6 h-6 text-[#C7CEDB50] mb-6 icon-breathe" strokeWidth={1.5} />
                <h3 className="font-headline font-bold text-[#F2F2F2] text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  {card.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── MECANISMO (OS 6 ATIVOS) ───────────────────── */
function MechanismSection() {
  const assets = [
    {
      icon: Target,
      title: 'Google Search de Alta Intenção',
      text: 'Campanhas de pesquisa focadas no fundo de funil, interceptando quem já decidiu comprar e está buscando exatamente o que você vende.',
    },
    {
      icon: MapPin,
      title: 'Google Meu Negócio + Maps',
      text: 'Domínio implacável da busca local. Geração de prova social imediata e atração de clientes da sua região estratégica.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Estratégico',
      text: 'Construção do seu principal ativo digital a longo prazo, reduzindo progressivamente a dependência exclusiva de anúncios pagos.',
    },
    {
      icon: Globe,
      title: 'Landing Page de Alta Conversão',
      text: 'Sua vitrine desenhada arquiteturalmente para reter atenção, gerar autoridade imediata e forçar o contato comercial qualificado.',
    },
    {
      icon: Database,
      title: 'Tracking e Mensuração Executiva',
      text: 'Implementação de GA4 e Conversões. Você saberá com exatidão matemática de onde vem e quanto custa cada lead gerado.',
    },
    {
      icon: FileText,
      title: 'Conteúdo de Intenção',
      text: 'Elaboração de FAQs e artigos focados em antecipar e quebrar as objeções do seu comprador antes mesmo da primeira reunião.',
    },
  ];

  return (
    <section id="sistema" className="py-20 lg:py-32 relative" style={{ background: '#0F1117' }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${GRID_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center mb-16">
            <span className="chip mb-4 inline-flex">O Mecanismo Proprietário</span>
            <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight text-center mb-4 max-w-4xl">
              Sistema Google de Aquisição Previsível
            </h2>
            <p className="text-[#C7CEDB80] text-center max-w-2xl text-lg" style={{ fontWeight: 300 }}>
              Uma arquitetura blindada de 6 ativos integrados para transformar pesquisas em contratos assinados.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          {/* Desktop Stepper */}
          <div className="max-w-4xl mx-auto mb-20 hidden md:block">
            <div className="grid grid-cols-4 gap-4 relative">
              {/* Connecting Line */}
              <div className="absolute top-6 left-[12.5%] right-[12.5%] h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

              {[
                { title: 'Intenção', desc: 'Captura de demanda' },
                { title: 'Confiança', desc: 'Autoridade local' },
                { title: 'Conversão', desc: 'Alta performance' },
                { title: 'Mensuração', desc: 'ROI auditável' }
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-[#0F1117] border border-[#8B5CF6]/30 flex items-center justify-center font-mono-brand text-xs text-[#8B5CF6] mb-4 z-10 group-hover:bg-[#8B5CF6]/20 transition-colors shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    0{i + 1}
                  </div>
                  <h4 className="font-headline font-bold text-[#F2F2F2] text-sm mb-1">{step.title}</h4>
                  <p className="text-[#C7CEDB70] text-xs font-mono-brand uppercase tracking-wider">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Vertical Stepper */}
          <div className="md:hidden flex flex-col items-center gap-8 mb-8 relative">
            <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#8B5CF6]/30 to-transparent" />
            {[
              { title: 'Intenção', desc: 'Captura de demanda' },
              { title: 'Confiança', desc: 'Autoridade local' },
              { title: 'Conversão', desc: 'Alta performance' },
              { title: 'Mensuração', desc: 'ROI auditável' }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center gap-3 group w-full">
                <div className="w-10 h-10 rounded-full bg-[#0F1117] border border-[#8B5CF6]/40 flex items-center justify-center font-mono-brand text-[10px] text-[#8B5CF6] z-10 shadow-[0_0_15px_rgba(139,92,246,0.15)] shrink-0 group-active:bg-[#8B5CF6]/20 transition-colors">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-headline font-bold text-[#F2F2F2] text-[15px] mb-1">{step.title}</h4>
                  <p className="text-[#C7CEDB70] text-[10px] sm:text-xs font-mono-brand uppercase tracking-wider">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {assets.map((asset, i) => (
            <FadeIn key={asset.title} delay={i * 100}>
              <div className="glass-card p-8 lg:p-10 h-full border-[#C7CEDB10] hover:border-[#8B5CF6]/40 active:scale-[0.98] active:border-[#8B5CF6]/40 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#C7CEDB15] mb-6 group-hover:bg-[#8B5CF6]/10 transition-colors duration-500">
                  <asset.icon className="w-5 h-5 text-[#8B5CF6]" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline font-bold text-[#F2F2F2] text-lg mb-3">
                  {asset.title}
                </h3>
                <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  {asset.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PRA QUEM É / NÃO É ───────────────────── */
function FilterSection() {
  return (
    <section className="py-20 lg:py-32 border-t border-[#C7CEDB05]" style={{ background: '#0A0B10' }}>
      <div className="container">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight mb-4">
              Com quem eu sento à mesa
            </h2>
            <p className="text-[#C7CEDB80] text-base max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Meu método é intensivo e focado em margem real. Não atendo projetos de "teste" ou aventuras comerciais.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Pra quem é */}
          <FadeIn delay={100}>
            <div className="glass-card p-8 lg:p-12 h-full border-t-4 border-t-[#22C55E]">
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-[#22C55E]" />
                <h3 className="font-headline font-bold text-[#F2F2F2] text-xl">
                  Para quem estrutura é investimento
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    <strong className="text-[#F2F2F2] font-semibold">Imobiliárias, Incorporadoras e Corretores de Alto Padrão</strong> que precisam dominar o Google na sua região e fugir dos portais.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    <strong className="text-[#F2F2F2] font-semibold">Advogados, Engenheiros e Clínicas Premium</strong> que buscam contatos altamente qualificados e agenda previsível.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    <strong className="text-[#F2F2F2] font-semibold">Empresas Consolidadas</strong> que desejam escalar com previsibilidade, métricas e clareza de ROI.
                  </p>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Pra quem não é */}
          <FadeIn delay={200}>
            <div className="glass-card p-8 lg:p-12 h-full border-t-4 border-t-[#EF4444] bg-[#1A1A24]/30">
              <div className="flex items-center gap-3 mb-8">
                <UserX className="w-6 h-6 text-[#EF4444]" />
                <h3 className="font-headline font-bold text-[#F2F2F2] text-xl">
                  Para quem busca atalhos e milagres
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    Negócios que procuram "hacks" de 7 dias, dancinhas no Instagram ou promessas mágicas de faturamento fácil.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    Empresas sem estrutura de vendas ou time comercial capacitado para atender os leads gerados.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2 shrink-0" />
                  <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    Quem encara a infraestrutura de aquisição de clientes como uma simples "despesa" e não como um investimento patrimonial.
                  </p>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── PROVA SOCIAL E CASES ───────────────────── */
function ProofSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'Vivalar' | 'Borgert' | 'Sanfer'>('Vivalar');

  return (
    <section id="prova" className="py-20 lg:py-32 relative bg-[#0A0B10]">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
              <button
                className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 rounded-full p-2 transition-all backdrop-blur-md border border-white/10 z-[101]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <div className="relative inline-block max-w-full">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                  onClick={(e) => e.stopPropagation()}
                />
                {selectedImage === '/sanfer/leads sanfer aço.png' && (
                  <div
                    className="absolute top-0 bottom-0 left-[20%] w-[60%] backdrop-blur-xl bg-[#0F1117]/80 border-l border-r border-white/10 z-10 flex flex-col items-center justify-center pointer-events-none rounded-sm"
                    style={{ top: '10%', bottom: '5%' }}
                  >
                    <div className="bg-black/60 px-4 py-2 rounded-md border border-white/10 mb-2">
                      <span className="font-mono-brand text-xs sm:text-sm text-white/50 uppercase tracking-widest block text-center">
                        Dados Pessoais Protegidos (LGPD)
                      </span>
                    </div>
                    <span className="text-[#C7CEDB50] text-[10px] text-center max-w-[80%] mx-auto">
                      Nome, E-mail e Telefone dos leads ocultados por segurança.<br />
                      Apenas data de captura e produto solicitado visíveis.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container relative z-10">
        <FadeIn>
          <motion.h2
            onViewportEnter={() => {
              if ((window as any).dataLayer) {
                (window as any).dataLayer.push({ event: 'scroll_prova_social' });
              }
            }}
            viewport={{ once: true }}
            className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight text-center mb-4"
          >
            Resultados reais.<br className="hidden md:block" /> Com contexto, estrutura e prova.
          </motion.h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="text-[#C7CEDB80] text-center max-w-2xl mx-auto mb-6 text-lg lg:text-xl" style={{ fontWeight: 300 }}>
            Mais do que tráfego ou site bonito: eu organizo a base da operação para gerar visibilidade, contato e resultado.
          </p>
          <p className="text-[#C7CEDB80] text-center max-w-2xl mx-auto mb-12 text-base" style={{ fontWeight: 300 }}>
            Cada projeto exige uma combinação diferente de estrutura, posicionamento e captação.
          </p>
        </FadeIn>

        {/* --- TABS NAVIGATION --- */}
        <FadeIn delay={200}>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-12">
            {[
              { id: 'Vivalar', label: 'Vivalar Imóveis' },
              { id: 'Borgert', label: 'Borgert & Bittencourt' },
              { id: 'Sanfer', label: 'Sanfer Aço' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as 'Vivalar' | 'Borgert' | 'Sanfer');
                  if ((window as any).dataLayer) {
                    (window as any).dataLayer.push({ event: 'case_click', case_name: tab.id });
                  }
                }}
                className={`px-6 py-3 font-mono-brand text-xs tracking-wider transition-all duration-400 border-b-2 ${activeTab === tab.id
                  ? 'border-[#8B5CF6] text-[#F2F2F2] bg-[#8B5CF6]/10 shadow-[0_4px_20px_-10px_rgba(139,92,246,0.3)]'
                  : 'border-transparent text-[#C7CEDB50] hover:text-[#C7CEDB] hover:bg-white/5'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          {/* CASE 1: Vivalar */}
          {activeTab === 'Vivalar' && (
            <motion.div
              key="vivalar"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-card mb-12 border-[#8B5CF6]/30 bg-gradient-to-br from-[#1A1A24]/60 to-[#0F1117]/90 relative overflow-hidden flex flex-col lg:flex-row">
                <div className="p-6 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="chip bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 cursor-pointer hover:bg-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all duration-300">Araucária</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Google Ads</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Site</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Maps</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">SEO</span>
                  </div>
                  <h3 className="font-headline font-bold text-[#F2F2F2] text-2xl lg:text-3xl mb-2">
                    Vivalar Imóveis
                  </h3>
                  <p className="font-mono-brand text-xs tracking-wider text-[#C7CEDB60] mb-6">IMOBILIÁRIO • ESTRUTURA + RESULTADOS = 90 DIAS</p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Objetivo</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Sair da dependência de portais e dominar busca local orgânica/paga.</span>
                    </div>
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Implementação</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Reestruturação de SEO Local, site conversivo e tráfego fundo de funil.</span>
                    </div>
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Resultado</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Estrutura principal e previsível da imobiliária hoje.</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-[#C7CEDB10] py-6 mb-6">
                    <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg p-4 sm:p-0 sm:bg-transparent sm:border-none sm:rounded-none">
                      <div className="font-mono-brand text-4xl sm:text-3xl font-bold text-[#F2F2F2]">371</div>
                      <div className="text-[#8B5CF6] sm:text-[#C7CEDB70] text-xs mt-1 font-bold sm:font-normal">Conversões</div>
                    </div>
                    <div className="pt-2 sm:pt-0">
                      <div className="font-mono-brand text-2xl sm:text-3xl font-bold text-[#22C55E]">R$ 15,05</div>
                      <div className="text-[#C7CEDB70] text-xs mt-1">Custo por conversão</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-[#0A0B10]/50 p-6 lg:p-8 border-l border-[#C7CEDB05] flex flex-col items-center justify-center gap-4 relative min-h-[300px]">
                  <div className="relative w-full h-[240px] rounded-lg overflow-hidden border border-[#C7CEDB10] shadow-2xl group cursor-pointer" onClick={() => setSelectedImage('/Vivalar/vivalar-site.png')}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent z-10 opacity-60 transition-opacity group-hover:opacity-40"></div>
                    <img src="/Vivalar/vivalar-site.png" alt="Site Vivalar" className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="relative w-full h-[180px] rounded-lg overflow-hidden border border-[#C7CEDB10] shadow-lg group cursor-pointer" onClick={() => setSelectedImage('/Vivalar/vivalar-maps.png')}>
                      <img src="/Vivalar/vivalar-maps.png" alt="Maps Vivalar" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="relative w-full bg-[#ffffff] rounded-lg overflow-hidden border border-[#C7CEDB10] shadow-lg flex items-center justify-center p-3 sm:p-4 group cursor-pointer" onClick={() => setSelectedImage('/Vivalar/vivalar-ads.png')}>
                      <img src="/Vivalar/vivalar-ads.png" alt="Ads Vivalar" className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CASE 2: Borgert */}
          {activeTab === 'Borgert' && (
            <motion.div
              key="borgert"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-card mb-12 border-[#8B5CF6]/10 bg-gradient-to-br from-[#1A1A24]/40 to-[#0F1117]/80 relative overflow-hidden flex flex-col lg:flex-row">
                <div className="p-6 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="chip bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 cursor-pointer hover:bg-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all duration-300">Curitiba & Internacional</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Meta Ads</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">SEO</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Landing Page Premium</span>
                  </div>
                  <h3 className="font-headline font-bold text-[#F2F2F2] text-2xl lg:text-3xl mb-2">
                    Borgert & Bittencourt
                  </h3>
                  <p className="font-mono-brand text-xs tracking-wider text-[#C7CEDB60] mb-6">JURÍDICO INTERNACIONAL • ESTRUTURA EM 30 DIAS</p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Objetivo</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Captar investidores para Golden Visa com autoridade visual.</span>
                    </div>
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Implementação</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Site premium, SEO on-page focado e Meta Ads segmentado.</span>
                    </div>
                    <div className="grid grid-cols-[105px_1fr] sm:grid-cols-[120px_1fr] gap-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Resultado</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Fluxo previsível de leads ultra qualificados no mês 1.</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-[#C7CEDB10] py-6 mb-6">
                    <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg p-4 sm:p-0 sm:bg-transparent sm:border-none sm:rounded-none">
                      <div className="font-mono-brand text-4xl sm:text-3xl font-bold text-[#F2F2F2]">+40</div>
                      <div className="text-[#8B5CF6] sm:text-[#C7CEDB70] text-xs mt-1 font-bold sm:font-normal">Leads gerados no mês 1</div>
                    </div>
                    <div className="pt-2 sm:pt-0">
                      <div className="font-mono-brand text-2xl sm:text-3xl font-bold text-[#22C55E]">3º lugar</div>
                      <div className="text-[#C7CEDB70] text-xs mt-1">p/"visa golden Curitiba" no Google</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-[#0A0B10]/50 p-6 lg:p-8 border-l border-[#C7CEDB05] grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full h-[180px] rounded-lg overflow-hidden border border-[#C7CEDB10] cursor-pointer" onClick={() => setSelectedImage('/Borgert/site antigo b&b.png')}>
                      <img src="/Borgert/site antigo b&b.png" alt="Antigo" className="w-full h-full object-cover object-top opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="relative w-full h-[160px] rounded-lg overflow-hidden border border-[#C7CEDB10] cursor-pointer" onClick={() => setSelectedImage('/Borgert/visa golden curitiba google.png')}>
                      <img src="/Borgert/visa golden curitiba google.png" alt="SEO" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full h-[220px] rounded-lg overflow-hidden border-2 border-[#8B5CF6]/50 shadow-lg cursor-pointer" onClick={() => setSelectedImage('/Borgert/site novo b&b.png')}>
                      <img src="/Borgert/site novo b&b.png" alt="Novo Site" className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="relative w-full bg-white rounded-lg overflow-hidden p-2 border border-[#C7CEDB10] cursor-pointer" onClick={() => setSelectedImage('/Borgert/campanha b&b recorte.PNG')}>
                      <img src="/Borgert/campanha b&b recorte.PNG" alt="Ads" className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* CASE 3: Sanfer Aço */}
          {activeTab === 'Sanfer' && (
            <motion.div
              key="sanfer"
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-card mb-12 border-[#8B5CF6]/10 bg-gradient-to-br from-[#1A1A24]/40 to-[#0F1117]/80 relative overflow-hidden flex flex-col lg:flex-row">
                <div className="p-6 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="chip bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 cursor-pointer hover:bg-[#8B5CF6]/30 hover:border-[#8B5CF6]/50 transition-all duration-300">Paraná</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Google Ads</span>
                    <span className="chip border-[#C7CEDB20] text-[#F2F2F2] cursor-pointer hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all duration-300">Landing Page</span>
                  </div>
                  <h3 className="font-headline font-bold text-[#F2F2F2] text-2xl lg:text-3xl mb-2">
                    Sanfer Aço
                  </h3>
                  <p className="font-mono-brand text-xs tracking-wider text-[#C7CEDB60] mb-6">INDÚSTRIA B2B • ESTRUTURA EM 45 DIAS</p>

                  <div className="space-y-4 mb-8">
                    <div className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Objetivo</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Receber solicitações de orçamento de clientes com alta intenção de fechamento.</span>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-4 border-b border-[#C7CEDB10] pb-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Implementação</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Landing page nova voltada para conversão, tracking de API de conversões e campanha de pesquisa com palavras-chave com alta intenção de compra.</span>
                    </div>
                    <div className="grid grid-cols-[120px_1fr] gap-4">
                      <span className="text-[#8B5CF6] font-bold text-sm">Resultado</span>
                      <span className="text-[#C7CEDB90] text-sm font-light leading-relaxed">Rotina sólida de orçamentos B2B integrada com planilha.</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 border-y border-[#C7CEDB10] py-6 mb-6">
                    <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-lg p-4 sm:p-0 sm:bg-transparent sm:border-none sm:rounded-none">
                      <div className="font-mono-brand text-4xl sm:text-3xl font-bold text-[#F2F2F2]">+40</div>
                      <div className="text-[#8B5CF6] sm:text-[#C7CEDB70] text-xs mt-1 font-bold sm:font-normal">Solicitações de orçamento reais via CRM</div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-[#0A0B10]/50 p-6 lg:p-8 border-l border-[#C7CEDB05] flex flex-col gap-4">
                  <div className="relative w-full h-[240px] rounded-lg overflow-hidden border border-[#8B5CF6]/30 shadow-lg cursor-pointer" onClick={() => setSelectedImage('/sanfer/sanferaço site novo.png')}>
                    <img src="/sanfer/sanferaço site novo.png" alt="Novo Site" className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative w-full bg-white rounded-lg overflow-hidden h-[180px] shadow-lg cursor-pointer flex items-center" onClick={() => setSelectedImage('/sanfer/leads sanfer aço.png')}>
                    <img src="/sanfer/leads sanfer aço.png" alt="CRM Leads" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" style={{ marginTop: '-40px' }} />
                    <div className="absolute top-0 bottom-0 left-[22%] w-[58%] backdrop-blur-md bg-[#0F1117]/60 border-l border-r border-white/5 z-10 flex items-center justify-center pointer-events-none">
                      <span className="font-mono-brand text-[10px] text-white/50 uppercase tracking-widest bg-black/40 px-2 py-1 rounded">Dados Sensíveis Ocultos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MINI-CASE (Google Meu Negócio) */}
        <FadeIn delay={300}>
          <div className="glass-card p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 mt-16 border-l-4 border-l-[#22C55E] bg-[#1A1A24]/30">
            <div className="flex-1">
              <span className="font-mono-brand text-[10px] tracking-wider text-[#C7CEDB60] block mb-1 uppercase">POSICIONAMENTO LOCAL NO MAPS</span>
              <h3 className="font-headline font-bold text-[#F2F2F2] text-lg mb-2">Distribuidora de Segurança Eletrônica <span className="text-[#C7CEDB50] font-normal">(Salvador)</span></h3>
              <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                O perfil da empresa estava desconfigurado. Após reconfiguração e otimização profunda do Google Meu Negócio, a empresa hoje aparece organicamente entre os primeiros resultados locais ao pesquisar pelo termo.
              </p>
            </div>
            <div
              className="relative w-full md:w-80 lg:w-[400px] h-48 rounded-sm overflow-hidden border border-[#C7CEDB10] shadow-lg cursor-pointer shrink-0 bg-[#0A0B10]/50"
              onClick={() => setSelectedImage('/Ita Invista/print google meu negocio ita.png')}
            >
              <img
                src="/Ita Invista/print google meu negocio ita.png"
                alt="Maps Salvador"
                className="w-full h-full object-cover object-left-top transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </FadeIn>

        {/* EXPERIÊNCIA TEXT */}
        <FadeIn delay={600}>
          <div className="max-w-4xl mx-auto text-center border-t border-[#C7CEDB10] pt-12">
            <p className="text-[#C7CEDB70] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
              Além desses projetos, também atuei em operações com foco em Meta Ads, Google Ads, SEO e aprimoramento de landing pages. Nem todos os resultados ficaram documentados comigo, porque parte das contas permaneceu sob gestão da agência, mas essa bagagem fortalece diretamente o método que aplico hoje.
            </p>
          </div>
        </FadeIn>
      </div >
    </section >
  );
}

/* ───────────────────── QUEM SOU EU ───────────────────── */
function AboutMeSection() {
  return (
    <section id="quem-sou-eu" className="py-20 lg:py-32 relative" style={{ background: '#0F1117' }}>
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Photo Side */}
          <FadeIn>
            <div className="w-full sm:max-w-md lg:max-w-none mx-auto relative shadow-2xl">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden glass-card border-none bg-black/20">
                <img
                  src="/foto-sessao-eu-sou.webp"
                  alt="Marco Antonio demonstrando resultados e engajamento profissional"
                  className="w-full h-full object-cover object-[center_10%] scale-105 sm:scale-100 mix-blend-luminosity opacity-90 transition-opacity duration-500 hover:opacity-100 hover:mix-blend-normal"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={750}
                />
                {/* Subtle overlay gradient to match the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <span className="font-mono-brand text-[#8B5CF6] text-xs tracking-wider uppercase mb-2 block">
                  O Estrategista
                </span>
                <h3 className="font-headline font-bold text-[#F2F2F2] text-2xl">
                  Marco Antonio
                </h3>
              </div>
            </div>
          </FadeIn>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={100}>
              <span className="chip mb-4 inline-flex">Bastidores da Operação</span>
              <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight mb-6">
                Prática real, gestão <br className="hidden lg:block" /> de risco e lucro auditável.
              </h2>
              <p className="text-[#F2F2F2] text-lg leading-relaxed mb-6 font-medium">
                Eu estruturo aquisição no Google com método, mensuração e previsibilidade — sem pacotes engessados.
              </p>
              <p className="text-[#C7CEDB95] text-base leading-relaxed mb-10" style={{ fontWeight: 400 }}>
                Minha atuação não é baseada em teoria genérica ou "achismos". Ela nasce de operação real, onde cada real investido precisa retornar como receita. Abandonei o modelo frágil de agências tradicionais para entregar uma assessoria executiva, lado a lado com os decisores.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <FadeIn delay={200}>
                <div className="glass-card p-5 border-l-2 border-l-[#8B5CF6] h-full flex flex-col justify-center">
                  <span className="font-mono-brand text-3xl lg:text-3xl text-[#F2F2F2] font-bold block mb-1">R$ 3M+</span>
                  <p className="text-[#C7CEDB80] text-[10px] lg:text-xs tracking-wider uppercase font-medium">
                    gerenciados em mídia
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="glass-card p-5 border-l-2 border-l-[#8B5CF6] h-full flex flex-col justify-center">
                  <span className="font-mono-brand text-3xl lg:text-3xl text-[#F2F2F2] font-bold block mb-1">4 Anos</span>
                  <p className="text-[#C7CEDB80] text-[10px] lg:text-xs tracking-wider uppercase font-medium">
                    de operação na linha de frente
                  </p>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={400}>
              <a
                href="https://www.linkedin.com/in/marcooliveirads/"
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="social-link"
                data-social-platform="linkedin"
                onClick={() => pushToDataLayer('social_click', {
                  social_platform: 'linkedin',
                  link_text: 'Auditar Histórico no LinkedIn',
                  link_url: 'https://www.linkedin.com/in/marcooliveirads/'
                })}
                className="inline-flex items-center gap-3 text-[#C7CEDB60] hover:text-[#8B5CF6] font-mono-brand text-sm tracking-wider uppercase transition-colors duration-300 group"
              >
                <span className="bg-[#ffffff05] p-2 rounded-full group-hover:bg-[#8B5CF6]/10 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </span>
                Auditar Histórico no LinkedIn
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── AUTORIDADE / POR QUE EU ───────────────────── */
function AuthoritySection() {
  const points = [
    {
      icon: Terminal,
      title: 'Foco em Engenharia, não em Arte',
      text: 'Não vendo posts bonitos. Implemento códigos de tracking avançado (GTM, GA4), otimizo velocidade de página e gerencio orçamento com base matemática e auditoria rigorosa.',
    },
    {
      icon: Users,
      title: 'Modelo de Assessoria Executiva',
      text: 'Você tem linha direta com o estrategista que aperta os botões e escreve o código. Sem gerentes de conta intermediários, sem estagiários copiando e colando campanhas, sem gargalos de comunicação.',
    },
    {
      icon: ExternalLink,
      title: 'Bagagem High-Ticket',
      text: 'Experiência prática, validada e auditável com jornadas longas de decisão (imóveis de alto padrão, honorários jurídicos altos). Entendo a diferença vital entre um clique e uma intenção de compra.',
    },
  ];

  return (
    <section id="autoridade" className="py-20 lg:py-32 relative border-t border-[#C7CEDB05]" style={{ background: '#0F1117' }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${GRID_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="chip mb-4 inline-flex">Background Técnico</span>
            <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-tight mb-4">
              Por que essa estrutura funciona<br className="hidden md:block" /> (e agências comuns falham)
            </h2>
            <p className="text-[#C7CEDB80] text-base max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
              Eu não sou uma agência criativa. Sou um arquiteto de sistemas de aquisição.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 150}>
              <div className="glass-card p-8 lg:p-10 h-full border-t-2 border-[#8B5CF6]/50">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-[#C7CEDB15] mb-6">
                  <p.icon className="w-5 h-5 text-[#8B5CF6]" strokeWidth={1.5} />
                </div>
                <h3 className="font-headline font-bold text-[#F2F2F2] text-lg mb-4">
                  {p.title}
                </h3>
                <p className="text-[#C7CEDB90] text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                  {p.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── ATENDIMENTO LOCAL ───────────────────── */
function LocalSEOSection() {
  return (
    <section className="py-20 lg:py-24 relative border-t border-[#C7CEDB05]" style={{ background: '#0A0B10' }}>
      <div className="container relative z-10 text-center">
        <FadeIn>
          <span className="chip mb-4 inline-flex">Expansão Geográfica</span>
          <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.4rem,2.5vw,2.2rem)] leading-tight tracking-tight mb-6">
            Atendimento Estratégico em<br className="hidden md:block" /> Araucária, Curitiba e Florianópolis
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-[#C7CEDB80] max-w-2xl mx-auto text-base leading-relaxed" style={{ fontWeight: 300 }}>
            Desenvolvo projetos sob medida focados no ecossistema de buscas regionais, garantindo que negócios de alto ticket dominem o Google Meu Negócio e as buscas orgânicas de <strong className="text-[#F2F2F2] font-medium">Araucária</strong>, <strong className="text-[#F2F2F2] font-medium">Curitiba</strong> e <strong className="text-[#F2F2F2] font-medium">Florianópolis</strong>. Atuação remota global para empresas consolidadas.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────── CTA FINAL ───────────────────── */
function FinalCTA({ onOpenCTA }: { onOpenCTA: () => void }) {
  return (
    <section className="py-24 lg:py-36 relative" style={{ background: '#0F1117' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${GRID_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative z-10 text-center">
        <FadeIn>
          <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tight mb-6">
            Construa seu sistema
            <br />
            <span className="text-[#C7CEDB60]">ou continue no caos.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-[#C7CEDB80] max-w-lg mx-auto mb-10 text-base" style={{ fontWeight: 300 }}>
            Você pode seguir tentando resolver aquisição com ações isoladas. Ou estruturar um sistema que transforma intenção em conversa comercial com prova.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <button
            data-gtm="cta"
            data-cta-position="final"
            onClick={() => {
              pushToDataLayer('cta_open_modal', {
                cta_position: 'final',
                cta_text: 'SOLICITAR AUDITORIA DE SOBERANIA',
                modal_name: 'agendar_diagnostico',
                path_type: 'modal'
              });
              onOpenCTA();
            }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#8B5CF6] text-white font-headline font-bold text-sm tracking-[0.05em] hover:bg-[#7C4FE0] transition-colors duration-300"
          >
            SOLICITAR AUDITORIA DE SOBERANIA
          </button>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="font-mono-brand text-xs text-[#C7CEDB50] mt-6">
            Atendimento via WhatsApp • Diagnóstico inicial • Estrutura definida para o seu momento
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
function FAQSection() {
  const faqs = [
    {
      q: 'Em quanto tempo começo a ver resultado?',
      a: 'Alguns negócios veem resultado em 7–10 dias com Maps + Search. SEO é médio/longo prazo.\nDepende da demanda local e da estrutura atual.\nSe quiser, eu digo a rota mais rápida no diagnóstico gratuíto.',
    },
    {
      q: 'Isso serve apenas para imobiliárias?',
      a: 'Não. Serve para advogados, engenheiros, clínicas e qualquer serviço high-ticket.\nDepende da complexidade e tempo de decisão do seu cliente.\nEu avalio se a estrutura funciona para o seu nicho em 15 min no diagnóstico.',
    },
    {
      q: 'Eu preciso investir em Google Ads para o método funcionar?',
      a: 'É recomendado para gerar caixa rápido, mas eu estruturo o SEO Local junto.\nIsso garante que você não dependa apenas de tráfego pago no longo prazo.\nPosso desenhar a melhor divisão de verba para você no diagnóstico.',
    },
    {
      q: 'Você faz só site ou landing page?',
      a: 'Não. Fazer um site isolado e abandoná-lo não gera resultado nenhum.\nEu desenho e implemento a rota toda: a página, o posicionamento, tráfego e tracking.\nSolicite o diagnóstico para ver como as peças se conectam.',
    },
    {
      q: 'A conta e os leads ficam comigo?',
      a: 'Sim, 100%. Todo o ativo construído no Google pertence ao seu CNPJ.\nNão amarro clientes; eles ficam pelo resultado.\nAbrimos tudo na call de diagnóstico.',
    },
    {
      q: 'Como o escopo e o investimento são definidos?',
      a: 'Eu não trabalho com pacotes engessados.\nO escopo depende da sua meta e da maturidade comercial da empresa hoje.\nNo diagnóstico gratuito, nós mapeamos o gargalo e definimos os próximos passos.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-32" style={{ background: '#0F1117' }}>
      <div className="container max-w-3xl">
        <FadeIn>
          <h2 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.4rem,2.5vw,2rem)] leading-tight tracking-tight text-center mb-12">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="border-b border-[#C7CEDB10]">
                <button
                  data-gtm="faq"
                  onClick={() => {
                    const isOpening = openIndex !== i;
                    setOpenIndex(isOpening ? i : null);
                    if (isOpening) {
                      pushToDataLayer('faq_open', { faq_question: faq.q });
                    }
                  }}
                  className="w-full flex items-center justify-between py-6 lg:py-8 text-left gap-4 active:bg-white/5 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <span className="font-headline font-bold text-[#F2F2F2] text-[15px] lg:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#C7CEDB50] shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''
                      }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: openIndex === i ? '200px' : '0',
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="text-[#C7CEDB] text-[15px] leading-relaxed pb-8 pt-2 px-2 whitespace-pre-line" style={{ fontWeight: 400 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ───────────────────── */
function Footer() {
  return (
    <footer id="footer-section" className="py-12 border-t border-[#C7CEDB10]" style={{ background: '#0F1117' }}>
      <div className="container text-center">
        <p className="font-headline font-extrabold text-[#F2F2F2] text-sm mb-2">
          Visão + Método + Prova
        </p>
        <p className="font-mono-brand text-xs text-[#C7CEDB40] mb-6">
          Marco Antonio © 2026 — Arquiteto de Sistemas de Conversão
        </p>
        <div className="flex items-center justify-center gap-6">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="whatsapp"
            data-cta-position="footer"
            onClick={() => pushToDataLayer('whatsapp_click', {
              cta_position: 'footer',
              cta_text: 'WhatsApp',
              path_type: 'direct',
              link_url: WA_LINK
            })}
            className="font-mono-brand text-xs text-[#C7CEDB50] hover:text-[#8B5CF6] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="mailto:contato@marcoantonnio.com"
            className="font-mono-brand text-xs text-[#C7CEDB50] hover:text-[#8B5CF6] transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/marcoantonnio/"
            target="_blank"
            rel="noopener noreferrer"
            data-gtm="social-link"
            data-social-platform="linkedin"
            onClick={() => pushToDataLayer('social_click', {
              social_platform: 'linkedin',
              link_text: 'LinkedIn Footer',
              link_url: 'https://www.linkedin.com/in/marcoantonnio/'
            })}
            className="font-mono-brand text-xs text-[#C7CEDB50] hover:text-[#8B5CF6] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── PAGE ───────────────────── */
export default function Home() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, position: 'hero' as any, text: '' });
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  
  const openModal = (pos: any = 'hero', text: string = '') => setModalConfig({ isOpen: true, position: pos, text });
  const closeModal = () => setModalConfig(prev => ({ ...prev, isOpen: false }));

  useEffect(() => {
    const footer = document.getElementById('footer-section');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { rootMargin: '0px' }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Marco Antonio — Engenharia de Vendas no Google",
    "description": "Engenharia de Vendas no Google para Mercado Imobiliário e Serviços Premium. Estruturação de ativos para transformar intenção de busca em lucro auditável.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Araucária"
      },
      {
        "@type": "City",
        "name": "Curitiba"
      },
      {
        "@type": "City",
        "name": "Florianópolis"
      }
    ],
    "url": "https://soberania.ag" // Update this URL with your actual production domain
  };

  return (
    <div className="min-h-screen relative" style={{ background: '#0F1117' }}>
      <div className="bg-noise" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <Header />
      <HeroSection onOpenCTA={() => openModal('hero', 'AGENDAR DIAGNÓSTICO')} />
      <SectionDivider number="01" label="Diagnóstico" />
      <PainSection />
      <SectionDivider number="02" label="Mecanismo" />
      <MechanismSection />
      <SectionDivider number="03" label="Qualificação" />
      <FilterSection />
      <SectionDivider number="04" label="Evidências" />
      <ProofSection />
      <SectionDivider number="05" label="O Estrategista" />
      <AboutMeSection />
      <SectionDivider number="06" label="Autoridade" />
      <AuthoritySection />
      <SectionDivider number="07" label="Região" />
      <LocalSEOSection />
      <SectionDivider number="08" label="Decisão" />
      <FinalCTA onOpenCTA={() => openModal('final', 'SOLICITAR AUDITORIA DE SOBERANIA')} />
      <SectionDivider number="09" label="FAQ" />
      <FAQSection />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none transition-all duration-500 ease-in-out ${
          isFooterVisible ? 'translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/95 to-transparent pt-12 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <button
          data-gtm="cta"
          data-cta-position="final"
          onClick={() => {
            pushToDataLayer('cta_open_modal', {
              cta_position: 'final',
              cta_text: 'AGENDAR DIAGNÓSTICO (Sticky)',
              modal_name: 'agendar_diagnostico',
              path_type: 'modal'
            });
            openModal('final', 'AGENDAR DIAGNÓSTICO (Sticky)');
          }}
          className="btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#8B5CF6] text-white font-headline font-bold text-sm tracking-[0.05em] rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] pointer-events-auto"
        >
          AGENDAR DIAGNÓSTICO
        </button>
        </div>
      </div>

      <DiagnosticModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        originCtaPosition={modalConfig.position}
        originCtaText={modalConfig.text}
      />
    </div>
  );
}
