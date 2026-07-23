'use client';

import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Systems', 'Cloud & DevOps', 'Databases'];

  const filteredItems =
    activeCategory === 'All'
      ? TECH_STACK
      : TECH_STACK.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="mb-12 space-y-3">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-white">
          SYSTEM <span className="text-[#00e3fd]">STACK</span>
        </h2>
        <p className="text-neutral-400 max-w-xl text-base font-body">
          A curated set of technologies, distributed frameworks, and systems tools engineered for high reliability and zero-latency performance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-all ${
              activeCategory === cat
                ? 'bg-[#b6a0ff] text-[#340090] font-bold shadow-lg scale-105'
                : 'bg-[#131313] text-neutral-400 hover:text-white border border-outline-variant/15'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#131313] p-8 rounded-2xl border border-outline-variant/15 hover:border-[#00e3fd]/40 transition-all hover:bg-[#1a1a1a] shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#262626] border border-outline-variant/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#00e3fd] text-2xl">
                    {item.icon}
                  </span>
                </div>
                <span className="bg-[#262626] text-[#b6a0ff] px-3 py-1 rounded-full text-[10px] font-label uppercase tracking-widest font-bold">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-headline font-bold text-white mb-2 group-hover:text-[#00e3fd] transition-colors">
                {item.name}
              </h3>
              <p className="text-xs font-label text-[#00e3fd] mb-4 uppercase tracking-wider font-semibold">
                {item.level}
              </p>
              <p className="text-neutral-400 text-sm font-body leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
