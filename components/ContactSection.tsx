'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'System Architecture',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column Text & Channels */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1a1a] border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-[#ff51fa] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest font-headline text-[#ff51fa] font-bold">
              Direct Communication Pipeline
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white leading-tight">
            INITIALIZE <span className="text-[#00e3fd]">CONTACT</span> PROTOCOL.
          </h2>

          <p className="text-neutral-400 font-body text-base md:text-lg leading-relaxed max-w-lg">
            Have a complex system architecture requirement, high-scale web platform, or advisory role? Send a message directly to my inbox.
          </p>

          <div className="space-y-4 pt-4 border-t border-neutral-800 font-headline">
            <div className="flex items-center gap-4 text-sm text-neutral-300">
              <span className="material-symbols-outlined text-[#b6a0ff]">mail</span>
              <span>architect@terminal.dev</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-300">
              <span className="material-symbols-outlined text-[#00e3fd]">terminal</span>
              <span>CLI Key: 0x8F94A20B</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-neutral-300">
              <span className="material-symbols-outlined text-[#ff51fa]">location_on</span>
              <span>San Francisco, CA // Global Remote</span>
            </div>
          </div>
        </div>

        {/* Right Column Terminal Form */}
        <div className="bg-[#000000] p-8 md:p-10 rounded-3xl border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs font-label text-neutral-400 uppercase tracking-widest">
                send_message.sh
              </span>
            </div>
            <span className="text-[10px] font-label text-[#00e3fd] uppercase tracking-widest">
              SSL SECURED
            </span>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00e3fd]/20 border border-[#00e3fd] flex items-center justify-center mx-auto text-[#00e3fd]">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white">
                TRANSMISSION RECEIVED
              </h3>
              <p className="text-neutral-400 text-sm font-body max-w-sm mx-auto">
                Your message has been encrypted and delivered. I will respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: '', email: '', projectType: 'System Architecture', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#131313] hover:bg-[#1a1a1a] text-[#b6a0ff] font-label text-xs uppercase tracking-widest rounded-xl border border border-outline-variant/20 transition-all"
              >
                Send Another Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-headline">
              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-neutral-400 mb-2">
                  Sender Identity (Name) *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-[#131313] border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#b6a0ff] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-neutral-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-[#131313] border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#b6a0ff] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-neutral-400 mb-2">
                  Scope / Project Type
                </label>
                <select
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full bg-[#131313] border border-outline-variant/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b6a0ff] transition-all text-sm cursor-pointer"
                >
                  <option value="System Architecture">System Architecture & Audit</option>
                  <option value="Full-Stack Web App">Full-Stack Web Application</option>
                  <option value="API & Microservices">API & Microservices Infrastructure</option>
                  <option value="Consulting & Advisory">Engineering Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-label uppercase tracking-widest text-neutral-400 mb-2">
                  Transmission Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Describe your technical requirements or goals..."
                  className="w-full bg-[#131313] border border-outline-variant/20 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#b6a0ff] transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-[#b6a0ff] to-[#7e51ff] text-[#340090] font-headline font-bold text-sm rounded-xl shadow-[0_0_20px_rgba(182,160,255,0.3)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING DATA...</span>
                ) : (
                  <>
                    TRANSMIT MESSAGE
                    <span className="material-symbols-outlined text-lg">send</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
