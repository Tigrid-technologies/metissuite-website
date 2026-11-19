import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Check,
  X,
  Edit3,
  Lock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { governanceTiers } from "../../utils/howItWorksItems";

const GovernanceSimulator = () => {
  const [simulationState, setSimulationState] = useState("pending"); // pending, approved, revised, rejected
  const [activeTierIndex, setActiveTierIndex] = useState(1); // Default to Tier 2 (Supervised)

  return (
    <section id="governance-section" className="relative py-16 md:py-24 border-t border-white/[0.06]">
      <div className="wrapper">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck size={13} />
            <span>Human-in-the-Loop Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            AI does the routine. <span className="text-[#38bdf8] font-light">You keep control.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            Every critical action pauses at an intuitive verification checkpoint. You determine what executes automatically and what requires sign-off.
          </p>
        </div>

        {/* 3 Governance Tiers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {governanceTiers.map((tier, idx) => {
            const isSelected = activeTierIndex === idx;

            return (
              <button
                key={tier.tier}
                type="button"
                onClick={() => setActiveTierIndex(idx)}
                className={`relative rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-white/[0.08] border-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)] scale-[1.02]"
                    : "bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
                style={{
                  borderColor: isSelected ? tier.color : "rgba(255,255,255,0.1)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: `${tier.color}20`,
                        color: tier.color,
                      }}
                    >
                      {tier.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tier.color }} />
                  </div>

                  <h3 className="text-lg font-bold text-ivory mb-2">
                    {tier.tier}
                  </h3>

                  <p className="text-xs text-mist/80 leading-relaxed mb-4">
                    {tier.rule}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-mist/50 block">
                      Routine Examples:
                    </span>
                    {tier.actionTypes.map((action, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-ivory/80">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tier.color }} />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-mist/60">Configurable threshold</span>
                  <span style={{ color: tier.color }} className="font-semibold">
                    {isSelected ? "Active View" : "Click to inspect"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Human Checkpoint Simulator Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#18214d] via-[#121636] to-[#0b0e27] border border-teal/30 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(46,196,182,0.15)] backdrop-blur-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Interactive Checkpoint Simulator
              </span>
            </div>
            <span className="text-xs text-mist/50 font-mono">
              Action ID: #CHK-8941 • Bio-Commercial Flow
            </span>
          </div>

          <AnimatePresence mode="wait">
            {simulationState === "pending" && (
              <motion.div
                key="pending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-ivory">
                      Personalized Outreach to Dr. Elena Rostova
                    </h3>
                    <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                      Awaiting Your 1-Click Verification
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-mist/80">
                    Scribe generated this message referencing Dr. Rostova's keynote on mRNA assays at BIO 2026. Review and release with one click:
                  </p>
                </div>

                {/* Draft Preview Box */}
                <div className="rounded-2xl bg-[#0a0d22] border border-white/10 p-5 font-mono text-xs text-mist/90 space-y-3">
                  <div className="text-teal/90 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                    <span>TO: e.rostova@cambridgebiopharma.com</span>
                    <span className="text-[11px] text-mist/50">SUBJ: Scaling mRNA Assays — BIO 2026 Follow-up</span>
                  </div>
                  <p className="leading-relaxed text-ivory/90">
                    "Dr. Rostova, thank you for stopping by our booth yesterday. We reviewed Cambridge BioPharma's recent patent filing on microfluidic mRNA encapsulation—our automated QC conductor can monitor assay tolerances with 0 human bottlenecks. Would Tuesday at 10:00 AM work for a 15-minute technical demo?"
                  </p>
                  <div className="pt-2 text-[11px] text-mist/50 flex items-center justify-between border-t border-white/[0.06]">
                    <span>Agent: Scribe v2.4 (Confidence: 98.6%)</span>
                    <span className="text-teal">Context Match: 100%</span>
                  </div>
                </div>

                {/* Verification Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
                  <div className="text-xs text-mist/60 text-center sm:text-left">
                    Click an action to test the deterministic safety response:
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setSimulationState("rejected")}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-mist hover:text-red-400 hover:border-red-400/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <X size={14} />
                      <span>Reject & Halt</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSimulationState("revised")}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-mist hover:text-amber-300 hover:border-amber-300/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Edit3 size={14} />
                      <span>Edit Prompt</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSimulationState("approved")}
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-teal text-midnight text-xs font-bold shadow-[0_0_20px_rgba(46,196,182,0.4)] hover:bg-[#3de2d3] flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Check size={15} strokeWidth={2.5} />
                      <span>Approve & Dispatch</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {simulationState === "approved" && (
              <motion.div
                key="approved"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-teal shadow-[0_0_30px_rgba(46,196,182,0.4)]">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="text-2xl font-bold text-ivory">
                  Action Executed with Immutable Audit Trail!
                </h4>
                <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
                  The email was dispatched via Dispatch agent, calendar invitation links were activated, and HubSpot CRM lead was updated with timestamp <span className="font-mono text-teal">SHA-256:8b41f...Approved</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSimulationState("pending")}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-mist hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset Simulator</span>
                </button>
              </motion.div>
            )}

            {simulationState === "revised" && (
              <motion.div
                key="revised"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                  <Edit3 size={32} />
                </div>
                <h4 className="text-2xl font-bold text-ivory">
                  Context Feedback Delivered to Scribe Agent
                </h4>
                <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
                  Scribe refined the draft based on your instructions in 450ms. The revised version is returned for your final approval.
                </p>
                <button
                  type="button"
                  onClick={() => setSimulationState("pending")}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-mist hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Return to Checkpoint</span>
                </button>
              </motion.div>
            )}

            {simulationState === "rejected" && (
              <motion.div
                key="rejected"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  <X size={36} />
                </div>
                <h4 className="text-2xl font-bold text-ivory">
                  Routine Halted Safely
                </h4>
                <p className="text-xs sm:text-sm text-mist/80 max-w-lg mx-auto leading-relaxed">
                  No email was sent. No external system was touched. The routine was safely terminated and logged with your rejection feedback.
                </p>
                <button
                  type="button"
                  onClick={() => setSimulationState("pending")}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-mist hover:text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Try Again</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSimulator;

