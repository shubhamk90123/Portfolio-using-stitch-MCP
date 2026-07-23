'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import ProjectModal from '../../components/ProjectModal';
import TerminalModal from '../../components/TerminalModal';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { Project } from '../../types';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'latest' | 'stars' | 'complexity'>('latest');

  const categories = ['All', 'Full-Stack', 'Backend', 'Frontend', 'Systems'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'stars') return (b.stars || 0) - (a.stars || 0);
    if (sortBy === 'complexity') {
      const order = { Extreme: 3, High: 2, Medium: 1 };
      return (order[b.complexity || 'Medium'] || 0) - (order[a.complexity || 'Medium'] || 0);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-between">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main className="flex-1 pt-28 pb-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto w-full">
        {/* Header */}
        <header className="mb-14 space-y-4">
          <span className="text-xs font-label uppercase tracking-widest text-[#00e3fd] font-bold block">
            System Repositories
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-white tracking-tight">
            SELECTED <span className="text-[#b6a0ff]">WORKS</span>.
          </h1>
          <p className="text-neutral-400 max-w-2xl text-base md:text-lg font-body leading-relaxed">
            A curated selection of architecture-first applications, focusing on distributed systems, high-performance APIs, and immersive web interfaces.
          </p>
        </header>

        {/* Filter Controls & Search */}
        <section className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 bg-[#131313] p-6 rounded-2xl border border-outline-variant/15">
          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-[#b6a0ff] text-[#340090] font-bold shadow-lg scale-105'
                    : 'bg-[#1a1a1a] text-neutral-400 hover:text-white border border-outline-variant/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input & Sort Selector */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-500 text-lg">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tags or titles..."
                className="w-full bg-[#1a1a1a] border border-outline-variant/20 rounded-xl pl-9 pr-4 py-2 text-xs font-label text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#b6a0ff]"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 text-neutral-400 text-xs font-label uppercase tracking-wider">
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-[#1a1a1a] border border-outline-variant/20 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#b6a0ff] cursor-pointer text-xs font-label"
              >
                <option value="latest">Latest</option>
                <option value="stars">Stars Count</option>
                <option value="complexity">Complexity</option>
              </select>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
              isLarge={idx === 0 && activeCategory === 'All' && !searchQuery}
            />
          ))}
        </div>
      </main>

      <Footer />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
