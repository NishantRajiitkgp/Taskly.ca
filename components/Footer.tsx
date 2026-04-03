'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function Footer() {
  const footerLinks = [
    {
      title: 'SERVICES',
      links: ['Cleaning', 'Emergency', 'Maintenance', 'Seasonal'],
    },
    {
      title: 'COMPANY',
      links: ['About', 'Careers', 'Blog', 'Press'],
    },
    {
      title: 'LEGAL',
      links: ['Terms', 'Privacy', 'Provider Agreement', 'Insurance'],
    },
  ];

  return (
    <footer className="bg-rich-black text-cream w-full">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Top Row */}
        <div className="border-t border-cream/10 pt-16 pb-24 flex flex-col md:flex-row justify-between gap-16">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <Link href="/" className="font-sans text-[24px] font-bold tracking-tight text-cream">
              taskly<span className="text-gold">.</span>
            </Link>
            <p className="font-mono text-[11px] font-bold text-warm-gray mt-4">
              Home services, reimagined.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-12">
              {['INSTAGRAM', 'TWITTER', 'LINKEDIN', 'TIKTOK'].map((social) => (
                <Link
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-warm-gray hover:text-gold transition-colors duration-300"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column (3 small columns) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 md:text-right">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col space-y-6">
                <h4 className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                  {column.title}
                </h4>
                <ul className="flex flex-col space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="font-mono text-[11px] font-bold text-warm-gray hover:text-cream transition-colors duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-cream/10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-warm-gray">
            &copy; 2026 TASKLY.CA
          </span>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-warm-gray">
            TORONTO, ONTARIO
          </span>
        </div>
      </div>
    </footer>
  );
}
