import React from 'react';
import { MapPin, TrendingUp, ArrowRight, Building, Sparkles } from 'lucide-react';
import { localities } from '../data/localities';

export default function LocalityGuide({ onSelectLocality }) {
  return (
    <section id="localities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            Hyderabad Prime Growth Corridors
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore Hyderabad's Top Real Estate Localities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            In-depth market insights, price trends, and infrastructure developments across Hyderabad’s most sought-after residential and commercial sectors.
          </p>
        </div>

        {/* Localities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {localities.map((loc) => (
            <div
              key={loc.id}
              className="group bg-slate-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/10 transition-all duration-300 flex flex-col"
            >
              {/* Image & Price Overlay */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent"></div>
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow">
                    {loc.growthRate}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-white/90 text-slate-900 shadow">
                    {loc.propertiesCount}
                  </span>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    {loc.name}
                  </h3>
                  <div className="text-xs text-emerald-300 font-semibold mt-0.5">
                    Avg. Rate: {loc.avgPrice}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg mb-3 inline-block">
                    {loc.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {loc.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-5">
                    {loc.highlights.map((h, i) => (
                      <div key={i} className="text-[11px] text-slate-700 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectLocality(loc.name)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-emerald-600 hover:text-white border border-slate-300 hover:border-emerald-600 shadow-sm transition group"
                >
                  View Projects in {loc.name.split('&')[0].trim()}
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white group-hover:translate-x-0.5 transition" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
