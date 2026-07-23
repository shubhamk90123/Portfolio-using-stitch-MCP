'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-neutral-800/40 bg-[#0e0e0e] text-neutral-400">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 w-full max-w-screen-2xl mx-auto gap-6">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#00e3fd] animate-pulse" />
          <div className="font-headline text-xs uppercase tracking-wider text-neutral-500">
            © {new Date().getFullYear()} DIGITAL_ARCHITECT // BUILT_WITH_PRECISION
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-headline text-xs uppercase tracking-wider">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff51fa] hover:translate-x-0.5 transition-all duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff51fa] hover:translate-x-0.5 transition-all duration-200"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="hover:text-[#ff51fa] hover:translate-x-0.5 transition-all duration-200"
          >
            Connect
          </Link>
          <a
            href="#top"
            className="hover:text-[#00e3fd] transition-all duration-200 flex items-center gap-1"
          >
            Top <span class="material-symbols-outlined text-sm">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
