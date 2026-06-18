import React from 'react';
import { Home, Key, Gem, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Home,
    title: 'Selling Properties',
    description: 'Maximize your return. We leverage elite marketing strategies, professional staging, and our extensive network to sell your NYC property quickly and profitably.'
  },
  {
    icon: Key,
    title: 'Buying Properties',
    description: 'Find your perfect place. From securing access to off-market listings to aggressive negotiation, we guide you through the complexities of the NYC buyer journey.'
  },
  {
    icon: Gem,
    title: 'Luxury Listings',
    description: 'Discreet, white-glove service. We specialize in high-end co-ops, condos, and townhouses, offering unparalleled privacy and premium exposure to qualified buyers.'
  },
  {
    icon: Briefcase,
    title: 'Commercial Real Estate',
    description: 'Strategic portfolio growth. Whether leasing office space or acquiring multi-family buildings, we provide the data-driven insights needed for commercial success.'
  }
];

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24 bg-white border-b border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="text-[#B45309] font-bold text-xs tracking-widest uppercase mb-4">Core Services</div>
          <h2 className="text-4xl font-serif font-bold text-[#0F172A] mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-lg text-[#64748B]">
            Comprehensive real estate solutions designed for the demands of the New York market. We bring institutional-grade expertise to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F8FAFC] flex items-center justify-center border border-[#E2E8F0]">
                <service.icon className="w-5 h-5 text-[#0F172A]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-[#0F172A] mb-2">{service.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px] md:h-[600px]">
          <div className="col-span-2 row-span-2 relative overflow-hidden group border border-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury NYC Living Room" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif font-bold tracking-wide">Tribeca Penthouse Collection</span>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden group border border-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80" 
              alt="Modern Kitchen" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden group border border-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Bedroom" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="col-span-2 md:col-span-2 row-span-1 relative overflow-hidden group border border-[#E2E8F0]">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="NYC Skyline View" 
              className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif font-bold tracking-wide">Upper East Side Estates</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
