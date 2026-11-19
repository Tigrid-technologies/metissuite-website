import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
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
} from "lucide-react";
import { footerData } from "../../utils/footerItems";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [hubTimes, setHubTimes] = useState({});

  // Real-time world clock for biotech hubs
  useEffect(() => {
    const updateTimes = () => {
      const times = {};
      footerData.bioHubs.forEach((hub) => {
        try {
          times[hub.city] = new Intl.DateTimeFormat("en-US", {
            timeZone: hub.tz,
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }).format(new Date());
        } catch {
          times[hub.city] = "--:--";
        }
      });
      setHubTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update once a minute
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(footerData.brand.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080b1e] border-t border-white/[0.08] text-mist select-none overflow-hidden z-20">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[200px] bg-teal/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="wrapper pt-14 pb-10">
        {/* Main Grid: Brand + 3 Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Status Column (5 columns on desktop) */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block select-none">
              <span className="font-bold text-ivory text-xl">
                {footerData.brand.nameStart}
              </span>
              <span className="font-light text-ivory text-xl">
                {footerData.brand.nameMiddle}
              </span>
              <span className="font-semibold text-xs text-gold ml-1">
                {footerData.brand.nameBadge}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-mist/75 leading-relaxed max-w-sm">
              {footerData.brand.tagline}
            </p>

            {/* Live Operational Status Badge */}
            {/* <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-ivory font-medium text-[11.5px]">
                {footerData.brand.status.label}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-teal font-semibold text-[11px]">
                {footerData.brand.status.uptime}
              </span>
            </div> */}

            {/* Interactive Copyable Email */}
            <div className="pt-1">
              <span className="block text-[10px] uppercase font-bold tracking-wider text-mist/40 mb-1.5">
                Direct Inquiries:
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal/40 hover:bg-teal/[0.06] text-xs text-ivory transition-all cursor-pointer"
              >
                <span>{footerData.brand.contactEmail}</span>
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-teal text-[11px] font-bold flex items-center gap-1"
                    >
                      <Check size={12} strokeWidth={2.5} />
                      <span>Copied!</span>
                    </motion.span>
                  ) : (
                    <Copy
                      size={12}
                      className="text-mist/50 group-hover:text-teal transition-colors"
                    />
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Navigation Links Columns (7 columns on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerData.navigationGroups.map((group) => (
              <div key={group.title} className="space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ivory">
                  {group.title}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px]">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-mist/70 hover:text-teal transition-colors inline-flex items-center gap-1 group"
                        >
                          <span>{link.label}</span>
                          <ExternalLink
                            size={11}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-mist/70 hover:text-teal transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Global Biotech Hub Live Clocks Strip */}
        {/* <div className="py-5 border-b border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-mist/60 text-[11px]">
            <Clock size={13} className="text-teal shrink-0" />
            <span>Biotech Hub Rhythms:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px]">
            {footerData.bioHubs.map((hub) => (
              <div key={hub.city} className="flex items-center gap-1.5 text-mist/75">
                <span className="text-ivory font-medium">{hub.city}</span>
                <span className="text-gold font-mono">
                  {hubTimes[hub.city] || "--:--"}
                </span>
                <span className="text-mist/40 text-[10px]">({hub.code})</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Bar: Copyright + Security Stamp + Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist/50">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>{footerData.copyright}</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="hidden sm:inline">Built for Life Sciences</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-mist/40 flex items-center gap-1">
              <Shield size={12} className="text-teal" />
              <span>AES-256 Single-Tenant Isolation</span>
            </span>

            {/* Back to top smooth button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-teal/40 hover:bg-white/[0.08] text-mist hover:text-teal transition-all cursor-pointer flex items-center gap-1.5 text-[11px]"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

