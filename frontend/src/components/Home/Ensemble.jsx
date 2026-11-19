import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  PhoneCall,
  Mail,
  Search,
  Share2,
  Receipt,
  ShoppingCart,
  CalendarCheck,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Layers,
} from "lucide-react";

const Ensemble = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const agents = [
    {
      id: "voice",
      number: "01",
      name: "Metis Voice",
      category: "Calls & Booking",
      description:
        "Answers, qualifies, books appointments, and follows up on missed calls around the clock.",
      accent: "#2ec4b6",
      accentBg: "bg-teal/15",
      accentBorder: "border-teal/30",
      accentText: "text-teal",
      glowColor: "rgba(46, 196, 182, 0.2)",
      icon: PhoneCall,
      widget: (
        <div className="space-y-3">
          {/* Live Soundwave & Caller Header */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#121636]/90 border border-teal/20">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
              </span>
              <span className="text-xs font-semibold text-ivory">24/7 Voice Line</span>
            </div>
            
            {/* Animated Equalizer Soundwave */}
            <div className="flex items-center gap-1 h-5">
              {[0.4, 0.8, 0.5, 1.0, 0.6, 0.9, 0.3].map((val, i) => (
                <motion.span
                  key={i}
                  animate={{ scaleY: [0.3, 1, 0.4] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.12,
                    ease: "easeInOut",
                  }}
                  className="w-1 bg-teal rounded-full origin-bottom"
                  style={{ height: `${val * 18}px` }}
                />
              ))}
            </div>
          </div>

          {/* Caller Details Card */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-ivory">Dr. Aris Thorne</span>
              <span className="text-[11px] text-teal font-medium bg-teal/10 px-2 py-0.5 rounded-full border border-teal/20">
                98% Match
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-mist/70">
              <span>BioTech Therapeutics</span>
              <span className="flex items-center gap-1 text-teal">
                <CalendarCheck size={12} /> Booked 2:30 PM
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "outreach",
      number: "02",
      name: "Metis Outreach",
      category: "Email & SMS",
      description:
        "Runs precise nurture, reactivation, and outbound sequences while keeping the human thread intact.",
      accent: "#818cf8",
      accentBg: "bg-[#818cf8]/15",
      accentBorder: "border-[#818cf8]/30",
      accentText: "text-[#818cf8]",
      glowColor: "rgba(129, 140, 248, 0.2)",
      icon: Mail,
      widget: (
        <div className="space-y-3">
          {/* Multi-channel sequence pipeline */}
          <div className="p-3 rounded-xl bg-[#121636]/90 border border-[#818cf8]/20 flex items-center justify-between">
            {["Email", "SMS", "LinkedIn"].map((channel, i) => (
              <React.Fragment key={channel}>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg bg-[#818cf8]/15 border border-[#818cf8]/30 flex items-center justify-center text-xs font-bold text-[#818cf8]">
                    {channel[0]}
                  </div>
                  <span className="text-[10px] text-mist/70">{channel}</span>
                </div>
                {i < 2 && (
                  <div className="flex-1 mx-2 relative h-5 flex items-center">
                    {/* Base track line */}
                    <div className="h-[2px] bg-white/10 w-full rounded-full overflow-hidden relative">
                      {/* Flowing gradient light along the track */}
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 1,
                        }}
                        className="w-full h-full bg-gradient-to-r from-transparent via-[#818cf8]/60 to-transparent"
                      />
                    </div>

                    {/* Smooth traveling glowing signal packet */}
                    <motion.div
                      animate={{
                        left: ["0%", "88%"],
                        opacity: [0, 1, 1, 0],
                        scale: [0.6, 1.1, 1.1, 0.6],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.9,
                      }}
                      className="absolute w-2.5 h-2.5 -translate-y-1/2 top-1/2 rounded-full bg-[#818cf8] shadow-[0_0_10px_#818cf8,0_0_4px_#ffffff]"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Sequence status banner */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
            <span className="text-mist/80">Reactivation Flow 03</span>
            <span className="text-[#818cf8] font-semibold text-[11px] bg-[#818cf8]/10 px-2 py-0.5 rounded-md">
              78% Open Rate
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "research",
      number: "03",
      name: "Metis Research",
      category: "Qualified Leads",
      description:
        "Builds focused prospect lists across email, LinkedIn, and Google Scholar for life-science markets.",
      accent: "#e8b04b",
      accentBg: "bg-gold/15",
      accentBorder: "border-gold/30",
      accentText: "text-gold",
      glowColor: "rgba(232, 176, 75, 0.2)",
      icon: Search,
      widget: (
        <div className="space-y-3">
          {/* Query Bar */}
          <div className="p-2.5 rounded-xl bg-[#121636]/90 border border-gold/20 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-mist/80 truncate">
              <Search size={13} className="text-gold shrink-0" />
              <span className="truncate">Target: Oncology & Biomarkers</span>
            </div>
            <span className="text-[10px] font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full shrink-0">
              Scanning
            </span>
          </div>

          {/* Academic source tags */}
          <div className="flex flex-wrap gap-1.5">
            {["Google Scholar", "PubMed", "ClinicalTrials.gov", "NIH Grants"].map((source, i) => (
              <span
                key={source}
                className="text-[10.5px] px-2 py-1 rounded-lg bg-gold/10 text-gold/90 border border-gold/20 font-medium"
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "social",
      number: "04",
      name: "Metis Social",
      category: "Content Engine",
      description:
        "Plans, writes, and publishes useful content in your voice, then helps keep conversations moving.",
      accent: "#f43f5e",
      accentBg: "bg-[#f43f5e]/15",
      accentBorder: "border-[#f43f5e]/30",
      accentText: "text-[#f43f5e]",
      glowColor: "rgba(244, 63, 94, 0.2)",
      icon: Share2,
      widget: (
        <div className="space-y-3">
          {/* Tone & Draft header */}
          <div className="p-2.5 rounded-xl bg-[#121636]/90 border border-[#f43f5e]/20 flex items-center justify-between text-xs">
            <span className="text-mist/80">Voice: Scientific & Direct</span>
            <span className="text-[10.5px] font-semibold text-[#f43f5e] bg-[#f43f5e]/10 px-2 py-0.5 rounded-md">
              AI Synthesized
            </span>
          </div>

          {/* Post preview pill */}
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5 text-left">
            <p className="text-[11.5px] text-ivory font-medium line-clamp-2 leading-relaxed">
              "Key breakthroughs in recombinant assays: What researchers should expect in Q3..."
            </p>
            <div className="flex items-center justify-between text-[10.5px] text-mist/60 pt-1">
              <span>Auto-drafted</span>
              <span className="text-[#f43f5e] font-medium">Ready for Review</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "books",
      number: "05",
      name: "Metis Books",
      category: "Invoicing & Ops",
      description:
        "Prepares invoices, tracks approvals, and keeps the financial follow-up visible and on time.",
      accent: "#c084fc",
      accentBg: "bg-[#c084fc]/15",
      accentBorder: "border-[#c084fc]/30",
      accentText: "text-[#c084fc]",
      glowColor: "rgba(192, 132, 252, 0.2)",
      icon: Receipt,
      widget: (
        <div className="space-y-3">
          {/* Invoice summary card */}
          <div className="p-3 rounded-xl bg-[#121636]/90 border border-[#c084fc]/20 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-mist/70 block">INV-2048</span>
              <span className="text-sm font-bold text-ivory">$4,250.00</span>
            </div>
            <span className="text-[11px] font-semibold text-[#c084fc] bg-[#c084fc]/10 px-2 py-1 rounded-lg border border-[#c084fc]/20 flex items-center gap-1">
              <CheckCircle2 size={12} /> Auto-Prepared
            </span>
          </div>

          {/* Follow-up schedule status */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
            <span className="text-mist/80">Due in 5 days</span>
            <span className="text-[#c084fc] text-[11px] font-medium">Approval Pending</span>
          </div>
        </div>
      ),
    },
    {
      id: "procure",
      number: "06",
      name: "Metis Procure",
      category: "Purchasing",
      description:
        "Coordinates requests and purchasing workflows, tracking approval steps and delivery milestones.",
      accent: "#10b981",
      accentBg: "bg-[#10b981]/15",
      accentBorder: "border-[#10b981]/30",
      accentText: "text-[#10b981]",
      glowColor: "rgba(16, 185, 129, 0.2)",
      icon: ShoppingCart,
      widget: (
        <div className="space-y-3">
          {/* PO Tracker Card */}
          <div className="p-3 rounded-xl bg-[#121636]/90 border border-[#10b981]/20 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-mist/70 block">PO-8914 • Lab Supplies</span>
              <span className="text-xs font-semibold text-ivory">Thermoscientific Reagents</span>
            </div>
            <span className="text-[11px] font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-lg border border-[#10b981]/20">
              Dispatched
            </span>
          </div>

          {/* Delivery Milestone */}
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
            <span className="text-mist/80">3/3 Milestones cleared</span>
            <span className="text-[#10b981] text-[11px] font-medium">Arriving Thursday</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="ensemble" className="relative py-24 md:py-32 wrapper select-none">
      
      {/* --- Section Header --- */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-4 py-1.5 rounded-full text-[12.5px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg mb-4 font-semibold uppercase tracking-wider"
        >
          <Sparkles size={15} />
          <span>02. The Ensemble</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-ivory leading-tight"
        >
          Specialists That Work Like{" "}
          <span className="text-teal font-light">One Team.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-mist/80 text-[15px] md:text-[16px] max-w-2xl mx-auto leading-relaxed"
        >
          Each Metis agent owns a business routine. Together, they share
          context and keep the next step moving seamlessly under your
          human-in-the-loop control.
        </motion.p>
      </div>

      {/* --- Interactive Bento Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent, index) => {
          const isHovered = hoveredIndex === index;
          const Icon = agent.icon;

          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -6, scale: 1.015 }}
              className="relative group rounded-[26px] p-6 md:p-7 flex flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-b from-[#161a3f]/85 via-[#111435]/90 to-[#0b0e27]/95 backdrop-blur-2xl transition-all duration-300 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.5)]"
              style={{
                boxShadow: isHovered
                  ? `0 20px 40px -10px ${agent.glowColor}, 0 0 25px ${agent.glowColor}`
                  : undefined,
                borderColor: isHovered ? agent.accent : undefined,
              }}
            >
              {/* Outer Glow Halo in agent's brand color */}
              <div
                className="pointer-events-none absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl transition-opacity duration-300"
                style={{
                  background: agent.accent,
                  opacity: isHovered ? 0.25 : 0.06,
                }}
              />

              {/* Hover Ambient Light Sweep */}
              <motion.div
                animate={isHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
                transition={{ duration: 0.85, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg]"
              />

              {/* Card Top: Number, Category, and Icon */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-mist/60">
                      {agent.number}.
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${agent.accentBg} ${agent.accentBorder} ${agent.accentText} border`}
                    >
                      {agent.category}
                    </span>
                  </div>

                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? agent.accent : "rgba(255,255,255,0.05)",
                      color: isHovered ? "#121736" : agent.accent,
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </div>
                </div>

                {/* Agent Title & Description */}
                <h3 className="text-xl font-bold text-ivory group-hover:text-white transition-colors flex items-center gap-1.5">
                  <span>{agent.name}</span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-mist"
                  />
                </h3>

                <p className="mt-2 text-xs md:text-[13px] text-mist/75 leading-relaxed min-h-[48px]">
                  {agent.description}
                </p>
              </div>

              {/* Card Bottom: Animated Live Micro-Simulation Widget */}
              <div className="relative z-10 mt-6 pt-5 border-t border-white/[0.06]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-mist/50 mb-2.5 flex items-center justify-between">
                  <span>Live Agent Routine</span>
                  <span className="flex items-center gap-1 text-teal">
                    <Activity size={10} className="animate-pulse" />
                    <span>Synchronized</span>
                  </span>
                </div>
                {agent.widget}
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* --- Unified Shared Context Bar (The Ensemble Advantage) --- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-14 p-6 md:p-8 rounded-[24px] border border-white/10 bg-gradient-to-r from-[#171b42]/85 via-[#13173a]/90 to-[#171b42]/85 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-teal/15 border border-teal/30 text-teal flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(46,196,182,0.25)]">
            <Layers size={22} strokeWidth={1.8} />
          </div>
          <div>
            <h4 className="text-[17px] font-bold text-ivory">
              Shared Context Across Every Routine
            </h4>
            <p className="text-[13.5px] text-mist/75 mt-0.5 max-w-xl">
              When Metis Research identifies a lead, Metis Outreach triggers the
              sequence, Metis Voice handles inbound calls, and Metis Books drafts
              the invoice—all without siloed data.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/30 text-teal text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_#2ec4b6]" />
            Human-in-the-Loop Control
          </span>
        </div>
      </motion.div>

    </section>
  );
};

export default Ensemble;

