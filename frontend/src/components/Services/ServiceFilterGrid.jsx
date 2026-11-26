import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Database,
  Smartphone,
  Receipt,
  Compass,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Activity,
  FileText,
  Clock,
  Radio,
  Check,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { servicesList } from "../../utils/servicesItems";

const iconMap = {
  Database,
  Smartphone,
  Receipt,
  Compass,
  Zap,
  ShieldCheck,
};

// --- Custom Interactive Domain Widgets for Each Service Card ---
const ServiceDomainWidget = ({ serviceId, accent }) => {
  const [demoApproved, setDemoApproved] = useState(false);

  switch (serviceId) {
    case "crm-pipeline":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="text-ivory font-semibold">Pipeline Telemetry</span>
            </div>
            <span className="text-[13px] text-teal font-bold px-2 py-0.5 rounded-full bg-teal/10 border border-teal/20">
              Live Sync
            </span>
          </div>

          <div className="flex items-center justify-between text-[13.5px] text-mist/80">
            <span className="text-ivory font-medium truncate">Dr. Elena Rostova</span>
            <span className="text-teal font-bold font-secondary">$450k CDMO</span>
          </div>

          {/* Stepper Progress */}
          <div className="grid grid-cols-3 gap-1.5 text-[12px] text-center">
            <div className="py-1 rounded bg-teal/20 text-teal border border-teal/30 font-semibold">
              ✓ Ingested
            </div>
            <div className="py-1 rounded bg-teal/20 text-teal border border-teal/30 font-semibold">
              ✓ Enriched
            </div>
            <div className="py-1 rounded bg-teal text-midnight font-bold shadow-sm">
              Stage: Active
            </div>
          </div>
        </div>
      );

    case "meetloop-events":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <Radio size={13} className="text-gold animate-pulse" />
              <span className="text-ivory font-semibold">NFC Signal Stream</span>
            </div>
            <span className="text-[13px] text-gold font-bold px-2 py-0.5 rounded-full bg-gold/10 border border-gold/20">
              BIO 2026 Summit
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <Smartphone size={16} />
            </div>
            <div className="text-[13.5px] leading-tight">
              <span className="text-ivory block font-semibold">Booth #302 Touchpoint</span>
              <span className="text-mist/60 text-[13px]">Follow-up drafted in 3.8s</span>
            </div>
          </div>

          <div className="py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[13px] text-gold flex items-center justify-between">
            <span>Context: mRNA assay notes</span>
            <span className="text-teal">Ready for Review</span>
          </div>
        </div>
      );

    case "ai-invoicing-purchasing":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <span className="text-ivory font-semibold">Invoice #INV-8910</span>
            <span className="text-[13px] text-amber-400 font-bold px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
              OCR Audited
            </span>
          </div>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-mist/70">Antibody Batch (x12):</span>
            <span className="text-ivory line-through text-mist/50">$28,000.00</span>
          </div>

          <div className="py-1 px-2.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-[13px] text-amber-300 flex items-center justify-between font-semibold">
            <span>✓ 15% Contract Discount</span>
            <span>Net: $23,800.00</span>
          </div>
        </div>
      );

    case "scientific-intelligence":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-ivory font-semibold">PubMed Monitor</span>
            </div>
            <span className="text-[13px] text-[#38bdf8] font-bold px-2 py-0.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20">
              Daily Crawl 06:00
            </span>
          </div>

          <div className="text-[13.5px] text-ivory/90 truncate">
            "Target Biomarkers in mRNA Delivery"
          </div>

          <div className="flex items-center justify-between text-[13px] text-mist/60 pt-1 border-t border-white/[0.06]">
            <span>Verified Source: Nature Bio</span>
            <span className="text-[#38bdf8] font-bold">99.2% Match</span>
          </div>
        </div>
      );

    case "meeting-dispatch":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <span className="text-ivory font-semibold">Calendar Dispatch</span>
            <span className="text-[13px] text-[#a855f7] font-bold px-2 py-0.5 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20">
              Active Call
            </span>
          </div>

          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-ivory truncate">30-Min Technical Demo</span>
            <span className="text-[#a855f7] font-bold">10:00 AM</span>
          </div>

          <div className="py-1 px-2 rounded-lg bg-white/[0.03] text-[13px] text-mist/80 flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-[#a855f7]" />
            <span>Audio transcribed • 3 action items routed</span>
          </div>
        </div>
      );

    case "governance-checkpoints":
      return (
        <div className="rounded-2xl bg-[#090c21]/90 border border-white/[0.08] p-3.5 space-y-2.5 font-mono text-[13.5px] shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
            <span className="text-ivory font-semibold">Human Checkpoint</span>
            <span className="text-[13px] text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
              Tier 2 Supervised
            </span>
          </div>

          <div className="flex items-center justify-between text-[13px] text-mist/80">
            <span>External Email Release:</span>
            <button
              type="button"
              onClick={() => setDemoApproved(!demoApproved)}
              className={`px-2 py-1 rounded text-[13px] font-bold transition-all cursor-pointer ${
                demoApproved
                  ? "bg-emerald-400 text-midnight shadow-[0_0_10px_rgba(52,211,153,0.4)]"
                  : "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-400/30"
              }`}
            >
              {demoApproved ? "✓ Approved & Signed" : "1-Click Verify"}
            </button>
          </div>

          <div className="text-[12px] text-mist/50 truncate">
            Audit Hash: SHA-256:7f4a...Verified
          </div>
        </div>
      );

    default:
      return null;
  }
};

const ServiceFilterGrid = ({ activeCategory }) => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const toggleExpand = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services-grid-section" className="relative py-16 md:py-24 border-t border-white/[0.06]">
      <div className="wrapper">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Architecture & Modules</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            Engineered for <span className="text-teal font-light">high-tempo operations</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            Every module integrates directly with your existing software stack, running autonomous routines with human checkpoints.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = iconMap[service.icon] || Database;
              const isExpanded = expandedCardId === service.id;

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl bg-gradient-to-b from-[#181d45] via-[#121636] to-[#0c0f2a] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 group overflow-hidden"
                  style={{
                    borderColor: isExpanded ? `${service.accent}80` : undefined,
                  }}
                >
                  {/* Subtle Top Accent Ambient Line */}
                  <div
                    className="absolute top-0 inset-x-8 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(to right, transparent, ${service.accent}, transparent)`,
                    }}
                  />

                  {/* Soft Background Radial Light Halo on Hover */}
                  <div
                    className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-[70px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: service.accent }}
                  />

                  <div>
                    {/* Top Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md"
                        style={{
                          backgroundColor: `${service.accent}18`,
                          border: `1px solid ${service.accent}40`,
                          color: service.accent,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        className="px-3 py-1 rounded-full text-[13.5px] font-bold uppercase tracking-wider flex items-center gap-1.5"
                        style={{
                          backgroundColor: `${service.accent}12`,
                          color: service.accent,
                          border: `1px solid ${service.accent}30`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: service.accent }}
                        />
                        <span>{service.badge}</span>
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-ivory group-hover:text-white transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-mist/70 mt-1 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Live Domain Micro-Widget (Visual Polish) */}
                    <div className="mb-5">
                      <ServiceDomainWidget
                        serviceId={service.id}
                        accent={service.accent}
                      />
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-mist/85 leading-relaxed mb-5">
                      {service.summary}
                    </p>

                    {/* Clean Single-Row Metric Strip (No Awkward Wrapping) */}
                    <div className="mb-5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-mist/80 truncate mr-2">
                        <TrendingUp size={14} style={{ color: service.accent }} className="shrink-0" />
                        <span className="truncate">{service.interactiveMetric.label}</span>
                      </div>
                      <div
                        className="font-secondary text-xs sm:text-sm font-extrabold shrink-0"
                        style={{ color: service.accent }}
                      >
                        {service.interactiveMetric.value}
                      </div>
                    </div>

                    {/* Core Capabilities Checklist */}
                    <div className="space-y-2 mb-5">
                      <span className="text-[13px] font-bold uppercase tracking-wider text-mist/50 block">
                        Core Capabilities:
                      </span>
                      {service.keyCapabilities.slice(0, isExpanded ? 4 : 2).map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-ivory/80 leading-relaxed">
                          <CheckCircle2
                            size={14}
                            className="shrink-0 mt-0.5"
                            style={{ color: service.accent }}
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expandable Live Routine Example */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-3 pb-1 border-t border-white/[0.08] text-xs space-y-1.5 overflow-hidden"
                        >
                          <span className="font-bold text-teal block uppercase tracking-wider text-[13px]">
                            Live Routine Case:
                          </span>
                          <p className="text-mist/90 font-mono bg-[#090c21] p-3 rounded-xl border border-white/[0.05] leading-relaxed text-[14px]">
                            "{service.sampleUseCase}"
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Bottom: Expand Toggle & Direct Action Button */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs mt-3">
                    <button
                      type="button"
                      onClick={() => toggleExpand(service.id)}
                      className="text-mist hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "Deep Dive"}</span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>

                    <Link
                      to="/book-walkthrough"
                      className="font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 transition-all group-hover:scale-105"
                      style={{
                        backgroundColor: `${service.accent}15`,
                        color: service.accent,
                        border: `1px solid ${service.accent}30`,
                      }}
                    >
                      <span>See It Live</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFilterGrid;
