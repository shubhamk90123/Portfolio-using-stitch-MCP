'use client';

import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isLarge?: boolean;
}

export default function ProjectCard({ project, onSelect, isLarge }: ProjectCardProps) {
  return (
    <article
      onClick={() => onSelect(project)}
      className={`group relative overflow-hidden rounded-2xl bg-[#131313] border border-outline-variant/15 hover:border-[#b6a0ff]/40 transition-all duration-500 shadow-xl cursor-pointer hover:bg-[#1a1a1a] flex flex-col justify-between ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      <div className={isLarge ? 'flex flex-col lg:flex-row h-full' : 'flex flex-col h-full'}>
        {/* Media Thumbnail */}
        <div
          className={`overflow-hidden relative ${
            isLarge ? 'lg:w-3/5 h-64 lg:h-auto' : 'w-full aspect-video'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60" />
        </div>

        {/* Card Body */}
        <div className={`p-8 flex flex-col justify-between ${isLarge ? 'lg:w-2/5' : 'flex-1'}`}>
          <div>
            {/* Category & Icons Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#262626] text-[#00e3fd] px-3.5 py-1 rounded-full text-[10px] font-label uppercase tracking-widest font-bold border border-outline-variant/20">
                {project.category}
              </span>
              <span className="material-symbols-outlined text-neutral-500 group-hover:text-[#b6a0ff] transition-colors">
                terminal
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl font-headline font-bold text-white mb-2 group-hover:text-[#b6a0ff] transition-colors">
              {project.title}
            </h3>

            {/* Subtitle / Description */}
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed line-clamp-3 font-body">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#262626] px-3 py-1 rounded-full text-[10px] font-label text-[#00e3fd] tracking-widest border border-outline-variant/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer Link */}
          <button className="flex items-center gap-2 text-white font-headline text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all text-[#b6a0ff]">
            EXPLORE ARCHITECTURE{' '}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  );
}
