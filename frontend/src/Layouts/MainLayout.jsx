import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Header from "../components/shared/Header";
import Pattern from "../components/shared/Pattern";
import ClipWipeCurtain from "../components/shared/ClipWipeCurtain";

const MainLayout = () => {
  const location = useLocation();
  const outlet = useOutlet();
  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    ["scaleX(0)", "scaleX(1)"],
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-midnight">
      {/* Top ambient grid pattern background across all pages */}
      <Pattern />

      <motion.div
        id="scroll-indicator"
        style={{
          transform,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 50,
          backgroundColor: "#2ec4b6",
        }}
      />

      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main Content with Curtain ClipWipe (zero flicker transition) */}
      <main className="flex-1 pt-21">
        <AnimatePresence mode="wait" initial={false}>
          <ClipWipeCurtain key={location.pathname}>
            {outlet}
          </ClipWipeCurtain>
        </AnimatePresence>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default MainLayout;
