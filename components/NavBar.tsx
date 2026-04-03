'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function NavBar() {
  return (
    <motion.nav 
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full h-[80px] bg-cream/95 backdrop-blur-sm border-b border-rich-black/10 z-50 flex items-center justify-between px-6 md:px-12"
    >
      {/* LEFT: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="font-sans text-[24px] font-bold tracking-tight text-rich-black">
          taskly<span className="text-gold">.</span>
        </Link>
      </div>

      {/* CENTER-RIGHT: Nav links */}
      <div className="hidden md:flex items-center space-x-10 ml-auto mr-12">
        {['SERVICES', 'HOW IT WORKS', 'PRICING', 'TRUST', 'FOR PROS'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-warm-gray hover:text-gold transition-colors duration-300"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* FAR RIGHT: CTA */}
      <div className="flex-shrink-0 flex items-center gap-6">
        <Link
          href="/login"
          className="hidden md:inline-flex font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-rich-black hover:text-gold transition-colors duration-300"
        >
          LOGIN
        </Link>
        <Link
          href="#book-now"
          className="inline-flex items-center justify-center bg-rich-black text-cream font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 hover:bg-gold hover:text-rich-black transition-colors duration-300 rounded-none"
        >
          BOOK NOW
        </Link>
      </div>
    </motion.nav>
  );
}
