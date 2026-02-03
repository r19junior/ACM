
import React from 'react';

const Membresia: React.FC = () => {
  return (
    <div className="border border-[#ff2d2d]/20 bg-[#ff2d2d]/[0.02] p-12 text-center flex flex-col items-center gap-10 animate-in fade-in zoom-in-95 duration-1000">
      <div className="relative">
        <div className="w-20 h-20 border-2 border-[#ff2d2d] flex items-center justify-center animate-pulse">
           <span className="text-3xl font-bold text-[#ff2d2d]">!</span>
        </div>
        <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-[#ff2d2d]"></div>
        <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-[#ff2d2d]"></div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none italic">Formulario de Registro 2026</h2>
        <p className="text-[11px] text-white/40 tracking-[0.5em] uppercase font-mono max-w-md mx-auto">
           ACCESO RESTRINGIDO A ESTUDIANTES DE CIENCIA DE LA COMPUTACIÓN UCSP
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl text-left">
         <div className="flex flex-col gap-2">
            <label className="text-[8px] text-[#ff2d2d]/60 font-black uppercase tracking-widest">Nombres</label>
            <input type="text" className="bg-black/60 border border-white/10 px-4 py-3 text-[10px] text-white focus:outline-none focus:border-[#ff2d2d] transition-all font-mono" placeholder="SYS_INPUT_NAME..." />
         </div>
         <div className="flex flex-col gap-2">
            <label className="text-[8px] text-[#ff2d2d]/60 font-black uppercase tracking-widest">Código_Alumno</label>
            <input type="text" className="bg-black/60 border border-white/10 px-4 py-3 text-[10px] text-white focus:outline-none focus:border-[#ff2d2d] transition-all font-mono" placeholder="ID_8_DIGITS..." />
         </div>
      </div>

      <button className="mt-8 px-12 py-5 bg-[#ff2d2d] text-black font-black text-[12px] tracking-[0.3em] hover:bg-white transition-all uppercase shadow-[0_0_30px_rgba(255,45,45,0.4)] hover:shadow-white/20 active:scale-95">
        Enviar Solicitud
      </button>
      
      <div className="mt-4 text-[8px] text-white/10 font-mono tracking-widest uppercase">
         Integrity_Check: v2.0 // Node: UCSP_ACM_SUBMIT
      </div>
    </div>
  );
};

export default Membresia;
