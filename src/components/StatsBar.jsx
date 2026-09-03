import React from 'react';
import { Star, ShieldCheck, Users, Building, Tag } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: Star,
      value: '5.0 ★',
      title: 'Google Rating',
      subtitle: 'Verified Client Reviews',
      accent: 'text-amber-400'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      title: 'RERA & HMDA',
      subtitle: 'Clear Title Verified',
      accent: 'text-emerald-500'
    },
    {
      icon: Tag,
      value: 'Direct',
      title: 'Builder Pricing',
      subtitle: 'Guaranteed Best Deals',
      accent: 'text-blue-500'
    },
    {
      icon: Users,
      value: '500+',
      title: 'Happy Families',
      subtitle: 'Settled Across Hyderabad',
      accent: 'text-emerald-500'
    },
    {
      icon: Building,
      value: '50+',
      title: 'Top Builders',
      subtitle: 'Exclusive Partnerships',
      accent: 'text-indigo-500'
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/80 border border-slate-200 p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.title} 
                className={`flex items-center gap-4 ${idx !== 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <Icon className={`w-6 h-6 ${stat.accent}`} />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {stat.title}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
