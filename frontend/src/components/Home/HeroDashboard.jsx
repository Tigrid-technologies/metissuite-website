import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Users,
  FileText,
  Calendar,
  ChevronRight,
  Check,
} from "lucide-react";

const HeroDashboard = () => {
  const [followUpsActive, setFollowUpsActive] = useState(true);

  const integrations = [
    { name: "Metis Voice", color: "bg-teal", glow: "shadow-[0_0_8px_#2ec4b6]" },
    { name: "Metis Outreach", color: "bg-[#818cf8]", glow: "shadow-[0_0_8px_#818cf8]" },
    { name: "Metis Research", color: "bg-gold", glow: "shadow-[0_0_8px_#e8b04b]" },
    { name: "Metis Books", color: "bg-[#c084fc]", glow: "shadow-[0_0_8px_#c084fc]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="relative w-full max-w-[850px] mx-auto mt-10 md:mt-12 text-left"
    >

      {/* Main Glass Card Frame */}
      <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#161a3f]/95 via-[#111435]/95 to-[#0c0f2a]/98 p-5 md:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7),0_0_35px_rgba(46,196,182,0.06)] backdrop-blur-2xl">
        
        {/* --- Top Bar Header --- */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.06]">
          {/* Left Brand Identifier */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2ec4b6] to-[#14b8a6] text-midnight flex items-center justify-center font-bold text-[15px] shadow-[0_0_12px_rgba(46,196,182,0.4)]">
              M
            </div>
            <span className="text-mist/85 text-[15.5px] font-medium tracking-wide">
              Monday, conducted
            </span>
          </div>

          {/* Right Live Pulse Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b234b]/60 border border-teal/20 text-teal text-[13.5px] font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
            </span>
            <span>Live</span>
          </div>
        </div>

        {/* --- Center Grid Section (Hero Score + 3 Metric Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
          
          {/* Left Hero Card: Today's Score */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-6 rounded-2xl bg-[#161b40]/80 border border-white/[0.07] p-6 flex flex-col justify-between shadow-inner relative overflow-hidden"
          >
            {/* Subtle top corner gradient shine */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-teal text-[13px] font-bold tracking-[0.18em] uppercase">
                TODAY'S SCORE
              </span>
              <h3 className="text-2xl md:text-[28px] font-semibold text-ivory tracking-tight leading-snug mt-4">
                Every routine,<br />in perfect time.
              </h3>
            </div>

            {/* Bottom Progress Rhythm */}
            <div className="mt-8 pt-2">
              <div className="flex items-center justify-between text-xs mb-2.5">
                <span className="text-mist/85 font-medium text-[14.5px]">Business rhythm</span>
                <span className="font-bold text-ivory text-[15.5px]">92%</span>
              </div>
              <div className="w-full h-2 bg-[#121633] rounded-full overflow-hidden p-[1px] border border-white/[0.04]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.4, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-teal/80 to-teal relative overflow-hidden shadow-[0_0_12px_rgba(46,196,182,0.6)]"
                >
                  {/* Moving shimmer light across progress bar */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1.2,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-2/3"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3 Stacked Interactive Action Cards */}
          <div className="md:col-span-6 flex flex-col gap-3">
            
            {/* 1. New Leads Card */}
            <motion.div
              whileHover={{ y: -2, x: 2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#161b40]/60 hover:bg-[#1a204a]/85 border border-white/[0.06] hover:border-teal/30 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#182545] text-teal flex items-center justify-center border border-teal/20 group-hover:scale-105 transition-transform duration-200">
                  <Users size={19} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-ivory group-hover:text-teal transition-colors duration-200">
                    12 new leads
                  </h4>
                  <p className="text-[14px] text-mist/75">
                    4 ready for review
                  </p>
                </div>
              </div>
              <span className="text-[14px] font-semibold text-teal/95 bg-teal/10 px-2.5 py-0.5 rounded-md border border-teal/20">
                +18%
              </span>
            </motion.div>

            {/* 2. Invoices Prepared Card */}
            <motion.div
              whileHover={{ y: -2, x: 2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#161b40]/60 hover:bg-[#1a204a]/85 border border-white/[0.06] hover:border-gold/30 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2b2529] text-gold flex items-center justify-center border border-gold/20 group-hover:scale-105 transition-transform duration-200">
                  <FileText size={19} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-ivory group-hover:text-gold transition-colors duration-200">
                    3 invoices prepared
                  </h4>
                  <p className="text-[14px] text-mist/75">
                    Awaiting your approval
                  </p>
                </div>
              </div>
              <ChevronRight
                size={18}
                className="text-mist/50 group-hover:text-ivory group-hover:translate-x-1 transition-all duration-200"
              />
            </motion.div>

            {/* 3. Follow-ups On Track Card */}
            <motion.div
              whileHover={{ y: -2, x: 2 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#161b40]/60 hover:bg-[#1a204a]/85 border border-white/[0.06] hover:border-teal/30 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1b224c] text-[#818cf8] flex items-center justify-center border border-[#818cf8]/20 group-hover:scale-105 transition-transform duration-200">
                  <Calendar size={19} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-ivory group-hover:text-teal transition-colors duration-200">
                    Follow-ups on track
                  </h4>
                  <p className="text-[14px] text-mist/75">
                    Next run in 18 min
                  </p>
                </div>
              </div>

              {/* Interactive toggle control */}
              <button
                type="button"
                onClick={() => setFollowUpsActive(!followUpsActive)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-300 flex items-center cursor-pointer ${
                  followUpsActive
                    ? "bg-teal/25 border border-teal/50 justify-end"
                    : "bg-white/10 border border-white/15 justify-start"
                }`}
                aria-label="Toggle follow-ups"
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`w-3.5 h-3.5 rounded-full ${
                    followUpsActive
                      ? "bg-teal shadow-[0_0_8px_rgba(46,196,182,0.9)]"
                      : "bg-mist/50"
                  }`}
                />
              </button>
            </motion.div>

          </div>
        </div>

        {/* --- Bottom Grid: 4 Metis Agent Status Pills --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-1">
          {integrations.map((agent) => (
            <motion.div
              key={agent.name}
              whileHover={{ scale: 1.015, y: -1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#161b40]/50 hover:bg-[#1a204a]/75 border border-white/[0.05] hover:border-teal/20 transition-all duration-200 cursor-default group"
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${agent.color} ${agent.glow}`} />
                <span className="text-[15px] font-medium text-ivory/90 group-hover:text-white transition-colors duration-200">
                  {agent.name}
                </span>
              </div>
              <Check
                size={15}
                strokeWidth={2.5}
                className="text-teal group-hover:scale-110 transition-transform duration-200"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default HeroDashboard;

