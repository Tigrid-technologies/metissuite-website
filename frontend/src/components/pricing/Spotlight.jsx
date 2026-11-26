import React, { useState } from "react";
import { motion } from "motion/react";
import { DollarSign, Check, Sparkles, ArrowRight } from "lucide-react";
import { plans } from "../../utils/planItems";

// 20-number reel for mechanical odometer rolling effect
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const RollingDigit = ({ digit, delay = 0 }) => {
  if (isNaN(Number(digit))) {
    return <span className="inline-block">{digit}</span>;
  }

  const num = Number(digit);
  // Target index in the second cycle (10..19) so it spins through numbers before landing
  const targetIndex = 10 + num;
  const targetPercent = -(targetIndex * 5); // 5% per digit since 20 digits total

  return (
    <span className="relative inline-block h-[1.12em] overflow-hidden leading-none align-baseline">
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: `${targetPercent}%` }}
        transition={{
          duration: 1.5,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Smooth luxury deceleration curve
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

const RollingNumber = ({ value, delay = 0 }) => {
  const digits = String(value).split("");

  return (
    <span className="inline-flex items-baseline overflow-hidden font-bold tracking-tight text-ivory">
      {digits.map((digit, i) => (
        <RollingDigit
          key={i}
          digit={digit}
          delay={delay + i * 0.08}
        />
      ))}
    </span>
  );
};

const Spotlight = () => {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"

  // Base rotation & vertical offset configuration for 3-card fan-out
  const cardVariants = {
    // Left card: slightly tilted to the left
    0: {
      initial: { rotate: -2.5, y: 12 },
      hover: { rotate: 0, y: -10, scale: 1.02 },
    },
    // Center card: straight and elevated
    1: {
      initial: { rotate: 0, y: 0 },
      hover: { rotate: 0, y: -14, scale: 1.03 },
    },
    // Right card: slightly tilted to the right
    2: {
      initial: { rotate: 2.5, y: 12 },
      hover: { rotate: 0, y: -10, scale: 1.02 },
    },
  };

  return (
    <div className="relative min-h-screen py-16 md:py-24 wrapper flex flex-col items-center justify-center text-center select-none">
      
      {/* --- Header Tag & Heading --- */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-5 py-1 rounded-full text-[15.5px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg mb-4"
        >
          <DollarSign size={17} strokeWidth={1.8} />
          <span>Intelligent plans. Seamless operations.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[38px] md:text-[52px] font-semibold tracking-tight leading-tight text-ivory"
        >
          Plans Designed for{" "}
          <span className="font-light text-teal">Smarter Business</span>{" "}
          Operations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-mist/80 text-[17.5px] max-w-xl mx-auto"
        >
          Transparent pricing designed for lean biotech and life-science teams to scale effortlessly as AI agents handle routine work.
        </motion.p>

        {/* --- Billing Cycle Toggle (Monthly / Yearly) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#161b40]/80 border border-white/10 backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
              billingCycle === "monthly" ? "text-midnight" : "text-mist hover:text-white"
            }`}
          >
            {billingCycle === "monthly" && (
              <motion.div
                layoutId="activeBillingPill"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                className="absolute inset-0 bg-teal rounded-full shadow-[0_0_15px_rgba(46,196,182,0.6)]"
              />
            )}
            <span className="relative z-10">Monthly Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
              billingCycle === "yearly" ? "text-midnight" : "text-mist hover:text-white"
            }`}
          >
            {billingCycle === "yearly" && (
              <motion.div
                layoutId="activeBillingPill"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                className="absolute inset-0 bg-teal rounded-full shadow-[0_0_15px_rgba(46,196,182,0.6)]"
              />
            )}
            <span className="relative z-10">Yearly Billing</span>
            <span
              className={`relative z-10 text-[13px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                billingCycle === "yearly"
                  ? "bg-midnight/20 text-midnight"
                  : "bg-gold/20 text-gold border border-gold/30"
              }`}
            >
              Save ~15%
            </span>
          </button>
        </motion.div>
      </div>

      {/* --- 3-Card Fan-out Grid --- */}
      <div className="w-full max-w-6xl mx-auto mt-14 md:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
        {plans.map((plan, index) => {
          const isFeatured = plan.name === "Pro";
          const price = billingCycle === "monthly" ? plan.priceMonth : Math.round(plan.priceYear / 12);
          const variant = cardVariants[index] || cardVariants[1];

          return (
            <motion.div
              key={plan.id}
              initial={variant.initial}
              whileHover="hover"
              variants={{
                hover: variant.hover,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`group relative flex flex-col justify-between rounded-[28px] p-7 md:p-8 text-left transition-shadow duration-300 overflow-hidden ${
                isFeatured
                  ? "bg-gradient-to-b from-[#1b2253]/90 via-[#151a44]/95 to-[#0e122d]/98 border-2 border-teal/40 shadow-[0_20px_50px_rgba(46,196,182,0.18)] z-10"
                  : "bg-gradient-to-b from-[#171b40]/80 via-[#121636]/90 to-[#0b0e27]/95 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-white/20"
              } backdrop-blur-2xl`}
            >
              {/* --- Background Sweep Sheen Animation on Hover --- */}
              <motion.div
                variants={{
                  hover: {
                    x: ["-100%", "200%"],
                  },
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
                className="pointer-events-none absolute -inset-y-full -left-full w-[160%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent skew-x-[-25deg]"
              />

              {/* Ambient corner light */}
              <div
                className={`pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl transition-opacity duration-300 ${
                  isFeatured ? "bg-teal/20 opacity-80 group-hover:opacity-100" : "bg-white/5 opacity-40 group-hover:opacity-75"
                }`}
              />

              {/* --- Card Top Header --- */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isFeatured
                        ? "bg-teal text-midnight font-bold shadow-[0_0_10px_rgba(46,196,182,0.5)]"
                        : "bg-white/5 border border-white/10 text-mist"
                    }`}
                  >
                    {plan.name}
                  </span>

                  {isFeatured && (
                    <span className="flex items-center gap-1 text-[13.5px] font-semibold text-gold bg-gold/10 border border-gold/20 px-2.5 py-0.5 rounded-full">
                      <Sparkles size={13} />
                      Most Popular
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs text-mist/75 min-h-[34px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 pb-5 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-mist text-lg font-medium">$</span>
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-ivory">
                      <RollingNumber value={price} delay={0.25 + index * 0.15} />
                    </span>
                    <span className="text-mist/70 text-xs font-medium">
                      / month
                    </span>
                  </div>
                  {billingCycle === "yearly" && (
                    <p className="text-[13.5px] text-teal/90 mt-1 font-medium">
                      Billed annually (${plan.priceYear}/year)
                    </p>
                  )}
                </div>

                {/* --- Features List (Key Highlights) --- */}
                <div className="mt-6">
                  {(() => {
                    const prevPlan = index > 0 ? plans[index - 1] : null;
                    const displayFeatures = prevPlan
                      ? plan.features.filter((f) => !prevPlan.features.includes(f))
                      : plan.features;

                    return (
                      <>
                        <p className="text-[13.5px] font-bold uppercase tracking-wider text-mist/60 mb-3.5">
                          {prevPlan ? `All features in ${prevPlan.name} +` : "Key Features:"}
                        </p>
                        <ul className="space-y-3">
                          {displayFeatures.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2.5 text-[15.5px] text-ivory/85 leading-tight"
                            >
                              <div
                                className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                                  isFeatured
                                    ? "bg-teal/20 text-teal"
                                    : "bg-white/10 text-teal"
                                }`}
                              >
                                <Check size={13} strokeWidth={2.5} />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* --- Bottom CTA Button --- */}
              <div className="relative z-10 mt-8 pt-4">
                <button
                  type="button"
                  className={`w-full group/btn flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isFeatured
                      ? "bg-teal text-midnight hover:bg-[#3de2d3] shadow-[0_0_20px_rgba(46,196,182,0.4)] hover:shadow-[0_0_25px_rgba(46,196,182,0.6)]"
                      : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-ivory"
                  }`}
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </div>

            </motion.div>
          );
        })}
      </div>

    </div>
  );
};

export default Spotlight;
