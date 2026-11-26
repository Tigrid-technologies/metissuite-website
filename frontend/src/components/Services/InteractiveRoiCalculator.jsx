import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calculator,
  Clock,
  DollarSign,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { roiCalculatorDefaults } from "../../utils/servicesItems";

const InteractiveRoiCalculator = () => {
  const [teamSize, setTeamSize] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(65); // Average loaded hourly biotech ops rate

  // Calculated values
  const weeklyHoursSaved = Math.round(teamSize * roiCalculatorDefaults.hoursSavedPerPersonWeek);
  const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.33);
  const monthlyDollarSavings = Math.round(monthlyHoursSaved * hourlyRate);
  const annualDollarSavings = monthlyDollarSavings * 12;

  return (
    <section id="roi-calculator-section" className="relative py-16 md:py-24 border-t border-white/[0.06] bg-[#0c102c]/50">
      <div className="wrapper max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator size={13} />
            <span>Operational ROI Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            Calculate your team's <span className="text-gold font-light">efficiency return</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            See the measured impact of removing manual admin, data re-entry, and uncoordinated follow-ups across your biotech organization.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl bg-gradient-to-b from-[#18214d] via-[#121636] to-[#0c0f2a] border border-gold/30 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(232,176,75,0.15)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Selectors */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-mist/70 mb-3">
                  Select Your Team Size:
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {roiCalculatorDefaults.teamSizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        teamSize === size
                          ? "bg-gold text-midnight font-extrabold shadow-[0_0_15px_rgba(232,176,75,0.5)] scale-105"
                          : "bg-white/[0.04] border border-white/10 text-ivory hover:bg-white/[0.08]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <span className="text-[13.5px] text-mist/50 mt-2 block">
                  Commercial reps, R&D coordinators, lab managers, and leadership.
                </span>
              </div>

              {/* Slider for average loaded hourly cost */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-mist/70 mb-2">
                  <span>Avg. Blended Hourly Cost:</span>
                  <span className="text-gold font-secondary font-bold text-sm">
                    ${hourlyRate} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#e8b04b]"
                />
                <div className="flex items-center justify-between text-[13.5px] text-mist/40 mt-1">
                  <span>$40/hr (Junior ops)</span>
                  <span>$120/hr (Senior scientists / BD)</span>
                </div>
              </div>

              {/* Value proposition note */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 text-xs text-mist/85 space-y-2">
                <div className="flex items-center gap-2 text-gold font-semibold">
                  <ShieldCheck size={16} />
                  <span>Based on Verified Client Benchmarks:</span>
                </div>
                <p className="leading-relaxed">
                  Average 6.5 hours of administrative routine returned per employee each week, plus 3.4x faster conference lead-to-meeting conversion velocity.
                </p>
              </div>
            </div>

            {/* Right Column: Calculated Outputs */}
            <div className="lg:col-span-6 rounded-2xl bg-[#090c21] border border-white/10 p-6 sm:p-7 space-y-6">
              <div className="border-b border-white/[0.08] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-mist/60 block mb-1">
                  Estimated Value Returned
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-secondary text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#fde68a] to-teal">
                    ${monthlyDollarSavings.toLocaleString()}
                  </span>
                  <span className="text-sm text-mist/60 font-medium">/ month</span>
                </div>
                <span className="text-xs text-gold/90 font-medium mt-1 block">
                  ~${annualDollarSavings.toLocaleString()} in annual operational leverage
                </span>
              </div>

              {/* Time saved metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-teal text-xs font-bold mb-1">
                    <Clock size={14} />
                    <span>Monthly Hours</span>
                  </div>
                  <div className="font-secondary text-xl font-bold text-ivory">
                    {monthlyHoursSaved.toLocaleString()} hrs
                  </div>
                  <span className="text-[13px] text-mist/50">Returned to core science</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-teal text-xs font-bold mb-1">
                    <TrendingUp size={14} />
                    <span>Meeting Pace</span>
                  </div>
                  <div className="font-secondary text-xl font-bold text-ivory">
                    3.4x Faster
                  </div>
                  <span className="text-[13px] text-mist/50">From lead tap to call</span>
                </div>
              </div>

              {/* Book Walkthrough Button with Dynamic ROI */}
              <Link
                to="/book-walkthrough"
                className="w-full py-3.5 px-6 rounded-xl bg-gold text-midnight font-bold text-sm shadow-[0_0_20px_rgba(232,176,75,0.4)] hover:shadow-[0_0_30px_rgba(232,176,75,0.6)] hover:bg-[#f3be5f] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Review Your Custom ROI Model</span>
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveRoiCalculator;

