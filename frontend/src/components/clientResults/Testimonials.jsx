import React, { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useMotionTemplate,
} from "motion/react";
import { Quote, Star, MessageSquareQuote } from "lucide-react";
import {
  testimonialsHeader,
  testimonialsRowA,
  testimonialsRowB,
} from "../../utils/clientResultsItems";

const initials = (name) =>
  name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

const TestimonialCard = ({ item, dimmed, onEnter, onLeave }) => {
  // Cursor-following spotlight inside each card
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const glow = useMotionTemplate`radial-gradient(180px circle at ${mx}px ${my}px, ${item.accent}26, transparent 70%)`;

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={handleMove}
      animate={{
        opacity: dimmed ? 0.45 : 1,
        scale: dimmed ? 0.97 : 1,
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative shrink-0 w-[300px] sm:w-[340px] rounded-[22px] border border-white/10 hover:border-white/25 bg-gradient-to-b from-[#161a3f]/90 to-[#0e1131]/95 p-6 backdrop-blur-xl overflow-hidden cursor-default transition-colors"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glow }}
      />
      <Quote
        size={26}
        className="relative mb-3"
        style={{ color: item.accent }}
        strokeWidth={1.6}
      />
      <p className="relative text-[16.5px] leading-relaxed text-ivory/90 min-h-[96px]">
        {item.quote}
      </p>

      <div className="relative mt-5 pt-4 border-t border-white/[0.07] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[14.5px] font-bold border"
            style={{
              color: item.accent,
              background: `${item.accent}1f`,
              borderColor: `${item.accent}55`,
            }}
          >
            {initials(item.name)}
          </div>
          <div>
            <p className="text-[15.5px] font-semibold text-ivory leading-tight">
              {item.name}
            </p>
            <p className="text-[14px] text-mist/60 mt-0.5">{item.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((s) => (
            <Star key={s} size={11} className="fill-gold text-gold" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Infinite marquee: eases to a stop on hover, eases back up on leave
const MarqueeRow = ({ items, direction = 1, speed = 45 }) => {
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const setWidth = useRef(0);
  const factor = useRef(1);
  const hovered = useRef(false);
  const [activeIdx, setActiveIdx] = useState(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setWidth.current = trackRef.current.scrollWidth / 2;
      if (direction === 1) x.set(0);
      else x.set(-setWidth.current);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    const target = hovered.current ? 0 : 1;
    factor.current += (target - factor.current) * Math.min(1, delta * 0.006);
    const w = setWidth.current;
    if (!w) return;
    let next = x.get() - direction * speed * factor.current * (delta / 1000);
    if (next <= -w) next += w;
    if (next > 0) next -= w;
    x.set(next);
  });

  const doubled = [...items, ...items];

  return (
    <div
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => {
        hovered.current = false;
        setActiveIdx(null);
      }}
      className="overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex gap-5 w-max">
        {doubled.map((item, i) => (
          <TestimonialCard
            key={i}
            item={item}
            dimmed={activeIdx !== null && activeIdx !== i}
            onEnter={() => setActiveIdx(i)}
            onLeave={() => setActiveIdx(null)}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-16 md:py-24 select-none overflow-hidden">
      <div className="wrapper text-center max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-[15.5px] text-teal border border-teal/20 bg-teal/10 backdrop-blur-lg mb-4"
        >
          <MessageSquareQuote size={15} />
          <span>{testimonialsHeader.badge}</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-ivory"
        >
          {testimonialsHeader.headingStart}{" "}
          <span className="text-teal font-light">
            {testimonialsHeader.headingHighlight}
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3.5 text-mist/75 text-[17.5px]"
        >
          {testimonialsHeader.subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-2"
      >
        <MarqueeRow items={testimonialsRowA} direction={1} speed={45} />
        <MarqueeRow items={testimonialsRowB} direction={-1} speed={38} />
      </motion.div>
    </section>
  );
};

export default Testimonials;

