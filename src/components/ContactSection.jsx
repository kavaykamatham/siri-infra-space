import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  Instagram,
  Facebook
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '3 BHK Apartment',
    locality: 'Kukatpally / KPHB',
    budget: '₹75 Lakhs - ₹1.5 Cr',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Format message for WhatsApp
    const msg = encodeURIComponent(
      `*New Property Inquiry via Siri Infra Space Website*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n` +
      `🏠 *Interested In:* ${formData.propertyType}\n` +
      `📍 *Preferred Locality:* ${formData.locality}\n` +
      `💰 *Budget:* ${formData.budget}\n` +
      `📝 *Message:* ${formData.message || 'Looking for available projects.'}`
    );

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/919182854423?text=${msg}`, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Contact Siri Infra Space
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Head Office or Connect With Us
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Have questions about a project or want to schedule a property visit in Hyderabad? Our team is available 7 days a week.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Contact Info & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl p-1 shadow-md border border-emerald-500/30 overflow-hidden flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="Siri Infra Space" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Siri Infra Space</h3>
                  <p className="text-xs text-emerald-700 font-semibold">Builders & Property Advisory</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Office Location</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed mt-0.5">
                      2nd floor, H No, 5-1207 & 1184, Kukatpally Housing Board Rd, K P H B Phase 9, Hafeezpet, Hyderabad, Telangana 500085
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Hotline</span>
                    <a href="tel:+919182854423" className="text-emerald-700 font-bold hover:underline">
                      +91 91828 54423
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiries</span>
                    <a href="mailto:smrealtors7@gmail.com" className="text-slate-700 hover:text-emerald-700 font-medium">
                      smrealtors7@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <p className="text-xs text-slate-600">
                      Monday – Sunday: 10:00 AM – 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500">Social Pages:</span>
                <a
                  href="https://www.instagram.com/siriinfraspace/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-semibold transition"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/Siriinfraspace"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-semibold transition"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-600" />
                  Facebook
                </a>
              </div>
            </div>

            {/* Google Map Embed Frame */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/10]">
              <iframe
                title="Siri Infra Space Office Location KPHB Hafeezpet"
                src="https://maps.google.com/maps?q=KPHB+Phase+9+Hafeezpet+Hyderabad+Telangana+500085&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Right Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                Send a Property Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-8">
                Share your property requirements below. Our relationship manager will connect with verified floor plans, pricing sheets, and arrange a free site visit.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Inquiry Sent Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our team has received your requirement and is opening WhatsApp to share project details instantly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Email & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Looking For
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
                      >
                        <option value="2 BHK Apartment">2 BHK Apartment</option>
                        <option value="3 BHK Apartment">3 BHK Luxury Apartment</option>
                        <option value="4 BHK Sky Villa">4 BHK Sky Villa</option>
                        <option value="Gated Villa">Triplex Gated Villa</option>
                        <option value="HMDA Open Plot">HMDA Open Plot</option>
                        <option value="Commercial Office / Retail">Commercial Office / Retail</option>
                      </select>
                    </div>
                  </div>

                  {/* Locality & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Locality in Hyderabad
                      </label>
                      <select
                        value={formData.locality}
                        onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Kukatpally / KPHB">Kukatpally / KPHB Phase 9</option>
                        <option value="Hafeezpet">Hafeezpet / Miyapur</option>
                        <option value="Tellapur">Tellapur / Nallagandla</option>
                        <option value="Kokapet / Neopolis">Kokapet / Neopolis</option>
                        <option value="Financial District">Financial District / Gachibowli</option>
                        <option value="Bachupally">Bachupally / Bowrampet</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Approximate Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white"
                      >
                        <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                        <option value="₹50L - ₹85 Lakhs">₹50L - ₹85 Lakhs</option>
                        <option value="₹85L - ₹1.5 Cr">₹85L - ₹1.5 Cr</option>
                        <option value="₹1.5 Cr - ₹3.0 Cr">₹1.5 Cr - ₹3.0 Cr</option>
                        <option value="₹3.0 Cr & Above">₹3.0 Cr & Above</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Specific Requirements or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for East facing flat on higher floor with 2 car parking spots..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-600/25 transition duration-200 transform hover:scale-[1.01]"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      Submit & Connect on WhatsApp
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2">
                      🔒 100% Privacy Guaranteed. No spam calls or unsolicited distribution.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
