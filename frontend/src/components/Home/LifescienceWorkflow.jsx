import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Check } from "lucide-react";
import {
  workflowSectionData,
  workflowSteps,
} from "../../utils/workflowItems";

const LifescienceWorkflow = () => {
  // Step 01 is active by default to showcase the live research scan
  const [activeStep, setActiveStep] = useState(0);

  const {
    badgeNumber,
    badgeLabel,
    headingStart,
    headingHighlight,
    description,
    bullets,
    cardHeader,
    cardFooter,
  } = workflowSectionData;

  return (
    <section className="relative py-20 md:py-28 wrapper select-none">
      {/* 2-Column Balanced Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* --- Left Column: Value Prop & Bullets --- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-left space-y-6"
        >
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10 border border-teal/20 backdrop-blur-lg">
            <span className="w-4 h-4 rounded-full border border-teal text-[10px] flex items-center justify-center font-mono font-bold">
              {badgeNumber}
            </span>
            <span className="tracking-wider uppercase text-[11px] font-bold">
              {badgeLabel}
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight text-ivory leading-[1.1]">
            {headingStart}{" "}
            <span className="text-teal font-light">{headingHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-mist/75 text-[14.5px] md:text-[15px] leading-relaxed">
            {description}
          </p>

          {/* Feature Bullets with Teal Checkmarks */}
          <ul className="space-y-3 pt-2">
            {bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex items-baseline gap-3 text-[13.5px] text-ivory/85"
              >
                <div className="w-4 h-4 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0 border border-teal/30">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* --- Right Column: Interactive Example Workflow Card --- */}
        <motion.div
          initial={{ opacity: 0, x: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="w-full max-w-[490px] rounded-[26px] border border-white/10 bg-gradient-to-b from-[#161a3f]/95 via-[#111435]/95 to-[#0b0e27]/98 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden text-left">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#121636]/90 border-b border-white/[0.08]">
              <span className="text-xs font-medium text-mist/90">
                {cardHeader.title}
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-teal uppercase">
                {cardHeader.subtitle}
              </span>
            </div>

            {/* Workflow Steps Container */}
            <div className="p-5 sm:p-6 space-y-2 relative">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                const isLast = idx === workflowSteps.length - 1;

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`relative rounded-2xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border border-teal/40 bg-[#171d43]/60 p-3.5 sm:p-4 shadow-[0_0_20px_rgba(46,196,182,0.12)]"
                        : "p-3 sm:p-3.5 hover:bg-white/[0.03] border border-transparent hover:border-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Left: Icon Squircle + Connecting Line Segment */}
                      <div className="relative flex flex-col items-center shrink-0">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
                            isActive
                              ? "bg-[#181d45] border shadow-[0_0_15px_rgba(232,176,75,0.25)]"
                              : "bg-[#161b42] border border-white/10 text-teal"
                          }`}
                          style={{
                            borderColor: isActive
                              ? step.activeColor
                              : "rgba(255,255,255,0.1)",
                            color: isActive ? step.activeColor : "#2ec4b6",
                          }}
                        >
                          <Icon size={18} strokeWidth={2} />
                        </div>

                        {/* Continuous Connecting Line Segment to next icon */}
                        {!isLast && (
                          <div
                            className={`w-[1.5px] absolute top-11 bottom-[-20px] left-1/2 -translate-x-1/2 bg-white/10 z-0 overflow-hidden ${
                              isActive ? "bottom-[-92px]" : "bottom-[-16px]"
                            }`}
                          >
                            <motion.div
                              animate={{ y: ["-100%", "200%"] }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "linear",
                                delay: idx * 0.35,
                              }}
                              className="w-full h-full bg-gradient-to-b from-transparent via-teal to-transparent shadow-[0_0_6px_#2ec4b6]"
                            />
                          </div>
                        )}
                      </div>

                      {/* Right: Step Title, Subtitle, and Number */}
                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4
                              className={`text-[14.5px] font-semibold transition-colors duration-200 ${
                                isActive ? "text-ivory" : "text-ivory/90"
                              }`}
                            >
                              {step.title}
                            </h4>
                            <span className="text-[12px] text-mist/60 block font-medium mt-0.5">
                              {step.agent}
                            </span>
                          </div>

                          <span
                            className={`text-xs font-mono font-medium transition-colors duration-200 ${
                              isActive
                                ? "text-teal font-bold"
                                : "text-mist/40"
                            }`}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Expanded details sub-card when active */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -6 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -6 }}
                              transition={{ duration: 0.25, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3.5 p-3 rounded-xl bg-[#0d122d]/90 border border-white/10 flex items-start gap-2.5 shadow-inner">
                                <div className="w-4 h-4 rounded-full border border-teal/60 bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5">
                                  <Check size={10} strokeWidth={3} />
                                </div>
                                <p className="text-[12.5px] text-mist/90 leading-relaxed">
                                  {step.details}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 px-6 py-3.5 bg-[#121636]/90 border-t border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shrink-0">
                  <Bot size={14} strokeWidth={2} />
                </div>
                <span className="text-xs font-medium text-teal tracking-wide">
                  {cardFooter.message}
                </span>
              </div>

              <div className="flex items-center gap-2 pl-8 sm:pl-0">
                <span className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_#2ec4b6] animate-pulse" />
                <span className="text-[11.5px] font-mono text-mist/70">
                  {cardFooter.checkpoint}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifescienceWorkflow;
