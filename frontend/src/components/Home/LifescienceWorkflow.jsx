import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  Mail,
  CalendarCheck,
  QrCode,
  FileText,
  Bot,
  Check,
} from "lucide-react";

const LifescienceWorkflow = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const bullets = [
    "Prospect research across Google Scholar, LinkedIn and email",
    "Meeting capture through QR codes and NFC tags",
    "Human-reviewed content for technical audiences",
    "Quote, purchasing and invoice follow-up in one rhythm",
  ];

  const steps = [
    {
      number: "01",
      title: "Lead identified",
      agent: "Research agent",
      icon: Search,
    },
    {
      number: "02",
      title: "Message personalized",
      agent: "Outreach agent",
      icon: Mail,
    },
    {
      number: "03",
      title: "Meeting booked",
      agent: "CRM + calendar",
      icon: CalendarCheck,
    },
    {
      number: "04",
      title: "Follow-up captured",
      agent: "QR / NFC suite",
      icon: QrCode,
    },
    {
      number: "05",
      title: "Quote to invoice",
      agent: "Books agent",
      icon: FileText,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 wrapper select-none">
      {/* 2-Column Balanced Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* --- Left Column: Exact Content from metissuite.app --- */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 text-left space-y-6"
        >
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10 border border-teal/20 backdrop-blur-lg">
            <span className="w-4 h-4 rounded-full border border-teal text-[10px] flex items-center justify-center font-mono">
              03
            </span>
            <span className="tracking-wider uppercase text-[11px] font-bold">
              LIFE-SCIENCE READY
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight text-ivory leading-[1.1]">
            From scientific signal to commercial{" "}
            <span className="text-teal font-light">follow-through.</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-mist/75 text-[14.5px] md:text-[15px] leading-relaxed ">
            Long sales cycles, technical buyers and conference-heavy growth
            demand more than a generic automation stack. MetisSuiteAI helps
            small and mid-sized biotech teams keep every important interaction
            moving.
          </p>

          {/* 4 Feature Bullets with Teal Checkmarks */}
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

        {/* --- Right Column: The Clean, Compact Example Workflow Card --- */}
        <motion.div
          initial={{ opacity: 0, x: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center"
        >
          <div className="w-full max-w-[460px] rounded-[24px] border border-white/10 bg-gradient-to-b from-[#161a3f]/95 via-[#111435]/95 to-[#0b0e27]/98 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden text-left">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#121636]/90 border-b border-white/[0.08]">
              <span className="text-xs font-medium text-mist/90">
                Example workflow
              </span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-teal uppercase">
                CONFERENCE LEAD → CUSTOMER
              </span>
            </div>

            {/* Timeline Steps Body */}
            <div className="px-6 py-6">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isHovered = hoveredIdx === idx;
                const isLast = idx === steps.length - 1;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    {/* Left Column: Icon + Vertical Connecting Line Segment */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Squircle Icon Badge */}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 z-10 border ${
                          isHovered
                            ? "bg-teal/20 border-teal/50 text-teal shadow-[0_0_15px_rgba(46,196,182,0.4)]"
                            : "bg-[#161b42] border-white/10 text-teal group-hover:border-teal/30"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </motion.div>

                      {/* Connecting Line Segment strictly between icons */}
                      {!isLast && (
                        <div className="w-[1.5px] h-7 bg-white/10 relative overflow-hidden my-1">
                          {/* Flowing Laser Signal traveling down the line */}
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

                    {/* Right Column: Title, Subtitle, and Number */}
                    <div className="flex-1 flex items-center justify-between pt-1.5 pb-2">
                      <div>
                        <h4
                          className={`text-[14px] font-semibold transition-colors duration-200 ${
                            isHovered
                              ? "text-teal"
                              : "text-ivory group-hover:text-white"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <span className="text-[12px] text-mist/60 block mt-0.5 font-medium">
                          {step.agent}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-mono font-medium transition-colors duration-200 ${
                          isHovered
                            ? "text-teal font-bold"
                            : "text-mist/40 group-hover:text-mist/70"
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex items-center gap-2.5 px-6 py-3.5 bg-[#121636]/80 border-t border-white/[0.08]">
              <div className="w-6 h-6 rounded-lg bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shrink-0">
                <Bot size={14} strokeWidth={2} />
              </div>
              <span className="text-xs font-medium text-teal tracking-wide">
                Metis coordinates context between every step.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LifescienceWorkflow;
