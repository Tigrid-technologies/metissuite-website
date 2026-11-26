import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { howItWorksFaqs } from "../../utils/howItWorksItems";

const HowItWorksFaq = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-16 md:py-24 wrapper select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal/[0.04] rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-4 py-1 rounded-full text-xs font-semibold text-teal border border-teal/20 bg-teal/10 backdrop-blur-lg mb-4"
        >
          <HelpCircle size={14} className="text-teal" />
          <span>Architecture & Governance FAQs</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-ivory"
        >
          Technical & Safety{" "}
          <span className="text-teal font-light">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-mist/80 text-sm sm:text-base leading-relaxed"
        >
          Clear answers on compliance, integrations, data sovereignty, and
          human-in-the-loop control.
        </motion.p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-7xl mx-auto space-y-3.5 relative z-10">
        {howItWorksFaqs.map((item, idx) => {
          const isOpen = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen
                  ? "border-teal/40 bg-gradient-to-b from-[#181d45]/90 via-[#13173a]/95 to-[#0e112d]/98 shadow-[0_10px_30px_rgba(46,196,182,0.1)]"
                  : "border-white/10 bg-gradient-to-b from-[#15193d]/70 to-[#0e112d]/80 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-4 sm:py-5 px-5 sm:px-7 flex items-center justify-between text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-sm sm:text-[18.5px] font-semibold transition-colors duration-200 pr-4 ${
                    isOpen ? "text-teal" : "text-ivory group-hover:text-teal"
                  }`}
                >
                  {item.question}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isOpen
                      ? "bg-teal/20 text-teal border border-teal/40 shadow-[0_0_10px_rgba(46,196,182,0.3)]"
                      : "bg-white/5 text-mist group-hover:text-white border border-white/10"
                  }`}
                >
                  <ChevronDown size={17} strokeWidth={2.2} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-mist/85 leading-relaxed border-t border-white/[0.05]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA to Book Walkthrough */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-xs sm:text-sm text-mist/70">
          Want to see these safeguards configured for your pipeline?{" "}
          <Link
            to="/book-walkthrough"
            className="text-teal font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Book a private 30-min walkthrough</span>
            <ArrowRight size={13} />
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default HowItWorksFaq;
