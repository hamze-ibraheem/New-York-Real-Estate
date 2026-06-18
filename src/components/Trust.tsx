import React from 'react';
import { Star, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Properties Sold', value: '$2B+' },
  { label: 'Happy Clients', value: '1,500+' },
  { label: 'Years Experience', value: '25+' },
  { label: 'Average Days on Market', value: '14' },
];

export default function Trust() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-[#FAF9F6] border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-4">Trusted by New Yorkers</h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Our reputation is built on delivering exceptional results in the world's most competitive real estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-10 border border-[#E2E8F0] shadow-sm flex flex-col">
            <ShieldCheck className="w-8 h-8 text-[#B45309] mb-6" />
            <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-3">Seamless Transactions</h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-8 flex-1">
              "They handled everything from staging to closing. What is normally a stressful NYC transaction felt entirely effortless."
            </p>
            <div className="pt-6 border-t border-[#E2E8F0] mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] tracking-wider uppercase">— Sarah M.</span>
                <div className="flex text-[#B45309]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border border-[#E2E8F0] shadow-sm flex flex-col">
            <TrendingUp className="w-8 h-8 text-[#B45309] mb-6" />
            <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-3">Deep Market Knowledge</h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-8 flex-1">
              "Their understanding of hyper-local neighborhood pricing meant we sold our townhouse for 15% over asking in just a week."
            </p>
            <div className="pt-6 border-t border-[#E2E8F0] mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] tracking-wider uppercase">— James & Emily T.</span>
                <div className="flex text-[#B45309]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 border border-[#E2E8F0] shadow-sm flex flex-col">
            <Users className="w-8 h-8 text-[#B45309] mb-6" />
            <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-3">Highly Professional Guidance</h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-8 flex-1">
              "As first-time buyers in Manhattan, having an authoritative yet approachable team in our corner was an absolute game-changer."
            </p>
            <div className="pt-6 border-t border-[#E2E8F0] mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] tracking-wider uppercase">— Michael R.</span>
                <div className="flex text-[#B45309]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-[#E2E8F0]">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-serif font-bold text-[#0F172A] mb-2">{stat.value}</div>
              <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
