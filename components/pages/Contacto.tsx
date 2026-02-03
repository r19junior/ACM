
import React from 'react';

const Contacto: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-16 py-10 animate-in fade-in duration-700">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="text-center flex flex-col items-center gap-4">
             <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group cursor-pointer hover:border-[#ff2d2d] transition-all">
                <span className="text-[#ff2d2d] font-black text-2xl">D</span>
             </div>
             <h3 className="text-white font-black uppercase tracking-widest text-lg">Discord</h3>
             <p className="text-[10px] text-white/30 uppercase">Vital para la comunidad</p>
          </div>
          <div className="text-center flex flex-col items-center gap-4">
             <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group cursor-pointer hover:border-[#ff2d2d] transition-all">
                <span className="text-[#ff2d2d] font-black text-2xl">I</span>
             </div>
             <h3 className="text-white font-black uppercase tracking-widest text-lg">Instagram</h3>
             <p className="text-[10px] text-white/30 uppercase">Noticias y Eventos</p>
          </div>
       </div>
       <div className="bg-white/[0.01] border border-white/5 p-8 w-full max-w-2xl text-center">
          <span className="text-[#ff2d2d] text-[9px] font-bold uppercase tracking-[0.4em]">Ubicación del Laboratorio</span>
          <p className="text-white text-sm font-mono mt-4 uppercase">Campus San Lázaro - Lab 402 - Escuela de Computación</p>
       </div>
    </div>
  );
};

export default Contacto;
