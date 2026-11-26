import React from "react";
import { motion } from "motion/react";
import { Layers, ArrowDown, Sparkles, CheckCircle2 } from "lucide-react";
import { servicesSpotlight } from "../../utils/servicesItems";
import { RollingWords } from "../shared/RollingText";
import RollingNumber from "../shared/RollingNumber";

const ServicesSpotlight = ({ activeCategory, onSelectCategory }) => {
  const scrollToGrid = () => {
    const el = document.getElementById("services-grid-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById("roi-calculator-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background radial ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-teal/15 via-indigo/25 to-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="wrapper relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top glowing badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/[0.04] border border-gold/10 text-mist text-[15px] font-medium tracking-wide mb-6 "
          >
            <Layers size={14} className="text-gold animate-pulse" />
            <span className="text-gold font-light">
              {servicesSpotlight.badge}
            </span>
          </motion.div>

          {/* Headline with Rolling Words Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ivory leading-[1.18]"
          >
            {servicesSpotlight.headingStart} One unified{" "}
            <RollingWords
              words={servicesSpotlight.rollingWords}
              className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-[#44ecd8] to-gold"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-mist/90 max-w-2xl mx-auto leading-relaxed"
          >
            {servicesSpotlight.description}
          </motion.p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {servicesSpotlight.categories.map((cat) => {
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    onSelectCategory(cat.id);
                    scrollToGrid();
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-teal text-midnight font-bold shadow-[0_0_15px_rgba(46,196,182,0.4)] scale-105"
                      : "bg-white/[0.04] border border-white/10 text-mist/80 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={scrollToCalculator}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-gold/15 border border-gold/30 text-gold hover:bg-gold/25 transition-all flex items-center gap-1.5 cursor-pointer ml-1"
            >
              <Sparkles size={12} />
              <span>ROI Calculator</span>
            </button>
          </motion.div>

          {/* Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
          >
            {servicesSpotlight.stats.map((stat, i) => (
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

export default ServicesSpotlight;
