'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import TerminalModal from '../../components/TerminalModal';

export default function ContactPage() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col justify-between">
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main className="flex-1 pt-28 pb-16">
        <ContactSection />
      </main>

      <Footer />

      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
