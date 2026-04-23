"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaBars, FaXmark } from 'react-icons/fa6';

// --- FULL SCIENTIFIC CONTENT RESTORED ---
const QMD_MODULES = [
  { 
    id: 'Neuro', 
    disease: "Alzheimer's & Dementia", 
    color: "#00FFD1", 
    stat: "94% Accuracy",
    logic: "Utilizing hybrid quantum-classical algorithms to model complex tau-protein misfolding and BBB-penetration probability.",
    asset: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'Cardio', 
    disease: "Heart Disease", 
    color: "#FF4D4D", 
    stat: "Real-time Flow",
    logic: "Simulating Hemodynamic arterial plaque stability using agentic AI orchestrated kinetic models.",
    asset: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'Stroke', 
    disease: "Stroke & Brain Health", 
    color: "#7D40FF", 
    stat: "Vessel Mapping",
    logic: "Quantum-simulation for dynamic cerebral vessel mapping and predictive clot stability analysis.",
    asset: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'Onco', 
    disease: "Immuno-Oncology", 
    color: "#FFB800", 
    stat: "Genomic Sync",
    logic: "Predicting T-cell interaction with mutated tumor microenvironments by fusing genomic sequences and imaging data.",
    asset: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800"
  }
];

export default function QMDRestoration() {
  const [activeModule, setActiveModule] = useState(QMD_MODULES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070A] text-white selection:bg-[#00FFD1] selection:text-black font-sans scroll-smooth">
      
      {/* HEADER: Fixes Underscores & Mobile Dropdown */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#05070A]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#00FFD1] rounded-sm rotate-45 shadow-[0_0_15px_#00FFD1]" />
            <h1 className="text-2xl font-bold tracking-tighter uppercase">QMD <span className="font-light italic opacity-50 text-xl tracking-normal">Therapeutics</span></h1>
          </div>

          <div className="hidden lg:flex gap-10 font-mono text-[10px] uppercase tracking-[0.3em] items-center">
            <a href="#ecosystem" className="opacity-60 hover:text-[#00FFD1]">The Ecosystem</a>
            <a href="#pipeline" className="opacity-60 hover:text-[#00FFD1]">Modular OS</a>
            <a href="#impact" className="opacity-60 hover:text-[#00FFD1]">Impact</a>
            <button className="text-[#00FFD1] border border-[#00FFD1]/30 px-5 py-2 rounded font-bold">Access Vault</button>
          </div>

          <button className="lg:hidden text-2xl text-[#00FFD1]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-[#0A0C10] border-b border-white/10 overflow-hidden">
              <div className="flex flex-col p-8 gap-6 font-mono text-[12px] uppercase tracking-[0.2em] items-center">
                <a href="#ecosystem" onClick={() => setIsMobileMenuOpen(false)}>The Ecosystem</a>
                <a href="#pipeline" onClick={() => setIsMobileMenuOpen(false)}>Modular OS</a>
                <a href="#impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</a>
                <button className="text-[#00FFD1] font-bold">Access Vault</button>
                <div className="flex gap-8 pt-4 border-t border-white/5 w-full justify-center text-xl">
                  <a href="#"><FaXTwitter /></a><a href="#"><FaLinkedinIn /></a><a href="#"><FaFacebookF /></a><a href="#"><FaInstagram /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="font-mono text-[#00FFD1] text-[10px] tracking-[0.6em] uppercase mb-6 block">TechBio R&D Spoke</span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">Precision <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFD1] via-white to-white">Orchestration.</span></h1>
            <p className="text-xl opacity-60 font-light leading-relaxed mb-10 max-w-lg">Moving beyond the unified "Black Box." QMD Therapeutics utilizes a modular ecosystem to identify and simulate therapeutic targets with 99.9% transparency.</p>
          </div>
          <div className="relative group">
            <img src={activeModule.asset} alt="Medical Visual" className="rounded-3xl border border-white/10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* MODULAR CONTENT RESTORED */}
      <section id="pipeline" className="py-32 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-xs font-mono text-[#00FFD1] tracking-[0.5em] uppercase mb-4">Orchestration OS</h2>
            <p className="text-4xl font-bold uppercase tracking-tighter">Unbundling the Monolith</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {QMD_MODULES.map((m) => (
              <button key={m.id} onClick={() => setActiveModule(m)} className={`p-6 border text-left transition-all ${activeModule.id === m.id ? 'border-[#00FFD1] bg-[#00FFD1]/5' : 'border-white/5 opacity-40'}`}>
                <span className="font-bold text-lg uppercase">{m.disease}</span>
                <p className="text-[10px] font-mono mt-2" style={{color: m.color}}>{m.stat}</p>
              </button>
            ))}
          </div>
          <div className="bg-[#0A0C10] p-12 border border-white/5 shadow-2xl">
             <h3 className="text-2xl font-bold mb-6 uppercase tracking-tighter">Strategic Logic: {activeModule.disease}</h3>
             <p className="text-xl font-light opacity-60 max-w-3xl leading-relaxed">{activeModule.logic}</p>
          </div>
        </div>
      </section>

      {/* FOOTER: With Social Media */}
      <footer className="py-24 border-t border-white/5 bg-[#05070A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase text-center md:text-left">
            <p>© 2026 QMD Therapeutics // Chicago R&D Nexus</p>
            <p className="mt-2 text-[#00FFD1]">A Division of AIQuantum Foundry Inc.</p>
          </div>
          <div className="flex gap-10 text-2xl text-white/40">
            <a href="#" className="hover:text-[#00FFD1]"><FaXTwitter /></a>
            <a href="#" className="hover:text-[#00FFD1]"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-[#00FFD1]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#00FFD1]"><FaInstagram /></a>
          </div>
          <div className="font-mono text-[9px] text-white/10 tracking-widest uppercase">FDA_V7_ENABLED</div>
        </div>
      </footer>
    </div>
  );
}



