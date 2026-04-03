'use client';

import { motion } from 'motion/react';

export function Trust() {
  const trustStack = [
    "VERIFIED IDENTITY",
    "CPIC CRIMINAL BACKGROUND CHECK",
    "TRADE LICENCE VERIFICATION",
    "$2,000,000 LIABILITY INSURANCE",
    "WSIB COMPLIANCE CLEARANCE",
    "REAL-TIME GPS TRACKING",
    "BEFORE / AFTER PHOTO EVIDENCE",
    "SATISFACTION GUARANTEE",
    "$10,000 PROPERTY PROTECTION",
    "TWO-WAY ACCOUNTABILITY RATINGS"
  ];

  const stats = [
    { value: "4.9", label: "AVG RATING" },
    { value: "50,000+", label: "BOOKINGS" },
    { value: "$0", label: "CLAIMS PAID" },
    { value: "100%", label: "CPIC CHECKED" }
  ];

  const testimonials = [
    {
      quote: "I've tried every service in Toronto. Taskly is the first time I felt completely comfortable leaving someone alone in my condo.",
      author: "SARAH J. — KING WEST — ★★★★★"
    },
    {
      quote: "The level of transparency is unmatched. Seeing the background check clearance and real-time GPS tracking completely changes the experience.",
      author: "MICHAEL T. — THE ANNEX — ★★★★★"
    },
    {
      quote: "They don't just send anyone. You can tell these are vetted professionals. The $10K property protection gave me the peace of mind I needed.",
      author: "ELENA R. — LESLIEVILLE — ★★★★★"
    }
  ];

  return (
    <section id="trust" className="px-6 md:px-12 py-24 md:py-32 bg-cream text-rich-black max-w-[1600px] mx-auto">
      {/* Section Identifier */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
          004 — TRUST
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="font-sans text-[60px] md:text-[100px] font-bold leading-[0.9] tracking-tighter uppercase">
          Someone is entering<br />
          your home<span className="text-gold">.</span>
        </h2>
        <p className="font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-warm-gray mt-6">
          We take that seriously.
        </p>
      </motion.div>

      {/* Part 1: The Trust Stack */}
      <div className="relative pl-10 mb-20">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 top-0 w-[2px] bg-gold"
        ></motion.div>
        <div className="flex flex-col space-y-6">
          {trustStack.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-baseline md:space-x-6"
            >
              <span className="font-mono text-[11px] font-bold text-gold mb-1 md:mb-0 w-8">
                {(i + 1).toString().padStart(2, '0')}
              </span>
              <span className="font-sans text-[24px] md:text-[32px] font-bold uppercase tracking-tighter">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 2: Stats Bar */}
      <div className="border-y border-rich-black/10 flex flex-col md:flex-row mb-20">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`flex-1 py-12 px-6 flex flex-col items-center md:items-start justify-center ${
              i !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-rich-black/10' : ''
            }`}
          >
            <span className="font-sans text-[48px] md:text-[64px] font-bold leading-none mb-4 tracking-tighter">
              {stat.value}
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-warm-gray">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Part 3: Testimonials */}
      <div className="flex flex-col">
        {testimonials.map((test, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`relative py-16 ${
              i !== testimonials.length - 1 ? 'border-b border-rich-black/10' : ''
            }`}
          >
            {/* Massive Quote Mark */}
            <div className="absolute top-8 left-0 text-[150px] md:text-[200px] font-sans font-bold leading-none text-gold/10 select-none pointer-events-none -ml-4">
              &ldquo;
            </div>
            
            {/* Quote Content */}
            <div className="relative z-10 max-w-[600px] pl-4 md:pl-8">
              <p className="font-sans text-[20px] md:text-[24px] font-bold leading-relaxed text-rich-black mb-8 tracking-tight">
                {test.quote}
              </p>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray">
                {test.author}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
