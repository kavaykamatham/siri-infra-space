import React from 'react';
import { 
  MapPin, 
  Home, 
  Maximize2, 
  ShieldCheck, 
  Calendar, 
  Eye
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function PropertyCard({ property, onSelect, onOpenSiteVisit }) {
  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const msg = encodeURIComponent(
      `Hi Siri Infra Space, I am interested in "${property.title}" located at ${property.location}. Price: ${property.price}. Please share brochure & available units.`
    );
    window.open(`https://wa.me/919182854423?text=${msg}`, '_blank');
  };

  const handleSiteVisit = (e) => {
    e.stopPropagation();
    onOpenSiteVisit(property);
  };

  return (
    <div 
      onClick={() => onSelect(property)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Property Image & Overlays */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {property.badge}
            </span>
            {property.tag && (
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 shadow-sm">
                {property.tag}
              </span>
            )}
          </div>

          <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
            {property.category}
          </span>
        </div>

        {/* Bottom Price on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none">
          <div>
            <div className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
              {property.price}
            </div>
            <div className="text-[11px] font-semibold text-emerald-300 drop-shadow">
              {property.pricePerSqFt}
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block px-2 py-0.5 rounded bg-emerald-600 text-[10px] font-bold uppercase tracking-wider text-white">
              {property.possession}
            </span>
          </div>
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Location */}
          <div className="mb-3">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition line-clamp-1">
              {property.title}
            </h3>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1 line-clamp-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              {property.location}
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-slate-100 my-3 bg-slate-50/60 rounded-xl px-3 text-xs">
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Home className="w-3.5 h-3.5 text-emerald-600" />
              <span>{property.bhk}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{property.size}</span>
            </div>
          </div>

          {/* Amenities Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {property.amenities.slice(0, 3).map((amenity, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/60"
              >
                ✓ {amenity}
              </span>
            ))}
            {property.amenities.length > 3 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600">
                +{property.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(property)}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition"
            >
              <Eye className="w-3.5 h-3.5 text-slate-500" />
              View Details
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
              WhatsApp
            </button>
          </div>

          <button
            onClick={handleSiteVisit}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            Book Site Visit
          </button>
        </div>

      </div>
    </div>
  );
}
