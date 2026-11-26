import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";
import { plans, allFeatures } from "../../utils/planItems";

// 20-number reel for mechanical odometer rolling effect
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const RollingDigit = ({ digit, delay = 0, isInView = false }) => {
  if (isNaN(Number(digit))) {
    return <span className="inline-block">{digit}</span>;
  }

  const num = Number(digit);
  const targetIndex = 10 + num;
  const targetPercent = -(targetIndex * 5); // 5% per digit since 20 digits total

  return (
    <span className="relative inline-block h-[1.12em] overflow-hidden leading-none align-baseline">
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: isInView ? `${targetPercent}%` : "0%" }}
        transition={{
          duration: 1.4,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-col"
      >
        {NUMBERS.map((n, idx) => (
          <span
            key={idx}
            className="h-[1.12em] flex items-center justify-center tabular-nums"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const RollingNumber = ({ value, delay = 0, isInView = false }) => {
  const digits = String(value).split("");

  return (
    <span className="inline-flex items-baseline overflow-hidden font-bold tracking-tight text-ivory">
      {digits.map((digit, i) => (
        <RollingDigit
          key={i}
          digit={digit}
          delay={delay + i * 0.08}
          isInView={isInView}
        />
      ))}
    </span>
  );
};

const Compare = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section
      id="compare"
      ref={sectionRef}
      className="relative py-20 md:py-28 wrapper select-none"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-4 py-1 rounded-full text-[15.5px] text-teal border border-teal/20 bg-teal/10 backdrop-blur-lg mb-4"
        >
          <Sparkles size={16} />
          <span>Feature Comparison</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-ivory"
        >
          Compare Plan{" "}
          <span className="text-teal font-light">Capabilities</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-mist/75 text-[17.5px]"
        >
          A full, transparent breakdown of what each MetisSuiteAI plan includes
          so you can choose with confidence.
        </motion.p>

        {/* Billing toggle inside compare */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 inline-flex items-center p-1 rounded-full bg-[#161b40]/80 border border-white/10 backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-teal text-midnight shadow-[0_0_12px_rgba(46,196,182,0.5)]"
                : "text-mist hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              billingCycle === "yearly"
                ? "bg-teal text-midnight shadow-[0_0_12px_rgba(46,196,182,0.5)]"
                : "text-mist hover:text-white"
            }`}
          >
            Yearly (Save ~15%)
          </button>
        </motion.div>
      </div>

      {/* Comparison Table Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 p-4 md:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-x-auto"
      >
        <table className="w-full min-w-[650px] border-collapse text-left">
          {/* Table Header: Plans & Prices */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-6 pt-2 font-medium text-mist/60 text-xs uppercase tracking-wider w-[37%]">
                Features & Tools
              </th>
              {plans.map((plan, planIdx) => {
                const isFeatured = plan.name === "Pro";
                const price =
                  billingCycle === "monthly"
                    ? plan.priceMonth
                    : Math.round(plan.priceYear / 12);

                return (
                  <th
                    key={plan.id}
                    className={`pb-6 pt-2 text-center rounded-t-2xl w-[21%] px-3 ${
                      isFeatured ? "relative bg-teal/[0.04] " : ""
                    }`}
                  >
                    <h3 className="text-base font-semibold text-ivory">
                      {plan.name}{" "}
                      <span>
                        {isFeatured && (
                          <span className="inline-block text-[13px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-teal text-midnight shadow-[0_0_8px_rgba(46,196,182,0.4)]">
                            Popular
                          </span>
                        )}
                      </span>
                    </h3>
                    <div className="mt-1 flex items-baseline justify-center gap-0.5">
                      <span className="text-mist text-xs">$</span>
                      <span className="text-2xl font-bold text-ivory">
                        <RollingNumber
                          value={price}
                          delay={0.15 + planIdx * 0.12}
                          isInView={isInView}
                        />
                      </span>
                      <span className="text-mist/70 text-[13.5px]">/mo</span>
                    </div>
                    <button
                      type="button"
                      className={`mt-4 w-full py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-1 ${
                        isFeatured
                          ? "bg-teal text-midnight hover:bg-[#3de2d3] shadow-[0_0_12px_rgba(46,196,182,0.4)]"
                          : "bg-white/5 hover:bg-white/10 border border-white/10 text-ivory"
                      }`}
                    >
                      <span>Choose</span>
                      <ArrowRight size={12} />
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Table Body: All Features */}
          <tbody className="divide-y divide-white/[0.05]">
            {allFeatures.map((feature, idx) => (
              <motion.tr
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group hover:bg-white/[0.03] transition-colors duration-150"
              >
                {/* Feature Title */}
                <td className="py-4 pr-4 text-[16px] font-medium text-ivory/90 group-hover:text-white transition-colors">
                  {feature}
                </td>

                {/* Plan Check / Cross Columns */}
                {plans.map((plan) => {
                  const hasFeature = plan.features.includes(feature);
                  const isFeatured = plan.name === "Pro";

                  return (
                    <td
                      key={plan.id}
                      className={`py-4 text-center px-3 ${
                        isFeatured ? "bg-teal/[0.04]" : ""
                      }`}
                    >
                      <div className="flex items-center justify-center">
                        {hasFeature ? (
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            }}
                            className="w-6 h-6 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal shadow-[0_0_10px_rgba(46,196,182,0.25)]"
                          >
                            <Check size={14} strokeWidth={2.6} />
                          </motion.div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-mist/25">
                            <X size={12} strokeWidth={2} />
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Compare;
