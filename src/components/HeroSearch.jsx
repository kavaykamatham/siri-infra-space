import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  IndianRupee, 
  Key, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { properties } from '../data/properties';

export default function HeroSearch({ 
  filters, 
  setFilters, 
  onSearch, 
  propertyCount 
}) {
  const [activeTab, setActiveTab] = useState('All');

  // Automated background image slideshow with slow motion cross-fade
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      title: "Luxury Contemporary Villas"
    },
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85",
      title: "Premium High-Rise Residences"
    },
    {
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85",
      title: "Gated Enclaves in Hyderabad"
    }
  ];

  const [currentBgIdx, setCurrentBgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIdx((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const categories = ['All', 'Apartments', 'Villas', 'Plots', 'Commercial'];

  // Automated Dynamic Locality List derived from real properties + highways
  const localities = useMemo(() => {
    const defaultList = [
      'All Localities',
      'Kukatpally',
      'Miyapur',
      'Shad Nagar',
      'Kondapur',
      'Neopolis / Kokapet',
      'Hafeezpet',
      'Tellapur',
      'Financial District',
      'Bangalore Highway',
      'Mumbai Highway',
      'Srisailam Highway',
      'Warangal Highway'
    ];

    // Extract unique localities from actual properties dataset
    const propertyLocalities = properties.map(p => p.locality).filter(Boolean);
    const combined = Array.from(new Set([...defaultList, ...propertyLocalities]));
    return combined;
  }, []);

  const budgetRanges = [
    { label: 'Any Budget', value: 'all' },
    { label: 'Under ₹75 Lakhs', value: 'under-75l' },
    { label: '₹75 Lakhs - ₹1.5 Cr', value: '75l-1.5cr' },
    { label: '₹1.5 Cr - ₹3.5 Cr', value: '1.5cr-3.5cr' },
    { label: '₹3.5 Cr & Above', value: 'above-3.5cr' }
  ];

  const bhkOptions = ['Any BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'];
  const possessionOptions = ['Any Possession', 'Ready to Move', 'Under Construction', 'New Launch'];

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setFilters(prev => ({
      ...prev,
      category: cat
    }));
  };

  const handleQuickChip = (locality, category, bhk = 'Any BHK') => {
    setFilters(prev => ({
      ...prev,
      locality: locality,
      category: category,
      bhk: bhk
    }));
    onSearch();
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      
      {/* Automated Slow-Motion Ken-Burns Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
        {backgroundImages.map((bg, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentBgIdx === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div
              className={`w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-out ${
                currentBgIdx === idx ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${bg.url}')` }}
            ></div>
          </div>
        ))}

        {/* Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-bold mb-4 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Hyderabad's Trusted Real Estate Builders & Advisory
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 text-white drop-shadow-md">
            Find Your Dream Home in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-emerald-400">
              Hyderabad's Prime Locations
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow">
            Verified luxury apartments, gated villas, commercial spaces, and HMDA-sanctioned open plots across Miyapur, Kukatpally, Shad Nagar, Kondapur, Neopolis, and Major Highways.
          </p>
        </div>

        {/* Clean, Bright Search Widget */}
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl shadow-slate-950/30">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 pb-4 sm:pb-5 overflow-x-auto no-scrollbar border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? 'All Properties' : cat}
              </button>
            ))}
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            
            {/* Locality Selector */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                Select Locality
              </label>
              <div className="relative">
                <select
                  value={filters.locality}
                  onChange={(e) => setFilters({ ...filters, locality: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-3 border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition appearance-none cursor-pointer"
                >
                  {localities.map((loc) => (
                    <option key={loc} value={loc} className="py-1">
                      {loc}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>
            </div>

            {/* BHK / Units */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Home className="w-3.5 h-3.5 text-emerald-600" />
                Configuration (BHK)
              </label>
              <div className="relative">
                <select
                  value={filters.bhk}
                  onChange={(e) => setFilters({ ...filters, bhk: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-3 border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition appearance-none cursor-pointer"
                >
                  {bhkOptions.map((bhk) => (
                    <option key={bhk} value={bhk} className="py-1">
                      {bhk}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>
            </div>

            {/* Budget Range */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                Budget Range
              </label>
              <div className="relative">
                <select
                  value={filters.budget}
                  onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-3 border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition appearance-none cursor-pointer"
                >
                  {budgetRanges.map((b) => (
                    <option key={b.value} value={b.value} className="py-1">
                      {b.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>
            </div>

            {/* Possession Status */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Key className="w-3.5 h-3.5 text-emerald-600" />
                Possession Status
              </label>
              <div className="relative">
                <select
                  value={filters.possession}
                  onChange={(e) => setFilters({ ...filters, possession: e.target.value })}
                  className="w-full bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold rounded-xl px-3.5 py-3 border border-slate-300 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition appearance-none cursor-pointer"
                >
                  {possessionOptions.map((pos) => (
                    <option key={pos} value={pos} className="py-1">
                      {pos}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  ▼
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left font-medium">
              Showing <span className="text-emerald-700 font-extrabold">{propertyCount} verified properties</span> matching your search
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setFilters({
                    category: 'All',
                    locality: 'All Localities',
                    bhk: 'Any BHK',
                    budget: 'all',
                    possession: 'Any Possession'
                  });
                  setActiveTab('All');
                }}
                className="px-4 py-3 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                Reset
              </button>

              <button
                onClick={onSearch}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition duration-200 transform hover:scale-[1.02]"
              >
                <Search className="w-4 h-4" />
                Explore Projects
              </button>
            </div>
          </div>

          {/* Trending Hot Searches Chips */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              Quick Searches:
            </span>
            <button
              onClick={() => handleQuickChip('Miyapur', 'Apartments')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-medium transition"
            >
              🏬 Primark Miyapur
            </button>
            <button
              onClick={() => handleQuickChip('Kukatpally', 'Apartments')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-medium transition"
            >
              🏢 Candeur & Godrej Kukatpally
            </button>
            <button
              onClick={() => handleQuickChip('Shad Nagar', 'Apartments')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-medium transition"
            >
              🌱 Urbanrise Shadnagar
            </button>
            <button
              onClick={() => handleQuickChip('Neopolis / Kokapet', 'Apartments')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-medium transition"
            >
              💎 Brigade Neopolis
            </button>
            <button
              onClick={() => handleQuickChip('Kondapur', 'Apartments')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 font-medium transition"
            >
              ✨ Auro Kondapur
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
