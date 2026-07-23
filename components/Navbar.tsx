'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Architecture & Experience', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-outline-variant/10 shadow-2xl py-3'
          : 'bg-neutral-950/60 backdrop-blur-md py-4'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-bold text-[#b6a0ff] tracking-tighter hover:glow-primary font-headline transition-transform hover:scale-105"
        >
          <span className="material-symbols-outlined text-2xl text-[#00e3fd] group-hover:rotate-12 transition-transform">
            terminal
          </span>
          <span>TERMINAL_DEV</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  isActive
                    ? 'text-[#b6a0ff] font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b6a0ff] rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#262626] border border-[#484847]/30 text-white font-headline text-xs font-bold hover:border-[#b6a0ff] hover:text-[#b6a0ff] active:scale-95 transition-all shadow-md"
            title="Open Interactive CLI (Ctrl + K)"
          >
            <span className="material-symbols-outlined text-sm text-[#00e3fd]">
              code_blocks
            </span>
            <span className="hidden sm:inline">Connect</span>
            <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded font-label border border-neutral-700">
              Ctrl+K
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-2"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-outline-variant/20 bg-[#0e0e0e]/95 backdrop-blur-xl px-6 py-6 space-y-4 font-headline animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium ${
                pathname === link.href
                  ? 'text-[#b6a0ff] font-bold'
                  : 'text-neutral-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
