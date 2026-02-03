
import React from 'react';
import HeroSection from '../HeroSection';
import DataPanel from '../DataPanel';

interface Props {
  activeSubPage: string;
}

const Inicio: React.FC<Props> = ({ activeSubPage }) => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      <HeroSection />
      
      <div className="container mx-auto px-0 md:px-6 py-20 flex flex-col gap-12">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-4">
          <div className="w-3 h-3 bg-[#ff2d2d]"></div>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase">VIEWPORT_LOG :: {activeSubPage}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {(activeSubPage === 'DASHBOARD' || activeSubPage === 'WEEKLY_NEWS') && (
             <DataPanel title="REALTIME_REPORTS // SYSTEM_A" type="news" />
          )}
          {(activeSubPage === 'DASHBOARD' || activeSubPage === 'CORE_STATUS') && (
             <DataPanel title="CORE_NODES // STATUS_MONITOR" type="teams" />
          )}
          
          {activeSubPage === 'CORE_STATUS' && (
            <div className="col-span-full bg-white/[0.01] border border-white/5 p-12 text-center border-dashed">
              <span className="text-white/20 font-mono text-sm tracking-[0.5em] uppercase animate-pulse">
                -- SOLICITANDO DATOS ADICIONALES DEL NODO MAESTRO --
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
