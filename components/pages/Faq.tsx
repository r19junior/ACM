
import React from 'react';

const Faq: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6 animate-in fade-in duration-700">
      {[
        { q: '¿Necesito saber programar?', a: 'No, tenemos talleres desde nivel cero. Solo necesitas ganas de aprender.' },
        { q: '¿Tiene costo?', a: 'La membresía básica es gratuita para alumnos de Computación UCSP.' },
        { q: '¿Cómo me uno?', a: 'Llena el formulario en la sección de MEMBRESÍA.' }
      ].map((faq, i) => (
        <div key={i} className="border border-white/5 bg-white/[0.01] p-6 hover:bg-white/[0.02] transition-all group">
           <div className="flex gap-4">
              <span className="text-[#ff2d2d] font-black font-mono">?</span>
              <h4 className="text-white font-bold uppercase text-sm tracking-widest">{faq.q}</h4>
           </div>
           <p className="mt-4 pl-7 text-[11px] text-white/40 font-mono leading-relaxed border-l border-[#ff2d2d]/20">
              {faq.a}
           </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
