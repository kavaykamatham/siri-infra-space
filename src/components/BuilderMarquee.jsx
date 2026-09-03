import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BuilderMarquee() {
  // Exact logos provided: Urbanrise & Brigade Group
  const partnerLogos = [
    {
      name: "Urbanrise",
      sub: "An Alliance Company",
      image: "/logos/urbanrise.png",
      alt: "Urbanrise Official Logo"
    },
    {
      name: "Brigade Group",
      sub: "Brigade Group",
      image: "/logos/brigade.png",
      alt: "Brigade Group Official Logo"
    }
  ];

  // Repeat for continuous seamless infinite loop
  const marqueeList = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos
  ];

  return (
    <div className="w-full bg-slate-50/90 border-y border-slate-200/90 py-5 overflow-hidden relative shadow-xs">
      
      {/* Section Caption */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Associated Builder Partners in Hyderabad</span>
        </div>
      </div>

      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10"></div>

      {/* Infinite Scrolling Track with Uploaded Official Logos */}
      <div className="animate-marquee items-center gap-6 sm:gap-10 cursor-default">
        {marqueeList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 shrink-0 h-20"
          >
            {/* Exact Official Logo Image */}
            <div className="h-12 w-28 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
