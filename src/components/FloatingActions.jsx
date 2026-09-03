import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingActions({ onOpenSiteVisit }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg border border-slate-700 transition transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Quick Site Visit Pill (Desktop) */}
      <button
        onClick={() => onOpenSiteVisit()}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-emerald-400 border border-emerald-500/40 shadow-xl hover:bg-slate-800 transition text-xs font-bold transform hover:-translate-y-0.5"
      >
        <Calendar className="w-4 h-4 text-emerald-400" />
        <span>Free Site Visit</span>
      </button>

      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href="tel:+919182854423"
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white border border-slate-700 shadow-xl hover:bg-slate-800 transition transform hover:scale-110"
        title="Call +91 91828 54423"
      >
        <Phone className="w-5 h-5 text-emerald-400" />
      </a>

      {/* Sticky WhatsApp Floating Button with Official Icon */}
      <a
        href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20am%20interested%20in%20Hyderabad%20properties."
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/50 hover:bg-[#20bd5a] transition transform hover:scale-110 group"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white text-[9px] text-[#25D366] font-extrabold items-center justify-center">1</span>
        </span>
        <WhatsAppIcon className="w-7 h-7 fill-white" />
        
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none shadow-xl border border-slate-700">
          Chat with Property Advisor
        </span>
      </a>

    </div>
  );
}
