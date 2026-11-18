import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";

const Pattern = () => {
  // Cursor tracking for interactive hover glow across the page
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handlePointerMove = (e) => {
      mouseX.set(e.pageX);
      mouseY.set(e.pageY);
    };

    const handlePointerLeave = () => {
      mouseX.set(-1000);
      mouseY.set(-1000);
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [mouseX, mouseY]);

  // Refined radial spotlight mask focused on the cursor position
  const mouseMask = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 80%)`;
  const mouseRadialGlow = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(46, 196, 182, 0.06), transparent 75%)`;

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none absolute top-0 inset-x-0 h-[850px] overflow-hidden select-none z-0
        [mask-image:linear-gradient(to_bottom,#000_15%,transparent_95%)]
        [-webkit-mask-image:linear-gradient(to_bottom,#000_15%,transparent_95%)]
      "
    >
      {/* 1. Base ambient grid (subtle wireframe) */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.10]
          bg-[linear-gradient(#ffffff47_1px,transparent_1px),linear-gradient(90deg,#ffffff47_1px,transparent_1px)]
          bg-[length:58px_58px]
        "
      />

      {/* 2. Interactive mouse hover spotlight (reveals teal grid lines under pointer) */}
      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-45
          bg-[linear-gradient(var(--color-teal)_1px,transparent_1px),linear-gradient(90deg,var(--color-teal)_1px,transparent_1px)]
          bg-[length:58px_58px]
        "
        style={{
          maskImage: mouseMask,
          WebkitMaskImage: mouseMask,
        }}
      />

      {/* 3. Soft ambient glow under pointer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: mouseRadialGlow,
        }}
      />

      {/* 4. Feathered fade out at the bottom to ensure 100% seamless blending */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
    </div>
  );
};

export default Pattern;
