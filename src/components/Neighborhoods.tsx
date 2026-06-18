import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const neighborhoods = [
  {
    name: 'Tribeca',
    description: 'Industrial chic lofts and cobblestone streets, home to exclusive luxury residences.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Upper East Side',
    description: 'Classic Manhattan elegance, featuring historic brownstones and proximity to world-class museums.',
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Brooklyn Heights',
    description: 'Tree-lined promenades with unparalleled views of the downtown Manhattan skyline.',
    image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'West Village',
    description: 'Charming, winding streets offering a serene, intimate escape within the city\'s vibrant heart.',
    image: 'https://images.unsplash.com/photo-1512413914488-8422aa98e578?auto=format&fit=crop&w=800&q=80',
  }
];

export default function Neighborhoods() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="text-[#B45309] font-bold text-xs tracking-widest uppercase mb-4">Market Focus</div>
            <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6 tracking-tight">Neighborhood Spotlight</h2>
            <p className="text-lg text-[#64748B]">
              From historic downtown lofts to uptown classic cooperatives, explore the prime markets where we deliver unparalleled institutional-grade expertise.
            </p>
          </div>
          <button className="inline-flex items-center text-sm font-bold tracking-widest text-[#0F172A] uppercase hover:text-[#B45309] transition-colors shrink-0">
            View All Markets
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((hood, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-96 overflow-hidden border border-[#E2E8F0] mb-6">
                <img 
                  src={hood.image} 
                  alt={hood.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-2xl font-serif font-bold text-white mb-1 drop-shadow-md">{hood.name}</h3>
                </div>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                {hood.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
