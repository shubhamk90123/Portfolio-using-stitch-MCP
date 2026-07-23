'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_DATA, TECH_STACK } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: 'input' | 'output' | 'error' | 'system';
  text: string | React.ReactNode;
}

export default function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    {
      type: 'system',
      text: 'TERMINAL_DEV OS v2.4.0 (x86_64-architect-linux-gnu)',
    },
    {
      type: 'system',
      text: 'Type "help" to view available system commands or click a chip below.',
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open trigger handled upstream if passed
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const newHistory: LogEntry[] = [...history, { type: 'input', text: `$ ${trimmed}` }];
    const cmd = trimmed.toLowerCase();

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs">
              <p className="text-[#00e3fd] font-bold">AVAILABLE COMMANDS:</p>
              <p><span className="text-[#b6a0ff]">projects</span>  - List all active project repositories</p>
              <p><span className="text-[#b6a0ff]">skills</span>    - Display technology stack & capabilities</p>
              <p><span className="text-[#b6a0ff]">about</span>     - Architectural manifesto & bio</p>
              <p><span className="text-[#b6a0ff]">contact</span>   - Get direct contact channels & email</p>
              <p><span className="text-[#b6a0ff]">uptime</span>    - View current cluster status & telemetry</p>
              <p><span className="text-[#b6a0ff]">matrix</span>    - Trigger digital architect matrix effect</p>
              <p><span className="text-[#b6a0ff]">clear</span>     - Clear terminal logs</p>
              <p><span className="text-[#b6a0ff]">exit</span>      - Close terminal CLI</p>
            </div>
          ),
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-2 text-xs">
              <p className="text-[#ff51fa] font-bold">ACTIVE REPOSITORIES:</p>
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="border-l-2 border-[#b6a0ff] pl-3 py-1">
                  <p className="text-white font-bold">{p.title} <span className="text-[#00e3fd]">[{p.category}]</span></p>
                  <p className="text-neutral-400">{p.description}</p>
                  <p className="text-[10px] text-neutral-500">Tech: {p.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          ),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs">
              <p className="text-[#00e3fd] font-bold">CORE CAPABILITIES:</p>
              {TECH_STACK.map((s, idx) => (
                <p key={idx}>
                  <span className="text-white font-bold">{s.name}</span> ({s.category}) → <span className="text-[#b6a0ff]">{s.level}</span>
                </p>
              ))}
            </div>
          ),
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-2 text-xs text-neutral-300">
              <p className="text-[#b6a0ff] font-bold">SYSTEM ARCHITECT MANIFESTO:</p>
              <p>
                "Great architecture is invisible. It works so well you never have to think about why."
              </p>
              <p>
                I approach development as a structural architect, treating the browser and cloud edge as a unified, high-performance IDE environment.
              </p>
            </div>
          ),
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs">
              <p className="text-[#ff51fa] font-bold">DIRECT COMMUNICATIONS:</p>
              <p>Email: <span className="text-[#00e3fd]">architect@terminal.dev</span></p>
              <p>GitHub: <span className="text-[#00e3fd]">https://github.com/digital-architect</span></p>
              <p>Discord: <span className="text-[#00e3fd]">architect#0001</span></p>
            </div>
          ),
        });
        break;

      case 'uptime':
        newHistory.push({
          type: 'output',
          text: (
            <div className="space-y-1 text-xs text-[#00e3fd]">
              <p>STATUS: OPTIMAL [UPTIME: 99.999%]</p>
              <p>CLUSTER NODES: 64 ACTIVE</p>
              <p>LATENCY P99: 1.4ms</p>
            </div>
          ),
        });
        break;

      case 'matrix':
        newHistory.push({
          type: 'output',
          text: (
            <p className="text-emerald-400 font-mono animate-pulse">
              01000001 01010010 01000011 01001000 01001001 01010100 01000101 01000011 01010100 :: SYSTEM_INITIALIZED
            </p>
          ),
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `zsh: command not found: ${trimmed}. Type "help" for valid commands.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleQuickChip = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl bg-[#000000] rounded-2xl border border-outline-variant/30 shadow-2xl overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Header Bar */}
        <div className="bg-[#131313] px-4 py-3 border-b border-outline-variant/20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-label text-neutral-400 uppercase tracking-widest">
              architect@terminal-dev:~ (zsh)
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Quick Command Chips */}
        <div className="bg-[#0e0e0e] px-4 py-2 border-b border-outline-variant/10 flex items-center gap-2 overflow-x-auto scrollbar-hide text-xs font-label">
          <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Quick:</span>
          {['help', 'projects', 'skills', 'about', 'contact', 'uptime', 'matrix', 'clear'].map(
            (chip) => (
              <button
                key={chip}
                onClick={() => handleQuickChip(chip)}
                className="px-2.5 py-0.5 rounded-full bg-[#1a1a1a] hover:bg-[#b6a0ff]/20 text-[#00e3fd] hover:text-[#b6a0ff] border border-outline-variant/20 transition-all text-[11px]"
              >
                {chip}
              </button>
            )
          )}
        </div>

        {/* Output Logs */}
        <div className="flex-1 p-6 font-mono overflow-y-auto space-y-3 text-sm text-neutral-200">
          {history.map((entry, idx) => (
            <div
              key={idx}
              className={`${
                entry.type === 'input'
                  ? 'text-[#b6a0ff] font-bold'
                  : entry.type === 'error'
                  ? 'text-red-400'
                  : entry.type === 'system'
                  ? 'text-neutral-400 italic'
                  : 'text-neutral-200'
              }`}
            >
              {entry.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="bg-[#131313] p-4 border-t border-outline-variant/20 flex items-center gap-3 font-mono"
        >
          <span className="text-[#00e3fd] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (e.g. help, projects)..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-neutral-600 focus:ring-0"
          />
          <button
            type="submit"
            className="px-3 py-1 bg-[#b6a0ff] text-[#340090] font-headline font-bold text-xs rounded hover:bg-[#a98fff] transition-colors"
          >
            EXEC
          </button>
        </form>
      </div>
    </div>
  );
}
