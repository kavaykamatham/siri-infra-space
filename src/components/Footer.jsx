import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Sparkles,
  Key,
  ShieldCheck
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ 
  setCurrentTab, 
  onLocalitySelect 
}) {
  const quickLinks = [
    { id: 'home', name: 'Home' },
    { id: 'properties', name: 'Properties' },
    { id: 'services', name: 'Real Estate Services' },
    { id: 'emi-calculator', name: 'Home Loan EMI Calculator' },
    { id: 'about-us', name: 'About Us' },
    { id: 'reviews', name: 'Client Reviews' },
    { id: 'contact', name: 'Contact & Office Location' },
  ];

  const popularLocations = [
    'Kukatpally & KPHB Phase 9',
    'Hafeezpet & Miyapur',
    'Kokapet & Neopolis',
    'Financial District & Gachibowli',
    'Tellapur & Nallagandla',
    'Bachupally & Bowrampet',
  ];

  const handleTabClick = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Brand Logo, Name & "WOW" Journey Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white p-1 shadow-sm border border-emerald-500/40 shrink-0">
                <img src="/logo.png" alt="Siri Infra Space" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white tracking-tight">siri infra space</h3>
                <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">Builders & Property Advisory</p>
              </div>
            </div>

            {/* "WOW" End-to-End Journey Tagline Card */}
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
              <div className="text-xs font-black text-emerald-400 flex items-center gap-1.5 leading-snug">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>With You at Every Single Step.</span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                From finding your dream home and securing lowest-interest EMI loans, to legal title verification and keys in hand — we walk with you throughout your journey.
              </p>
            </div>

            {/* Google 5.0 Star Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-emerald-400" />
              5.0 Star Google Rated • Direct Builder Rates
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabClick(item.id)}
                    className="hover:text-emerald-400 transition flex items-center gap-1.5 text-xs text-slate-300 text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hyderabad Locations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Top Locations
            </h4>
            <ul className="space-y-2">
              {popularLocations.map((loc) => (
                <li key={loc}>
                  <button
                    onClick={() => {
                      onLocalitySelect(loc);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition text-left flex items-center gap-1.5 text-xs text-slate-300"
                  >
                    <MapPin className="w-3 h-3 text-emerald-500 shrink-0" />
                    {loc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Office Location & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Office Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  2nd floor, H No, 5-1207 & 1184, Kukatpally Housing Board Rd, K P H B Phase 9, Hafeezpet, Hyderabad, Telangana 500085
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919182854423" className="hover:text-emerald-400 font-bold text-white">
                  +91 91828 54423
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:smrealtors7@gmail.com" className="hover:text-emerald-400">
                  smrealtors7@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Sunday: 10:00 AM – 6:30 PM</span>
              </p>
            </div>

            {/* WhatsApp & Social Buttons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20am%20interested%20in%20Hyderabad%20properties."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition text-xs shadow-sm"
                title="WhatsApp Siri Infra Space"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                WhatsApp
              </a>

              <a
                href="https://www.instagram.com/siriinfraspace/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"
                title="Instagram @siriinfraspace"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Siriinfraspace"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"
                title="Facebook @Siriinfraspace"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-900 text-[11px] text-slate-500 space-y-2 leading-relaxed">
          <p>
            <strong className="text-slate-400">Disclaimer & RERA Compliance:</strong> Siri Infra Space is an authorized real estate marketing and property advisory company based in Hyderabad, Telangana. All project information and pricing are for representational and advisory purposes.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Siri Infra Space. All rights reserved.
          </div>
          <div>
            KPHB Phase 9, Hafeezpet, Hyderabad - 500085
          </div>
        </div>

      </div>
    </footer>
  );
}
