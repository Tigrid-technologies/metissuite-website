import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * RollingWords: Rotates through an array of words with smooth 3D staggered letter roll animations.
 * @param {string[]} words - Array of words/phrases to rotate through.
 * @param {number} interval - Duration in ms before cycling to the next word (default 3200ms).
 * @param {string} className - Optional Tailwind/CSS classes for styling the text.
 */
export const RollingWords = ({
  words = [],
  interval = 3200,
  className = "",
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  if (!words || words.length === 0) return null;

  const currentWord = words[index] || "";

  return (
    <span
      className={`relative inline-flex items-baseline overflow-hidden align-baseline ${className}`}
      style={{ perspective: "1000px" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-flex flex-wrap items-baseline"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentWord.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                initial: {
                  y: "110%",
                  opacity: 0,
                  rotateX: -75,
                },
                animate: {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                },
                exit: {
                  y: "-110%",
                  opacity: 0,
                  rotateX: 75,
                },
              }}
              transition={{
                duration: 0.42,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.02,
              }}
              className="inline-block transform-gpu origin-bottom will-change-transform"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

/**
 * RollingRevealText: A single phrase that rolls into place character-by-character on mount.
 */
export const RollingRevealText = ({ text = "", delay = 0, className = "" }) => {
  const characters = text.split("");

  return (
    <span
      className={`inline-flex flex-wrap items-baseline overflow-hidden ${className}`}
      style={{ perspective: "800px" }}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "115%", opacity: 0, rotateX: -60 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.022,
          }}
          className="inline-block transform-gpu origin-bottom will-change-transform"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default RollingWords;

