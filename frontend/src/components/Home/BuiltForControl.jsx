import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Database,
  GitFork,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  UserCheck,
  Check,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import {
  controlSectionData,
  controlPillars,
} from "../../utils/builtForControlItems";

// Card 01 Interactive Widget: Approval Checkpoint
const ApprovalWidget = ({ mockData, accent }) => {
  const [approved, setApproved] = useState(false);

  return (
    <div className="mt-5 p-4 rounded-2xl bg-[#0d112d]/90 border border-white/10 relative overflow-hidden shadow-inner">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-[13px] font-mono tracking-wider uppercase text-mist/65">
          {mockData.actionType}
        </span>
        <motion.div
          animate={{ scale: approved ? [1, 1.08, 1] : 1 }}
          transition={{ duration: 0.3 }}
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[13px] font-semibold transition-colors duration-300 ${
            approved
              ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400"
              : "bg-amber-500/15 border border-amber-500/30 text-amber-400"
          }`}
        >
          {approved ? (
            <>
              <CheckCircle2 size={13} strokeWidth={2.5} />
              <span>{mockData.statusApproved}</span>
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>{mockData.statusPending}</span>
            </>
          )}
        </motion.div>
      </div>

      <div className="space-y-1 mb-4">
        <p className="text-[16px] font-semibold text-ivory">
          {mockData.recipient}
        </p>
        <p className="text-[14.5px] font-mono text-mist/75">
          Value:{" "}
          <span className="text-amber-400 font-bold">{mockData.amount}</span>
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/[0.08]">
        <span className="text-[13.5px] text-mist/60 truncate max-w-[170px]">
          {approved ? `Approved by Dr. Vance` : `Requires sign-off`}
        </span>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setApproved(!approved)}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-md ${
            approved
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30"
              : "bg-gradient-to-r from-amber-500 to-orange-500 text-midnight font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)]"
          }`}
        >
          {approved ? (
            <>
              <RefreshCw size={12} />
              <span>Reset</span>
            </>
          ) : (
            <>
              <Check size={13} strokeWidth={2.5} />
              <span>Approve Action</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};

// Card 02 Interactive Widget: Connected Context Stream
const ContextWidget = ({ modules, accent }) => {
  const [activeMod, setActiveMod] = useState(0);

  return (
    <div className="mt-5 p-4 rounded-2xl bg-[#0d112d]/90 border border-white/10 relative overflow-hidden shadow-inner">
      <div className="flex items-center gap-1.5 mb-3 bg-black/25 p-1 rounded-xl border border-white/5">
        {modules.map((m, idx) => (
          <button
            key={m.name}
            onClick={() => setActiveMod(idx)}
            className={`flex-1 py-1.5 px-2 rounded-lg text-[13px] font-medium transition-all duration-200 text-center truncate ${
              activeMod === idx
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                : "text-mist/60 hover:text-mist hover:bg-white/5 border border-transparent"
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeMod}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="space-y-2 py-1"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="text-cyan-400 font-mono text-[13px] font-semibold">
              ● {modules[activeMod].tag} Stream
            </span>
            <span className="text-[12.5px] text-mist/60">Synced just now</span>
          </div>
          <p className="text-[15px] text-ivory/90 font-medium leading-relaxed">
            {modules[activeMod].detail}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[13px] text-mist/65">
        <span>Connected graph</span>
        <span className="text-cyan-400 font-mono font-medium">3/3 Sync Active</span>
      </div>
    </div>
  );
};

// Card 03 Interactive Widget: Accountable Next Steps
const HandoffWidget = ({ steps, accent }) => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="mt-5 p-4 rounded-2xl bg-[#0d112d]/90 border border-white/10 relative overflow-hidden shadow-inner space-y-3">
      {steps.map((step, idx) => {
        const isDone = idx < currentStep;
        const isCurrent = idx === currentStep;

        return (
          <div
            key={step.label}
            onClick={() => setCurrentStep(idx)}
            className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
              isCurrent
                ? "bg-purple-500/15 border-purple-500/40 shadow-sm"
                : isDone
                ? "bg-white/[0.02] border-white/5 opacity-80"
                : "bg-transparent border-transparent opacity-50"
            }`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span
                className={`text-[14.5px] font-semibold ${
                  isCurrent
                    ? "text-purple-300"
                    : isDone
                    ? "text-ivory"
                    : "text-mist/60"
                }`}
              >
                {step.label}
              </span>
              <span
                className={`text-[12.5px] font-mono px-2 py-0.5 rounded-full ${
                  isCurrent
                    ? "bg-purple-500/25 text-purple-300 border border-purple-500/40"
                    : isDone
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                    : "bg-white/5 text-mist/40"
                }`}
              >
                {isDone ? "Done" : isCurrent ? "Active" : "Queued"}
              </span>
            </div>

            <div className="flex items-center justify-between text-[13px] text-mist/65">
              <span>Owner: <strong className="text-ivory/85 font-medium">{step.owner}</strong></span>
              <span className="font-mono text-[12.5px]">{isDone ? "100%" : isCurrent ? "In review" : "Waiting"}</span>
            </div>
          </div>
        );
      })}

      <div className="pt-1 flex items-center justify-between text-[13px] text-mist/65">
        <span>Click stage to switch owner</span>
        <span className="text-purple-400 font-mono">Stage 2 of 3</span>
      </div>
    </div>
  );
};

const BuiltForControl = () => {
  const { badgeNumber, badgeLabel, headingLine1, headingLine2, description } =
    controlSectionData;

  return (
    <section className="relative py-20 md:py-28 wrapper select-none">
      {/* --- Section Header (Split Layout from Reference) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-14 md:mb-16 text-left">
        {/* Left Column: Pill & Multi-Color Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10 border border-teal/20 backdrop-blur-lg">
            <span className="w-5 h-5 rounded-full border border-teal text-[12px] flex items-center justify-center font-mono font-bold">
              {badgeNumber}
            </span>
            <span className="tracking-wider uppercase text-[13px] font-bold">
              {badgeLabel}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight text-ivory leading-[1.1]">
            {headingLine1}
            <br />
            <span className="bg-gradient-to-r from-teal via-gold to-purple-400 bg-clip-text text-transparent font-medium">
              {headingLine2}
            </span>
          </h2>
        </motion.div>

        {/* Right Column: Bullet Highlights */}
        <motion.ul
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 text-mist/85 text-[17px] md:text-[18px] leading-relaxed space-y-2.5"
        >
          <li className="flex items-start gap-2.5">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            <span>{description}</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
            <span>Tailored for life-science teams requiring strict oversight on external communications and spend.</span>
          </li>
        </motion.ul>
      </div>

      {/* --- 3 Distinct Interactive Pillars Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {controlPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          const { accent } = pillar;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.15 * idx,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden text-left transition-colors duration-300 hover:border-white/20"
            >
              {/* Pillar Ambient Color Glow in that card's accent color */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: accent.primary }}
              />

              {/* Top Row: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  {/* Step Number in Pillar Color */}
                  <span
                    className="text-sm font-mono font-bold tracking-wider px-2.5 py-1 rounded-lg border"
                    style={{
                      color: accent.light,
                      borderColor: accent.border,
                      backgroundColor: accent.bgGlow,
                    }}
                  >
                    {pillar.number}
                  </span>

                  {/* Icon Squircle */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-sm transition-transform duration-300 group-hover:scale-105"
                    style={{
                      color: accent.light,
                      borderColor: accent.border,
                      backgroundColor: accent.bgGlow,
                    }}
                  >
                    <Icon size={19} strokeWidth={2} />
                  </div>
                </div>

                {/* Pillar Title */}
                <h3 className="text-xl font-semibold text-ivory tracking-tight group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Pillar Subtitle */}
                <p className="mt-2.5 text-[16px] text-mist/80 leading-relaxed min-h-[48px]">
                  {pillar.description}
                </p>

                {/* Interactive Micro-Widget */}
                {pillar.interactiveType === "approval" && (
                  <ApprovalWidget
                    mockData={pillar.mockData}
                    accent={accent}
                  />
                )}
                {pillar.interactiveType === "context" && (
                  <ContextWidget
                    modules={pillar.modules}
                    accent={accent}
                  />
                )}
                {pillar.interactiveType === "handoff" && (
                  <HandoffWidget
                    steps={pillar.steps}
                    accent={accent}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default BuiltForControl;

