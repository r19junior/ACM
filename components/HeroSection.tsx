
import React, { useEffect, useRef } from 'react';
import * as THREE from 'https://esm.sh/three';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // --- Escena 3D Universe ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    // --- Robot Pensante (Cerebro Central / Neural Network) ---
    const robotGroup = new THREE.Group();

    // Estructura Neural Exterior
    const neuralGeom = new THREE.IcosahedronGeometry(2, 2);
    const neuralWire = new THREE.WireframeGeometry(neuralGeom);
    const neuralMat = new THREE.LineBasicMaterial({ 
      color: 0xff2d2d, 
      transparent: true, 
      opacity: 0.15,
      blending: THREE.AdditiveBlending 
    });
    const neuralStructure = new THREE.LineSegments(neuralWire, neuralMat);
    robotGroup.add(neuralStructure);

    // Núcleo del Pensamiento (Brain Core)
    const brainGeom = new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16);
    const brainMat = new THREE.MeshBasicMaterial({ 
      color: 0xff2d2d, 
      wireframe: true,
      transparent: true,
      opacity: 0.5 
    });
    const brain = new THREE.Mesh(brainGeom, brainMat);
    robotGroup.add(brain);

    // Ojos del Robot (Glow Points - floating near center)
    const eyeGeom = new THREE.SphereGeometry(0.04, 8, 8);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const eyeL = new THREE.Mesh(eyeGeom, eyeMat);
    eyeL.position.set(0.7, 0.5, 1.5);
    const eyeR = new THREE.Mesh(eyeGeom, eyeMat);
    eyeR.position.set(-0.7, 0.5, 1.5);
    robotGroup.add(eyeL, eyeR);

    scene.add(robotGroup);

    // --- Universo de Datos (Estrellas Bits) ---
    const starCount = 4000;
    const starCoords = new Float32Array(starCount * 3);
    for(let i = 0; i < starCount * 3; i++) {
      starCoords[i] = (Math.random() - 0.5) * 40;
    }
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(starCoords, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });
    const stars = new THREE.Points(starGeom, starMat);
    scene.add(stars);

    camera.position.z = 7;

    // --- Animación ---
    let frame = 0;
    const animate = () => {
      frame += 0.004;
      requestAnimationFrame(animate);
      
      robotGroup.rotation.y = Math.sin(frame * 0.5) * 0.3;
      robotGroup.rotation.x = Math.cos(frame * 0.4) * 0.2;
      
      const pulse = 1 + Math.sin(frame * 4) * 0.1;
      brain.scale.set(pulse, pulse, pulse);
      brain.rotation.z += 0.01;
      brainMat.opacity = 0.3 + Math.sin(frame * 4) * 0.2;

      stars.rotation.y += 0.0002;
      stars.position.z = Math.sin(frame * 0.1) * 3;

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (canvasRef.current) canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative w-screen h-screen -mt-24 -mx-6 md:-mx-12 overflow-hidden bg-black/10 select-none flex items-center justify-center">
      {/* 3D Background */}
      <div ref={canvasRef} className="absolute inset-0 z-0" />

      {/* TOP LEFT BRANDING */}
      <div className="absolute top-12 left-12 z-20 flex flex-col gap-1">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-[#ff2d2d] flex items-center justify-center bg-black/40 backdrop-blur-md">
               <span className="text-[#ff2d2d] font-black text-xl italic">U</span>
            </div>
            <div className="flex flex-col">
               <span className="text-white font-black text-sm tracking-[0.2em] leading-none uppercase">UCSP</span>
               <span className="text-[#ff2d2d] font-bold text-[8px] tracking-[0.4em] leading-none uppercase">ACM_CHAPTER</span>
            </div>
         </div>
         <div className="h-px w-48 bg-gradient-to-r from-[#ff2d2d] via-[#ff2d2d]/20 to-transparent mt-2"></div>
      </div>

      {/* LEFT HUD SIDEBAR (Neural Stats) */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col gap-10">
        <div className="flex flex-col gap-2 border-l-2 border-[#ff2d2d] pl-6 py-2 bg-gradient-to-r from-[#ff2d2d]/5 to-transparent">
           <span className="text-[9px] font-black text-[#ff2d2d] tracking-[0.4em]">NEURAL_LINK_v4.2</span>
           <div className="flex flex-col gap-1 font-mono">
              <span className="text-[11px] text-white">SYNC_STATUS: <span className="text-green-500">OPTIMAL</span></span>
              <span className="text-[11px] text-white/40">BUFFER_VAL: 102.4kbs</span>
           </div>
        </div>
        
        <div className="flex flex-col gap-4">
           <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Thought_Load</span>
           <div className="flex flex-col gap-1.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex gap-1 items-center">
                  <div className={`h-1.5 w-1.5 ${i < 8 ? 'bg-[#ff2d2d]' : 'bg-white/10'} rounded-full`}></div>
                  {i === 3 && <span className="text-[6px] text-[#ff2d2d] ml-2 animate-pulse">LOCKED</span>}
                </div>
              ))}
           </div>
        </div>

        <div className="w-32 h-[1px] bg-white/10"></div>
        <div className="text-[7px] text-white/20 font-mono rotate-90 origin-left translate-x-1 translate-y-24 tracking-[0.8em] uppercase">ROBOT_CORE_STABILITY: 98.4%</div>
      </div>

      {/* RIGHT HUD SIDEBAR (Computational Grid) */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-end gap-10">
        <div className="text-right flex flex-col gap-2 border-r-2 border-white/20 pr-6 py-2">
           <span className="text-[9px] font-black text-white/60 tracking-[0.4em]">COMP_GRID_X05</span>
           <div className="flex flex-col gap-1 font-mono items-end">
              <span className="text-[11px] text-white/80">LATENCY: 12ms</span>
              <span className="text-[11px] text-white/30 italic">Targeting_Algorithm...</span>
           </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 opacity-40">
           {[...Array(16)].map((_, i) => (
             <div key={i} className={`w-3 h-3 border border-white/10 ${Math.random() > 0.7 ? 'bg-[#ff2d2d]/40 border-[#ff2d2d]' : ''}`}></div>
           ))}
        </div>

        <div className="w-48 h-px bg-gradient-to-l from-white/20 to-transparent"></div>

        <div className="flex flex-col items-end gap-1">
           <span className="text-[8px] font-black text-[#ff2d2d] tracking-widest">REAL_TIME_DECRYPT</span>
           <div className="w-32 h-1 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-[#ff2d2d] animate-[loading-bar_3s_infinite]"></div>
           </div>
        </div>
      </div>

      {/* CENTRAL DIAMOND LOGO */}
      <div className="relative z-20 flex flex-col items-center justify-center animate-in zoom-in duration-1000">
        
        {/* Diamond Frame HUD */}
        <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px] flex items-center justify-center">
          {/* External Diamond Border */}
          <div className="absolute inset-0 border-2 border-white/20 rotate-45 scale-[1.05]"></div>
          {/* Inner Decorative Diamond */}
          <div className="absolute inset-0 border border-[#ff2d2d]/30 rotate-45 animate-[pulse_4s_infinite] scale-100"></div>
          {/* Glow backdrop */}
          <div className="absolute inset-0 bg-[#ff2d2d]/[0.02] rotate-45 blur-3xl"></div>
          
          {/* Corner Markers */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-black px-6 py-1.5 border border-white/10 z-30">
            <span className="text-[9px] text-[#ff2d2d] font-black tracking-[0.5em] uppercase">SYSTEM_NODE_054</span>
          </div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-black px-4 py-1 border border-[#ff2d2d]/20 z-30">
            <span className="text-[7px] text-white/40 font-mono tracking-widest">COORD_A: [42.12 - 19.88]</span>
          </div>

          {/* Central Logo Text */}
          <div className="flex flex-col items-center text-center z-10 pointer-events-none px-12">
            <h3 className="text-white/30 text-[11px] md:text-sm font-black tracking-[1.2em] uppercase mb-6 translate-y-2 italic">
              UCSP
            </h3>
            <h1 className="text-8xl md:text-[10rem] font-black text-white uppercase tracking-tighter italic leading-none text-shadow-glow">
              ACM<span className="text-[#ff2d2d]">2026</span>
            </h1>
            <div className="h-px w-32 bg-[#ff2d2d] my-6 opacity-40"></div>
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-[0.4em] uppercase italic underline decoration-[6px] underline-offset-[12px] decoration-[#ff2d2d]/30">
              Chapter
            </h2>
          </div>
        </div>

        {/* Floating Taglines (Centered Bottom) */}
        <div className="absolute -bottom-24 md:-bottom-32 flex flex-col items-center gap-4">
           <div className="flex items-center gap-8">
              <div className="w-12 h-px bg-white/10"></div>
              <p className="text-[11px] tracking-[1.4em] uppercase font-bold text-white/40 text-center whitespace-nowrap">
                INNOVATION <span className="text-[#ff2d2d] opacity-60">_</span> ALGORITHM <span className="text-[#ff2d2d] opacity-60">_</span> VICTORY
              </p>
              <div className="w-12 h-px bg-white/10"></div>
           </div>
           
           <div className="flex gap-6 items-center bg-black/40 backdrop-blur-md px-6 py-2 border border-white/5 rounded-full shadow-2xl">
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#ff2d2d] animate-ping"></div>
                 <div className="w-2 h-2 rounded-full bg-[#ff2d2d]"></div>
              </div>
              <div className="text-[8px] text-white/50 font-mono tracking-[0.4em] uppercase">
                NEURAL_LINK: <span className="text-white">ACTIVE</span> // THINKING_MODE: <span className="text-[#ff2d2d]">ENHANCED</span>
              </div>
           </div>
        </div>
      </div>

      {/* Decorative HUD corners on screen edges */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-white/5 pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-white/5 pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-white/5 pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-white/5 pointer-events-none"></div>

      <style>{`
        .text-shadow-glow {
          text-shadow: 0 0 50px rgba(255, 45, 45, 0.4), 0 0 100px rgba(255, 45, 45, 0.15);
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: rotate(45deg) scale(0.98); }
          50% { opacity: 0.5; transform: rotate(45deg) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
