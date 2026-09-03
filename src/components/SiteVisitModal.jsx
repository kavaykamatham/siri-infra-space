import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Car, 
  User, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Building,
  MapPin
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { properties } from '../data/properties';

export default function SiteVisitModal({ property, onClose }) {
  const [selectedProperty, setSelectedProperty] = useState(
    property ? property.title : properties[0].title
  );
  const [visitDate, setVisitDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 01:00 PM)');
  const [pickupNeeded, setPickupNeeded] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);

    const msg = encodeURIComponent(
      `*FREE SITE VISIT BOOKING - Siri Infra Space*\n\n` +
      `🏢 *Project:* ${selectedProperty}\n` +
      `📅 *Date:* ${visitDate || 'This Weekend'}\n` +
      `⏰ *Time Slot:* ${timeSlot}\n` +
      `🚗 *Free Pickup & Drop:* ${pickupNeeded ? `YES (From: ${pickupLocation || 'Hyderabad Address'})` : 'No (Self Drive)'}\n` +
      `👤 *Visitor Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n\n` +
      `Please confirm the visit and assign a relationship manager.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/919182854423?text=${msg}`, '_blank');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-base sm:text-lg">Book Free Guided Site Visit</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Site Visit Requested!</h4>
              <p className="text-sm text-slate-600">
                Thank you, <span className="font-bold text-slate-900">{name}</span>. Your free chauffeured site visit for <span className="font-semibold text-emerald-700">{selectedProperty}</span> has been noted. We're connecting you to WhatsApp for immediate confirmation.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-3.5 flex items-center gap-3 text-xs text-emerald-950">
                <Car className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Complimentary Service:</strong> Enjoy AC car pickup and drop from anywhere in Hyderabad with zero fees.
                </span>
              </div>

              {/* Select Property */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Project / Property
                </label>
                <select
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 bg-white"
                >
                  {properties.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.locality})
                    </option>
                  ))}
                  <option value="Custom Property Tour">Custom Guided Tour (Multiple Projects)</option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 bg-white"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                    <option value="Evening (04:00 PM - 06:30 PM)">Evening (04:00 PM - 06:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Option */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-emerald-600" />
                    Do you need Free Pickup & Drop?
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPickupNeeded(true)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                        pickupNeeded ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setPickupNeeded(false)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                        !pickupNeeded ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {pickupNeeded && (
                  <input
                    type="text"
                    placeholder="Enter your pickup area / landmark (e.g. Miyapur X Roads, Kondapur)"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-emerald-500 bg-white mt-1.5"
                  />
                )}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  Confirm Visit on WhatsApp
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
