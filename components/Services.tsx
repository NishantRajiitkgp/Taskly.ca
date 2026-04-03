'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: '01',
      name: 'CLEANING',
      description: 'Standard • Deep • Move-in/out',
      price: 'From $99',
      image: 'https://picsum.photos/seed/clean-living/800/1000'
    },
    {
      id: '02',
      name: 'EMERGENCY',
      description: 'Plumbing • Electrical • Locks',
      price: '15 min response',
      image: 'https://picsum.photos/seed/luxury-plumbing/800/1000'
    },
    {
      id: '03',
      name: 'MAINTENANCE',
      description: 'Handyman • Painting • Assembly',
      price: 'From $75/hr',
      image: 'https://picsum.photos/seed/minimal-tools/800/1000'
    },
    {
      id: '04',
      name: 'SEASONAL',
      description: 'Snow • Lawn • Gutters • Windows',
      price: 'From $45/visit',
      image: 'https://picsum.photos/seed/winter-home/800/1000'
    },
  ];

  return (
    <section id="services" className="relative px-6 md:px-12 py-24 md:py-32 bg-cream text-rich-black max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6"
          >
            002 — OUR EXPERTISE
          </motion.p>
          <motion.h2 
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-sans text-[40px] md:text-[80px] leading-[0.9] font-bold tracking-tighter uppercase"
          >
            Everything<br />
            you need.
          </motion.h2>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8 md:mt-0 max-w-xs"
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-warm-gray leading-[1.8]">
            One platform. Vetted professionals. Guaranteed quality for every corner of your home.
          </p>
        </motion.div>
      </div>

      {/* Interactive List & Image Reveal */}
      <div className="flex flex-col md:flex-row gap-12 relative">
        
        {/* Left: Service List */}
        <div className="w-full md:w-[60%] border-t border-rich-black/10 z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link
                href={`#${service.name.toLowerCase()}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-rich-black/10 hover:border-gold transition-colors duration-500 relative overflow-hidden"
              >
                {/* Hover Background Sweep */}
                <div className="absolute inset-0 bg-gold/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
                
                <div className="flex items-start gap-8 z-10">
                  <span className="font-mono text-[10px] font-bold text-warm-gray group-hover:text-gold transition-colors mt-2">
                    {service.id}
                  </span>
                  <div>
                    <h3 className="font-sans text-[32px] md:text-[56px] font-bold tracking-tighter uppercase group-hover:text-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-warm-gray mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 flex items-center gap-6 z-10">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-rich-black">
                    {service.price}
                  </span>
                  <span className="text-gold text-2xl group-hover:translate-x-4 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right: Sticky Image Reveal (Hidden on Mobile) */}
        <div className="hidden md:block w-[40%] h-[600px] sticky top-32 overflow-hidden bg-rich-black/5">
          <AnimatePresence mode="wait">
            {hoveredService ? (
              <motion.div 
                key={hoveredService} 
                initial={{ opacity: 0, scale: 1.05 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} 
                className="absolute inset-0"
              >
                <Image 
                  src={services.find(s => s.id === hoveredService)?.image || ''} 
                  fill 
                  className="object-cover" 
                  alt="Service preview" 
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ) : (
              <motion.div 
                key="empty" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-gray">
                  Hover to preview
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
