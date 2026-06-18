import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white pt-24 pb-32 border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4 text-[#B45309] font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-px bg-[#B45309]"></span>
            New York's Premier Real Estate Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-[#0F172A] mb-8 leading-[1.1]">
            Unlock the Real Value of <br />
            <span className="text-[#B45309] italic">New York Real Estate.</span>
          </h1>
          <p className="text-lg text-[#64748B] mb-10 leading-relaxed max-w-2xl">
            Whether you're selling a luxury listing or buying your first Manhattan apartment, we provide the deep local knowledge and seamless execution you need to win in NYC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold tracking-wide text-white bg-[#0F172A] hover:bg-black transition-colors uppercase shadow-xl">
              Get a Free Home Valuation
              <ArrowRight className="ml-2 -mr-1 h-4 w-4" />
            </button>
            <button className="inline-flex justify-center items-center px-8 py-4 border border-[#CBD5E1] text-sm font-bold tracking-wide text-[#0F172A] bg-transparent hover:bg-slate-50 transition-colors uppercase">
              View Off-Market Listings
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
