
import React, { useState, useEffect } from 'react';

interface Props {
  mouseX: number;
  mouseY: number;
}

const HUDOverlay: React.FC<Props> = ({ mouseX, mouseY }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 font-mono overflow-hidden">
      {/* Corner Markers with Red Highlights */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#ff2d2d]/40"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-white/10"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-white/10"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#ff2d2d]/40"></div>

      {/* Dynamic Red Alerts */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-12 items-center opacity-40">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-[#ff2d2d] animate-pulse"></div>
           <span className="text-[8px] tracking-[0.4em] font-bold text-[#ff2d2d]">THREAT_LEVEL: LOW</span>
        </div>
        <div className="w-16 h-[1px] bg-white/10"></div>
        <div className="flex items-center gap-2">
           <span className="text-[8px] tracking-[0.4em] font-bold text-white/40">NODE: ACM_MASTER_01</span>
        </div>
      </div>

      {/* Status Info */}
      <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col gap-16 opacity-20">
         <div className="rotate-[-90deg] origin-left text-[8px] tracking-[0.6em] uppercase whitespace-nowrap text-[#ff2d2d]">SYSTEM_LIVE_OVERRIDE</div>
         <div className="rotate-[-90deg] origin-left text-[8px] tracking-[0.6em] uppercase whitespace-nowrap">ALGO_STREAM_01</div>
      </div>

      <div className="absolute bottom-32 left-24 opacity-40 text-[9px] leading-relaxed uppercase tracking-widest border-l border-[#ff2d2d] pl-4">
        <span className="text-[#ff2d2d]/60">DATE :</span> {time.toLocaleDateString('en-GB').replace(/\//g, '.')} <br/>
        <span className="text-[#ff2d2d]/60">HOUR :</span> {time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </div>

      {/* Floating Mouse Data */}
      <div 
        className="absolute text-[8px] font-mono text-white/30 transition-transform duration-75 flex flex-col bg-black/40 backdrop-blur-sm p-2 border border-white/5"
        style={{ left: mouseX + 25, top: mouseY + 25 }}
      >
        <span className="text-[#ff2d2d]/60">X_POS:</span> <span>{mouseX.toString().padStart(4, '0')}PX</span>
        <span className="text-[#ff2d2d]/60">Y_POS:</span> <span>{mouseY.toString().padStart(4, '0')}PX</span>
      </div>
    </div>
  );
};

export default HUDOverlay;
