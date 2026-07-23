'use client';

import React from 'react';
import Link from 'next/link';
import { HERO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenTerminal?: () => void;
}

export default function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 lg:px-24 pt-28 pb-16 gap-12 overflow-hidden max-w-screen-2xl mx-auto">
      {/* Left Column Content */}
      <div className="space-y-8 z-10">
        {/* System Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/20 shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00e3fd] animate-pulse" />
          <span className="text-[11px] uppercase tracking-widest font-headline text-[#26e6ff] font-semibold">
            {HERO_DATA.status}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tight leading-[0.92] text-white">
          ARCHITECTING <span className="text-[#b6a0ff] italic">DIGITAL</span> RESILIENCE.
        </h1>

        {/* Hero Subhead */}
        <p className="text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-body">
          {HERO_DATA.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="px-8 py-4 bg-gradient-to-r from-[#b6a0ff] to-[#7e51ff] text-[#340090] font-headline font-bold rounded-xl shadow-[0_0_20px_rgba(182,160,255,0.3)] hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            View Projects
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>

          <button
            onClick={onOpenTerminal}
            className="px-8 py-4 border border-[#00e3fd] text-[#00e3fd] font-headline font-bold rounded-xl hover:bg-[#00e3fd]/10 transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">terminal</span>
            Launch CLI Terminal
          </button>
        </div>

        {/* Technology Pills */}
        <div className="pt-6 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] font-headline text-neutral-500 font-bold block">
            Core Technologies
          </span>
          <div className="flex flex-wrap gap-2.5">
            {HERO_DATA.coreTech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-surface-container-highest text-[#00e3fd] text-xs font-headline font-medium border border-outline-variant/15 hover:border-[#00e3fd]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column Visual / Portrait Overlay */}
      <div className="relative flex justify-center items-center h-full">
        {/* Background Glow */}
        <div className="absolute w-[120%] h-[120%] bg-[#b6a0ff]/10 blur-[130px] rounded-full pointer-events-none" />

        {/* Card Frame */}
        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-outline-variant/20 shadow-2xl group bg-[#131313]">
          <img
            src={HERO_DATA.portraitImage}
            alt="Digital System Architect Portrait"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />

          {/* Floating Data Panel Overlay */}
          <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl border border-outline-variant/20 shadow-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline font-bold text-lg text-white">System Architect</h3>
                <p className="text-xs text-[#00e3fd] tracking-widest uppercase font-headline">
                  {HERO_DATA.version}
                </p>
              </div>
              <span className="material-symbols-outlined text-[#b6a0ff] text-2xl">
                terminal
              </span>
            </div>

            <div className="space-y-2">
              <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00e3fd] to-[#b6a0ff] w-4/5 animate-pulse" />
              </div>
              <div className="flex justify-between text-[10px] font-headline text-neutral-400 uppercase tracking-wider font-semibold">
                <span>Infrastructure Telemetry</span>
                <span className="text-[#00e3fd]">88% Optimized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Manifesto Snippet */}
        <div className="absolute top-8 -right-6 hidden xl:block glass-panel px-6 py-4 rounded-xl border border-outline-variant/20 font-mono text-xs text-[#ff51fa] shadow-2xl">
          <p className="opacity-40 text-[10px]">// Architectural Manifesto</p>
          <p className="text-white">const build = (logic) =&gt; &#123;</p>
          <p className="pl-4 text-[#00e3fd]">return logic.scale().optimize();</p>
          <p className="text-white">&#125;</p>
        </div>
      </div>
    </section>
  );
}
