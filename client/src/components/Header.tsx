import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { pushToDataLayer } from '@/lib/gtm';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Sistema', href: '#sistema' },
    { label: 'Prova Social', href: '#prova' },
    { label: 'Quem sou eu', href: '#quem-sou-eu' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#0F1117]/90 backdrop-blur-md border-b border-[#C7CEDB10]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="font-headline font-extrabold text-[#F2F2F2] text-lg tracking-tight">
          Marco Antonio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-brand text-xs tracking-[0.08em] text-[#C7CEDB] hover:text-[#F2F2F2] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5541987505634?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20Auditoria%20de%20Soberania."
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="cta"
          data-cta-position="header"
          onClick={() => pushToDataLayer('whatsapp_click', {
            cta_position: 'header',
            cta_text: 'SOLICITAR AUDITORIA',
            path_type: 'direct',
            link_url: 'https://wa.me/5541987505634?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20Auditoria%20de%20Soberania.',
          })}
          className="hidden md:inline-flex items-center px-5 py-2 border border-[#C7CEDB30] text-[#C7CEDB] font-mono-brand text-xs tracking-[0.08em] hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all duration-300"
        >
          SOLICITAR AUDITORIA
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#C7CEDB] p-3 -mr-2 active:scale-95 transition-transform"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0A0B10]/98 backdrop-blur-xl border-t border-[#C7CEDB10] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-headline font-bold text-lg tracking-wide text-[#F2F2F2] py-4 border-b border-[#C7CEDB05] active:bg-white/5 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/5541987505634?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20Auditoria%20de%20Soberania."
                target="_blank"
                rel="noopener noreferrer"
                data-gtm="cta"
                data-cta-position="header"
                onClick={() => pushToDataLayer('whatsapp_click', {
                  cta_position: 'header',
                  cta_text: 'SOLICITAR AUDITORIA',
                  path_type: 'direct',
                  link_url: 'https://wa.me/5541987505634?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20Auditoria%20de%20Soberania.',
                })}
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-4 bg-[#8B5CF6] text-white font-headline font-bold text-sm tracking-[0.05em] rounded-lg shadow-[0_0_20px_rgba(139,92,246,0.2)] active:scale-95 transition-transform"
              >
                SOLICITAR AUDITORIA
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
