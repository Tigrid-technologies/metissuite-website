import React from "react";
import { motion } from "motion/react";
import { Calendar, Sliders, Play, Sparkles, ArrowRight } from "lucide-react";
import { walkthroughSteps } from "../../utils/walkthroughItems";

const stepIcons = [Calendar, Sliders, Play, Sparkles];

const BookingSteps = () => {
  return (
    <section className="relative py-12 md:py-16 border-t border-b border-white/[0.06] bg-[#0c102b]/60 backdrop-blur-md">
      <div className="wrapper relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ivory tracking-tight">
            How your walkthrough works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80">
            A frictionless, high-signal experience designed for biotech executives and technical leaders.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {walkthroughSteps.map((step, index) => {
            const Icon = stepIcons[index] || Calendar;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="relative group rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/10 p-6 flex flex-col justify-between hover:border-teal/50 hover:shadow-[0_10px_30px_rgba(46,196,182,0.12)] transition-all duration-300"
              >
                {/* Top Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-secondary text-2xl font-bold text-teal/80 group-hover:text-teal transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-teal group-hover:bg-teal/20 group-hover:border-teal/30 group-hover:scale-110 transition-all duration-300">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-ivory group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-mist/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-gold/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span>{step.tag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;

