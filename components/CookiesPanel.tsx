
import React, { useState } from 'react';

const CookiesPanel: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-12 left-12 z-[200] w-[320px] font-mono shadow-[30px_30px_80px_rgba(0,0,0,0.9)]">
      <div className="bg-[#0c0c0d] border border-white/10">
        <div className="bg-[#333]/80 px-4 py-2 flex justify-between items-center">
          <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">Cookies.txt</span>
          <button onClick={() => setVisible(false)} className="text-[#ff2d2d]/60 hover:text-[#ff2d2d] text-[10px] font-bold">EXIT</button>
        </div>
        
        <div className="p-6 border-t border-white/10">
          <p className="text-[12px] font-black text-white leading-tight mb-8 uppercase tracking-tighter">
            THIS SITE USES COOKIES. <br/>
            <span className="text-white/30">ENABLING_OPTIMAL_EXPERIENCE</span>
          </p>
          
          <div className="flex gap-6">
            <button 
              onClick={() => setVisible(false)}
              className="text-[#ff2d2d] text-[11px] font-black hover:text-white transition-all uppercase tracking-tighter flex items-center gap-2"
            >
              <span className="text-white/10">\</span>ACCEPT
            </button>
            <button 
              onClick={() => setVisible(false)}
              className="text-white/40 text-[11px] font-black hover:text-white transition-all uppercase tracking-tighter flex items-center gap-2"
            >
              <span className="text-white/10">\</span>PREFERENCES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPanel;
