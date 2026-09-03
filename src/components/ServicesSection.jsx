import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  BadgePercent, 
  Car, 
  Compass, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { services } from '../data/services';

export default function ServicesSection({ onOpenSiteVisit }) {
  const iconMap = {
    Building2: Building2,
    ShieldCheck: ShieldCheck,
    BadgePercent: BadgePercent,
    Car: Car,
    Compass: Compass,
    TrendingUp: TrendingUp,
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End Real Estate Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Property Services in Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            From initial property discovery to RERA legal verification, home loans, and registration, we accompany you at every milestone.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Direct Builder Deals</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-emerald-900/50 to-slate-800/80 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need Personalized Property Guidance?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Speak with our senior Hyderabad real estate consultants today. Free consultation with zero obligations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+919182854423"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition border border-slate-600"
            >
              Call +91 91828 54423
            </a>
            <button
              onClick={() => onOpenSiteVisit()}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-300 hover:to-green-300 transition shadow-lg shadow-emerald-500/20"
            >
              Book Free Site Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
