'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const steps = [
    {
      id: '01',
      number: '1',
      title: 'Choose',
      body: 'Pick your service. See the exact price. No quotes, no callbacks, no waiting.',
      bottomLabel: '30 SECONDS',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop', // Luxury living room
    },
    {
      id: '02',
      number: '2',
      title: 'Book',
      body: 'Instantly matched with a vetted, background-checked professional near you.',
      bottomLabel: 'AUTO-MATCHED',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop', // Cleaning pristine surface
    },
    {
      id: '03',
      number: '3',
      title: 'Done',
      body: 'Track in real-time. Review before/after photos. Pay only when satisfied.',
      bottomLabel: 'GUARANTEED',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', // Pristine luxury bedroom
    },
  ];

  return (
    <section id="how-it-works" className="px-6 md:px-12 py-24 md:py-32 bg-white text-rich-black max-w-[1600px] mx-auto">
      {/* Section Identifier */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
          003 — HOW IT WORKS
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <h2 className="font-sans text-[60px] md:text-[100px] font-bold leading-[0.9] tracking-tighter uppercase">
          Three steps.<br />
          That&apos;s it<span className="text-gold">.</span>
        </h2>
        <p className="font-mono text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] text-warm-gray leading-[1.8] max-w-xs pb-4">
          We've engineered the friction out of home services. Experience the new standard.
        </p>
      </motion.div>

      {/* Three Steps Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-rich-black/10 relative">
        {steps.map((step, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;
          const isDimmed = isAnyHovered && !isHovered;

          return (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative p-8 md:p-12 min-h-[450px] md:min-h-[600px] flex flex-col justify-between overflow-hidden border-b border-rich-black/10 cursor-crosshair transition-all duration-700 ${
                index !== steps.length - 1 ? 'md:border-r' : ''
              } ${isDimmed ? 'opacity-40 grayscale' : 'opacity-100 grayscale-0'}`}
            >
              {/* Image Reveal Background */}
              <div 
                className={`absolute inset-0 z-0 transition-all duration-700 ease-[0.16,1,0.3,1] ${
                  isHovered ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
              >
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-rich-black/60 transition-opacity duration-700" />
              </div>

              {/* Massive Background Number */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] md:text-[350px] lg:text-[400px] font-sans font-bold leading-none pointer-events-none select-none z-0 transition-all duration-700 ease-out ${
                  isHovered ? 'text-cream/10 scale-110' : 'text-rich-black/[0.03] scale-100'
                }`}
              >
                {step.number}
              </div>

              {/* Foreground Content */}
              <div className={`relative z-10 transform transition-transform duration-700 ease-out ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}>
                <span className="font-mono text-[11px] font-bold text-gold block mb-6">
                  {step.id}
                </span>
                <h3 className={`font-sans text-[36px] md:text-[48px] font-bold mb-6 uppercase tracking-tighter transition-colors duration-700 ${
                  isHovered ? 'text-cream' : 'text-rich-black'
                }`}>
                  {step.title}
                </h3>
                <p className={`font-mono text-[12px] font-bold uppercase tracking-[0.1em] leading-relaxed max-w-[280px] transition-colors duration-700 ${
                  isHovered ? 'text-cream/80' : 'text-warm-gray'
                }`}>
                  {step.body}
                </p>
              </div>

              {/* Bottom Label & Arrow */}
              <div className={`relative z-10 mt-16 flex items-center justify-between transform transition-transform duration-700 ease-out ${isHovered ? 'translate-y-2' : 'translate-y-0'}`}>
                <span className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-700 ${
                  isHovered ? 'text-gold' : 'text-warm-gray'
                }`}>
                  {step.bottomLabel}
                </span>
                
                {/* Animated Arrow on Hover */}
                <div className={`overflow-hidden transition-all duration-700 ${isHovered ? 'w-8 opacity-100' : 'w-0 opacity-0'}`}>
                  <span className={`text-gold text-xl block transform transition-transform duration-700 delay-100 ${isHovered ? 'translate-x-0' : '-translate-x-full'}`}>
                    &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col items-center justify-center text-center"
      >
        <Link 
          href="#book"
          className="inline-flex items-center justify-center bg-rich-black text-cream font-mono text-[11px] font-bold uppercase tracking-[0.2em] px-10 py-5 rounded-none hover:bg-gold hover:text-rich-black transition-colors duration-500 mb-6 group"
        >
          <div className="relative overflow-hidden flex items-center gap-3">
            <div className="relative h-[1.2em] overflow-hidden">
              <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                EXPERIENCE IT NOW
              </span>
              <span className="block absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                EXPERIENCE IT NOW
              </span>
            </div>
            <span className="text-[16px] transition-transform duration-500 group-hover:translate-x-2">&rarr;</span>
          </div>
        </Link>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          First standard cleaning free.
        </p>
      </motion.div>
    </section>
  );
}
