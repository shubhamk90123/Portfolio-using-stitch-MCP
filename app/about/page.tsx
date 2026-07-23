'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BentoEthos from '../../components/BentoEthos';
import TechStack from '../../components/TechStack';
import ExperienceTimeline from '../../components/ExperienceTimeline';
import TerminalModal from '../../components/TerminalModal';

export default function AboutPage() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-between">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main className="flex-1 pt-28 pb-16">
        <header className="px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto mb-8 space-y-4">
          <span className="text-xs font-label uppercase tracking-widest text-[#b6a0ff] font-bold block">
            System Identity
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tight">
            ABOUT & <span className="text-[#00e3fd]">EXPERIENCE</span>.
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base md:text-lg font-body leading-relaxed">
            Full-stack system architect specializing in low-latency infrastructure, distributed systems, high-frequency web APIs, and modern editorial glassmorphism.
          </p>
        </header>

        <BentoEthos />

        <div className="border-t border-neutral-800/40">
          <ExperienceTimeline />
        </div>

        <div className="border-t border-neutral-800/40">
          <TechStack />
        </div>
      </main>

      <Footer />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
