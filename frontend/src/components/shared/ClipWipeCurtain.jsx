import React, { useEffect } from "react";
import { motion } from "motion/react";

/**
 * Motion.dev Curtains: Clip Wipe Page Transition
 * https://motion.dev/docs/curtains#clipwipe
 *
 * Life-Cycle with AnimatePresence mode="wait":
 * 1. Exit phase: Curtain wipes in from left across the current page (covers screen).
 * 2. Route swap: When 100% covered, the old route unmounts and the new route mounts behind the curtain.
 * 3. Enter phase: Curtain wipes away to the right, revealing the new route from top.
 */
const ClipWipeCurtain = ({ children }) => {
  // Ensure the new page always starts at the top behind the curtain
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative w-full"
    >
      {/* 1. Page Content */}
      {children}

      {/* 2. Leading Teal Accent Beam */}
      <motion.div
        variants={{
          initial: {
            clipPath: "polygon(0% 0%, 128% 0%, 112% 100%, 0% 100%)",
          },
          animate: {
            clipPath: [
              "polygon(0% 0%, 128% 0%, 112% 100%, 0% 100%)",
              "polygon(128% 0%, 128% 0%, 112% 100%, 112% 100%)",
            ],
            transition: {
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            },
          },
          exit: {
            clipPath: [
              "polygon(0% 0%, 0% 0%, -16% 100%, -16% 100%)",
              "polygon(0% 0%, 128% 0%, 112% 100%, 0% 100%)",
            ],
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="fixed inset-0 z-[9998] pointer-events-none bg-gradient-to-r from-teal/40 via-teal to-[#14b8a6] shadow-[0_0_50px_rgba(46,196,182,0.8)]"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, -16% 100%, -16% 100%)",
        }}
      />

      {/* 3. Main Midnight Curtain with Ambient Grid & Brand Emblem */}
      <motion.div
        variants={{
          initial: {
            clipPath: "polygon(0% 0%, 120% 0%, 104% 100%, 0% 100%)",
          },
          animate: {
            clipPath: [
              "polygon(0% 0%, 120% 0%, 104% 100%, 0% 100%)",
              "polygon(120% 0%, 120% 0%, 104% 100%, 104% 100%)",
            ],
            transition: {
              duration: 0.85,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            },
          },
          exit: {
            clipPath: [
              "polygon(0% 0%, 0% 0%, -16% 100%, -16% 100%)",
              "polygon(0% 0%, 120% 0%, 104% 100%, 0% 100%)",
            ],
            transition: {
              duration: 0.8,
              delay: 0.05,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        className="fixed inset-0 z-[9999] pointer-events-none bg-gradient-to-b from-[#13193e] via-[#0f1433] to-[#0a0d22] flex items-center justify-center overflow-hidden"
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, -16% 100%, -16% 100%)",
        }}
      >
        {/* Subtle grid pattern inside curtain */}
        <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(#ffffff30_1px,transparent_1px),linear-gradient(90deg,#ffffff30_1px,transparent_1px)] bg-[length:58px_58px]" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-teal/15 blur-[120px]" />

        {/* Centered Brand Emblem */}
        <motion.div
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            animate: {
              opacity: [0, 1, 0],
              scale: [0.9, 1, 0.95],
              transition: { duration: 0.7, ease: "easeInOut" },
            },
            exit: {
              opacity: [0, 1],
              scale: [0.9, 1],
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-[#14b8a6] text-midnight font-bold text-xl flex items-center justify-center shadow-[0_0_30px_rgba(46,196,182,0.6)]">
            M
          </div>
          <span className="text-xs font-mono font-semibold tracking-widest text-teal uppercase">
            MetisSuite AI
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ClipWipeCurtain;
