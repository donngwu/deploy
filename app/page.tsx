"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FoundryMaster() {
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  // --- SEVEN STRATEGIC ORBITS ---
  const orbits = [
    { name: "QMD Therapeutics", status: "R&D Phase" },
    { name: "AXONQUANT", status: "R&D Phase" },
    { name: "AETHERIUM", status: "R&D Phase" },
    { name: "VeloCity AI", status: "R&D Phase" },
    { name: "Project DeepCool", status: "R&D Phase" },
    { name: "Nexus Analysis", status: "R&D Phase" },
    { name: "Global Healthcare", status: "R&D Phase" }
  ];

  return (
    <div className="bg-[#010204] text-white font-sans selection:bg-[#00FFD1] selection:text-black scroll-smooth min-h-screen">
      
      {/* 1. ACCESS VAULT TERMINAL */}
      <AnimatePresence>
        {isVaultOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010204]/95 backdrop-blur-2xl p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md p-10 border border-white/10 bg-[#12151C] relative shadow-2xl"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-[#12151C]/90 backdrop-blur-md z-0" />
              <div className="relative z-10">
                <button onClick={() => setIsVaultOpen(false)} className="absolute -top-4 -right-4 font-mono text-[10px] text-white/30 hover:text-[#00FFD1]">CLOSE_</button>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold tracking-tighter mb-1 uppercase">The Vault</h3>
                  <p className="font-mono text-[10px] text-[#00FFD1] uppercase tracking-[0.3em]">Authorized_Partners_Only</p>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="IDENTITY_REF" className="w-full bg-black/50 border border-white/10 p-4 font-mono text-[10px] outline-none focus:border-[#00FFD1]" />
                  <input type="password" placeholder="SECURE_KEY" className="w-full bg-black/50 border border-white/10 p-4 font-mono text-[10px] outline-none focus:border-[#7D40FF]" />
                  <button className="w-full bg-white text-black py-4 font-bold text-xs uppercase tracking-[0.2em] mt-4 hover:bg-[#00FFD1]">Authenticate_Session</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#010204]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-tr from-[#00FFD1] to-[#7D40FF] rotate-45" />
            <span className="font-bold tracking-tighter text-xl uppercase">AIQUANTUM <span className="font-light opacity-50 text-base tracking-normal">Foundry Lab</span></span>
          </div>
          <div className="hidden lg:flex gap-10 font-mono text-[10px] uppercase tracking-[0.3em] items-center">
            <a href="#about" className="opacity-60 hover:text-[#00FFD1]">The_Mission</a>
            <a href="#methodology" className="opacity-60 hover:text-[#00FFD1]">Foundry_OS</a>
            <button onClick={() => setIsVaultOpen(true)} className="text-[#00FF82] border border-[#00FF82]/30 px-5 py-2 rounded-full font-bold">Access_Vault</button>
          </div>
        </div>
      </nav>

      {/* 3. HERO: SEVEN-BULLET ORBITAL CORE */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(0,255,209,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="font-mono text-[#00FFD1] text-[10px] tracking-[0.6em] uppercase mb-6 block">Industrial R&D Architecture</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 uppercase">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] to-white italic">Global Breakthroughs.</span>
            </h1>
            <p className="text-xl opacity-60 font-light leading-relaxed mb-10 max-w-lg">
              We utilize AI/ML and Quantum Simulation to solve humanity's most complex challenges, de-risking deep tech and spinning out billion-dollar enterprises.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#00FFD1]">Explore Labs</button>
              <button onClick={() => setIsVaultOpen(true)} className="border border-white/20 px-10 py-4 font-mono text-[10px] tracking-widest uppercase hover:border-[#7D40FF]">View_Portfolio</button>
            </div>
          </div>

          {/* THE ORBITAL INTERFACE */}
          <div className="relative flex justify-center items-center h-[600px]">
            {/* Semiconductor Core */}
            <div className="relative z-10 w-44 h-44 bg-[#12151C] border border-[#00FFD1]/30 rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(0,255,209,0.2)]">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="Core Chip" className="w-full h-full object-cover rounded-2xl opacity-60 mix-blend-screen" />
              <div className="absolute inset-0 border border-[#00FFD1]/40 rounded-2xl animate-pulse" />
            </div>

            {/* Orbiting Path (Seven Bullets) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="relative w-[420px] h-[420px] border border-white/5 rounded-full"
              >
                {orbits.map((item, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * (360 / 7)}deg) translate(210px) rotate(-${i * (360 / 7)}deg)`,
                    }}
                  >
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                      className="flex flex-col items-center bg-[#010204] border border-white/10 px-4 py-2 rounded-xl shadow-2xl min-w-[140px]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FFD1] shadow-[0_0_8px_#00FFD1]" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-white/90 whitespace-nowrap">{item.name}</span>
                      </div>
                      <span className="text-[7px] font-mono text-[#7D40FF] uppercase tracking-[0.2em]">{item.status}</span>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="absolute w-[500px] h-[500px] bg-[#00FFD1]/5 blur-[120px] rounded-full" />
          </div>
        </div>
      </section>

      {/* 4. ABOUT: THE FOUNDRY ECOSYSTEM */}
      <section id="about" className="py-32 bg-[#010204] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-mono text-[#00FFD1] text-[10px] tracking-[0.5em] uppercase mb-8">The Mission: Solving for 2030</h2>
            <p className="text-4xl font-bold tracking-tight leading-tight mb-8">
              Transforming breakthroughs into <br/>
              <span className="text-[#7D40FF]">billion-dollar market leaders</span> <br/>
              within months, not years.
            </p>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
              While traditional R&D takes decades, our "Foundry" model utilizes a unified AI-Quantum stack to compress development cycles by 90%. We operate at the intersection of Generative AI, Quantum Simulation, and Venture Architecture.
            </p>
          </div>
          <div className="bg-[#12151C] p-12 border border-white/5 relative">
            <h3 className="text-xl font-bold mb-6 text-[#00FFD1]">The Human Capital Advantage</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8 font-light">
              Led by a serial entrepreneur with 20+ years of execution experience, our multidisciplinary team of 16—including PhDs in Physics, Computational Biology, and Cybersecurity—operates as a high-performance "Tiger Team."
            </p>
            <p className="text-sm text-white/90 font-medium italic border-l-2 border-[#7D40FF] pl-6 py-2">
              "We don't just build technology; we build the Commercial Infrastructure that allows our spin-outs to scale globally from Day 1."
            </p>
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY: THE IP ASSEMBLY LINE */}
      <section id="methodology" className="py-32 bg-[#12151C]/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="font-mono text-[#7D40FF] text-[10px] tracking-[0.5em] uppercase mb-4 text-center">Value Creation Workflow</h2>
            <p className="text-4xl font-bold text-center tracking-tight uppercase">The IP Assembly Line</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "PHASE I", title: "Nexus Analysis", sub: "Problem-Market Fit", desc: "Identifying global friction points where a 10x efficiency gain creates a trillion-dollar shift." },
              { phase: "PHASE II", title: "Quantum Synthesis", sub: "De-Risking", desc: "Simulating billions of permutations in a 'Digital Twin' environment before building prototypes." },
              { phase: "PHASE III", title: "Encapsulation", sub: "The Spin-Out", desc: "Encapsulating IP into NewCos like QMD, AETHERIUM, and AXONQUANT with exclusive licensing." }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-white/5 bg-[#010204] hover:border-[#00FFD1]/40 transition-all">
                <span className="font-mono text-[10px] text-white/30 tracking-widest block mb-4 uppercase">{item.phase}</span>
                <h4 className="text-lg font-bold mb-1 uppercase tracking-tighter">{item.title}</h4>
                <p className="font-mono text-[9px] text-[#7D40FF] uppercase tracking-widest mb-6">{item.sub}</p>
                <p className="text-xs text-white/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER */}
      <footer className="py-24 border-t border-white/10 bg-[#010204]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-30 text-[9px] font-mono tracking-[0.4em] uppercase">
          <p>© 2026 AIQUANTUM FOUNDRY LAB INC. // CHICAGO R&D NEXUS</p>
          <div className="flex gap-12 mt-6 md:mt-0">
            <span>AES_512_SECURED</span>
            <span>FOUNDRY_OS_v2.2</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
