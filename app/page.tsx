'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BentoEthos from '../components/BentoEthos';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import TechStack from '../components/TechStack';
import ContactSection from '../components/ContactSection';
import TerminalModal from '../components/TerminalModal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-between">
      {/* Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Bento Engineering Ethos */}
        <BentoEthos />

        {/* Featured Projects Showcase */}
        <section className="py-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto border-t border-neutral-800/40">
          <div className="mb-14 flex flex-wrap justify-between items-end gap-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-white">
                SELECTED <span className="text-[#b6a0ff]">WORKS</span>
              </h2>
              <p className="text-neutral-400 max-w-xl text-base font-body">
                Curated distributed applications, high-performance APIs, and interactive visualizers.
              </p>
            </div>

            <a
              href="/projects"
              className="text-xs font-label uppercase tracking-widest text-[#00e3fd] hover:text-[#b6a0ff] transition-colors flex items-center gap-1 font-bold"
            >
              View All Repositories ({PROJECTS_DATA.length})
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                isLarge={idx === 0}
              />
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <div className="border-t border-neutral-800/40">
          <TechStack />
        </div>

        {/* Contact Protocol */}
        <div className="border-t border-neutral-800/40">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
