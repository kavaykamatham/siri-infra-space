import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { 
  Building, 
  Home, 
  Sparkles, 
  SlidersHorizontal, 
  ArrowUpDown,
  FilterX
} from 'lucide-react';

export default function PropertyGrid({ 
  properties, 
  filters, 
  setFilters, 
  onSelectProperty, 
  onOpenSiteVisit 
}) {
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'All', label: 'All Properties' },
    { id: 'Apartments', label: 'Luxury Apartments' },
    { id: 'Villas', label: 'Gated Villas' },
    { id: 'Plots', label: 'HMDA Open Plots' },
    { id: 'Commercial', label: 'Commercial' },
  ];

  // Smart Filtering logic
  const filtered = properties.filter((item) => {
    // Category
    if (filters.category !== 'All' && item.category !== filters.category) {
      return false;
    }

    // Locality (Smart flexible matching for Kukatpally, Miyapur, Shadnagar, Neopolis, Kondapur, Highways, etc.)
    if (filters.locality !== 'All Localities') {
      const selectedLoc = filters.locality.toLowerCase();
      const itemLoc = (item.locality || '').toLowerCase();
      const itemLocation = (item.location || '').toLowerCase();
      const itemTitle = (item.title || '').toLowerCase();

      const isKukatpally = selectedLoc.includes('kukatpally') || selectedLoc.includes('kphb');
      const isHafeezpetMiyapur = selectedLoc.includes('hafeezpet') || selectedLoc.includes('miyapur');
      const isBangaloreShadnagar = selectedLoc.includes('bangalore') || selectedLoc.includes('shadnagar') || selectedLoc.includes('shad nagar');
      const isKokapetNeopolis = selectedLoc.includes('kokapet') || selectedLoc.includes('neopolis');
      const isKondapur = selectedLoc.includes('kondapur');
      const isTellapur = selectedLoc.includes('tellapur');
      const isFinancialDistrict = selectedLoc.includes('financial');
      const isBachupally = selectedLoc.includes('bachupally');
      const isMumbai = selectedLoc.includes('mumbai');
      const isSrisailam = selectedLoc.includes('srisailam');
      const isWarangal = selectedLoc.includes('warangal');

      if (isKukatpally && (itemLoc.includes('kukatpally') || itemLoc.includes('kphb') || itemLocation.includes('kukatpally') || itemTitle.includes('kukatpally'))) {
        // match Kukatpally
      } else if (isHafeezpetMiyapur && (itemLoc.includes('hafeezpet') || itemLoc.includes('miyapur') || itemLocation.includes('hafeezpet') || itemLocation.includes('miyapur') || itemTitle.includes('miyapur'))) {
        // match Hafeezpet & Miyapur
      } else if (isBangaloreShadnagar && (itemLoc.includes('bangalore') || itemLoc.includes('shadnagar') || itemLoc.includes('shad nagar') || itemLocation.includes('bangalore') || itemTitle.includes('shad nagar') || itemTitle.includes('shadnagar'))) {
        // match Bangalore Highway & Shadnagar
      } else if (isKokapetNeopolis && (itemLoc.includes('kokapet') || itemLoc.includes('neopolis') || itemLocation.includes('kokapet') || itemLocation.includes('neopolis') || itemTitle.includes('neopolis'))) {
        // match Kokapet & Neopolis
      } else if (isKondapur && (itemLoc.includes('kondapur') || itemLocation.includes('kondapur') || itemTitle.includes('kondapur'))) {
        // match Kondapur
      } else if (isTellapur && (itemLoc.includes('tellapur') || itemLocation.includes('tellapur') || itemTitle.includes('tellapur'))) {
        // match Tellapur
      } else if (isFinancialDistrict && (itemLoc.includes('financial') || itemLocation.includes('financial') || itemTitle.includes('financial'))) {
        // match Financial District
      } else if (isBachupally && (itemLoc.includes('bachupally') || itemLocation.includes('bachupally') || itemTitle.includes('bachupally'))) {
        // match Bachupally
      } else if (isMumbai && (itemLoc.includes('mumbai') || itemLocation.includes('mumbai'))) {
        // match Mumbai Highway
      } else if (isSrisailam && (itemLoc.includes('srisailam') || itemLocation.includes('srisailam'))) {
        // match Srisailam Highway
      } else if (isWarangal && (itemLoc.includes('warangal') || itemLocation.includes('warangal'))) {
        // match Warangal Highway
      } else if (itemLoc === selectedLoc || itemLocation.includes(selectedLoc) || itemTitle.includes(selectedLoc)) {
        // match direct string
      } else {
        return false;
      }
    }

    // BHK
    if (filters.bhk !== 'Any BHK') {
      if (!item.bhk.includes(filters.bhk.replace(' BHK', ''))) {
        return false;
      }
    }

    // Possession
    if (filters.possession !== 'Any Possession' && item.possession !== filters.possession) {
      return false;
    }

    // Budget
    if (filters.budget === 'under-75l' && item.priceNumeric > 7500000) return false;
    if (filters.budget === '75l-1.5cr' && (item.priceNumeric < 7500000 || item.priceNumeric > 15000000)) return false;
    if (filters.budget === '1.5cr-3.5cr' && (item.priceNumeric < 15000000 || item.priceNumeric > 35000000)) return false;
    if (filters.budget === 'above-3.5cr' && item.priceNumeric < 35000000) return false;

    return true;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.priceNumeric - b.priceNumeric;
    if (sortBy === 'price-high') return b.priceNumeric - a.priceNumeric;
    return b.featured ? 1 : -1;
  });

  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Verified Hyderabad Projects
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Properties & New Launches
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Handpicked premium high-rises, gated communities, and investment-grade plots with 100% legal clarity.
            </p>
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm text-xs font-medium text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-emerald-600" />
              <label htmlFor="sort-select" className="text-slate-500">Sort by:</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured / Best Match</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilters({ ...filters, category: cat.id })}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                filters.category === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Filter Chips Bar (if filtered) */}
        {(filters.locality !== 'All Localities' || filters.bhk !== 'Any BHK' || filters.budget !== 'all' || filters.possession !== 'Any Possession') && (
          <div className="flex flex-wrap items-center gap-2 mb-6 bg-emerald-50/70 border border-emerald-200/60 p-3 rounded-xl text-xs text-slate-700">
            <span className="font-bold text-emerald-900">Active Filters:</span>
            {filters.locality !== 'All Localities' && (
              <span className="px-2.5 py-1 bg-white rounded-lg border border-emerald-300 font-semibold text-emerald-800">
                📍 {filters.locality}
              </span>
            )}
            {filters.bhk !== 'Any BHK' && (
              <span className="px-2.5 py-1 bg-white rounded-lg border border-emerald-300 font-semibold text-emerald-800">
                🛏️ {filters.bhk}
              </span>
            )}
            {filters.budget !== 'all' && (
              <span className="px-2.5 py-1 bg-white rounded-lg border border-emerald-300 font-semibold text-emerald-800">
                💰 Budget Filtered
              </span>
            )}
            {filters.possession !== 'Any Possession' && (
              <span className="px-2.5 py-1 bg-white rounded-lg border border-emerald-300 font-semibold text-emerald-800">
                🔑 {filters.possession}
              </span>
            )}
            <button
              onClick={() => setFilters({
                category: 'All',
                locality: 'All Localities',
                bhk: 'Any BHK',
                budget: 'all',
                possession: 'Any Possession'
              })}
              className="ml-auto text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <FilterX className="w-3.5 h-3.5" />
              Clear All
            </button>
          </div>
        )}

        {/* Properties Grid */}
        {sorted.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sorted.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onOpenSiteVisit={onOpenSiteVisit}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              No matching properties found
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Try adjusting your locality, BHK configuration or budget filter to view available projects.
            </p>
            <button
              onClick={() => setFilters({
                category: 'All',
                locality: 'All Localities',
                bhk: 'Any BHK',
                budget: 'all',
                possession: 'Any Possession'
              })}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
