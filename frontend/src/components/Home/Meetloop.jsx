import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import { LottieLight as Lottie } from "lottie-react";
import nfcLoadingAnimation from "../../../public/assets/elements/nfc loading.json";
import {
  QrCode,
  UserCheck,
  Mail,
  Sparkles,
  Smartphone,
  Check,
  ArrowRight,
  Wifi,
  Battery,
  RotateCcw,
  CheckCircle2,
  FileText,
  Volume2,
} from "lucide-react";
import { meetloopData } from "../../utils/meetloopItems";

// Interactive Mobile Phone Device Mockup
const MobilePhoneMockup = ({ activeFeature, setActiveFeature }) => {
  const [screenState, setScreenState] = useState(0); // 0: Ready to Scan, 1: Contact Captured
  const { mobileScreens } = meetloopData;

  // 3D Perspective Tilt on Mouse Move
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [8, -8]);
  const rotateY = useTransform(x, [-150, 150], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center py-6 select-none perspective-[1200px]"
    >
      {/* Concentric Animated NFC Signal Waves behind the Phone */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{
              scale: [0.95, 1.35, 1.75],
              opacity: [0.45, 0.2, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeOut",
              delay: ring * 0.9,
            }}
            className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-teal/30"
          />
        ))}
      </div>

      {/* Phone Chassis Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 w-[320px] sm:w-[370px] min-h-[610px] rounded-[48px] p-3 border-[3.5px] border-[#2c3666] bg-gradient-to-b from-[#182046] via-[#101633] to-[#0c0f24] shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(46,196,182,0.18)]"
      >
        {/* Subtle Edge Gloss Reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[44px] bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-50" />

        {/* Screen Display */}
        <div className="relative rounded-[38px] bg-gradient-to-b from-[#15193d] via-[#111435] to-[#0b0e27] p-5 pt-3 h-full min-h-[582px] flex flex-col justify-between overflow-hidden border border-white/10">
          {/* Dynamic Island: Centered at the very top */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full flex items-center justify-between px-2.5 z-20 border border-white/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b234b]" />
            <span className="w-1.5 h-1.5 rounded-full bg-teal/60 animate-pulse" />
          </div>

          {/* Top Status Bar: 9:41 on left, Wi-Fi & Battery on right (aligned with the Island) */}
          <div className="relative z-10 flex items-center justify-between text-[13px] font-mono text-mist/60 px-2 pt-0.5 mb-5">
            <span className="font-semibold text-ivory text-[13px] tracking-tight pl-1">
              9:41
            </span>
            <div className="flex items-center gap-1.5 pr-1">
              <Wifi size={12} />
              <Battery size={13} />
            </div>
          </div>

          {/* Screen Content: AnimatePresence between Screen 1 and Screen 2 */}
          <AnimatePresence mode="wait">
            {screenState === 0 ? (
              // SCREEN 1: Ready to Tap / Scan
              <motion.div
                key="screen-ready"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center my-auto"
              >
                {/* Brand */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-6 h-6 rounded-md bg-teal/20 border border-teal/40 text-teal flex items-center justify-center font-bold text-[13px]">
                    M
                  </span>
                  <span className="text-xs font-semibold text-ivory tracking-wide">
                    {mobileScreens.screen1.brand}
                  </span>
                </div>

                {/* Glowing NFC Loading Lottie Animation (Replacing static QR icon) */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setScreenState(1)}
                  className="relative cursor-pointer group flex items-center justify-center"
                  title="Tap to Connect"
                >
                  <div className="absolute -inset-3 rounded-full bg-teal/25 blur-xl group-hover:bg-teal/40 transition-all duration-300" />
                  <div className="relative w-42 h-42 rounded-full bg-gradient-to-b from-[#1a234f] to-[#12173b] border-2 border-teal/40 flex items-center justify-center shadow-[0_0_25px_rgba(46,196,182,0.35)] group-hover:border-teal/70 group-hover:shadow-[0_0_35px_rgba(46,196,182,0.5)] transition-all overflow-hidden p-1">
                    <Lottie
                      src={nfcLoadingAnimation}
                      loop={true}
                      autoplay={true}
                      className="w-full h-full object-contain pointer-events-none scale-110"
                    />
                  </div>
                </motion.div>

                {/* Copy */}
                <div className="mt-7">
                  <h4 className="text-2xl font-bold text-ivory tracking-tight">
                    {mobileScreens.screen1.heading}
                  </h4>
                  <p className="mt-2 text-[14.5px] text-mist/80 leading-relaxed px-2">
                    {mobileScreens.screen1.subtitle}
                  </p>
                </div>

                {/* Primary Tap Action Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setScreenState(1)}
                  className="mt-6 w-full py-2.5 px-4 rounded-xl bg-teal text-midnight font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_18px_rgba(46,196,182,0.4)] hover:shadow-[0_0_24px_rgba(46,196,182,0.6)] transition-all cursor-pointer"
                >
                  <span>{mobileScreens.screen1.buttonLabel}</span>
                  <ArrowRight size={13} strokeWidth={2.5} />
                </motion.button>
              </motion.div>
            ) : (
              // SCREEN 2: Contact Captured & Sync Initiated
              <motion.div
                key="screen-captured"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between my-auto py-1"
              >
                {/* Contact Card Header */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-left">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold to-amber-600 text-midnight font-bold text-xs flex items-center justify-center shrink-0">
                      EV
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-[15.5px] font-bold text-ivory truncate">
                        {mobileScreens.screen2.name}
                      </h5>
                      <span className="text-[13px] text-teal font-medium block truncate">
                        {mobileScreens.screen2.title}
                      </span>
                    </div>
                  </div>
                  <span className="text-[12.5px] font-mono text-mist/60 block">
                    📍 {mobileScreens.screen2.capturedVia}
                  </span>
                </div>

                {/* Transcribed Voice Memo */}
                <div className="mt-2.5 p-2.5 rounded-xl bg-teal/10 border border-teal/20 text-left">
                  <div className="flex items-center gap-1.5 text-[12.5px] text-teal font-semibold mb-1">
                    <Volume2 size={12} />
                    <span>Transcribed Note</span>
                  </div>
                  <p className="text-[13.5px] text-ivory/90 italic leading-snug">
                    {mobileScreens.screen2.memo}
                  </p>
                </div>

                {/* Real-Time Automated Triggers Checklist */}
                <div className="mt-3 space-y-1.5 text-left">
                  <span className="text-[12px] font-mono text-mist/65 uppercase tracking-wider block">
                    Automated Actions Triggered
                  </span>
                  {mobileScreens.screen2.triggers.map((trig, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 * i, duration: 0.3 }}
                      className="flex items-start gap-2 text-[13px] text-mist/90"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-teal shrink-0 mt-0.5"
                      />
                      <span>{trig}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Reset / Test Again Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setScreenState(0)}
                  className="mt-4 w-full py-2.5 px-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-ivory text-[13.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw size={13} />
                  <span>Reset / Scan Another Badge</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Home Indicator Bar */}
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2" />
        </div>
      </motion.div>

      {/* Screen Mode Indicator Tabs */}
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => setScreenState(0)}
          className={`px-3 py-1 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer ${
            screenState === 0
              ? "bg-teal/20 text-teal border border-teal/40 shadow-sm"
              : "text-mist/50 hover:text-mist"
          }`}
        >
          1. Tap to Scan
        </button>
        <span className="text-mist/30 text-xs">→</span>
        <button
          onClick={() => setScreenState(1)}
          className={`px-3 py-1 rounded-full text-[13.5px] font-semibold transition-all cursor-pointer ${
            screenState === 1
              ? "bg-teal/20 text-teal border border-teal/40 shadow-sm"
              : "text-mist/50 hover:text-mist"
          }`}
        >
          2. Auto-Synced
        </button>
      </div>
    </div>
  );
};

const Meetloop = () => {
  const { header, features } = meetloopData;
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative py-20 md:py-28 wrapper select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Interactive Mobile Phone Div */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <MobilePhoneMockup
            activeFeature={activeFeature}
            setActiveFeature={setActiveFeature}
          />
        </div>

        {/* Right Column: Copy & Feature Highlights */}
        <div className="lg:col-span-6 text-left space-y-6 order-1 lg:order-2">
          {/* Section Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-teal bg-teal/10 border border-teal/20 backdrop-blur-lg"
          >
            <span className="w-5 h-5 rounded-full border border-teal text-[12px] flex items-center justify-center font-mono font-bold">
              {header.badgeNumber}
            </span>
            <span className="tracking-wider uppercase text-[13px] font-bold">
              {header.badgeLabel}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-[52px] font-semibold tracking-tight text-ivory leading-[1.1]"
          >
            {header.headingStart}{" "}
            <span className="text-teal font-light">
              {header.headingHighlight}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-mist/80 text-[17.5px] md:text-[18.5px] leading-relaxed max-w-xl"
          >
            {header.description}
          </motion.p>

          {/* 3 Interactive Feature Rows */}
          <div className="space-y-3 pt-2">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = activeFeature === idx;

              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-teal/15 via-[#161b40]/90 to-[#0e122d]/95 border-teal/40 shadow-[0_0_20px_rgba(46,196,182,0.15)]"
                      : "bg-[#14183a]/40 border-white/[0.07] hover:border-white/15 hover:bg-[#161a40]/60"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Icon Squircle */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105"
                      style={{
                        color: feat.color,
                        borderColor: `${feat.color}40`,
                        backgroundColor: `${feat.color}18`,
                      }}
                    >
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[17px] font-semibold text-ivory">
                          {feat.title}
                        </h4>
                        <span
                          className="text-[13px] font-mono px-2.5 py-0.5 rounded-full border shrink-0"
                          style={{
                            color: feat.color,
                            borderColor: `${feat.color}35`,
                            backgroundColor: `${feat.color}12`,
                          }}
                        >
                          {feat.tag}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[15.5px] text-mist/80 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetloop;

