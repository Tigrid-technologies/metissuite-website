import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ctaContent, ctaVideoSources } from "../../utils/ctaItems";

const MotionLink = motion.create(Link);

// Shared Call-To-Action component using transparent alpha video
const CallToAction = (props) => {
  const c = { ...ctaContent, ...props };
  const sectionRef = useRef(null);

  // Pointer tracking for interactive grid illumination
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const mask = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, black 0%, transparent 80%)`;
  const bloom = useMotionTemplate`radial-gradient(240px circle at ${mx}px ${my}px, rgba(46,196,182,0.12), transparent 75%)`;

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  // Subtle floating parallax on the robot as the section scrolls past
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section className="relative wrapper py-16 md:py-24 select-none">
      <motion.div
        ref={sectionRef}
        onMouseMove={handleMove}
        onMouseLeave={() => {
          mx.set(-1000);
          my.set(-1000);
        }}
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]"
      >
        {/* Ambient aura matching the midnight theme */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-teal/15 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 w-[420px] h-[420px] rounded-full bg-indigo/20 blur-[120px]"
        />

        {/* Grid Layer: Starts visible on the left and smoothly fades out towards the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,#000_0%,#000_25%,transparent_60%)] [-webkit-mask-image:linear-gradient(to_right,#000_0%,#000_25%,transparent_60%)]"
        >
          {/* Ambient Wireframe Grid */}
          <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(#ffffff40_1px,transparent_1px),linear-gradient(90deg,#ffffff40_1px,transparent_1px)] bg-[length:48px_48px]" />

          {/* Interactive Pointer Spotlight Grid */}
          <motion.div
            className="absolute inset-0 opacity-60 bg-[linear-gradient(var(--color-teal)_1px,transparent_1px),linear-gradient(90deg,var(--color-teal)_1px,transparent_1px)] bg-[length:48px_48px]"
            style={{ maskImage: mask, WebkitMaskImage: mask }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ background: bloom }}
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0 px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[15.5px] text-teal border border-teal/20 bg-teal/10 backdrop-blur-lg mb-5"
            >
              <Sparkles size={14} />
              <span>{c.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[34px] md:text-[48px] font-semibold tracking-tight leading-[1.1] text-ivory"
            >
              {c.headingStart}{" "}
              <span className="font-light text-teal">{c.headingHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-mist/75 text-[17.5px] leading-relaxed max-w-lg"
            >
              {c.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MotionLink
                to={c.primaryHref}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative overflow-hidden inline-flex items-center gap-2 rounded-full py-3 px-7 bg-teal text-midnight font-bold text-sm shadow-[0_0_24px_rgba(46,196,182,0.45)] hover:shadow-[0_0_34px_rgba(46,196,182,0.7)] transition-shadow"
              >
                <motion.span
                  aria-hidden="true"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "220%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                />
                <span className="relative">{c.primaryLabel}</span>
                <ArrowRight
                  size={16}
                  strokeWidth={2.2}
                  className="relative group-hover/btn:translate-x-1 transition-transform"
                />
              </MotionLink>

              {c.secondaryLabel && (
                <MotionLink
                  to={c.secondaryHref}
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full py-3 px-7 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 text-ivory font-semibold text-sm backdrop-blur transition-colors"
                >
                  {c.secondaryLabel}
                </MotionLink>
              )}
            </motion.div>

            {c.points?.length > 0 && (
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {c.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                    className="flex items-center gap-2 text-[15px] text-mist/70"
                  >
                    <Check size={13} strokeWidth={3} className="text-teal" />
                    {p}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Column: Transparent Floating Robot */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              style={{ y: videoY }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none aspect-[4/3] flex items-center justify-center"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)]"
              >
                {ctaVideoSources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
