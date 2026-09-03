import React from 'react';
import HeroSearch from './HeroSearch';
import BuilderMarquee from './BuilderMarquee';
import StatsBar from './StatsBar';
import PropertyCard from './PropertyCard';
import { 
  Building, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Calendar
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { properties } from '../data/properties';
import { services } from '../data/services';
import { reviews } from '../data/reviews';

export default function HomePage({
  filters,
  setFilters,
  onNavigateToProperties,
  onNavigateToServices,
  onNavigateToReviews,
  onNavigateToContact,
  onSelectProperty,
  onOpenSiteVisit
}) {
  const featuredProperties = properties.slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredReviews = reviews.slice(0, 2);

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. Hero with Automated Background Slideshow & Property Search */}
      <HeroSearch
        filters={filters}
        setFilters={setFilters}
        onSearch={onNavigateToProperties}
        propertyCount={properties.length}
      />

      {/* 2. Top Builder & Authority Infinite Scrolling Marquee */}
      <BuilderMarquee />

      {/* 3. Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StatsBar />
      </div>

      {/* 4. Featured Properties Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Handpicked Residences
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Luxury Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Top-selling gated apartments, luxury villas, and plots in Hyderabad with 100% RERA compliance.
            </p>
          </div>

          <button
            onClick={onNavigateToProperties}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm"
          >
            <span>View All Properties ({properties.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onSelect={onSelectProperty}
              onOpenSiteVisit={onOpenSiteVisit}
            />
          ))}
        </div>
      </section>

      {/* 5. Advisory Services Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Building className="w-3.5 h-3.5 text-emerald-600" />
            Advisory Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Real Estate Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Complete buyer advisory with direct developer prices, legal due diligence, and best price assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((srv) => (
            <div key={srv.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="font-bold text-slate-900 text-base">{srv.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{srv.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition"
          >
            <span>View All Services & Bank Loans</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. Google 5.0 Reviews Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-2">5.0 Star Google Rating</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                What Hyderabad Buyers Say About Us
              </h2>
            </div>

            <button
              onClick={onNavigateToReviews}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300"
            >
              <span>Read All Customer Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((rev) => (
              <div key={rev.id} className="bg-slate-800/90 border border-slate-700 rounded-2xl p-5 space-y-3">
                <p className="text-xs text-slate-300 italic">"{rev.comment}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700">
                  <img src={rev.avatar} alt={rev.author} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{rev.author}</h4>
                    <p className="text-[11px] text-slate-400">{rev.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quick Action Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-700 text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold">Ready to Visit Your Next Home?</h3>
            <p className="text-xs sm:text-sm text-emerald-100">
              Book a complimentary chauffeured property tour in KPHB, Hafeezpet, Tellapur, or Kokapet.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20am%20interested%20in%20visiting%20properties%20in%20Hyderabad."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs sm:text-sm font-bold transition flex items-center gap-2 shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-700" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => onOpenSiteVisit()}
              className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-bold transition shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              Book Free Site Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
