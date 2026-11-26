import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Cpu,
  Zap,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";
import { architectureStages } from "../../utils/howItWorksItems";

const ArchitecturePipeline = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const currentStage = architectureStages[activeStageIndex];

  return (
    <section id="architecture-pipeline-section" className="relative py-16 md:py-24 border-t border-white/[0.06]">
      <div className="wrapper">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers size={13} />
            <span>End-to-End Operating Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            How data flows through <span className="text-teal font-light">MetisSuite</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            Every biotech workflow transitions through 4 deterministic stages, ensuring high operational velocity without sacrificing safety.
          </p>
        </div>

        {/* Stage Navigation Stepper (Interactive 4 Steps) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-5xl mx-auto">
          {architectureStages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`relative rounded-2xl p-4 sm:p-5 text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-b from-[#18214d] via-[#141b3d] to-[#0e122b] border-2 border-teal shadow-[0_0_25px_rgba(46,196,182,0.25)] scale-[1.02]"
                    : "bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05]"
                }`}
              >
                {/* Active Indicator Top Light Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activePipelineIndicator"
                    className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal to-gold"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-secondary text-xs font-bold tracking-wider ${
                      isActive ? "text-teal" : "text-mist/50"
                    }`}
                  >
                    STAGE {stage.stepNumber}
                  </span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
                  ) : (
                    <span className="text-[13.5px] text-mist/40 font-mono">0{idx + 1}</span>
                  )}
                </div>

                <div
                  className={`text-sm sm:text-base font-bold transition-colors ${
                    isActive ? "text-ivory" : "text-mist/80"
                  }`}
                >
                  {stage.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Stage Content Detail View (Split Screen) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#161a3f]/90 via-[#121636]/95 to-[#0b0e27] border border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Explanation & Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-gold bg-gold/10 border border-gold/20 mb-3">
                    <Sparkles size={13} />
                    <span>Stage {currentStage.stepNumber} of 04</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-ivory tracking-tight">
                    {currentStage.name}
                  </h3>
                  <p className="text-sm font-medium text-teal mt-1">
                    {currentStage.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-mist/85 leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Inbound Inputs List */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mist/60 mb-3">
                    Inputs & Modalities Handled:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentStage.inputs.map((input, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-ivory"
                      >
                        <CheckCircle2 size={14} className="text-teal shrink-0" />
                        <span>{input}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key System Benefit */}
                <div className="rounded-2xl bg-teal/10 border border-teal/20 p-4 flex items-start gap-3 text-xs sm:text-sm text-ivory">
                  <ShieldCheck size={18} className="text-teal shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-teal block font-semibold mb-0.5">Architectural Benefit:</strong>
                    <span className="text-mist/90">{currentStage.benefit}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Telemetry Payload Viewer */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-[#090c21] border border-white/10 p-5 font-mono shadow-inner relative overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-xs text-mist/60">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-ivory/70 text-[13.5px]">telemetry.json</span>
                    </div>
                    <span className="text-[13px] text-teal font-semibold">STAGE ACTIVE</span>
                  </div>

                  {/* Terminal Body */}
                  <div className="text-xs space-y-2 text-mist/90">
                    <div className="text-teal/80 font-bold mb-2">
                      // Real-Time System State:
                    </div>
                    {Object.entries(currentStage.outputPayload).map(([key, val]) => (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                        <span className="text-gold/90 shrink-0">"{key}":</span>
                        <span className="text-ivory font-light truncate">
                          {Array.isArray(val) ? JSON.stringify(val) : `"${val}"`}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Simulated Status Bar */}
                  <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[13px] text-mist/50">
                    <span>Protocol: MetisOS v2.4</span>
                    <span className="text-teal">Lat: 42ms • Status: 200 OK</span>
                  </div>
                </div>

                {/* Stage Progression Buttons */}
                <div className="mt-4 flex items-center justify-between text-xs text-mist">
                  <button
                    type="button"
                    disabled={activeStageIndex === 0}
                    onClick={() => setActiveStageIndex((p) => p - 1)}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous Stage
                  </button>
                  <span className="text-mist/50">
                    {activeStageIndex + 1} / {architectureStages.length}
                  </span>
                  <button
                    type="button"
                    disabled={activeStageIndex === architectureStages.length - 1}
                    onClick={() => setActiveStageIndex((p) => p + 1)}
                    className="px-3 py-1.5 rounded-lg bg-teal/20 text-teal border border-teal/40 hover:bg-teal/30 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>Next Stage</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArchitecturePipeline;

