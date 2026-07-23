'use client';

import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-[#0e0e0e] rounded-3xl border border-outline-variant/30 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="bg-[#131313] px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="bg-[#262626] text-[#00e3fd] px-3 py-1 rounded-full text-xs font-label uppercase tracking-widest font-bold">
              {project.category}
            </span>
            <h2 className="text-xl font-headline font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-1"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-8">
          {/* Image preview banner */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-outline-variant/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap justify-between items-end">
              <div>
                <p className="text-xs text-[#00e3fd] font-label uppercase tracking-widest">
                  Architecture Specs
                </p>
                <h3 className="text-2xl font-headline font-bold text-white">
                  {project.subtitle}
                </h3>
              </div>
            </div>
          </div>

          {/* Metrics summary */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#131313] p-6 rounded-2xl border border-outline-variant/15">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="text-[10px] uppercase font-headline tracking-widest text-neutral-500 block">
                    {m.label}
                  </span>
                  <span className="text-xl font-headline font-bold text-[#b6a0ff]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-label uppercase tracking-widest text-[#00e3fd]">
              System Overview
            </h4>
            <p className="text-neutral-300 font-body leading-relaxed text-base">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Architectural Innovations */}
          {project.architectureDetails && (
            <div className="space-y-3">
              <h4 className="text-sm font-label uppercase tracking-widest text-[#b6a0ff]">
                Architectural Breakdown
              </h4>
              <ul className="space-y-2 font-body text-neutral-300 text-sm">
                {project.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#00e3fd] text-base mt-0.5">
                      check_circle
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div className="space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center text-neutral-400 px-2">
                <span>{project.codeSnippet.filename}</span>
                <span className="uppercase text-[10px] bg-[#262626] px-2 py-0.5 rounded text-[#ff51fa]">
                  {project.codeSnippet.language}
                </span>
              </div>
              <div className="bg-[#000000] p-5 rounded-2xl border border-outline-variant/20 overflow-x-auto text-[#00e3fd]">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-label tracking-widest text-neutral-500 block">
              Stack & Dependencies
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1 bg-[#1a1a1a] border border-outline-variant/15 text-[#00e3fd] text-xs rounded-full font-label"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#131313] px-8 py-5 border-t border-outline-variant/20 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-[#b6a0ff] to-[#7e51ff] text-[#340090] font-headline font-bold text-xs rounded-xl shadow-md hover:scale-105 transition-all flex items-center gap-2"
              >
                Live Preview
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-[#00e3fd] text-[#00e3fd] font-headline font-bold text-xs rounded-xl hover:bg-[#00e3fd]/10 transition-all flex items-center gap-2"
              >
                Repository
                <span className="material-symbols-outlined text-sm">code</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-label uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
