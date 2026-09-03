import React, { useState } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Percent, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  Building,
  ShieldCheck
} from 'lucide-react';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(6000000); // 60 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenureYears, setTenureYears] = useState(20); // 20 Years default

  // Calculate EMI
  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (P <= 0 || r <= 0 || n <= 0) return { emi: 0, totalInterest: 0, totalPayment: 0 };

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  };

  const { emi, totalInterest, totalPayment } = calculateEMI();

  const principalPercent = Math.round((loanAmount / totalPayment) * 100) || 50;
  const interestPercent = 100 - principalPercent;

  const formatCurrency = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const handleApplyLoan = () => {
    const msg = encodeURIComponent(
      `Hello Siri Infra Space, I would like to apply for Home Loan Pre-Approval for amount: ${formatCurrency(loanAmount)} for ${tenureYears} years tenure. Please guide me with bank offers.`
    );
    window.open(`https://wa.me/919182854423?text=${msg}`, '_blank');
  };

  return (
    <section id="emi-calculator" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Instant Financial Planning
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Home Loan & EMI Calculator
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Calculate your monthly repayment installments, total interest cost, and get pre-approved home loan rates from leading partner banks.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Sliders (7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Loan Amount Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <IndianRupee className="w-4 h-4 text-emerald-600" />
                    Loan Amount
                  </label>
                  <span className="text-base sm:text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={50000000}
                  step={500000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>₹10 Lakhs</span>
                  <span>₹2.5 Cr</span>
                  <span>₹5.0 Cr</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    Interest Rate (% per annum)
                  </label>
                  <span className="text-base sm:text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={7.0}
                  max={14.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>7.0%</span>
                  <span>10.5%</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Loan Tenure (Years)
                  </label>
                  <span className="text-base sm:text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                    {tenureYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                  <span>5 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Bank Partners Grid */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Pre-Approved Banking Partners:
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  {['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Kotak', 'Canara Bank'].map((b) => (
                    <span key={b} className="px-2.5 py-1 bg-slate-100 rounded-lg border border-slate-200">
                      🏦 {b}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Box (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Estimated Monthly Repayment
                </span>
                
                <div className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6">
                  ₹{emi.toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-slate-400 block mt-1">/ month</span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5 mb-6">
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div 
                      style={{ width: `${principalPercent}%` }} 
                      className="bg-emerald-500 h-full"
                    ></div>
                    <div 
                      style={{ width: `${interestPercent}%` }} 
                      className="bg-amber-400 h-full"
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-emerald-400">Principal ({principalPercent}%)</span>
                    <span className="text-amber-400">Interest ({interestPercent}%)</span>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Principal Loan Amount:</span>
                    <span className="font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Total Interest Amount:</span>
                    <span className="font-bold text-amber-300">₹{totalInterest.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800/60 font-semibold">
                    <span className="text-white">Total Amount Payable:</span>
                    <span className="font-extrabold text-emerald-400 text-sm">₹{totalPayment.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-4">
                <button
                  onClick={handleApplyLoan}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-300 hover:to-green-300 transition shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get Bank Loan Assistance
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
