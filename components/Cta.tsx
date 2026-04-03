'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function Cta() {
  return (
    <section className="min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center bg-cream text-rich-black px-6 text-center max-w-[1600px] mx-auto overflow-hidden">
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-sans text-[60px] md:text-[120px] lg:text-[160px] font-bold leading-[0.85] tracking-tighter uppercase">
          Your home<br />
          deserves better<span className="text-gold">.</span>
        </h2>
      </motion.div>

      {/* Subtext */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="font-mono text-[11px] md:text-[13px] font-bold uppercase tracking-[0.1em] text-warm-gray mt-10 max-w-[600px]"
      >
        Join 3,000+ GTA homeowners who stopped settling.
      </motion.p>

      {/* Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Link
          href="#book"
          className="inline-flex items-center justify-center bg-gold text-rich-black font-mono text-[11px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded-none hover:bg-gold-dark hover:text-cream transition-colors duration-300"
        >
          BOOK YOUR FIRST CLEAN &rarr;
        </Link>
        <Link
          href="#provider"
          className="inline-flex items-center justify-center bg-transparent border border-rich-black/10 text-rich-black font-mono text-[11px] font-bold uppercase tracking-[0.1em] px-8 py-4 rounded-none hover:border-gold hover:text-gold transition-colors duration-300"
        >
          BECOME A PROVIDER
        </Link>
      </motion.div>

      {/* Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-warm-gray mt-5"
      >
        First clean free for new customers.
      </motion.p>
    </section>
  );
}
