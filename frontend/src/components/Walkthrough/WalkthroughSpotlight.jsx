import React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2, Calendar, Clock, ShieldCheck, ArrowDown } from "lucide-react";
import { walkthroughSpotlight } from "../../utils/walkthroughItems";

const WalkthroughSpotlight = () => {
  const scrollToCalendar = () => {
    const el = document.getElementById("booking-calendar-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background radial gradients for luxury ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-teal/15 via-indigo/25 to-gold/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="wrapper relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top glowing badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/[0.04] border border-gold/10 text-mist text-[12.5px] font-medium tracking-wide mb-6 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-gold animate-pulse" />
            <span className="text-gold font-semibold">{walkthroughSpotlight.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ivory leading-[1.12]"
          >
            {walkthroughSpotlight.headingStart}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal via-[#44ecd8] to-gold">
              {walkthroughSpotlight.headingHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-mist/90 max-w-2xl mx-auto leading-relaxed"
          >
            {walkthroughSpotlight.description}
          </motion.p>

          {/* Key benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ivory/80"
          >
            {walkthroughSpotlight.keyBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick scroll CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <button
              type="button"
              onClick={scrollToCalendar}
              className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-teal text-midnight font-bold text-sm shadow-[0_0_25px_rgba(46,196,182,0.4)] hover:shadow-[0_0_35px_rgba(46,196,182,0.6)] hover:bg-[#3de2d3] transition-all cursor-pointer"
            >
              <span>Choose your time below</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Highlights / Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {walkthroughSpotlight.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-ivory font-secondary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-mist/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WalkthroughSpotlight;

