
import React, { useState, useEffect, useMemo } from 'react';
import DraggableNavbar from './components/DraggableNavbar';
import HUDOverlay from './components/HUDOverlay';
import CookiesPanel from './components/CookiesPanel';
import { PageId, SUB_MENU } from './constants/navigation';

// Modular Page Components
import Inicio from './components/pages/Inicio';
import Nosotros from './components/pages/Nosotros';
import Eventos from './components/pages/Eventos';
import Training from './components/pages/Training';
import Faq from './components/pages/Faq';
import Contacto from './components/pages/Contacto';
import Membresia from './components/pages/Membresia';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePage, setActivePage] = useState<PageId>('INICIO');
  const [activeSubPage, setActiveSubPage] = useState<string>(SUB_MENU['INICIO'][0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: PageId, sub?: string) => {
    const targetSub = sub || SUB_MENU[page][0];
    if (page === activePage && targetSub === activeSubPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      setActiveSubPage(targetSub);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const PageContent = useMemo(() => {
    const props = { activeSubPage };
    switch (activePage) {
      case 'INICIO': return <Inicio {...props} />;
      case 'NOSOTROS': return <Nosotros {...props} />;
      case 'EVENTOS': return <Eventos {...props} />;
      case 'TRAINING': return <Training {...props} />;
      case 'FAQ': return <Faq {...props} />;
      case 'CONTACTO': return <Contacto {...props} />;
      case 'MEMBRESÍA': return <Membresia {...props} />;
      default: return null;
    }
  }, [activePage, activeSubPage]);

  return (
    <div className="relative min-h-screen bg-[#080808] overflow-hidden select-none">
      <div className="fixed inset-0 flex items-center overflow-hidden pointer-events-none z-0">
        <div className="flex whitespace-nowrap animate-[marquee-left_60s_linear_infinite] transition-all duration-700">
           {[...Array(6)].map((_, i) => (
             <h1 key={i} className="text-[25vw] font-black text-white/[0.015] tracking-tighter uppercase leading-none select-none px-[0.1em] blur-[2px]">
               {activePage === 'INICIO' ? 'ACM 2026' : activePage}
             </h1>
           ))}
        </div>
      </div>

      <div className="fixed -inset-[200%] pointer-events-none z-[1000] opacity-[0.15] grain-overlay animate-[noise-jitter_0.1s_steps(2)_infinite]"></div>
      <div className="fixed inset-0 pointer-events-none z-[1100] bg-white opacity-0 animate-[malfunction-flash_10s_infinite] mix-blend-overlay"></div>
      <div className="fixed inset-0 pointer-events-none z-[1101] bg-black opacity-0 animate-[power-brownout_7s_infinite]"></div>

      <HUDOverlay mouseX={mousePos.x} mouseY={mousePos.y} />
      
      <DraggableNavbar 
        activePage={activePage} 
        activeSubPage={activeSubPage}
        onNavigate={handleNavigate}
      />

      <main className={`relative z-10 container mx-auto px-6 pt-24 pb-24 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-4 blur-md' : 'opacity-100 translate-y-0 blur-0'}`}>
        <div className="max-w-6xl mx-auto">
          {PageContent}
        </div>
      </main>

      <CookiesPanel />

      <footer className="fixed bottom-8 right-8 text-[10px] text-white/30 font-mono tracking-[0.3em] pointer-events-none z-50 bg-black/40 px-3 py-1 border border-white/5 backdrop-blur-sm">
        SYSTEM_ID: <span className="text-[#ff2d2d]">ACM_UCSP_v2.5</span> // NODE: {activePage}::{activeSubPage}
      </footer>

      <style>{`
        .grain-overlay {
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          filter: contrast(300%) brightness(150%) invert(0);
          mix-blend-mode: screen;
        }
        @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes malfunction-flash { 0%, 15%, 85%, 100% { opacity: 0; } 16% { opacity: 0.2; } 17% { opacity: 0; } 18% { opacity: 0.3; } 19% { opacity: 0; } }
        @keyframes power-brownout { 0%, 25%, 75%, 100% { opacity: 0; } 26% { opacity: 0.5; } 27% { opacity: 0; } }
      `}</style>
    </div>
  );
};

export default App;
