
import React, { useMemo, useState, useEffect } from 'react';

export interface Member {
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  id: string;
  description: string;
  projects: string[];
  functions: string[];
  socials: { platform: string; url: string; icon: string }[];
}

export const DIRECTIVE_MEMBERS: Member[] = [
  { 
    firstName: "Fernando", 
    lastName: "Daza", 
    role: "Presidente", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146587/fernando-2_sgueif.jpg",
    id: "U_ACM_01",
    description: "Estratega algorítmico y líder visionario. Especialista en optimización de sistemas y teoría de grafos.",
    projects: ["Core Engine v2.0", "ACM_Global_Connect", "Neural_Training_System"],
    functions: ["Dirección Ejecutiva", "Relaciones Institucionales", "Supervisión de Proyectos"],
    socials: [
      { platform: "Github", url: "#", icon: "GH" },
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Mauricio", 
    lastName: "Apaza", 
    role: "Vicepresidente", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146599/mauricio-2_sunyhj.jpg",
    id: "U_ACM_02",
    description: "Experto en desarrollo distribuido y sistemas de alta disponibilidad. Coordina la expansión técnica del capítulo.",
    projects: ["Distributed_Judge", "Workshop_Master_Framework"],
    functions: ["Gestión Técnica", "Planificación Estratégica", "Mentoría"],
    socials: [
      { platform: "Twitter", url: "#", icon: "TW" },
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Anthony", 
    lastName: "Rodriguez", 
    role: "Tesorero", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146612/anthony_cxses5.jpg",
    id: "U_ACM_03",
    description: "Analista financiero con enfoque en sostenibilidad de proyectos tecnológicos. Administra los recursos del core.",
    projects: ["Budget_Tracker_v1", "Donation_Protocol"],
    functions: ["Administración Financiera", "Presupuestos", "Logística"],
    socials: [
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Pablo", 
    lastName: "Carazas", 
    role: "Event Coordinator", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146621/pablo-2_ddqrj3.jpg",
    id: "U_ACM_04",
    description: "Arquitecto de experiencias competitivas. Encargado de la logística de los eventos de clase mundial.",
    projects: ["Contest_Flow_Engine", "Arena_Management"],
    functions: ["Organización de Eventos", "Protocolo de Competencia", "Marketing"],
    socials: [
      { platform: "Instagram", url: "#", icon: "IG" },
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Pamela", 
    lastName: "Villar", 
    role: "Web Master", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146631/pamela_iv9fr3.jpg",
    id: "U_ACM_05",
    description: "Diseñadora de interfaces futuristas y frontend architect. Mantiene la infraestructura digital del capítulo.",
    projects: ["Hacker_HUD_Interface", "ACM_Wiki_Portal"],
    functions: ["Diseño UI/UX", "Mantenimiento Web", "Seguridad"],
    socials: [
      { platform: "Github", url: "#", icon: "GH" },
      { platform: "Portfolio", url: "#", icon: "PF" }
    ]
  },
  { 
    firstName: "Gabriel", 
    lastName: "Baca", 
    role: "Primer Secretario", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146647/gabriel-2_aomjnu.jpg",
    id: "U_ACM_07",
    description: "Coordinador administrativo con enfoque en la estandarización de procesos del capítulo.",
    projects: ["Process_Optimizer", "Legal_Frame_v1"],
    functions: ["Secretaría General", "Gestión de Convenios", "Organización"],
    socials: [
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Amara", 
    lastName: "Barrera", 
    role: "Segunda Secretaria", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146638/amara-e1767713406979_l0c7am.jpg",
    id: "U_ACM_06",
    description: "Gestora de comunicación y documentación. Asegura la trazabilidad de cada decisión institucional.",
    projects: ["Doc_Archive_System", "Member_Registry_v2"],
    functions: ["Documentación", "Gestión de Actas", "Comunicación Interna"],
    socials: [
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  },
  { 
    firstName: "Rodrigo", 
    lastName: "Callo", 
    role: "Representante Estudiantil | Colaborador oficial", 
    image: "https://res.cloudinary.com/dvzxrg1tq/image/upload/v1770146654/rodrigo_jnnoob.jpg",
    id: "U_ACM_08",
    description: "Nexo fundamental entre la directiva y el estudiantado. Promotor activo de la cultura competitiva.",
    projects: ["Student_Feedback_Loop", "Campus_Ambassador_Prog"],
    functions: ["Representación", "Relaciones Públicas", "Soporte Estudiantil"],
    socials: [
      { platform: "Discord", url: "#", icon: "DS" },
      { platform: "LinkedIn", url: "#", icon: "IN" }
    ]
  }
];

interface Props {
  activeSubPage: string;
}

const Nosotros: React.FC<Props> = ({ activeSubPage }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleOpenMember = (member: Member) => {
    setSelectedMember(member);
    setTimeout(() => setIsModalActive(true), 10);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    setTimeout(() => setSelectedMember(null), 400);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-700">
      <div className="flex items-center gap-4 border-b border-white/10 pb-4">
        <div className="w-4 h-4 bg-[#ff2d2d] rotate-45"></div>
        <h2 className="text-3xl font-black text-white tracking-tighter uppercase">CAPÍTULO_ESTUDIANTIL_UCSP :: {activeSubPage}</h2>
      </div>

      {activeSubPage === 'MISIÓN' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
           <div className="bg-[#ff2d2d]/[0.03] border border-[#ff2d2d]/30 p-12 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-[40px] font-black text-[#ff2d2d]/10 group-hover:text-[#ff2d2d]/20 transition-colors select-none">M1</div>
              <h3 className="text-[#ff2d2d] text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-4 underline-offset-8">Misión Institucional</h3>
              <p className="text-[15px] text-white/80 leading-relaxed font-mono font-bold italic">
                Forjar una élite de ingenieros capaces de resolver problemas complejos mediante el dominio absoluto de algoritmos. 
                Nuestra meta es colocar a la UCSP en el podio mundial de la programación competitiva.
              </p>
           </div>
           <div className="bg-white/[0.02] border border-white/10 p-12">
              <h3 className="text-white text-xl font-black uppercase tracking-tighter mb-6">Visión 2030</h3>
              <p className="text-[14px] text-white/50 leading-relaxed font-mono">
                Ser el hub de referencia en computación teórica y aplicada en el sur del país, estableciendo puentes directos con Silicon Valley y centros de investigación globales.
              </p>
           </div>
        </div>
      )}

      {activeSubPage === 'DIRECTIVA' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 mt-8 pb-20">
          {DIRECTIVE_MEMBERS.map((member, i) => (
            <HUDViewport 
              key={member.id} 
              member={member} 
              index={i} 
              onClick={() => handleOpenMember(member)} 
            />
          ))}
        </div>
      )}

      {activeSubPage === 'HISTORIA' && (
        <div className="relative pl-12 border-l-2 border-[#ff2d2d]/20 space-y-12 py-8 mt-4">
           {[2024, 2025, 2026].map(year => (
             <div key={year} className="relative">
                <div className="absolute -left-[54px] top-0 w-4 h-4 rounded-full bg-[#ff2d2d] shadow-[0_0_15px_#ff2d2d]"></div>
                <div className="text-3xl font-black text-white/20 mb-2 italic">EST. {year}</div>
                <h4 className="text-white font-bold text-lg uppercase tracking-widest">Hito_Operacional_{year}</h4>
                <p className="text-[13px] text-white/40 font-mono mt-3 max-w-xl">Logros significativos en competencias regionales y expansión de la infraestructura de entrenamiento algorítmico.</p>
             </div>
           ))}
        </div>
      )}

      {selectedMember && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-12">
           <div 
             className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${isModalActive ? 'opacity-100' : 'opacity-0'}`} 
             onClick={handleCloseModal}
           ></div>
           
           <div className={`relative w-full max-w-6xl bg-[#0a0a0b] border border-[#ff2d2d]/30 shadow-[0_0_100px_rgba(255,45,45,0.2)] flex flex-col md:flex-row overflow-hidden transition-all duration-500 ease-out transform ${isModalActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12'}`}>
              
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#ff2d2d] text-black font-black text-2xl hover:bg-white transition-colors"
              >
                ✕
              </button>

              <div className="w-full md:w-[35%] p-8 border-r border-white/10 flex flex-col gap-8 bg-black/40">
                <div className="relative aspect-[3/4] border-2 border-white/10 overflow-hidden shadow-2xl">
                   <img 
                     src={selectedMember.image} 
                     alt={selectedMember.firstName} 
                     className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 hover:scale-105"
                   />
                   <div className="absolute top-4 left-4 bg-[#ff2d2d] text-black text-[10px] font-black px-2 py-1 tracking-widest uppercase italic shadow-lg">LIVE_FEED</div>
                   <div className="absolute bottom-4 left-4 text-[8px] text-white/40 font-mono bg-black/50 px-2 py-0.5">NODE::{selectedMember.id}</div>
                </div>

                <div className="space-y-6">
                   <h4 className="text-[10px] font-black text-[#ff2d2d] tracking-[0.5em] uppercase border-b border-[#ff2d2d]/20 pb-2">REDES_SOCIALES</h4>
                   <div className="flex gap-4">
                      {selectedMember.socials.map((s, idx) => (
                        <a 
                          key={idx} 
                          href={s.url} 
                          className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#ff2d2d] hover:border-[#ff2d2d] transition-all bg-white/[0.02]"
                        >
                           <span className="text-xl font-black">{s.icon}</span>
                        </a>
                      ))}
                   </div>
                </div>
              </div>

              <div className="w-full md:w-[65%] p-10 md:p-16 flex flex-col gap-12 overflow-y-auto max-h-[90vh] custom-scrollbar">
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-2 h-8 bg-[#ff2d2d] shadow-[0_0_15px_rgba(255,45,45,0.4)]"></div>
                       <h3 className="text-[#ff2d2d] font-black tracking-[0.4em] uppercase text-sm">{selectedMember.role}</h3>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none text-shadow-xl">
                       {selectedMember.firstName}<br/>{selectedMember.lastName}
                    </h1>
                 </div>

                 <section className="space-y-4">
                    <h4 className="text-xs font-black text-white/30 tracking-[0.6em] uppercase flex items-center gap-4">
                      // PRESENTACIÓN <span className="h-px flex-1 bg-white/5"></span>
                    </h4>
                    <p className="text-xl md:text-2xl font-black text-white/80 leading-relaxed italic border-l-4 border-[#ff2d2d]/40 pl-6">
                       "{selectedMember.description}"
                    </p>
                 </section>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                    <section className="space-y-6">
                       <h4 className="text-xs font-black text-white/30 tracking-[0.6em] uppercase flex items-center gap-4">
                         // TRAYECTORIA <span className="h-px flex-1 bg-white/5"></span>
                       </h4>
                       <div className="space-y-4">
                          {selectedMember.projects.map((p, idx) => (
                            <div key={idx} className="flex items-center gap-4 group/item">
                               <span className="text-[10px] text-[#ff2d2d] font-black">0{idx+1}_</span>
                               <span className="text-white/80 font-bold uppercase tracking-wider group-hover/item:text-[#ff2d2d] transition-colors">{p}</span>
                            </div>
                          ))}
                       </div>
                    </section>

                    <section className="space-y-6">
                       <h4 className="text-xs font-black text-white/30 tracking-[0.6em] uppercase flex items-center gap-4">
                         // FUNCIONES <span className="h-px flex-1 bg-white/5"></span>
                       </h4>
                       <div className="space-y-4">
                          {selectedMember.functions.map((f, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                               <div className="w-1.5 h-1.5 bg-[#ff2d2d] mt-1.5 shadow-[0_0_5px_#ff2d2d]"></div>
                               <span className="text-sm font-bold text-white/50 uppercase leading-tight">{f}</span>
                            </div>
                          ))}
                       </div>
                    </section>
                 </div>

                 <div className="mt-auto pt-12 flex justify-between items-center opacity-20 border-t border-white/5">
                    <span className="text-[8px] font-mono tracking-[0.5em]">ACM_UCSP_PROFILE_v3.5_EXPANDED</span>
                    <span className="text-[8px] font-mono tracking-[0.5em]">AUTH_LEVEL: OMEGA</span>
                 </div>
              </div>
           </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff2d2d; }
        .text-shadow-xl { text-shadow: 0 10px 30px rgba(0,0,0,0.8); }
      `}</style>
    </div>
  );
};

const HUDViewport: React.FC<{ member: Member, index: number, onClick: () => void }> = ({ member, index, onClick }) => {
  const coords = useMemo(() => ({
    x: Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
    y: Math.floor(Math.random() * 9999).toString().padStart(4, '0')
  }), []);

  return (
    <div 
      onClick={onClick}
      className="relative group animate-in slide-in-from-bottom-8 duration-700 cursor-pointer" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute -top-6 left-0 flex items-center gap-2 z-20">
        <div className="bg-white/10 px-2 py-0.5 text-[8px] font-mono font-black text-white/60 border-t border-l border-white/20">
          X:{coords.x}PX Y:{coords.y}PX
        </div>
        <div className="w-12 h-[1px] bg-white/5"></div>
      </div>

      <div className="relative aspect-[3/4] overflow-hidden border border-white/10 bg-black shadow-[15px_15px_30px_rgba(0,0,0,0.8)] group-hover:border-[#ff2d2d]/60 transition-all duration-500 ring-offset-4 ring-offset-black group-hover:ring-2 ring-[#ff2d2d]/20">
        <img 
          src={member.image} 
          alt={`${member.firstName} ${member.lastName}`}
          className="w-full h-full object-cover object-top opacity-70 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 group-hover:opacity-100"
        />

        <div className="absolute inset-0 p-4 pointer-events-none flex flex-col justify-between">
          <div className="flex justify-between items-start opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="text-[6px] font-mono text-white/80 leading-tight">
              REC // ID_{member.id}<br/>
              NODE_UCSP_AQ<br/>
              TARGET: LOCKED
            </div>
            <div className="flex flex-col items-end">
              <div className="bg-[#ff2d2d] w-1 h-3 mb-1"></div>
              <span className="text-[7px] font-mono text-white/40 tracking-[0.2em] font-black uppercase">V_0{index + 1}</span>
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <div className="bg-black/90 backdrop-blur-md border-l-[4px] border-[#ff2d2d] px-4 py-3 translate-y-2 group-hover:translate-y-0 transition-transform shadow-2xl w-full">
              <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tighter leading-[0.9] italic text-shadow-lg">
                {member.firstName}<br/>{member.lastName}
              </h3>
              <div className="h-px w-full bg-white/10 my-2"></div>
              <p className="text-[#ff2d2d] font-mono font-black text-[9px] tracking-[0.2em] uppercase leading-tight">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#ff2d2d]/10 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:animate-[scan_4s_linear_infinite]"></div>
        <div className="absolute inset-2 border border-white/[0.05] pointer-events-none"></div>
      </div>

      <div className="absolute -bottom-5 right-0 flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity z-20">
        <span className="text-[7px] font-mono text-white tracking-[0.3em] uppercase italic font-bold">STREAM_STABLE</span>
        <div className="w-1.5 h-1.5 bg-[#ff2d2d] animate-pulse"></div>
      </div>
    </div>
  );
};

export default Nosotros;
