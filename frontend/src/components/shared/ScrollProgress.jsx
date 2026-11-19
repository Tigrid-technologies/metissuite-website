import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

/**
 * TopScrollIndicator:
 * A sleek, high-visibility gradient progress bar fixed at the very top of the viewport
 * that tracks reading/scroll depth across all pages.
 */
export const TopScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="top-scroll-indicator"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal via-[#44ecd8] to-gold origin-left z-50 shadow-[0_0_12px_rgba(46,196,182,0.85)] pointer-events-none"
    />
  );
};

/**
 * FloatingScrollToTop:
 * A modern floating circular progress button that smoothly appears in the bottom-right
 * once the user scrolls past 250px.
 */
export const FloatingScrollToTop = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubY = scrollY.on("change", (latest) => {
      setVisible(latest > 250);
    });
    const unsubProgress = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });

    return () => {
      unsubY();
      unsubProgress();
    };
  }, [scrollY, scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#121636]/90 border border-teal/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center justify-center text-teal hover:text-white hover:border-teal hover:shadow-[0_0_20px_rgba(46,196,182,0.5)] cursor-pointer group"
          aria-label="Scroll to top"
        >
          {/* Circular SVG Scroll Progress Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-0.5" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15"
              className="stroke-white/10 fill-none"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="15"
              className="stroke-teal fill-none transition-all duration-75"
              strokeWidth="2.5"
              strokeDasharray="94.25"
              strokeDashoffset={94.25 * (1 - progress)}
              strokeLinecap="round"
            />
          </svg>

          {/* Center Arrow Icon */}
          <ArrowUp
            size={16}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default TopScrollIndicator;

