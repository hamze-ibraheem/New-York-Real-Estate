import React from 'react';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Neighborhoods from './components/Neighborhoods';
import Process from './components/Process';
import LeadCapture from './components/LeadCapture';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#0F172A]">
      <nav className="fixed w-full z-50 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0F172A] flex items-center justify-center font-serif text-white text-xl">NY</div>
            <span className="text-lg md:text-xl font-serif font-bold tracking-tight text-[#1E293B]">
              NEW YORK REAL ESTATE
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#475569]">
            <a href="#" className="hover:text-[#0F172A] transition-colors">Services</a>
            <a href="#" className="hover:text-[#0F172A] transition-colors">Testimonials</a>
            <a href="#" className="hover:text-[#0F172A] transition-colors">Process</a>
          </div>
          <button className="px-6 py-2 border-2 border-[#0F172A] text-xs font-bold tracking-widest uppercase hover:bg-[#0F172A] hover:text-white transition-colors">
            Contact Us
          </button>
        </div>
      </nav>
      
      <main className="pt-20">
        <Hero />
        <Trust />
        <Services />
        <Neighborhoods />
        <Process />
        <LeadCapture />
      </main>

      <footer className="h-14 px-4 sm:px-6 lg:px-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-center md:justify-between text-[10px] text-[#94A3B8] uppercase tracking-widest bg-white">
        <div>&copy; {new Date().getFullYear()} New York Real Estate. All rights reserved.</div>
        <div className="hidden md:block">This is a concept design built based on CRO principles.</div>
      </footer>
    </div>
  );
}
