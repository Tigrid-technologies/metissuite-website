import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
  ChevronRight,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";
import RollingNumber from "../shared/RollingNumber";
import { Link } from "react-router-dom";
import { operatingLayerData } from "../../utils/operatingLayerItems";

// Infinite Marquee Ticker Strip
const TickerStrip = ({ items }) => {
  return (
    <div className="relative w-full overflow-hidden py-3 mb-16 md:mb-20 border-y border-teal/20 bg-gradient-to-r from-teal/10 via-midnight/60 to-teal/10 backdrop-blur-md">
      {/* Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-midnight to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-midnight to-transparent z-10" />

      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 24,
        }}
        className="flex items-center gap-8 whitespace-nowrap w-max"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-[14.5px] font-mono font-bold tracking-widest text-teal/90 uppercase">
              {item}
            </span>
            <span className="text-teal/40 text-[12px]">◆</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const OperatingLayer = () => {
  const { tickerItems, header, conductor } = operatingLayerData;
  const [expandedActivity, setExpandedActivity] = useState(0);

  return (
    <section className="relative w-full py-12 md:py-20 select-none">
      {/* 1. Infinite Ticker Strip */}
      <TickerStrip items={tickerItems} />

      <div className="wrapper">
        {/* 2. Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12 md:mb-16 text-left">
          {/* Left Column: Pill & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10 border border-teal/20 backdrop-blur-lg">
              <span className="w-5 h-5 rounded-full border border-teal text-[12px] flex items-center justify-center font-mono font-bold">
                {header.badgeNumber}
              </span>
              <span className="tracking-wider uppercase text-[13px] font-bold">
                {header.badgeLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight text-ivory leading-[1.1]">
              {header.headingStart}
              <br />
              <span className="text-teal font-light">
                {header.headingHighlight}
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 text-mist/80 text-[17.5px] md:text-[18.5px] leading-relaxed space-y-3"
          >
            <p>{header.paragraph1}</p>
            <p className="text-mist/70 text-[16.5px]">{header.paragraph2}</p>
          </motion.div>
        </div>

        {/* 3. The Conductor View: Interactive Command Deck */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 backdrop-blur-2xl p-6 sm:p-9 lg:p-11 shadow-[0_25px_70px_rgba(0,0,0,0.65)] overflow-hidden text-left"
        >
          {/* Subtle Ambient Color Glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-teal/15 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-indigo/20 blur-[100px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Conductor Intelligence & Score Dial */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Conductor Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[13.5px] font-semibold tracking-wider uppercase text-teal bg-teal/10 border border-teal/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  <span>{conductor.badge}</span>
                </div>

                {/* Conductor Headline */}
                <h3 className="text-3xl md:text-[38px] font-semibold text-ivory tracking-tight leading-tight">
                  {conductor.titleLine1}
                  <br />
                  <span className="text-teal font-light">
                    {conductor.titleLine2}
                  </span>
                </h3>

                <p className="mt-4 text-[17px] text-mist/80 leading-relaxed max-w-sm">
                  {conductor.description}
                </p>
              </div>

              {/* Operating Rhythm Score Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0c102c]/90 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-mist/80">
                    System Autonomy
                  </span>
                  <span className="text-xs font-mono font-bold text-teal">
                    {conductor.systemScore}
                  </span>
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: conductor.systemScore }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-teal/80 to-teal shadow-[0_0_10px_#2ec4b6]"
                  />
                </div>
                <span className="mt-2 text-[13.5px] text-mist/60 block">
                  All 6 routines flowing with human checkpoint gates.
                </span>
              </div>

              {/* Action Link */}
              <Link
                to={conductor.ctaHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-[#3de2d3] transition-colors pt-2 group"
              >
                <span>{conductor.ctaLabel}</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Column: 3 Metric Cards + Live Feed */}
            <div className="lg:col-span-7 space-y-6">
              {/* 3 Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {conductor.metrics.map((m, idx) => (
                  <motion.div
                    key={m.id}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl border border-white/10 bg-[#0e1231]/80 shadow-md backdrop-blur-md relative overflow-hidden group"
                  >
                    {/* Top border color line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="text-[14px] text-mist/75 block truncate">
                      {m.label}
                    </span>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span
                        className="text-2xl sm:text-3xl font-bold tracking-tight"
                        style={{ color: m.color }}
                      >
                        <RollingNumber value={m.value} delay={0.2 + idx * 0.1} />
                        {m.suffix}
                      </span>
                    </div>
                    <span className="text-[13.5px] font-mono text-mist/60 block mt-1">
                      {m.unit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Activity Feed */}
              <div className="rounded-2xl border border-white/10 bg-[#0c102c]/90 p-4 sm:p-5 shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08]">
                  <span className="text-xs font-semibold text-ivory tracking-wide">
                    Live Operational Stream
                  </span>
                  <span className="text-[13.5px] font-mono text-mist/60">
                    Real-time updates
                  </span>
                </div>

                <div className="divide-y divide-white/[0.06]">
                  {conductor.activities.map((act, idx) => {
                    const isExpanded = expandedActivity === idx;

                    return (
                      <div
                        key={act.id}
                        onClick={() =>
                          setExpandedActivity(isExpanded ? null : idx)
                        }
                        className="py-3 cursor-pointer group transition-colors"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Status Dot */}
                            <span
                              className="w-2 h-2 rounded-full shrink-0 shadow-[0_0_8px] transition-transform group-hover:scale-125"
                              style={{
                                backgroundColor: act.dotColor,
                                boxShadow: `0 0 8px ${act.dotColor}`,
                              }}
                            />
                            <h4 className="text-[16px] font-semibold text-ivory/90 group-hover:text-white truncate">
                              {act.title}
                            </h4>
                            <span className="hidden sm:inline-block text-[13.5px] px-2 py-0.5 rounded-full bg-white/5 text-mist/70 border border-white/5">
                              {act.agent}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs font-mono text-mist/60">
                              {act.time}
                            </span>
                            <motion.div
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-mist/40 group-hover:text-mist"
                            >
                              <ChevronRight size={14} />
                            </motion.div>
                          </div>
                        </div>

                        {/* Expandable Action Detail */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[14.5px] text-mist/85 leading-relaxed">
                                {act.detail}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperatingLayer;

