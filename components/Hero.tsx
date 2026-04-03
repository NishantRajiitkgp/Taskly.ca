'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { MapPin, Calendar, ChevronDown, Sparkles, AlertTriangle, Wrench, Leaf, Check } from 'lucide-react';

// Fixed Sparkle SVG with proper viewBox and path to prevent clipping
const Sparkle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L14.59 9.41L22 12L14.59 14.59L12 22L9.41 14.59L2 12L9.41 9.41L12 2Z" fill="currentColor" />
  </svg>
);

const serviceCategories = [
  {
    name: 'Cleaning',
    icon: Sparkles,
    items: ['Standard Clean', 'Deep Clean', 'Move-in / Move-out']
  },
  {
    name: 'Emergency',
    icon: AlertTriangle,
    items: ['Plumbing', 'Electrical', 'Locksmith']
  },
  {
    name: 'Maintenance',
    icon: Wrench,
    items: ['Handyman', 'Painting', 'Furniture Assembly']
  },
  {
    name: 'Seasonal',
    icon: Leaf,
    items: ['Snow Removal', 'Lawn Care', 'Gutter Cleaning']
  }
];

export function Hero() {
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState({ 
    category: 'Cleaning', 
    item: 'Standard Clean', 
    icon: Sparkles 
  });
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* The Squeegee Wipe Reveal (Cleaning Metaphor) */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.8 }}
        className="fixed inset-0 z-[100] bg-gold origin-top flex items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-[14px] font-bold uppercase tracking-[0.5em] text-rich-black flex items-center gap-4"
        >
          <Sparkle className="w-6 h-6 animate-spin-slow" />
          Purifying Space
          <Sparkle className="w-6 h-6 animate-spin-slow" />
        </motion.div>
      </motion.div>

      <section className="relative min-h-screen w-full bg-cream overflow-hidden flex flex-col pt-[80px]">
        {/* Main Content Split */}
        <div className="flex-1 flex flex-col md:flex-row w-full relative z-10">
          
          {/* Left: Typography */}
          <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-6 md:px-12 pb-48 md:pb-32 z-20">
            <div className="overflow-hidden mb-6">
              <motion.p 
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold flex items-center gap-3"
              >
                <Sparkle className="w-3 h-3" />
                001 — The New Standard
              </motion.p>
            </div>

            <h1 className="font-sans text-[16vw] md:text-[11vw] leading-[0.8] font-bold tracking-tighter text-rich-black uppercase">
              <div className="overflow-hidden">
                <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}>
                  YOUR
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}>
                  HOME.
                </motion.div>
              </div>
              <div className="overflow-hidden flex items-center gap-4 md:gap-8">
                <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.2, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}>
                  HANDLED
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  transition={{ duration: 1.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Sparkle className="text-gold w-[12vw] h-[12vw] md:w-[8vw] md:h-[8vw] animate-spin-slow" />
                </motion.div>
              </div>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="font-mono text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] text-warm-gray leading-[1.8] max-w-md mt-12"
            >
              The premium managed home services marketplace for Toronto & the GTA. Vetted professionals. Fixed prices. Effortless booking.
            </motion.p>
          </div>

          {/* Right: Image */}
          <div className="absolute md:relative inset-0 md:inset-auto md:w-[40%] h-full z-10">
            <motion.div 
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
              className="w-full h-full relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" 
                alt="Pristine Home" 
                fill 
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
              {/* Gradient fade for mobile readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent md:hidden" />
            </motion.div>
          </div>
        </div>

        {/* Floating Interactive Booking Bar */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 md:bottom-12 left-0 md:left-12 md:right-12 w-full md:w-auto bg-white z-30 flex flex-col md:flex-row items-stretch shadow-[0_20px_60px_rgba(17,17,17,0.08)]"
        >
          {/* Service Dropdown */}
          <div 
            ref={dropdownRef}
            className="flex-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-rich-black/10"
            onClick={() => setIsServiceOpen(!isServiceOpen)}
          >
            {/* Background Sweep Container (Clipped) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gold/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </div>
            
            <div className="relative p-6 md:p-8 flex flex-col justify-center h-full">
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-warm-gray mb-2">Select Service</span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <selectedService.icon className="w-5 h-5 text-gold" />
                  <span className="font-sans text-[20px] md:text-[24px] font-bold text-rich-black truncate max-w-[180px]">
                    {selectedService.item}
                  </span>
                </div>
                <ChevronDown className={`w-5 h-5 text-warm-gray transition-all duration-500 ${isServiceOpen ? 'rotate-180 text-gold' : 'group-hover:text-gold'}`} />
              </div>
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isServiceOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-full left-0 w-full md:w-[320px] bg-white shadow-[0_-20px_60px_rgba(17,17,17,0.08)] border border-rich-black/10 mb-2 z-50 max-h-[50vh] overflow-y-auto scrollbar-hide"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-2">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="mb-4 last:mb-0">
                        <div className="px-4 py-2 flex items-center gap-2 border-b border-rich-black/5 mb-1">
                          <category.icon className="w-3 h-3 text-gold" />
                          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-warm-gray">{category.name}</span>
                        </div>
                        <div className="flex flex-col">
                          {category.items.map((item) => (
                            <button
                              key={item}
                              onClick={() => {
                                setSelectedService({ category: category.name, item, icon: category.icon });
                                setIsServiceOpen(false);
                              }}
                              className="text-left px-4 py-3 hover:bg-cream transition-colors flex items-center justify-between group/item"
                            >
                              <span className={`font-sans text-[16px] font-bold ${selectedService.item === item ? 'text-gold' : 'text-rich-black group-hover/item:text-gold'} transition-colors`}>
                                {item}
                              </span>
                              {selectedService.item === item && <Check className="w-4 h-4 text-gold" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Address Input */}
          <div className="flex-[1.5] relative group border-b md:border-b-0 md:border-r border-rich-black/10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gold/5 translate-y-[100%] focus-within:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </div>
            <div className="relative p-6 md:p-8 flex flex-col justify-center h-full">
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-warm-gray mb-2">Location</span>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" />
                <input 
                  type="text" 
                  placeholder="Enter your address..." 
                  className="bg-transparent border-none outline-none font-sans text-[20px] md:text-[24px] font-bold text-rich-black placeholder:text-warm-gray/40 w-full"
                />
              </div>
            </div>
          </div>

          {/* Date/Time */}
          <div className="flex-1 relative group cursor-pointer border-b md:border-b-0 md:border-r border-rich-black/10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gold/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </div>
            <div className="relative p-6 md:p-8 flex flex-col justify-center h-full">
              <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-warm-gray mb-2">Date & Time</span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gold" />
                  <span className="font-sans text-[20px] md:text-[24px] font-bold text-rich-black">ASAP</span>
                </div>
                <ChevronDown className="w-5 h-5 text-warm-gray group-hover:text-gold transform group-hover:rotate-180 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="flex-1 relative overflow-hidden bg-rich-black text-cream p-6 md:p-8 group flex items-center justify-center gap-4">
            <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 font-mono text-[13px] md:text-[15px] font-bold uppercase tracking-[0.2em] group-hover:text-rich-black transition-colors duration-500">
              Book Now
            </span>
            <span className="relative z-10 text-[24px] group-hover:text-rich-black group-hover:translate-x-2 transition-all duration-500">
              &rarr;
            </span>
          </button>
        </motion.div>
      </section>
    </>
  );
}
