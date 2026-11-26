import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  FileText,
  Microscope,
} from "lucide-react";
import { interactiveScenarios } from "../../utils/howItWorksItems";

const categoryIcons = {
  "Events & Commercial": Building2,
  "Voice & Pipeline": Microscope,
  "Operations & Finance": FileText,
};

const BiotechScenarios = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = interactiveScenarios[selectedScenarioIndex];
  const CategoryIcon = categoryIcons[currentScenario.category] || Compass;

  return (
    <section className="relative py-16 md:py-24 border-t border-white/[0.06] bg-[#0b0e27]/70">
      <div className="wrapper">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold uppercase tracking-wider mb-3">
            <Microscope size={13} />
            <span>Real-World Scenarios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            See how it works in <span className="text-teal font-light">your routines</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            From conference floors to sterile lab procurement, watch how Metis agents compress complex biotech workflows into minutes.
          </p>
        </div>

        {/* 3 Scenario Selector Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {interactiveScenarios.map((sc, idx) => {
            const isSelected = selectedScenarioIndex === idx;

            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioIndex(idx)}
                className={`w-full sm:w-auto flex-1 p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-teal/15 border-2 border-teal shadow-[0_0_20px_rgba(46,196,182,0.2)] text-ivory scale-[1.02]"
                    : "bg-white/[0.03] border border-white/10 text-mist/70 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <div className="text-[13.5px] font-semibold text-teal mb-1">
                  Scenario 0{idx + 1}
                </div>
                <div className="text-sm font-bold truncate">
                  {sc.title}
                </div>
                <div className="mt-1 text-[13.5px] text-mist/60 flex items-center gap-1">
                  <Clock size={11} className="text-gold" />
                  <span>Saves {sc.timeSaved}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Detailed Progression */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-[#161a3f]/90 via-[#121636]/90 to-[#0c0f2a] border border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          >
            {/* Header: Title + Category + Time Saved */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08] gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-1">
                  <CategoryIcon size={14} />
                  <span>{currentScenario.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-ivory">
                  {currentScenario.title}
                </h3>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-teal/10 border border-teal/20 text-teal text-xs sm:text-sm font-bold flex items-center gap-2 self-start sm:self-auto">
                <Clock size={16} />
                <span>Impact: Saves {currentScenario.timeSaved}</span>
              </div>
            </div>

            {/* Stepper Handover Timeline */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-mist/60">
                Agent Handover Sequence:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                {currentScenario.steps.map((st, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 flex flex-col justify-between hover:border-teal/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-teal font-secondary">
                          Step 0{i + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/5 text-[13px] text-gold font-semibold">
                          {st.agent}
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-ivory mb-1.5">
                        {st.step}
                      </h5>
                      <p className="text-xs text-mist/80 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcome Banner */}
            <div className="rounded-2xl bg-gradient-to-r from-teal/15 via-[#192248] to-gold/10 border border-teal/30 p-5 flex items-start gap-3.5">
              <CheckCircle2 size={20} className="text-teal shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-ivory block mb-1.5">
                  Measured Outcome:
                </strong>
                <ul className="space-y-1 text-xs sm:text-sm text-mist/90 leading-relaxed">
                  {currentScenario.outcomes.map((out, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BiotechScenarios;

