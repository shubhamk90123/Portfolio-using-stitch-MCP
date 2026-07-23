'use client';

import React from 'react';
import { MANIFESTO_METRICS } from '../data/portfolioData';

export default function BentoEthos() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-3">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-white">
          ENGINEERING <span className="text-[#ff51fa]">ETHOS</span>
        </h2>
        <div className="h-1 w-20 bg-[#ff51fa] rounded-full" />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Bento Item: Scalable Infrastructure */}
        <div className="md:col-span-2 bg-[#131313] p-8 md:p-10 rounded-[2rem] border border-outline-variant/15 hover:border-[#b6a0ff]/40 transition-colors shadow-xl group">
          <span className="material-symbols-outlined text-4xl text-[#b6a0ff] mb-6 group-hover:scale-110 transition-transform">
            account_tree
          </span>
          <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4 text-white">
            Scalable Infrastructure
          </h3>
          <p className="text-neutral-400 leading-relaxed max-w-xl font-body">
            I approach software development as a structural architect, prioritizing system integrity and resilience before aesthetic polish. Every line of code is written with the expectation of 100x growth, utilizing microservices and serverless paradigms to ensure seamless elasticity under peak throughput.
          </p>
        </div>

        {/* Small Bento Item: Performance First */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] flex flex-col justify-between border border-outline-variant/15 hover:border-[#00e3fd]/40 transition-colors shadow-xl group">
          <div>
            <span className="material-symbols-outlined text-4xl text-[#00e3fd] mb-6 group-hover:rotate-12 transition-transform">
              rocket_launch
            </span>
            <h3 className="text-xl md:text-2xl font-headline font-bold mb-4 text-white">
              Performance First
            </h3>
          </div>
          <p className="text-neutral-400 text-sm font-body leading-relaxed">
            Zero-latency experiences aren't just a goal; they are the standard. Memory allocation optimization and streaming metrics are baked into the initial commit.
          </p>
        </div>

        {/* Small Bento Item: Clean Semantics */}
        <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] border border-outline-variant/15 hover:bg-[#20201f] transition-all shadow-xl group">
          <span className="material-symbols-outlined text-4xl text-[#ff51fa] mb-6 group-hover:translate-x-1 transition-transform">
            code_blocks
          </span>
          <h4 className="text-xl font-headline font-bold mb-2 text-white">
            Clean Semantics
          </h4>
          <p className="text-sm text-neutral-400 font-body leading-relaxed">
            Strict TypeScript abstractions, modular components, and self-documenting codebases that enterprise engineering teams actually enjoy scaling.
          </p>
        </div>

        {/* Medium Bento Item: The Digital Manifesto & Metrics */}
        <div className="md:col-span-2 bg-[#262626] p-8 md:p-10 rounded-[2rem] relative overflow-hidden group shadow-xl border border-outline-variant/20">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold mb-3 text-white">
                The Digital Manifesto
              </h3>
              <p className="text-neutral-300 font-body italic text-base md:text-lg max-w-lg">
                "Great architecture is invisible. It works so well you never have to think about why."
              </p>
            </div>

            {/* Metrics Counters */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-neutral-700/50">
              {MANIFESTO_METRICS.map((metric, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-2xl md:text-3xl font-headline font-bold text-[#b6a0ff]">
                    {metric.value}
                  </div>
                  <div className="text-[10px] uppercase font-headline tracking-widest text-neutral-400 mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b6a0ff]/10 blur-[90px] -mr-32 -mt-32 rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
