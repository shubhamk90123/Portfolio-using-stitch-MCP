'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="mb-14 space-y-3">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-white">
          ARCHITECTURE <span className="text-[#b6a0ff]">TIMELINE</span>
        </h2>
        <p className="text-neutral-400 max-w-xl text-base font-body">
          A track record of engineering leadership, scalable deployments, and performance wins across enterprise environments.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-outline-variant/20 ml-4 md:ml-8 space-y-12 pl-8 md:pl-12">
        {EXPERIENCE_DATA.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#131313] border-2 border-[#b6a0ff] group-hover:bg-[#b6a0ff] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(182,160,255,0.4)]" />

            {/* Timeline Card */}
            <div className="bg-[#131313] p-8 rounded-2xl border border-outline-variant/15 hover:border-[#b6a0ff]/40 transition-colors shadow-xl space-y-4">
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <span className="text-xs font-label text-[#00e3fd] uppercase tracking-widest font-bold">
                    {item.company}
                  </span>
                  <h3 className="text-2xl font-headline font-bold text-white mt-1">
                    {item.role}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#262626] text-neutral-300 px-3.5 py-1 rounded-full text-xs font-label uppercase tracking-widest border border-outline-variant/15">
                    {item.period}
                  </span>
                </div>
              </div>

              <p className="text-neutral-300 font-body text-base leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase font-label tracking-widest text-neutral-500 block font-bold">
                  Key Deliverables & Architectural Wins
                </span>
                <ul className="space-y-2 text-sm text-neutral-300 font-body">
                  {item.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[#b6a0ff] text-base mt-0.5">
                        arrow_right
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1a1a1a] text-[#00e3fd] text-xs font-label rounded-full border border-outline-variant/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
