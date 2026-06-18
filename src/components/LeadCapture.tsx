import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would handle API submission here
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-[#0F172A] text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h2 className="text-4xl font-serif font-bold text-white mb-6 tracking-tight">Stay Ahead of the Market</h2>
            <p className="text-sm text-blue-200 mb-10 leading-relaxed max-w-lg">
              Don't navigate the NYC real estate market blind. Request a <strong>Free Home Valuation</strong> or gain exclusive access to our private <strong>Off-Market Listings</strong> inventory today.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B45309] mr-3 flex-shrink-0" />
                <span>Accurate, data-driven property estimates</span>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B45309] mr-3 flex-shrink-0" />
                <span>First look at unlisted luxury properties</span>
              </li>
              <li className="flex items-start text-gray-300 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B45309] mr-3 flex-shrink-0" />
                <span>Zero obligation, fully confidential consultation</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[420px] bg-[#1E293B] shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#B45309]"></div>
            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#B45309]" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2">Request Received</h3>
                  <p className="text-sm text-gray-400">Our team will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-2xl text-white mb-6">Secure Your Valuation</h3>
                  <div>
                    <input type="text" id="name" required className="w-full bg-[#0F172A] border-none px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 placeholder-gray-500" placeholder="Full Name" />
                  </div>
                  <div>
                    <input type="email" id="email" required className="w-full bg-[#0F172A] border-none px-4 py-3 text-sm text-white focus:ring-1 focus:ring-amber-500 placeholder-gray-500" placeholder="Email Address" />
                  </div>
                  <div>
                    <select id="interest" className="w-full bg-[#0F172A] border-none px-4 py-3 text-sm text-gray-400 focus:ring-1 focus:ring-amber-500">
                      <option>Free Home Valuation</option>
                      <option>Off-Market Listings</option>
                      <option>General Consultation</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#B45309] text-white font-bold text-sm uppercase tracking-[0.2em] mt-2 hover:bg-[#92400e] transition-colors">
                    Inquire Now
                  </button>
                  <p className="text-[10px] text-gray-500 mt-6 text-center italic">Your data is handled with absolute discretion.</p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
