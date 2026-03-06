import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen relative flex flex-col" style={{ background: '#0F1117' }}>
      <div className="bg-noise" />
      <Header />

      <main className="flex-grow flex items-center justify-center relative z-10 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full text-center"
        >
          <span className="font-mono-brand text-[#8B5CF6] text-sm md:text-base tracking-[0.2em] mb-4 block">
            ERRO 404
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl text-[#F2F2F2] mb-6 tracking-tight">
            Página não encontrada
          </h1>
          <p className="text-[#C7CEDB90] text-lg mb-10 font-light max-w-md mx-auto leading-relaxed">
            A URL que você tentou acessar não existe ou foi movida.
            Retorne para a página inicial para explorar a assessoria.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setLocation("/")}
              className="btn-sheen group relative bg-[#F2F2F2] text-[#0F1117] hover:bg-white font-headline font-bold py-4 px-8 rounded shadow-[0_0_20px_rgba(242,242,242,0.1)] flex items-center gap-2 transition-all"
            >
              <Home size={18} />
              VOLTAR AO INÍCIO
            </button>
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 text-[#C7CEDB70] hover:text-[#C7CEDB] font-headline font-bold py-4 px-6 rounded transition-colors"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Página Anterior
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
