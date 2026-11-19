import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

// 20-number reel: digits spin through the first cycle and land in the second
const REEL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const RollingDigit = ({ digit, delay = 0, active }) => {
  const target = -((10 + Number(digit)) * 5); // 5% of the reel per row

  return (
    <span className="relative inline-block h-[1.12em] overflow-hidden leading-none align-baseline">
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: active ? `${target}%` : "0%" }}
        transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col"
      >
        {REEL.map((n, i) => (
          <span
            key={i}
            className="h-[1.12em] flex items-center justify-center tabular-nums"
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

// Rolls every digit of `value` (number or string) when scrolled into view.
// Non-digit characters (%, ×, ., +, spaces) render as static text.
const RollingNumber = ({ value, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const chars = String(value).split("");

  return (
    <span
      ref={ref}
      className={`inline-flex items-baseline overflow-hidden ${className}`}
    >
      {chars.map((ch, i) =>
        /\d/.test(ch) ? (
          <RollingDigit
            key={i}
            digit={ch}
            delay={delay + i * 0.08}
            active={inView}
          />
        ) : (
          <span key={i} className="inline-block whitespace-pre">
            {ch}
          </span>
        ),
      )}
    </span>
  );
};

export default RollingNumber;

