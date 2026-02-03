
import React from 'react';
import CountdownPanel from '../CountdownPanel';

interface Props {
  activeSubPage: string;
}

const Eventos: React.FC<Props> = ({ activeSubPage }) => {
  const events = [
    { title: 'C++ Mastery', cat: 'TALLERES', date: 'FEB 20' },
    { title: 'Data Structures 101', cat: 'TALLERES', date: 'MAR 02' },
    { title: 'Clasificatorio Regional', cat: 'CONTESTS', date: 'MAR 15' },
    { title: 'Winter Hackathon', cat: 'CONTESTS', date: 'JUN 10' }
  ];

  return (
    <div className="flex flex-col gap-12 animate-in fade-in duration-700">
      {activeSubPage === 'CALENDARIO' && (
         <>
           <CountdownPanel targetDate="2026-03-15T09:00:00" />
           <div className="bg-white/[0.01] border border-white/10 p-10">
              <h3 className="text-white font-black uppercase mb-6 flex items-center gap-3">
                <span className="text-[#ff2d2d] font-mono">></span> Próximos Eventos Globos
              </h3>
              <div className="space-y-4">
                 {events.map((ev, i) => (
                   <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 hover:bg-white/[0.02] px-4 transition-colors">
                      <div className="flex items-center gap-6">
                         <span className="text-[#ff2d2d] font-mono font-black text-sm">{ev.date}</span>
                         <span className="text-white font-bold text-[14px] tracking-wider uppercase">{ev.title}</span>
                      </div>
                      <span className="text-white/20 font-mono text-[10px] font-bold tracking-[0.3em]">{ev.cat}</span>
                   </div>
                 ))}
              </div>
           </div>
         </>
      )}

      {activeSubPage === 'TALLERES' && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.filter(e => e.cat === 'TALLERES').map((ev, i) => (
               <div key={i} className="bg-black/60 border-l-4 border-[#ff2d2d] p-10 hover:bg-[#ff2d2d]/10 transition-all cursor-pointer">
                  <h4 className="text-white text-xl font-black uppercase mb-4">{ev.title}</h4>
                  <p className="text-white/40 font-mono text-sm leading-relaxed mb-6">Nivel: Avanzado // Requisito: Laptop con GCC instalado.</p>
                  <button className="text-[#ff2d2d] font-black text-[11px] tracking-widest border border-[#ff2d2d]/40 px-6 py-2 hover:bg-[#ff2d2d] hover:text-black transition-all">REGISTRARSE_></button>
               </div>
            ))}
         </div>
      )}

      {activeSubPage === 'CONTESTS' && (
        <div className="p-20 border border-white/10 flex flex-col items-center justify-center gap-10 bg-white/[0.01] border-dashed">
           <div className="w-24 h-24 border border-[#ff2d2d] flex items-center justify-center animate-spin-slow">
              <div className="w-16 h-16 border border-white/20"></div>
           </div>
           <p className="text-white/40 font-mono text-sm uppercase tracking-[0.6em] text-center">Iniciando Servidor de Competencia Interna...</p>
        </div>
      )}
    </div>
  );
};

export default Eventos;
