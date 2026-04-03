'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function Pricing() {
  const plans = [
    { name: 'STANDARD', price: '$99', popular: false, cta: 'BOOK STANDARD' },
    { name: 'DEEP CLEAN', price: '$279', popular: true, cta: 'BOOK DEEP CLEAN' },
    { name: 'MOVE-IN/OUT', price: '$349', popular: false, cta: 'BOOK MOVE-IN' },
  ];

  const features = [
    { name: 'Kitchen & Bath', values: ['✓', '✓', '✓'] },
    { name: 'Dusting & Vacuuming', values: ['✓', '✓', '✓'] },
    { name: 'Mopping', values: ['✓', '✓', '✓'] },
    { name: 'Inside Appliances', values: ['—', '✓', '✓'] },
    { name: 'Deep Scrub', values: ['—', '✓', '✓'] },
    { name: 'Inside Cabinets', values: ['—', '—', '✓'] },
    { name: 'Baseboards & Fixtures', values: ['—', '✓', '✓'] },
    { name: 'Duration', values: ['2-3 hrs', '4-5 hrs', '5-7 hrs'] },
  ];

  return (
    <section id="pricing" className="px-6 md:px-12 py-24 md:py-32 bg-white text-rich-black max-w-[1600px] mx-auto">
      {/* Section Identifier */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-gold">
          005 — PRICING
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="font-sans text-[60px] md:text-[100px] font-bold leading-[0.9] tracking-tighter uppercase">
          No surprises.<br />
          Ever<span className="text-gold">.</span>
        </h2>
      </motion.div>

      {/* Subheading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <p className="font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-warm-gray">
          Flat-rate pricing. What you see is what you pay.
        </p>
      </motion.div>

      {/* Pricing Table / Grid */}
      <div className="w-full overflow-x-auto pb-8">
        <div className="min-w-[800px] flex flex-col">
          
          {/* Header Row */}
          <div className="grid grid-cols-4 border-b border-rich-black/10 pb-6">
            <div className="col-span-1"></div>
            {plans.map((plan, i) => (
              <div key={i} className="col-span-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray">
                {plan.name}
              </div>
            ))}
          </div>

          {/* Price Row */}
          <div className="grid grid-cols-4 border-b border-rich-black/10">
            <div className="col-span-1"></div>
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-1 relative pt-8 pb-12"
              >
                {plan.popular && (
                  <span className="absolute top-0 left-0 bg-gold text-rich-black font-mono text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-none">
                    POPULAR
                  </span>
                )}
                <div className="font-sans text-[64px] md:text-[80px] font-bold leading-none text-rich-black tracking-tighter">
                  {plan.price}
                </div>
                <div className="font-mono text-[11px] font-bold text-warm-gray mt-3 uppercase tracking-[0.1em]">
                  /visit
                </div>
              </motion.div>
            ))}
          </div>

          {/* Details Rows */}
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-4 border-b border-rich-black/10 py-6 items-center"
            >
              <div className="col-span-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray">
                {feature.name}
              </div>
              {feature.values.map((val, j) => (
                <div key={j} className="col-span-1 font-mono text-[11px] font-bold uppercase tracking-[0.1em]">
                  {val === '✓' ? (
                    <span className="text-gold">✓</span>
                  ) : val === '—' ? (
                    <span className="text-rich-black/15">—</span>
                  ) : (
                    <span className="text-warm-gray">{val}</span>
                  )}
                </div>
              ))}
            </motion.div>
          ))}

          {/* CTA Row */}
          <div className="grid grid-cols-4 pt-12">
            <div className="col-span-1"></div>
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="col-span-1 pr-8"
              >
                <Link
                  href="#book"
                  className={`inline-flex items-center justify-center w-full py-4 font-mono text-[11px] font-bold uppercase tracking-[0.1em] rounded-none transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-gold text-rich-black hover:bg-gold-dark hover:text-cream'
                      : 'bg-transparent border border-rich-black/10 text-rich-black hover:border-gold hover:text-gold'
                  }`}
                >
                  {plan.cta} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Below Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-rich-black/10 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-gold mb-4">
            ADD-ONS
          </span>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray leading-relaxed max-w-[600px]">
            Inside Fridge +$30 &nbsp;&middot;&nbsp; Inside Oven +$30 &nbsp;&middot;&nbsp; Laundry +$25/load &nbsp;&middot;&nbsp; Balcony +$35
          </p>
        </div>
        
        <div className="md:text-right">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-warm-gray">
            Prices shown for 2-bedroom. <Link href="#sizes" className="text-gold hover:text-gold-dark transition-colors duration-300">See all sizes &rarr;</Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
