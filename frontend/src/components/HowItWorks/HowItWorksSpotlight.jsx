import React from "react";
import { motion } from "motion/react";
import {
  Cpu,
  ShieldCheck,
  ArrowDown,
  Activity,
  Sparkles,
  Layers,
} from "lucide-react";
import { howItWorksSpotlight } from "../../utils/howItWorksItems";
import { RollingWords } from "../shared/RollingText";
import RollingNumber from "../shared/RollingNumber";

const HowItWorksSpotlight = () => {
  const scrollToPipeline = () => {
    const el = document.getElementById("architecture-pipeline-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAgents = () => {
    const el = document.getElementById("agent-ensemble-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGovernance = () => {
    const el = document.getElementById("governance-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-18 md:pb-24 overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-tr from-teal/15 via-indigo/25 to-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="wrapper relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top glowing architecture badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/[0.04] border border-gold/10 text-mist text-[15px] font-medium tracking-wide mb-6 "
          >
            <Cpu size={14} className="text-gold animate-pulse" />
            <span className="text-gold font-light">
              {howItWorksSpotlight.badge}
            </span>
          </motion.div>

          {/* Headline with Rolling Words Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-ivory leading-[1.18]"
          >
            {howItWorksSpotlight.headingStart}{" "}
            <RollingWords
              words={howItWorksSpotlight.rollingWords}
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-[#44ecd8] to-gold"
            />{" "}
            operate as one.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-mist/90 max-w-2xl mx-auto leading-relaxed"
          >
            {howItWorksSpotlight.description}
          </motion.p>

          {/* Quick anchor pills to navigate the detailed architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={scrollToPipeline}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-ivory hover:border-teal/50 hover:bg-teal/10 hover:text-teal transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Layers size={13} className="text-teal" />
              <span>4-Stage Pipeline</span>
            </button>

            <button
              type="button"
              onClick={scrollToAgents}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-ivory hover:border-gold/50 hover:bg-gold/10 hover:text-gold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Cpu size={13} className="text-gold" />
              <span>The 6 Agents</span>
            </button>

            <button
              type="button"
              onClick={scrollToGovernance}
              className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-ivory hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck size={13} className="text-[#38bdf8]" />
              <span>Human Checkpoint Engine</span>
            </button>
          </motion.div>

          {/* Architectural Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            {howItWorksSpotlight.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-teal/30 transition-colors"
              >
                <div className="font-secondary text-2xl sm:text-3xl font-extrabold text-ivory tracking-tight">
                  <RollingNumber value={stat.value} delay={0.2 + i * 0.1} />
                </div>
                <div className="mt-1 text-xs font-bold text-teal">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[13.5px] text-mist/60 leading-tight">
                  {stat.sub}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSpotlight;
