import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from "lucide-react";
import { pricingFaq } from "../../utils/planItems";

const PricingFaq = () => {
  // Store the ID of the currently expanded question (null if none, or defaults to 1)
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-20 md:py-28 wrapper select-none">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-4 py-1 rounded-full text-[13px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg mb-4"
        >
          <HelpCircle size={15} strokeWidth={1.8} />
          <span>Frequently Asked Questions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-ivory"
        >
          Questions About Our{" "}
          <span className="text-teal font-light">Pricing</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-mist/75 text-[15px]"
        >
          Everything you need to know about MetisSuiteAI plans, billing, and scaling your operations.
        </motion.p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-3xl mx-auto space-y-4">
        {pricingFaq.map((item, idx) => {
          const isOpen = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
                isOpen
                  ? "border-teal/40 bg-gradient-to-b from-[#181d45]/90 via-[#13173a]/95 to-[#0e112d]/98 shadow-[0_10px_30px_rgba(46,196,182,0.08)]"
                  : "border-white/10 bg-gradient-to-b from-[#15193d]/70 to-[#0e112d]/80 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full py-5 px-6 md:px-7 flex items-center justify-between text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-[15px] md:text-[17px] font-semibold transition-colors duration-200 pr-4 ${
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
                    <div className="px-6 md:px-7 pb-6 pt-1 text-[14px] md:text-[14.5px] text-mist/85 leading-relaxed border-t border-white/[0.05]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Still Have Questions Banner */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-3xl mx-auto mt-12 p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-[#171b42]/80 via-[#13173a]/80 to-[#171b42]/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 text-teal flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(46,196,182,0.2)]">
            <MessageSquare size={22} strokeWidth={1.8} />
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-ivory">
              Still have questions?
            </h4>
            <p className="text-[13px] text-mist/75 mt-0.5">
              Can't find the answer you're looking for? Speak to our advisory team.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-teal text-midnight hover:bg-[#3de2d3] shadow-[0_0_15px_rgba(46,196,182,0.4)] hover:shadow-[0_0_20px_rgba(46,196,182,0.6)] transition-all duration-200 shrink-0 cursor-pointer"
        >
          <span>Get in Touch</span>
          <ArrowRight size={14} />
        </button>
      </motion.div>

    </section>
  );
};

export default PricingFaq;

