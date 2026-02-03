
import React from 'react';
import DataPanel from '../DataPanel';

interface Props {
  activeSubPage: string;
}

const Training: React.FC<Props> = ({ activeSubPage }) => {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700">
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
        <div className="w-10 h-1 bg-[#ff2d2d]"></div>
        <h2 className="text-3xl font-black text-white tracking-tighter uppercase">TRAINING_HUB :: {activeSubPage}</h2>
      </div>

      {activeSubPage === 'CODEFORCES' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white/[0.01] border border-white/10 p-12">
              <h3 className="text-[#ff2d2d] text-2xl font-black uppercase mb-6 italic">CF_GRUPO_UCSP</h3>
              <p className="text-white/70 font-mono mb-8 text-[14px] leading-relaxed">
                Nuestra base principal de operaciones. Únete al grupo oficial para participar en nuestros Contests privados y Gyms personalizados.
              </p>
              <button className="w-full py-4 border-2 border-[#ff2d2d] text-[#ff2d2d] font-black text-sm tracking-[0.3em] hover:bg-[#ff2d2d] hover:text-black transition-all uppercase shadow-[0_0_20px_rgba(255,45,45,0.2)]">Vincular Cuenta CF</button>
           </div>
           <DataPanel title="CF_GLOBAL_RANKINGS" type="news" />
        </div>
      )}

      {activeSubPage === 'RECURSOS_CPP' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {['STL_CheatSheet', 'Graph_Algorithms', 'Dynamic_Programming'].map(res => (
             <div key={res} className="bg-black/60 border border-white/5 p-8 hover:border-white/40 transition-all group">
                <div className="text-[#ff2d2d] text-2xl font-black mb-4">.cpp</div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-[#ff2d2d] transition-colors">{res}</h4>
                <div className="mt-8 flex justify-between items-center">
                   <span className="text-[9px] text-white/20 font-mono">PDF_V1.2</span>
                   <button className="text-[10px] text-white/60 font-black hover:text-white underline">DOWNLOAD</button>
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default Training;
