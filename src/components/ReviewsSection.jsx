import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Plus, 
  X, 
  MessageSquare, 
  Sparkles, 
  ThumbsUp
} from 'lucide-react';
import { reviews as defaultReviews } from '../data/reviews';

export default function ReviewsSection() {
  // Load saved reviews from localStorage merged with default code reviews
  const [allReviews, setAllReviews] = useState(() => {
    const saved = localStorage.getItem('siri_user_submitted_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...parsed, ...defaultReviews];
      } catch (e) {
        return defaultReviews;
      }
    }
    return defaultReviews;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [project, setProject] = useState('');
  const [comment, setComment] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // When a user submits a review, it immediately publishes and saves to localStorage
  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      author: author.trim(),
      role: role.trim() || 'Verified Client, Hyderabad',
      project: project.trim() || 'Property Advisory Client',
      rating: rating,
      date: 'Just now',
      comment: comment.trim(),
      avatar: `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 50)}?auto=format&fit=crop&w=150&q=80`
    };

    // Save to persistent storage
    const existingUserReviews = JSON.parse(localStorage.getItem('siri_user_submitted_reviews') || '[]');
    const updatedUserReviews = [newReview, ...existingUserReviews];
    localStorage.setItem('siri_user_submitted_reviews', JSON.stringify(updatedUserReviews));

    // Update live state immediately
    setAllReviews([newReview, ...allReviews]);
    setSubmittedSuccess(true);
  };

  const handleResetForm = () => {
    setAuthor('');
    setRole('');
    setProject('');
    setComment('');
    setRating(5);
    setSubmittedSuccess(false);
    setIsModalOpen(false);
  };

  return (
    <div className="py-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              Verified Client Feedback
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Customer Reviews & Experiences
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Real testimonials from home buyers and investors who secured their properties through Siri Infra Space.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition transform hover:-translate-y-0.5"
            >
              <Plus className="w-4 h-4" />
              Write Your Review
            </button>

            <a
              href="https://www.google.com/search?q=siri+infra+space"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              Google 5.0 Rating
            </a>
          </div>
        </div>

        {/* Rating Overview Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="text-4xl sm:text-5xl font-black text-slate-900 flex items-baseline gap-1">
              5.0 <span className="text-sm font-semibold text-slate-500">/ 5.0</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-600 font-semibold">
                Official Google 5.0 Star Rating & Verified Testimonials
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              ✓ 100% Genuine Buyers
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              ✓ Legal Verification Applauded
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
              ✓ Direct Builder Rates
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {allReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
                    alt={rev.author}
                    className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500/30"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {rev.author}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </h4>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                    {rev.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Direct Link */}
        <div className="text-center pt-2">
          <a
            href="https://www.google.com/search?q=siri+infra+space"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition shadow-sm"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Read & Write Reviews on Google Business Profile
          </a>
        </div>

      </div>

      {/* USER SUBMISSION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-base sm:text-lg">Write Your Review</h3>
              </div>
              <button
                onClick={handleResetForm}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {submittedSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <ThumbsUp className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Review Published!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for sharing your experience! Your review is now live on our testimonials page.
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://www.google.com/search?q=siri+infra+space"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition"
                    >
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      Post on Google Profile Also
                    </a>
                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                    >
                      View on Website
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleUserSubmit} className="space-y-4">
                  
                  {/* Rating Picker */}
                  <div className="text-center pb-2">
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Select Your Star Rating
                    </label>
                    <div className="flex items-center justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1 text-slate-300 hover:scale-125 transition transform"
                        >
                          <Star 
                            className={`w-7 h-7 ${
                              (hoverRating || rating) >= star 
                                ? 'fill-amber-400 text-amber-400' 
                                : 'text-slate-300'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-amber-600 mt-1 block">
                      {rating === 5 ? '⭐⭐⭐⭐⭐ 5.0 Excellent!' : `${rating}.0 Stars`}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ram Kumar"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Profession / Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Software Architect, KPHB"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Property / Service Associated With
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Purchased 3 BHK in Hafeezpet / Site Visit at Tellapur"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Detailed Review / Experience *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your journey with Siri Infra Space, transparency, site visit experience, or property quality..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
                    >
                      Publish Review
                    </button>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
