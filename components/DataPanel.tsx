
import React from 'react';

interface Props {
  title: string;
  type: 'teams' | 'news';
}

const DataPanel: React.FC<Props> = ({ title, type }) => {
  const teams = [
    { name: 'Null Pointers', origin: 'MIT', status: 'LIVE' },
    { name: 'Byte Busters', origin: 'Stanford', status: 'IDLE' },
    { name: 'Algo Architects', origin: 'Oxford', status: 'IDLE' },
  ];

  const news = [
    { date: '2026.01.12', text: 'Regional qualifiers complete.', priority: 'HIGH' },
    { date: '2026.01.05', text: 'Challenge set 4 released.', priority: 'LOW' },
  ];

  return (
    <div className="bg-[#0d0d0e]/40 border border-white/5 p-8 font-mono hover:border-[#ff2d2d]/20 transition-all group shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
           <div className="w-1 h-3 bg-[#ff2d2d] opacity-60"></div>
           <h2 className="text-[10px] font-bold text-white/60 tracking-[0.5em] uppercase group-hover:text-white transition-colors">{title}</h2>
        </div>
        <span className="text-[7px] text-white/10 uppercase tracking-widest">/SRC_LOG_V2</span>
      </div>

      <div className="space-y-4">
        {type === 'teams' ? (
          teams.map((team, idx) => (
            <div key={idx} className="flex justify-between items-center group/item cursor-pointer border-b border-white/[0.03] pb-3 hover:border-[#ff2d2d]/30 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-white/50 group-hover/item:text-white transition-colors uppercase">{team.name}</span>
                {team.status === 'LIVE' && (
                  <span className="text-[6px] bg-[#ff2d2d]/20 text-[#ff2d2d] px-1.5 py-0.5 rounded-sm border border-[#ff2d2d]/40 animate-pulse font-bold tracking-tighter">LIVE</span>
                )}
              </div>
              <span className="text-[8px] text-white/20 uppercase font-bold tracking-widest group-hover/item:text-[#ff2d2d]/60">{team.origin}</span>
            </div>
          ))
        ) : (
          news.map((item, idx) => (
            <div key={idx} className="group/item cursor-pointer border-b border-white/[0.03] pb-3 hover:border-[#ff2d2d]/30 transition-colors">
              <div className="flex justify-between items-center mb-1.5">
                <div className="text-[7px] text-white/20 font-bold">{item.date}</div>
                {item.priority === 'HIGH' && (
                  <div className="w-1 h-1 rounded-full bg-[#ff2d2d] shadow-[0_0_5px_#ff2d2d]"></div>
                )}
              </div>
              <div className="text-[10px] text-white/40 group-hover/item:text-white transition-colors uppercase leading-relaxed">
                <span className="text-[#ff2d2d]/40 mr-2">></span>{item.text}
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-8 pt-4 border-t border-white/[0.02] flex justify-end">
         <span className="text-[6px] text-white/5 tracking-[0.3em] font-mono">PARSING_NODE_STATUS: OPTIMAL</span>
      </div>
    </div>
  );
};

export default DataPanel;
