import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Loader2, Link as LinkIcon, Mail, Phone, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { pushToDataLayer } from '@/lib/gtm';

type FormData = {
    nicho: string;
    cidade: string;
    origem: string;
    dores: string[];
    ticket: string;
    prontidao: string;
    nome: string;
    whatsapp: string;
    email: string;
    site: string;
    aceitaContato: boolean;
};

const INITIAL_DATA: FormData = {
    nicho: '',
    cidade: '',
    origem: '',
    dores: [],
    ticket: '',
    prontidao: '',
    nome: '',
    whatsapp: '',
    email: '',
    site: '',
    aceitaContato: false,
};

const TOTAL_STEPS = 7;

export default function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Auto-save to localStorage
    useEffect(() => {
        const saved = localStorage.getItem('diagnostico_lead_data');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setFormData(prev => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error('Failed to parse saved data', e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('diagnostico_lead_data', JSON.stringify(formData));
    }, [formData]);

    const updateData = (fields: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => {
        // Optional step tracking
        pushToDataLayer('lead_diagnostico_step', { step: step + 1 });
        setError('');
        setStep(s => Math.min(s + 1, TOTAL_STEPS));
    };

    const prevStep = () => {
        setError('');
        setStep(s => Math.max(s - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.nome || !formData.whatsapp || !formData.aceitaContato) {
            setError('Preencha os campos obrigatórios para prosseguir.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            // Get URL params for UTMs tracking
            const params = new URLSearchParams(window.location.search);
            const utms = {
                source: params.get('utm_source') || 'direct',
                medium: params.get('utm_medium') || '',
                campaign: params.get('utm_campaign') || '',
            };

            // 1. Send to Supabase
            const { error: sbError } = await supabase.from('leads').insert([{
                nicho: formData.nicho,
                cidade: formData.cidade,
                origem: formData.origem,
                dores: formData.dores,
                ticket: parseInt(formData.ticket) || 0,
                prontidao: formData.prontidao,
                nome: formData.nome,
                whatsapp: formData.whatsapp,
                email: formData.email,
                site: formData.site,
                utms: utms,
                page_referrer: document.referrer,
                created_at: new Date().toISOString()
            }]);

            if (sbError) {
                // Just log but continue, to not block the user if DB is down or table missing
                console.error('Supabase save error:', sbError);
            }

            // 2. Track in GA4
            pushToDataLayer('lead_diagnostico_submit', {});

            // Clear form save and show success
            localStorage.removeItem('diagnostico_lead_data');
            setIsSubmitted(true);
        } catch (err) {
            console.error(err);
            setError('Não foi possível enviar o formulário. Tente novamente ou chame no WhatsApp.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCalendlyRedirect = () => {
        pushToDataLayer('cta_agendar_diagnostico_click', {});
        const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/placeholder';
        const params = new URLSearchParams({
            name: formData.nome,
            email: formData.email,
            a1: formData.whatsapp // using calendly custom answer param for phone
        });
        window.location.href = `${calendlyUrl}?${params.toString()}`;
    };

    // UI Utilities
    const progressPercent = ((step - 1) / TOTAL_STEPS) * 100;

    // Variants for animation
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
        })
    };

    if (isSubmitted) {
        return (
            <div className="glass-card w-full max-w-lg mx-auto p-8 lg:p-12 text-center rounded-2xl relative overflow-hidden border border-[#8B5CF6]/30 shadow-[0_0_40px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-0 bg-noise" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-[#8B5CF6]" />
                    </div>
                    <h2 className="font-headline font-bold text-3xl text-[#F2F2F2] mb-4">
                        Diagnóstico Recebido.
                    </h2>
                    <p className="text-[#C7CEDB90] mb-8 font-light leading-relaxed">
                        Agora escolha um horário na minha agenda. Essa call executiva será pautada exatamente nas respostas que você acabou de enviar.
                    </p>

                    <button
                        onClick={handleCalendlyRedirect}
                        className="w-full btn-sheen relative flex items-center justify-center gap-2 mb-4 bg-[#8B5CF6] hover:bg-[#7C4FE0] text-white font-headline font-bold py-4 px-8 rounded shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all"
                    >
                        AGENDAR DIAGNÓSTICO ESTRATÉGICO
                    </button>

                    <a
                        href={`https://wa.me/5541987505634?text=${encodeURIComponent(`Olá, acabei de preencher o formulário de diagnóstico. Meu nome é ${formData.nome}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-gtm="whatsapp"
                        data-cta-position="final"
                        onClick={() => pushToDataLayer('whatsapp_click', {
                            cta_position: 'final',
                            cta_text: 'Chamar no WhatsApp (Opcional)',
                            path_type: 'direct',
                            link_url: `https://wa.me/5541987505634`
                        })}
                        className="text-[#C7CEDB50] hover:text-[#C7CEDB90] text-sm underline underline-offset-4 transition-colors font-mono-brand tracking-wide"
                    >
                        Chamar no WhatsApp (Opcional)
                    </a>
                </div>
            </div>
        );
    }

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <StepContainer title="Qual é o seu tipo de negócio?" onNext={nextStep} valid={!!formData.nicho}>
                        <div className="space-y-3">
                            {[
                                'Imobiliária / Incorporadora / Corretor de alto padrão',
                                'Serviços premium (advogado, engenheiro, clínica etc.)',
                                'Outro'
                            ].map(opt => (
                                <OptionCard
                                    key={opt}
                                    selected={formData.nicho === opt}
                                    onClick={() => updateData({ nicho: opt })}
                                    label={opt}
                                />
                            ))}
                        </div>
                    </StepContainer>
                );
            case 2:
                return (
                    <StepContainer title="Onde você quer dominar o Google primeiro?" onNext={nextStep} valid={!!formData.cidade}>
                        <div className="space-y-3">
                            {['Araucária', 'Curitiba', 'Florianópolis'].map(opt => (
                                <OptionCard
                                    key={opt}
                                    selected={formData.cidade === opt}
                                    onClick={() => updateData({ cidade: opt, origem: formData.origem })} // just triggering update
                                    label={opt}
                                />
                            ))}
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Ou digite outra cidade..."
                                    value={!['Araucária', 'Curitiba', 'Florianópolis'].includes(formData.cidade) ? formData.cidade : ''}
                                    onChange={e => updateData({ cidade: e.target.value })}
                                    className="w-full bg-[#0A0B10]/50 border border-[#C7CEDB20] focus:border-[#8B5CF6]/50 rounded text-[#F2F2F2] px-5 py-4 outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </StepContainer>
                );
            case 3:
                return (
                    <StepContainer title="Hoje, sua captação vem principalmente de onde?" onNext={nextStep} valid={!!formData.origem}>
                        <div className="space-y-3">
                            {[
                                'Indicação',
                                'Portais (Zap/VivaReal/OLX etc.)',
                                'Instagram',
                                'Google (orgânico/Ads)',
                                'Misturado / não sei'
                            ].map(opt => (
                                <OptionCard
                                    key={opt}
                                    selected={formData.origem === opt}
                                    onClick={() => updateData({ origem: opt })}
                                    label={opt}
                                />
                            ))}
                        </div>
                    </StepContainer>
                );
            case 4:
                return (
                    <StepContainer
                        title="Qual é o gargalo mais caro hoje?"
                        subtitle="Selecione até 2 opções"
                        onNext={nextStep}
                        valid={formData.dores.length > 0 && formData.dores.length <= 2}
                    >
                        <div className="space-y-3">
                            {[
                                'Leads desqualificados / curiosos',
                                'Poucos leads',
                                'Dependo exclusivamente de portal/indicação',
                                'Tenho tráfego, mas o lead não fecha',
                                'Não consigo medir o ROI / não sei o que funciona'
                            ].map(opt => (
                                <OptionCard
                                    key={opt}
                                    selected={formData.dores.includes(opt)}
                                    onClick={() => {
                                        const isSelected = formData.dores.includes(opt);
                                        if (isSelected) {
                                            updateData({ dores: formData.dores.filter(d => d !== opt) });
                                        } else if (formData.dores.length < 2) {
                                            updateData({ dores: [...formData.dores, opt] });
                                        }
                                    }}
                                    label={opt}
                                />
                            ))}
                        </div>
                    </StepContainer>
                );
            case 5:
                return (
                    <StepContainer
                        title="Em média, quanto vale um novo contrato/cliente pra você?"
                        subtitle="Informe apenas números (ex: 5000)"
                        onNext={nextStep}
                        valid={!!formData.ticket && !isNaN(Number(formData.ticket))}
                    >
                        <div className="space-y-6">
                            <div className="relative">
                                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C7CEDB60] font-headline">R$</span>
                                <input
                                    type="number"
                                    placeholder="0.00"
                                    value={formData.ticket}
                                    onChange={e => updateData({ ticket: e.target.value })}
                                    className="w-full bg-[#0A0B10]/80 border border-[#C7CEDB20] focus:border-[#8B5CF6]/80 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] rounded text-[#F2F2F2] pl-12 pr-5 py-4 outline-none transition-all font-headline text-2xl"
                                />
                            </div>

                            <AnimatePresence>
                                {formData.ticket && !isNaN(Number(formData.ticket)) && Number(formData.ticket) > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 rounded bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C7CEDB]"
                                    >
                                        <p className="text-sm font-light leading-relaxed">
                                            Entendi. Perder apenas 1 cliente esse mês por falta de infraestrutura digital pode estar lhe custando <strong className="text-[#F2F2F2] font-mono-brand">~R$ {Number(formData.ticket).toLocaleString('pt-BR')}</strong> no caixa.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </StepContainer>
                );
            case 6:
                return (
                    <StepContainer title="Você está pronto para estruturar sua aquisição com consistência?" onNext={nextStep} valid={!!formData.prontidao}>
                        <div className="space-y-3">
                            {[
                                'Sim, quero previsibilidade e escalar',
                                'Estou avaliando (quero entender o plano)',
                                'Quero apenas um site rápido e barato'
                            ].map(opt => (
                                <OptionCard
                                    key={opt}
                                    selected={formData.prontidao === opt}
                                    onClick={() => updateData({ prontidao: opt })}
                                    label={opt}
                                />
                            ))}

                            <AnimatePresence>
                                {formData.prontidao === 'Quero apenas um site rápido e barato' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="p-4 mt-4 rounded bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#C7CEDB90]"
                                    >
                                        <p className="text-sm font-light">
                                            Nota: Minha assessoria foca em infraestrutura duradoura de captação e geralmente não contempla serviços isolados de baixo custo. Mesmo assim, se quiser conversar para alinhar expectativas, avance para o contato.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </StepContainer>
                );
            case 7:
                return (
                    <div className="flex flex-col h-full">
                        <h3 className="font-headline font-bold text-2xl text-[#F2F2F2] mb-2 leading-tight">
                            Para onde envio seu Raio-X?
                        </h3>
                        <p className="text-[#C7CEDB80] mb-8 font-light text-sm">
                            Ao preencher, você concorda em receber o acesso à agenda e próximos passos.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
                            <div>
                                <label className="block text-xs font-mono-brand text-[#C7CEDB60] uppercase tracking-wider mb-2">Nome Completo *</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7CEDB40]" />
                                    <input
                                        type="text"
                                        required
                                        value={formData.nome}
                                        onChange={e => updateData({ nome: e.target.value })}
                                        className="w-full bg-[#0A0B10]/80 border border-[#C7CEDB20] focus:border-[#8B5CF6]/50 rounded text-[#F2F2F2] pl-11 pr-4 py-3.5 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono-brand text-[#C7CEDB60] uppercase tracking-wider mb-2">WhatsApp *</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7CEDB40]" />
                                    <input
                                        type="tel"
                                        required
                                        placeholder="(00) 00000-0000"
                                        value={formData.whatsapp}
                                        onChange={e => updateData({ whatsapp: e.target.value })}
                                        className="w-full bg-[#0A0B10]/80 border border-[#C7CEDB20] focus:border-[#8B5CF6]/50 rounded text-[#F2F2F2] pl-11 pr-4 py-3.5 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono-brand text-[#C7CEDB60] uppercase tracking-wider mb-2">E-mail Corporativo</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7CEDB40]" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={e => updateData({ email: e.target.value })}
                                        className="w-full bg-[#0A0B10]/80 border border-[#C7CEDB20] focus:border-[#8B5CF6]/50 rounded text-[#F2F2F2] pl-11 pr-4 py-3.5 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono-brand text-[#C7CEDB60] uppercase tracking-wider mb-2">Site ou Instagram</label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7CEDB40]" />
                                    <input
                                        type="url"
                                        value={formData.site}
                                        onChange={e => updateData({ site: e.target.value })}
                                        className="w-full bg-[#0A0B10]/80 border border-[#C7CEDB20] focus:border-[#8B5CF6]/50 rounded text-[#F2F2F2] pl-11 pr-4 py-3.5 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <label className="flex items-start gap-3 mt-6 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.aceitaContato}
                                    onChange={e => updateData({ aceitaContato: e.target.checked })}
                                    className="mt-1 shrink-0 accent-[#8B5CF6] w-4 h-4 cursor-pointer"
                                />
                                <span className="text-[#C7CEDB80] text-xs font-light group-hover:text-[#C7CEDB] transition-colors">
                                    Quero receber o diagnóstico, entender a estrutura de captação e concedo permissão para o Marco Antonio entrar em contato comercial sobre a assessoria.
                                </span>
                            </label>

                            {error && (
                                <p className="text-[#FF3B30] text-sm mt-4 text-center">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={!formData.aceitaContato || !formData.nome || !formData.whatsapp || isSubmitting}
                                className="w-full mt-6 flex items-center justify-center gap-2 bg-[#F2F2F2] text-[#0F1117] hover:bg-white font-headline font-bold py-4 rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        ENVIANDO DADOS...
                                    </>
                                ) : (
                                    <>
                                        SOLICITAR DIAGNÓSTICO E AGENDA
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-[#C7CEDB40] text-xs mt-6">
                            Se preferir, pode me chamar no{' '}
                            <a href="https://wa.me/5541987505634" className="underline hover:text-[#C7CEDB90]">WhatsApp</a>{' '}— mas o diagnóstico via call fica mais preciso se você concluir o form.
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            {/* Progress Bar Header */}
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {step > 1 && (
                        <button
                            onClick={prevStep}
                            className="text-[#C7CEDB60] hover:text-[#F2F2F2] text-sm font-mono-brand tracking-wider flex items-center transition-colors"
                        >
                            ← VOLTAR
                        </button>
                    )}
                </div>
                <span className="font-mono-brand text-xs text-[#8B5CF6] tracking-widest uppercase bg-[#8B5CF6]/10 px-3 py-1 rounded-full border border-[#8B5CF6]/20">
                    Passo {step} de {TOTAL_STEPS}
                </span>
            </div>

            <div className="w-full h-1 bg-[#C7CEDB10] rounded-full overflow-hidden mb-10">
                <motion.div
                    className="h-full bg-gradient-to-r from-[#8B5CF6]/50 to-[#8B5CF6]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>

            {/* Main Card */}
            <div className="glass-card relative overflow-hidden min-h-[400px] border border-[#C7CEDB10] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />

                <div className="p-6 md:p-10 h-full relative">
                    <AnimatePresence mode="wait" custom={1}>
                        <motion.div
                            key={step}
                            custom={1}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="h-full"
                        >
                            {renderStepContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Sub-components for Form
function StepContainer({
    title,
    subtitle,
    children,
    onNext,
    valid
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    onNext: () => void;
    valid: boolean
}) {
    return (
        <div className="flex flex-col h-full">
            <h3 className="font-headline font-bold text-2xl lg:text-3xl text-[#F2F2F2] mb-2 leading-tight">
                {title}
            </h3>
            {subtitle && <p className="text-[#C7CEDB60] text-sm mb-6">{subtitle}</p>}
            {!subtitle && <div className="h-6" />} {/* Spacing fallback */}

            <div className="flex-grow mb-8">
                {children}
            </div>

            <button
                onClick={onNext}
                disabled={!valid}
                className="w-full md:w-auto md:min-w-[200px] md:self-end flex items-center justify-center gap-2 bg-[#8B5CF6] text-white font-headline font-bold py-4 px-8 rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#7C4FE0] shadow-lg shadow-[#8B5CF6]/20 active:scale-[0.98]"
            >
                Avançar <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
}

function OptionCard({
    label,
    selected,
    onClick
}: {
    label: string;
    selected: boolean;
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-4 lg:p-5 rounded border transition-all duration-200 flex items-center justify-between group cursor-pointer ${selected
                ? 'bg-[#8B5CF6]/10 border-[#8B5CF6] text-[#F2F2F2] shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                : 'bg-[#0A0B10]/50 border-[#C7CEDB15] text-[#C7CEDB90] hover:border-[#C7CEDB40] hover:text-[#F2F2F2] hover:bg-[#ffffff05]'
                }`}
        >
            <span className="font-light text-base md:text-lg pr-4">{label}</span>
            <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${selected ? 'border-[#8B5CF6] bg-[#8B5CF6]' : 'border-[#C7CEDB30] group-hover:border-[#C7CEDB60]'
                }`}>
                {selected && <CheckCircle2 className="w-4 h-4 text-white" />}
            </div>
        </button>
    );
}
