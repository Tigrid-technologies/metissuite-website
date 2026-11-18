import React from "react";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import Header from "../components/shared/Header";
import Pattern from "../components/shared/Pattern";
const MainLayout = () => {
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
      {/* header */}
      <header>
        <Header />
      </header>
      <main className="flex-1 pt-21">
        <Outlet />
      </main>
      <footer className=""></footer>
      {/* footer */}
    </div>
  );
};

export default MainLayout;
