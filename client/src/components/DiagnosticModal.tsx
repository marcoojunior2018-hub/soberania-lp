import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { pushToDataLayer, CTAPosition } from '@/lib/gtm';

interface DiagnosticModalProps {
    isOpen: boolean;
    onClose: () => void;
    originCtaPosition?: CTAPosition;
    originCtaText?: string;
}

export default function DiagnosticModal({ isOpen, onClose, originCtaPosition = 'hero', originCtaText = 'AGENDAR DIAGNÓSTICO' }: DiagnosticModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            pushToDataLayer('modal_open', {
                modal_name: 'agendar_diagnostico',
                origin_cta_position: originCtaPosition,
                origin_cta_text: originCtaText
            });
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, originCtaPosition, originCtaText]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="w-full max-w-md bg-[#0F1117] border border-[#8B5CF6]/30 rounded-2xl shadow-2xl overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top accent */}
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-[#C7CEDB50] hover:text-[#F2F2F2] transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8">
                            <span className="font-mono-brand text-xs tracking-wider text-[#8B5CF6] mb-4 block uppercase">
                                Análise Gratuita
                            </span>
                            <h3 className="font-headline font-bold text-[#F2F2F2] text-2xl mb-2">
                                Agendar Diagnóstico
                            </h3>
                            <p className="text-[#C7CEDB80] text-sm mb-8" style={{ fontWeight: 300 }}>
                                Entenda o gargalo da sua aquisição de clientes e descubra a estrutura exata para escalar com margem.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    'Análise do seu funil e presença atual',
                                    'Identificação de gargalos de conversão',
                                    'Plano de ação focado em ROI'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                                        <span className="text-[#C7CEDB90] text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://wa.me/5541987505634"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-gtm="cta"
                                data-cta-position="modal"
                                onClick={() => pushToDataLayer('whatsapp_click', {
                                    cta_position: 'modal',
                                    cta_text: 'Falar no WhatsApp',
                                    path_type: 'direct',
                                    link_url: 'https://wa.me/5541987505634'
                                })}
                                className="btn-sheen w-full group relative overflow-hidden bg-[#F2F2F2] text-[#0F1117] font-bold py-3.5 px-6 rounded flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(242,242,242,0.1)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Falar no WhatsApp
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
