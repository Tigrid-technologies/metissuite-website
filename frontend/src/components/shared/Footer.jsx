import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useScroll,
} from "motion/react";
import {
  ArrowUp,
  ArrowRight,
  Copy,
  Check,
  Globe,
  Clock,
  Shield,
  Activity,
  ExternalLink,
  Sparkles,
  Sun,
  Moon,
  Terminal,
  Send,
  Zap,
} from "lucide-react";
import { footerData } from "../../utils/footerItems";

// --- Staggered Rolling Letter Link ---
const FooterRollingLink = ({ href, children, external }) => {
  const [isHovered, setIsHovered] = useState(false);
  const text = String(children);

  const content = (
    <span
      className="relative inline-flex items-center overflow-hidden py-0.5 text-xs sm:text-[13px] font-medium text-mist/75 hover:text-white transition-colors group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative inline-flex overflow-hidden">
        {/* Layer 1: Normal text rolling up */}
        <span className="inline-flex">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              animate={{ y: isHovered ? "-115%" : "0%" }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.012,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>

        {/* Layer 2: Teal text rolling in from bottom */}
        <span className="absolute inset-0 inline-flex text-teal">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "115%" }}
              animate={{ y: isHovered ? "0%" : "115%" }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.012,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </span>

      {external && (
        <ExternalLink
          size={11}
          className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-teal"
        />
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link to={href} className="inline-block">
      {content}
    </Link>
  );
};

const Footer = () => {
  const footerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [showDiagnostics, setShowDiagnostics] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [hubTimes, setHubTimes] = useState({});

  // Reactive Cursor Spotlight within Footer
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 180 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 180 });

  const handleMouseMove = (e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  // Scroll Progress Tracking for Back to Top Button
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  // Real-time world clock for biotech hubs (with Day/Night detection)
  useEffect(() => {
    const updateTimes = () => {
      const times = {};
      footerData.bioHubs.forEach((hub) => {
        try {
          const now = new Date();
          const timeStr = new Intl.DateTimeFormat("en-US", {
            timeZone: hub.tz,
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }).format(now);

          // Get hour in target timezone to determine day/night
          const hour = parseInt(
            new Intl.DateTimeFormat("en-US", {
              timeZone: hub.tz,
              hour: "numeric",
              hour12: false,
            }).format(now),
            10,
          );

          const isDaytime = hour >= 6 && hour < 19;
          times[hub.city] = { time: timeStr, isDaytime };
        } catch {
          times[hub.city] = { time: "--:--", isDaytime: true };
        }
      });
      setHubTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(footerData.brand.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSubmitted(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#060919] border-t border-white/[0.08] text-mist select-none overflow-hidden z-20"
    >
      {/* 1. Dynamic Cursor Spotlight Halo */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          opacity: 0.15,
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(46, 196, 182, 0.15), transparent 70%)`,
        }}
      />

      {/* Ambient background soft light gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-gradient-to-r from-teal/[0.03] via-indigo/[0.05] to-gold/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="wrapper relative z-10 pt-16 pb-8">
        {/* --- Top Row: Brand & Live Status + Interactive Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/[0.07] items-start">
          {/* Left Column: Brand, Tagline, Telemetry Trigger (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block select-none group">
              <span className="font-bold text-ivory text-2xl group-hover:text-teal transition-colors">
                {footerData.brand.nameStart}
              </span>
              <span className="font-light text-ivory text-2xl">
                {footerData.brand.nameMiddle}
              </span>
              <span className="font-semibold text-xs text-gold ml-1.5 px-1.5 py-0.5 rounded bg-gold/10 border border-gold/20">
                {footerData.brand.nameBadge}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-mist/75 leading-relaxed max-w-sm">
              {footerData.brand.tagline}
            </p>

            {/* Interactive Live Status Console Trigger */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              {/* <button
                type="button"
                onClick={() => setShowDiagnostics(!showDiagnostics)}
                className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal/50 hover:bg-teal/[0.08] text-xs transition-all cursor-pointer shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-ivory font-medium text-[11.5px] group-hover:text-teal transition-colors">
                  {footerData.brand.status.label}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-teal font-semibold text-[11px] font-mono">
                  {footerData.brand.status.uptime}
                </span>
                <Terminal
                  size={12}
                  className="text-mist/40 group-hover:text-teal ml-1 transition-colors"
                />
              </button> */}

              {/* 1-Click Copyable Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-gold/40 hover:bg-gold/[0.06] text-xs text-ivory transition-all cursor-pointer"
              >
                <span className="text-[11.5px] font-mono">
                  {footerData.brand.contactEmail}
                </span>
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-gold text-[11px] font-bold flex items-center gap-1"
                    >
                      <Check size={12} strokeWidth={2.5} />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <Copy
                      size={12}
                      className="text-mist/40 group-hover:text-gold transition-colors"
                    />
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Bio Briefing Dispatch (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-r from-white/[0.03] via-white/[0.02] to-transparent border border-white/[0.08] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-gold text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} />
                <span>Executive Bio-AI Dispatch</span>
              </div>
              <p className="text-xs text-mist/80 max-w-xs leading-relaxed">
                Receive weekly biotech workflow teardowns, PubMed agent scans,
                and FDA compliance blueprints.
              </p>
            </div>

            {/* Newsletter Input */}
            <form
              onSubmit={handleNewsletterSubmit}
              className="w-full sm:w-auto flex-1 max-w-sm relative"
            >
              <div className="relative flex items-center rounded-xl bg-[#090c21] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="scientist@biopharma.com"
                  className="w-full bg-transparent py-2.5 pl-3.5 pr-10 text-xs text-ivory placeholder:text-mist/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 rounded-lg bg-teal text-midnight hover:bg-[#3de2d3] transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  {newsletterSubmitted ? (
                    <Check size={13} strokeWidth={2.5} />
                  ) : (
                    <ArrowRight size={13} />
                  )}
                </button>
              </div>

              {newsletterSubmitted && (
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute left-0 top-full mt-1.5 text-[11px] text-teal font-semibold block"
                >
                  ✓ Subscribed to weekly intelligence dispatch.
                </motion.span>
              )}
            </form>
          </div>
        </div>

        {/* --- Interactive Live Diagnostics Modal / Drawer --- */}
        <AnimatePresence>
          {showDiagnostics && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-b border-white/[0.08]"
            >
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-teal">
                    <Terminal size={14} />
                    <span className="font-bold">
                      METIS OS TELEMETRY CONSOLE v2.4
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDiagnostics(false)}
                    className="text-xs text-mist/60 hover:text-white transition-colors cursor-pointer"
                  >
                    [ Close Console ✕ ]
                  </button>
                </div>

                {/* 6 Agents Telemetry Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {footerData.agentTelemetry.map((agent) => (
                    <div
                      key={agent.name}
                      className="p-3 rounded-xl bg-[#090c21] border border-white/[0.08] font-mono text-[11px] space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-ivory">
                          {agent.name}
                        </span>
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: agent.color }}
                        />
                      </div>
                      <div className="text-[10px] text-mist/60">
                        {agent.role}
                      </div>
                      <div
                        className="text-[10px] font-semibold pt-1 border-t border-white/[0.05]"
                        style={{ color: agent.color }}
                      >
                        {agent.latency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Navigation Links Grid --- */}
        <div className="py-12 border-b border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.navigationGroups.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ivory">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterRollingLink
                      href={link.href}
                      external={link.external}
                    >
                      {link.label}
                    </FooterRollingLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 4th Column: Direct Walkthrough Action & Security Card */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ivory">
              Deployment
            </h4>
            <div className="space-y-3">
              <Link
                to="/book-walkthrough"
                className="w-full py-2.5 px-4 rounded-xl bg-teal text-midnight font-bold text-xs shadow-[0_0_15px_rgba(46,196,182,0.35)] hover:bg-[#3de2d3] flex items-center justify-between transition-all group"
              >
                <span>Book a Walkthrough</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>

              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-3 text-[11px] text-mist/70 space-y-1">
                <div className="flex items-center gap-1.5 text-teal font-semibold">
                  <Shield size={12} />
                  <span>Enterprise Security</span>
                </div>
                <p className="leading-relaxed">
                  Single-tenant VPC isolation, AES-256 encryption & HIPAA BAA
                  compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Row: Copyright + Animated Progress Back-To-Top --- */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist/50">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>{footerData.copyright}</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline">Built for Life Sciences</span>
          </div>

          {/* Interactive Back to Top with Scroll Progress Ring */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-teal/50 hover:bg-teal/[0.08] text-mist hover:text-teal transition-all cursor-pointer"
              aria-label="Back to top"
            >
              {/* Circular SVG Scroll Progress Indicator */}
              <svg className="w-4 h-4 -rotate-90" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  className="stroke-white/10 fill-none"
                  strokeWidth="2.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  className="stroke-teal fill-none transition-all duration-150"
                  strokeWidth="2.5"
                  strokeDasharray="62.83"
                  strokeDashoffset={62.83 * (1 - scrollProgress)}
                  strokeLinecap="round"
                />
              </svg>

              <span className="text-[11px] font-semibold">Back to Top</span>
              <ArrowUp
                size={12}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* --- Giant Masked Metallic Brand Watermark --- */}
        <div className="mt-8 pt-4 overflow-hidden select-none pointer-events-none opacity-20 hover:opacity-30 transition-opacity">
          <div className="font-secondary text-center text-[42px] sm:text-[75px] md:text-[105px] lg:text-[130px] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/30 via-white/10 to-transparent leading-none">
            METISSUITE AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
