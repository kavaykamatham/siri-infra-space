import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  ChevronRight,
  Phone
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  onOpenSiteVisit 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'properties', name: 'Properties' },
    { id: 'services', name: 'Services' },
    { id: 'emi-calculator', name: 'EMI Calculator' },
    { id: 'about-us', name: 'About Us' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand */}
          <button 
            onClick={() => handleTabClick('home')} 
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-xl p-1 shadow-sm overflow-hidden flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500 transition">
              <img 
                src="/logo.png" 
                alt="Siri Infra Space Logo" 
                className="w-full h-full object-contain transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1">
                siri <span className="text-emerald-600 font-light">infra space</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
                Builders & Property Advisory • Hyderabad
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleTabClick(link.id)}
                className={`text-sm font-semibold transition-all relative py-1.5 ${
                  currentTab === link.id
                    ? 'text-emerald-600 font-bold'
                    : 'text-slate-700 hover:text-emerald-600'
                }`}
              >
                {link.name}
                {currentTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20am%20looking%20for%20properties%20in%20Hyderabad."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
              WhatsApp
            </a>

            <button
              onClick={onOpenSiteVisit}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transform hover:-translate-y-0.5 transition duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenSiteVisit}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition"
            >
              Site Visit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition text-left ${
                    currentTab === link.id
                      ? 'bg-emerald-50 text-emerald-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <a
                href="tel:+919182854423"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                Call +91 91828 54423
              </a>
              <a
                href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20am%20interested%20in%20Hyderabad%20properties."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
