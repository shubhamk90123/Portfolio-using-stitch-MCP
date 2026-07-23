import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TERMINAL_DEV // Digital Architect Portfolio',
  description:
    'Full-Stack System Architect & High-Performance Engineering Portfolio. Specializing in distributed systems, high-throughput web applications, and editorial glassmorphic interfaces.',
  keywords: [
    'System Architect',
    'Full-Stack Developer',
    'Next.js',
    'TypeScript',
    'Go',
    'Rust',
    'WebGL',
    'Tailwind CSS',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0e0e0e] text-white font-sans selection:bg-[#b6a0ff]/30">
        {children}
      </body>
    </html>
  );
}
