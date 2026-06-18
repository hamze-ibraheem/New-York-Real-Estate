import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Strategic Consultation',
    description: 'We start by understanding your exact goals, timeline, and financial requirements. No pressure, just a clear discussion about your real estate objectives and how we can achieve them in the current NYC market.'
  },
  {
    number: '02',
    title: 'Custom Action Plan',
    description: 'We develop a tailored roadmap. For sellers, this means a custom marketing, staging, and pricing strategy. For buyers, it means curating a focused list of properties, including exclusive off-market opportunities.'
  },
  {
    number: '03',
    title: 'Execute & Close',
    description: 'We handle the heavy lifting. From aggressive negotiations and board package preparation to the final walkthrough, we manage every complex detail until the deal is successfully closed.'
  }
];

export default function Process() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#B45309] font-bold text-xs tracking-widest uppercase mb-4 flex justify-center">The Process</div>
          <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6 tracking-tight">The Path to Success</h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Working with us is straightforward. We remove the friction from NYC real estate through a refined, proven process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-[#E2E8F0]"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center px-4 bg-[#F8FAFC]">
              <div className="w-10 h-10 bg-white border border-[#0F172A] flex items-center justify-center text-sm font-bold text-[#0F172A] mb-8 shadow-sm">
                {step.number}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#0F172A] mb-3">{step.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
