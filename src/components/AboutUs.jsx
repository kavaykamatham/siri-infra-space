import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  HeartHandshake,
  Calendar,
  UserCheck,
  Briefcase,
  Quote,
  Mail,
  Phone
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function AboutUs({ onOpenSiteVisit }) {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "100% Legal & RERA Clarity",
      desc: "Every property we showcase undergoes strict title scrutiny, HMDA/GHMC sanction approvals, and RERA registration checks before reaching you."
    },
    {
      icon: Award,
      title: "Direct Developer Pricing & Exclusive Deals",
      desc: "We provide direct developer inventory with guaranteed transparent pricing, maximum pre-launch discounts, and exclusive builder promotions."
    },
    {
      icon: HeartHandshake,
      title: "End-to-End Buyer Support",
      desc: "From complimentary chauffeured site visits and floor plan assessments to home loan approvals and property registration, our team manages everything."
    },
    {
      icon: Users,
      title: "Customer-Centric Advisory",
      desc: "We analyze your exact budget, family requirements, commute times, and Vaastu preferences to find the perfect property match in Hyderabad."
    }
  ];

  const milestones = [
    { number: "500+", label: "Happy Families Settled" },
    { number: "50+", label: "Top Hyderabad Builder Tie-ups" },
    { number: "100%", label: "RERA & HMDA Verified Listings" },
    { number: "5.0 ★", label: "Google Customer Rating" }
  ];

  // Leadership & Founders Data
  const leaders = [
    {
      roleTitle: "Founder & Managing Director",
      name: "Founder & Managing Director",
      subtitle: "Strategic Growth & Developer Partnerships",
      experience: "12+ Years in Hyderabad Real Estate",
      avatarPlaceholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      bio: "Leads the overall strategic direction, corporate governance, and developer alliances for Siri Infra Space. Dedicated to pioneering a transparent, client-first property acquisition model in Hyderabad with 100% legal clarity.",
      responsibilities: [
        "High-value developer partnerships across KPHB, Hafeezpet, Kokapet & Financial District",
        "100% title scrutiny & RERA/HMDA regulatory compliance supervision",
        "Ensuring direct developer pricing and transparent negotiations for home buyers"
      ],
      quote: "Our goal from day one has been simple — bringing complete transparency, zero hidden charges, and direct builder pricing to every family in Hyderabad.",
      skills: ["Strategic Acquisitions", "Builder Alliances", "Legal Title Due Diligence", "Market Advisory"]
    },
    {
      roleTitle: "Co-Founder & Chief Operating Officer",
      name: "Co-Founder & Chief Operating Officer",
      subtitle: "Client Operations & Financial Sanctions",
      experience: "10+ Years in Property Advisory & Banking",
      avatarPlaceholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      bio: "Drives day-to-day operations, buyer relationship management, and customized property consultations. Heads the specialized home loan desk and complimentary chauffeured site visit operations across Hyderabad.",
      responsibilities: [
        "Managing client advisory, personalized consultations & tailored requirement matching",
        "Supervising end-to-end site visit operations with complimentary chauffeured pickup & drop",
        "Leading the fast-track home loan processing desk with SBI, HDFC, ICICI, and Axis Bank"
      ],
      quote: "We treat every client's home search with the utmost care. From your first site tour to the day you receive your house keys, our team stands by your side.",
      skills: ["Client Relationship Management", "Free Site Visit Operations", "Home Loan Sanctions", "Vaastu Consultation"]
    }
  ];

  return (
    <div className="py-12 bg-slate-50 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            About Siri Infra Space
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Building Trust & Delivering Dream Homes in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Headquartered in KPHB Phase 9, Hafeezpet, <strong>Siri Infra Space</strong> is Hyderabad's premier real estate consultancy and builder advisory firm dedicated to simplifying property acquisition with complete transparency.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Journey & Purpose
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Founded with the vision to eliminate guesswork, inflated prices, and legal complexities in Hyderabad's booming real estate market, <strong>Siri Infra Space</strong> has grown to become one of the most dependable property advisory firms in the Western Hyderabad corridor.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We specialize in premium high-rise apartments, luxury gated triplex villas, HMDA-sanctioned residential plots, and Grade-A commercial spaces across <strong>Kukatpally, KPHB, Hafeezpet, Miyapur, Kokapet, Financial District, Tellapur, and Bachupally</strong>.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Head Office: KPHB Phase 9, Hafeezpet, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operating Hours: Monday – Sunday, 10:00 AM – 6:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Hotline: +91 91828 54423</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Siri Infra Space Luxury Real Estate" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="text-lg font-bold">Siri Infra Space</div>
                <div className="text-xs text-emerald-400 font-medium">KPHB Phase 9, Hafeezpet, Hyderabad</div>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 LEADERSHIP & FOUNDERS SECTION */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              Leadership & Founding Team
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Meet the Visionaries Behind Siri Infra Space
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Experienced real estate leaders dedicated to bringing transparency, legal security, and the best property deals to home seekers across Hyderabad.
            </p>
          </div>

          {/* Founder & Co-Founder Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  {/* Top Profile Header */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    
                    {/* Portrait Placeholder */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 border-2 border-emerald-500/40 shadow-md shrink-0 group">
                      <img
                        src={leader.avatarPlaceholder}
                        alt={leader.roleTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 py-0.5 text-[9px] font-bold text-emerald-400 text-center uppercase tracking-wider">
                        Leadership
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                        {leader.roleTitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700">
                        {leader.subtitle}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {leader.experience}
                      </p>
                    </div>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Key Roles & Responsibilities */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Key Roles & Responsibilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {leader.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Personal Quote */}
                  <div className="relative bg-emerald-50/70 border border-emerald-200/70 p-4 rounded-2xl text-xs italic text-emerald-950 space-y-1">
                    <Quote className="w-4 h-4 text-emerald-600 mb-1" />
                    <p>"{leader.quote}"</p>
                  </div>
                </div>

                {/* Skills & Focus Pills */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {leader.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/919182854423?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20the%20leadership%20team%20at%20Siri%20Infra%20Space."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                    Connect
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-emerald-800 text-white rounded-3xl p-8 space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              To empower every home seeker and investor in Hyderabad with verified property options, direct builder pricing, unbiased advice, and seamless legal assistance, making real estate purchases secure and stress-free.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To be Hyderabad's most trusted and technologically advanced real estate advisory, known for unmatched ethical standards, client satisfaction, and long-term value creation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              What sets Siri Infra Space apart in the Hyderabad real estate ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Milestones */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {milestones.map((m, idx) => (
              <div key={idx} className={`${idx !== 0 ? 'pt-4 sm:pt-0' : ''}`}>
                <div className="text-3xl sm:text-4xl font-black text-emerald-600">{m.number}</div>
                <div className="text-xs font-bold text-slate-700 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have Questions or Need Advisory?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our property advisors or book a complimentary site visit.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/919182854423?text=Hi%20Siri%20Infra%20Space%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20properties."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs sm:text-sm font-bold transition flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => onOpenSiteVisit()}
              className="px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs sm:text-sm font-bold transition flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-emerald-600" />
              Book Free Site Visit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
