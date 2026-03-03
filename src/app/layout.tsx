import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ask Miyagi — Master Your Instrument',
  description: 'Step-by-step interactive tutorials using a replica of your synth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
