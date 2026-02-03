
import React, { useState, useRef, useEffect } from 'react';
import { NAVIGATION_CONFIG, SUB_MENU, PageId } from '../constants/navigation';

interface Props {
  activePage: PageId;
  activeSubPage: string;
  onNavigate: (page: PageId, sub?: string) => void;
}

const DraggableNavbar: React.FC<Props> = ({ activePage, activeSubPage, onNavigate }) => {
  const [position, setPosition] = useState({ x: 60, y: 120 });
  const [isDragging, setIsDragging] = useState(false);
  const [hoverCategory, setHoverCategory] = useState<PageId>(activePage);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  const dragRef = useRef<HTMLDivElement>(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.drag-handle')) return;
    if (dragRef.current) {
      const rect = dragRef.current.getBoundingClientRect();
      offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      setIsDragging(true);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y });
    };
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={dragRef}
      style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: 1000 }}
      className={`fixed flex flex-col bg-[#0d0d0e]/98 backdrop-blur-2xl border border-white/20 select-none shadow-[0_30px_100px_rgba(0,0,0,0.9)] transition-all duration-200 ${isDragging ? 'scale-[1.02] border-[#ff2d2d]/60 shadow-[#ff2d2d]/10' : ''}`}
    >
      {/* DRAG HEADER */}
      <div onMouseDown={handleMouseDown} className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.04]">
        <div className="flex items-center gap-6">
          <div className="drag-handle grid grid-cols-2 gap-2 px-1 cursor-grab active:cursor-grabbing opacity-60 hover:opacity-100 transition-opacity">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`w-2 h-2 ${i % 3 === 0 ? 'bg-[#ff2d2d]' : 'bg-white'}`}></div>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[14px] font-mono tracking-tighter cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="text-[#ff2d2d] font-black underline decoration-[#ff2d2d]/30 underline-offset-8 decoration-4">C:</span>
            <span className="text-white font-black uppercase tracking-[0.1em] text-shadow-sm">\{activePage}</span>
            <span className="text-white/60 font-bold ml-1">::{activeSubPage}</span>
          </div>
        </div>
        <button 
          className={`w-10 h-10 flex items-center justify-center border border-white/30 transition-all font-black text-xl shadow-inner ${isMenuOpen ? 'bg-[#ff2d2d] text-black border-[#ff2d2d]' : 'bg-white/10 text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '−' : '+'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex">
          {/* MAIN MENU */}
          <div className="flex flex-col border-r border-white/10 bg-white/[0.05] min-w-[200px]">
            {NAVIGATION_CONFIG.map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setHoverCategory(cat)}
                onClick={() => {
                  onNavigate(cat);
                  setIsMenuOpen(false); // Minimizar al seleccionar categoría
                }}
                className={`px-8 py-5 text-left text-[12px] font-black tracking-[0.25em] transition-all uppercase border-l-8 relative group ${
                  activePage === cat
                    ? 'bg-[#ff2d2d] text-black border-black shadow-lg z-10' 
                    : hoverCategory === cat 
                    ? 'bg-white/15 text-white border-white/80'
                    : 'text-white/70 border-transparent hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">\{cat}</span>
              </button>
            ))}
          </div>

          {/* SUB-MENU (COMMANDS) */}
          <div className="flex flex-col min-w-[300px] py-4 bg-black/80">
            <div className="px-8 py-4 border-b border-white/10 mb-3 flex justify-between items-center bg-white/[0.02]">
               <span className="text-[10px] text-white/50 font-mono tracking-[0.3em] font-black uppercase">Sub_Modules // {hoverCategory}</span>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </div>
            {SUB_MENU[hoverCategory].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(hoverCategory, item);
                  setIsMenuOpen(false); // Minimizar al seleccionar sub-módulo
                }}
                className={`px-10 py-5 text-left text-[14px] font-mono transition-all group flex justify-between items-center ${
                  activeSubPage === item && activePage === hoverCategory
                  ? 'bg-[#ff2d2d]/20 text-[#ff2d2d] font-black border-r-4 border-[#ff2d2d] shadow-inner'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-5">
                   <span className="text-[#ff2d2d] group-hover:scale-125 transition-transform font-black">»</span>
                   <span className="group-hover:translate-x-2 transition-transform tracking-wider font-bold">\{item}</span>
                </div>
                <span className="text-[9px] opacity-0 group-hover:opacity-100 text-[#ff2d2d] font-black tracking-tighter bg-[#ff2d2d]/10 px-2 py-0.5 border border-[#ff2d2d]/20">EXEC_CMD</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div className="px-6 py-4 border-t border-white/10 bg-black/40 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span className="text-[11px] text-white/60 font-mono font-black tracking-widest uppercase">CONNECTION: <span className="text-green-400">ESTABLISHED</span></span>
        </div>
        <span className="text-[11px] text-[#ff2d2d] font-mono font-black border border-[#ff2d2d]/30 px-2 bg-[#ff2d2d]/5">{Math.floor(position.x)},{Math.floor(position.y)}</span>
      </div>

      <style>{`
        .text-shadow-sm {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
};

export default DraggableNavbar;
