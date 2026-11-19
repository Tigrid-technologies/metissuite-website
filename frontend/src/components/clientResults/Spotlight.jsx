import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import RollingNumber from "../shared/RollingNumber";

const MotionLink = motion.create(Link);
import { Sparkles, ArrowUpRight } from "lucide-react";
import {
  resultsSpotlight,
  resultStats,
  growthChart,
} from "../../utils/clientResultsItems";

const Spotlight = () => {
  const [hoverBar, setHoverBar] = useState(null);

  return (
    <div className="relative min-h-screen py-16 md:py-24 wrapper flex flex-col items-center justify-center text-center select-none">
      {/* Header Tag & Heading */}
      <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex justify-center gap-2 items-center px-5 py-1 rounded-full text-[13px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg mb-4"
          >
            <Sparkles size={15} strokeWidth={1.8} />
            <span>{resultsSpotlight.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[52px] font-semibold tracking-tight leading-tight text-ivory"
          >
            {resultsSpotlight.headingStart}{" "}
            <span className="font-light text-teal">
              {resultsSpotlight.headingHighlight}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-mist/80 text-[15px] max-w-xl mx-auto"
          >
            {resultsSpotlight.description}
          </motion.p>

          <MotionLink
            to={resultsSpotlight.ctaHref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ x: 3 }}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-[#3de2d3] transition-colors"
          >
            <span>{resultsSpotlight.ctaLabel}</span>
            <ArrowUpRight size={16} />
          </MotionLink>
      </div>

      {/* Results Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl mx-auto mt-10 md:mt-12 text-left"
        >
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-teal/15 via-transparent to-indigo/20 blur-xl pointer-events-none" />

          <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 rounded-full bg-teal/10 blur-3xl" />

            {/* Card header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
              <span className="text-xs font-medium text-mist/80">
                {resultsSpotlight.cardTitle}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-teal bg-teal/10 border border-teal/20 px-2.5 py-0.5 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal" />
                </span>
                Live
              </span>
            </div>

            {/* Stat tiles */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {resultStats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.45 }}
                    whileHover={{ y: -3 }}
                    className="group rounded-2xl bg-[#161b40]/70 border border-white/[0.07] hover:border-white/20 p-4 transition-colors"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 border"
                      style={{
                        color: s.color,
                        background: `${s.color}1f`,
                        borderColor: `${s.color}40`,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <div className="text-2xl md:text-[28px] font-bold text-ivory leading-none">
                      <RollingNumber
                        value={`${s.value}${s.suffix}`}
                        delay={0.5 + i * 0.1}
                      />
                    </div>
                    <p className="mt-1.5 text-[12px] text-mist/70">{s.label}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Pipeline growth bars */}
            <div className="mt-4 rounded-2xl bg-[#161b40]/60 border border-white/[0.07] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[12px] text-mist/75">
                  {growthChart.title}
                </span>
                <span className="text-[12px] font-semibold text-teal tabular-nums inline-flex items-baseline">+
                  <RollingNumber
                    value={hoverBar !== null ? `${growthChart.bars[hoverBar].value}%` : `${growthChart.defaultValue}%`}
                    delay={hoverBar !== null ? 0 : 1.2}
                  />
                </span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {growthChart.bars.map(({ label, value: h }, i) => (
                  <div
                    key={i}
                    className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer"
                    onMouseEnter={() => setHoverBar(i)}
                    onMouseLeave={() => setHoverBar(null)}
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.7 + i * 0.07,
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`w-full rounded-md transition-all duration-200 ${
                        hoverBar === i
                          ? "bg-teal shadow-[0_0_14px_rgba(46,196,182,0.7)]"
                          : "bg-gradient-to-t from-teal/30 to-teal/70"
                      }`}
                    />
                    <span className="text-[10px] text-mist/50">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {resultsSpotlight.cardNote && (
              <p className="mt-3 text-[10.5px] text-mist/40 text-center">
                {resultsSpotlight.cardNote}
              </p>
            )}
          </div>
        </motion.div>
    </div>
  );
};

export default Spotlight;
