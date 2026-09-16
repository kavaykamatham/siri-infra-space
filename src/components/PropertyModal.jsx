import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Home, 
  Maximize2, 
  ShieldCheck, 
  Download, 
  Calendar, 
  Phone, 
  Check, 
  ChevronLeft, 
  ChevronRight,
  Navigation,
  Share2,
  Layout
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function PropertyModal({ property, onClose, onOpenSiteVisit }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  if (!property) return null;

  const handleBrochureDownload = () => {
    setBrochureDownloaded(true);
    setTimeout(() => {
      alert(`Thank you! The official brochure for "${property.title}" is downloading.`);
      setBrochureDownloaded(false);
    }, 800);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello Siri Infra Space, I would like to inquire about "${property.title}" (RERA: ${property.reraNumber}) priced at ${property.price}. Please share pricing breakdown & unit availability.`
    );
    window.open(`https://wa.me/919182854423?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col border border-slate-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {property.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              RERA: {property.reraNumber}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleWhatsApp}
              className="p-2 rounded-xl text-emerald-400 hover:bg-slate-800 transition"
              title="Share via WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          
          {/* Main Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900">
                {property.title}
              </h2>
              <p className="text-sm text-slate-500 flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                {property.location}
              </p>
            </div>

            <div className="sm:text-right shrink-0 bg-emerald-50 sm:bg-transparent p-3 sm:p-0 rounded-2xl">
              <div className="text-2xl sm:text-3xl font-black text-emerald-800 sm:text-slate-900">
                {property.price}
              </div>
              <div className="text-xs font-bold text-emerald-600">
                {property.pricePerSqFt}
              </div>
            </div>
          </div>

          {/* Image Gallery with Thumbnails */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] bg-slate-900 rounded-2xl overflow-hidden">
              <img
                src={property.images[activeImageIdx]}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition backdrop-blur-sm"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-xs font-semibold backdrop-blur-sm">
                {activeImageIdx + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition ${
                    activeImageIdx === idx ? 'border-emerald-500 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Fast Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block">Configuration</span>
              <span className="font-bold text-slate-900 text-sm">{property.bhk}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Super Built-up Area</span>
              <span className="font-bold text-slate-900 text-sm">{property.size}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Possession</span>
              <span className="font-bold text-slate-900 text-sm">{property.possessionDate}</span>
            </div>
            <div>
              <span className="text-slate-500 block">RERA Registered</span>
              <span className="font-bold text-emerald-700 text-sm">{property.reraNumber}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* 🌟 PROJECT MASTER PLAN & LAYOUT BLUEPRINT SECTION */}
          {property.masterPlan && (
            <div className="space-y-4 pt-2 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Layout className="w-4 h-4 text-emerald-600" />
                  Project Master Plan & Layout Blueprint
                </h4>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Approved Layout Sanction
                </span>
              </div>

              {/* Master Plan Graphic Blueprint */}
              <div className="relative aspect-[16/9] bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <img
                  src={property.masterPlanImage || "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80"}
                  alt={`${property.title} Master Plan Blueprint`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex items-end p-4 sm:p-6">
                  <div className="text-white space-y-1">
                    <div className="text-xs sm:text-sm font-extrabold text-white flex items-center gap-2">
                      <span>{property.title} - Master Plan Blueprint</span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-semibold">
                      Total Land: {property.masterPlan.totalPlotArea} • Open Greenery: {property.masterPlan.openSpace}
                    </div>
                  </div>
                </div>
              </div>

              {/* Master Plan Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/60">
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Total Project Land</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{property.masterPlan.totalPlotArea}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Total Units / Layout</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">{property.masterPlan.totalUnits}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Open & Green Space</span>
                  <span className="font-extrabold text-emerald-700 text-xs sm:text-sm">{property.masterPlan.openSpace}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Built-Up Area</span>
                  <span className="font-bold text-slate-900 text-xs">{property.masterPlan.buildUpArea}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Project Phases</span>
                  <span className="font-bold text-slate-900 text-xs">{property.masterPlan.phases}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-slate-500 block text-[11px] font-medium">Layout Design</span>
                  <span className="font-bold text-slate-900 text-xs">{property.masterPlan.layout}</span>
                </div>
              </div>
            </div>
          )}

          {/* Amenities Grid */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              World-Class Amenities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {property.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Table */}
          {property.specifications && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Key Specifications & Quality
              </h4>
              <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-100 text-xs">
                {Object.entries(property.specifications).map(([k, v]) => (
                  <div key={k} className="flex flex-col sm:flex-row py-2.5 px-4 bg-white even:bg-slate-50/50">
                    <span className="font-bold text-slate-800 sm:w-1/3 capitalize">
                      {k.replace(/([A-Z])/g, ' $1')}
                    </span>
                    <span className="text-slate-600 sm:w-2/3 mt-0.5 sm:mt-0">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Key Landmarks */}
          {property.nearby && (
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Locality Connectivity & Proximity
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {property.nearby.map((place, idx) => (
                  <div key={idx} className="bg-emerald-50/70 border border-emerald-200/50 p-3 rounded-xl text-center">
                    <Navigation className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                    <div className="text-xs font-bold text-slate-800">{place.name}</div>
                    <div className="text-[11px] font-semibold text-emerald-700">{place.distance}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleBrochureDownload}
            disabled={brochureDownloaded}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            {brochureDownloaded ? 'Downloading Brochure...' : 'Download Project Brochure'}
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-700" />
              WhatsApp Price List
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenSiteVisit(property);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
            >
              <Calendar className="w-4 h-4" />
              Book Site Visit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
