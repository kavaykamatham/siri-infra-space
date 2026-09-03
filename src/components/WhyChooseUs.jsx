import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  FileCheck, 
  Clock, 
  Award, 
  Check, 
  X, 
  Sparkles,
  Tag
} from 'lucide-react';

export default function WhyChooseUs({ onOpenSiteVisit }) {
  const comparisons = [
    {
      feature: 'Pricing & Cost Transparency',
      siri: 'Direct Developer Pricing & Exclusive Pre-Launch Rates',
      others: 'Intermediary markups and inflated prices',
      siriGood: true
    },
    {
      feature: 'Legal & Title Verification',
      siri: '100% RERA & HMDA Legal Due Diligence',
      others: 'Basic verification / Buyer beware',
      siriGood: true
    },
    {
      feature: 'Site Visit Assistance',
      siri: 'Complimentary Chauffeured Pickup & Drop',
      others: 'Self-arranged visits only',
      siriGood: true
    },
    {
      feature: 'Builder Inventory Access',
      siri: 'Direct Developer Inventory & Priority Unit Allotment',
      others: 'Limited secondary options',
      siriGood: true
    },
    {
      feature: 'Bank Loan Sanction Support',
      siri: 'Pre-approved loan processing with 6+ Banks',
      others: 'No dedicated home loan desk',
      siriGood: true
    },
    {
      feature: 'Hyderabad Localized Expertise',
      siri: 'Specialized KPHB, Hafeezpet & West Hyd Experts',
      others: 'Generic agents without local mastery',
      siriGood: true
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            The Siri Infra Space Advantage
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Hundreds of Hyderabad Buyers Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Experience complete transparency, verified documentation, and unmatched savings on your dream property purchase.
          </p>
        </div>

        {/* Comparison Table Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 sm:p-6 text-xs sm:text-sm font-bold">
            <div className="col-span-5 sm:col-span-4">Service Feature</div>
            <div className="col-span-7 sm:col-span-4 text-emerald-400 font-extrabold flex items-center gap-1.5">
              <span>Siri Infra Space</span>
              <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-700">Recommended</span>
            </div>
            <div className="hidden sm:block sm:col-span-4 text-slate-400">Traditional Market Agents</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comparisons.map((row, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-emerald-50/40 transition"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-slate-800">
                  {row.feature}
                </div>
                <div className="col-span-7 sm:col-span-4 font-semibold text-emerald-900 flex items-start gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.siri}</span>
                </div>
                <div className="hidden sm:flex col-span-4 text-slate-500 items-start gap-1.5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
