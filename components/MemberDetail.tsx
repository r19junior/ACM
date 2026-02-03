
import React from 'react';
import { Member } from './pages/Nosotros';
import HUDOverlay from './HUDOverlay';

interface Props {
  member: Member;
}

const MemberDetail: React.FC<Props> = ({ member }) => {
  return (
    <div className="relative min-h-screen bg-[#080808] text-white font-mono selection:bg-[#ff2d2d] selection:text-black overflow-x-hidden">
      {/* HUD Background Decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_#ff2d2d_1px,_transparent_1px)] bg-[size:32px_32px]"></div>
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff2d2d]/20 to-transparent"></div>
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/[0.02]"></div>
         <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.02]"></div>
      </div>

      <HUDOverlay mouseX={0} mouseY={0} />

      <main className="relative z-10 container mx-auto px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: Portrait Section */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 sticky top-24">
            <div className="relative aspect-[3/4] border-2 border-white/10 bg-black overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
               <img 
                 src={member.image} 
                 alt={member.lastName} 
                 className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               
               {/* Metadata overlays */}
               <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <span className="text-[10px] bg-[#ff2d2d] text-black font-black px-2 py-0.5 tracking-widest uppercase italic">LIVE_FEED</span>
                  <span className="text-[8px] text-white/40 tracking-[0.2em]">NODE::{member.id}</span>
               </div>

               <div className="absolute bottom-4 right-4 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d] animate-pulse"></div>
                  <span className="text-[10px] text-[#ff2d2d] font-black uppercase tracking-widest italic">STREAM_ACTIVE</span>
               </div>
               
               {/* Inner decorative corners */}
               <div className="absolute inset-4 border border-white/5 pointer-events-none"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter italic leading-[0.85] text-white">
                {member.firstName}<br/>
                <span className="text-[#ff2d2d]">{member.lastName}</span>
              </h1>
              <div className="flex items-center gap-4">
                 <div className="h-px flex-1 bg-white/10"></div>
                 <span className="text-[#ff2d2d] font-black tracking-[0.3em] uppercase text-xs">{member.role}</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Information Grid */}
          <div className="w-full lg:w-2/3 space-y-20">
            
            {/* Bio Section */}
            <section className="animate-in fade-in slide-in-from-right-12 duration-700">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-4 h-4 bg-[#ff2d2d] rotate-45"></div>
                  <h2 className="text-xl font-black tracking-[0.4em] uppercase text-white/60">BIOS_SUMMARY // DATA_LOG</h2>
               </div>
               <p className="text-2xl font-black text-white/90 leading-relaxed tracking-tight max-w-2xl italic">
                  "{member.description}"
               </p>
            </section>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               
               {/* Proyectos */}
               <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                  <h3 className="text-[#ff2d2d] font-black text-sm tracking-[0.5em] uppercase mb-8 border-b border-[#ff2d2d]/20 pb-2">PROYECTOS_ACTIVOS</h3>
                  <div className="space-y-6">
                    {member.projects.map((p, i) => (
                      <div key={i} className="flex items-center gap-6 group">
                         <span className="text-[10px] text-white/20 font-bold tracking-tighter">0{i+1}_</span>
                         <span className="text-lg font-black text-white/80 group-hover:text-white transition-colors uppercase tracking-wider">{p}</span>
                      </div>
                    ))}
                  </div>
               </section>

               {/* Funciones */}
               <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                  <h3 className="text-white font-black text-sm tracking-[0.5em] uppercase mb-8 border-b border-white/10 pb-2">FUNCIONES_CORE</h3>
                  <div className="space-y-6">
                    {member.functions.map((f, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-1.5 h-1.5 bg-[#ff2d2d]/40"></div>
                         <span className="text-sm font-bold text-white/50 uppercase leading-none">{f}</span>
                      </div>
                    ))}
                  </div>
               </section>

            </div>

            {/* Social Networks */}
            <section className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
               <div className="bg-white/[0.02] border border-white/5 p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 text-[40px] font-black text-white/[0.03] select-none">NETWORKS</div>
                  <h3 className="text-white font-black tracking-[0.4em] uppercase mb-12 flex items-center gap-4">
                     REDES_SOCIALES <span className="h-px flex-1 bg-white/5"></span>
                  </h3>
                  <div className="flex flex-wrap gap-8">
                    {member.socials.map((s, i) => (
                      <a 
                        key={i} 
                        href={s.url} 
                        className="flex flex-col items-center gap-4 group/btn"
                      >
                         <div className="w-20 h-20 border border-white/10 flex items-center justify-center group-hover/btn:border-[#ff2d2d] transition-all relative">
                            <span className="text-2xl font-black text-white/40 group-hover/btn:text-[#ff2d2d] transition-colors">{s.icon}</span>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/0 group-hover/btn:border-white/20 transition-all"></div>
                         </div>
                         <span className="text-[10px] font-black tracking-[0.2em] text-white/20 group-hover/btn:text-white transition-colors">{s.platform}</span>
                      </a>
                    ))}
                  </div>
               </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="fixed bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 opacity-20 pointer-events-none">
         <span className="text-[10px] tracking-[0.5em] uppercase">ACCESS_LEVEL_GRANTED</span>
         <div className="w-32 h-[1px] bg-white/20"></div>
         <span className="text-[10px] tracking-[0.5em] uppercase">ACM_CORE_PROTOCOL</span>
      </footer>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-110%); }
          100% { transform: translateY(110%); }
        }
      `}</style>
    </div>
  );
};

export default MemberDetail;
