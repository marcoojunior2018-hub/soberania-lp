import Header from '@/components/Header';
import MultiStepForm from '@/components/MultiStepForm';

export default function Diagnostico() {
    const schemaOrg = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Diagnóstico de Estrutura no Google | Marco Antonio",
        "description": "Responda 7 perguntas e descubra o plano de captação no Google para o seu negócio."
    };

    return (
        <div className="min-h-screen relative" style={{ background: '#0F1117' }}>
            <div className="bg-noise" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
            <Header />

            <main className="pt-32 pb-20 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="container max-w-2xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <span className="chip mb-4 inline-flex">Diagnóstico Gratuito</span>
                        <h1 className="font-headline font-extrabold text-[#F2F2F2] text-[clamp(1.8rem,3vw,2.5rem)] leading-tight tracking-tight mb-4">
                            Descubra sua nota de captação
                        </h1>
                        <p className="text-[#C7CEDB80] text-sm md:text-base max-w-xl mx-auto" style={{ fontWeight: 300 }}>
                            Responda às 7 perguntas abaixo e entenda o exato gargalo do seu negócio no Google. O progresso é salvo automaticamente.
                        </p>
                    </div>

                    <MultiStepForm />
                </div>
            </main>
        </div>
    );
}
