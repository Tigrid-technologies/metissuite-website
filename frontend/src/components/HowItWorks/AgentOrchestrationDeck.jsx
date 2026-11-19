import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Cpu,
  PenTool,
  Compass,
  Target,
  Receipt,
  Zap,
  Activity,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { agentDeepDives } from "../../utils/howItWorksItems";

const iconMap = {
  Cpu,
  PenTool,
  Compass,
  Target,
  Receipt,
  Zap,
};

const AgentOrchestrationDeck = () => {
  const [selectedAgentId, setSelectedAgentId] = useState(agentDeepDives[0].id);
  const activeAgent = agentDeepDives.find((a) => a.id === selectedAgentId) || agentDeepDives[0];

  return (
    <section id="agent-ensemble-section" className="relative py-16 md:py-24 border-t border-white/[0.06] bg-[#0c0f2a]/40">
      <div className="wrapper">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu size={13} />
            <span>The 6-Agent Symphony</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            Specialized agents. <span className="text-gold font-light">Zero silos.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            Instead of a single brittle generalist model, MetisSuite deploys 6 specialized agents who hand off structured context like an elite biotech ops team.
          </p>
        </div>

        {/* 6 Agent Tabs Horizontal Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {agentDeepDives.map((agent) => {
            const Icon = iconMap[agent.icon] || Cpu;
            const isSelected = selectedAgentId === agent.id;

            return (
              <button
                key={agent.id}
                type="button"
                onClick={() => setSelectedAgentId(agent.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-white/10 border-2 text-ivory shadow-[0_0_20px_rgba(46,196,182,0.2)] scale-[1.03]"
                    : "bg-white/[0.03] border border-white/10 text-mist/70 hover:text-white hover:bg-white/[0.06]"
                }`}
                style={{
                  borderColor: isSelected ? agent.accent : "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: isSelected ? `${agent.accent}25` : "rgba(255,255,255,0.05)",
                    color: agent.accent,
                  }}
                >
                  <Icon size={15} />
                </div>
                <span>{agent.name}</span>
                <span
                  className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md"
                  style={{
                    backgroundColor: `${agent.accent}15`,
                    color: agent.accent,
                  }}
                >
                  {agent.tag.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Agent Command Deck */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAgent.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-[#181d45] via-[#121636] to-[#0c0f28] border border-white/15 p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            {/* Header: Agent Identity & Live Telemetry */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/[0.08] gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${activeAgent.accent}20`,
                    border: `1px solid ${activeAgent.accent}50`,
                    color: activeAgent.accent,
                  }}
                >
                  {React.createElement(iconMap[activeAgent.icon] || Cpu, { size: 28 })}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-ivory tracking-tight">
                      {activeAgent.name}
                    </h3>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${activeAgent.accent}20`,
                        color: activeAgent.accent,
                        border: `1px solid ${activeAgent.accent}40`,
                      }}
                    >
                      {activeAgent.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-mist/80 mt-0.5">
                    {activeAgent.role}
                  </p>
                </div>
              </div>

              {/* Live Metric Pills */}
              <div className="flex items-center gap-3 self-start md:self-auto">
                {Object.entries(activeAgent.liveMetrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center"
                  >
                    <div className="text-xs sm:text-sm font-bold font-secondary text-ivory">
                      {value}
                    </div>
                    <div className="text-[10px] text-mist/60 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Body: Deep Dive Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Mission Overview & Routine Example */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-mist/60 mb-2">
                    Operational Scope & Purpose:
                  </h4>
                  <p className="text-sm sm:text-base text-mist/90 leading-relaxed">
                    {activeAgent.overview}
                  </p>
                </div>

                {/* Example Routine Card */}
                <div className="rounded-2xl bg-white/[0.02] border border-white/[0.08] p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal mb-2">
                    <Activity size={14} />
                    <span>Real-World Execution Example:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-ivory font-mono leading-relaxed bg-[#0a0d22] p-3.5 rounded-xl border border-white/[0.06]">
                    "{activeAgent.exampleRoutine}"
                  </p>
                </div>
              </div>

              {/* Right Column: Inflow / Outflow & Guardrails */}
              <div className="space-y-4">
                {/* Context Inflow */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal block mb-1">
                    Context Inflow (Inputs):
                  </span>
                  <p className="text-xs sm:text-sm text-mist/90 leading-relaxed">
                    {activeAgent.inputContext}
                  </p>
                </div>

                {/* Action Outflow */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold block mb-1">
                    Action Outflow (Outputs):
                  </span>
                  <p className="text-xs sm:text-sm text-mist/90 leading-relaxed">
                    {activeAgent.actionOutput}
                  </p>
                </div>

                {/* Guardrail */}
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 flex items-start gap-3">
                  <Shield size={18} className="text-[#38bdf8] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] block mb-0.5">
                      Deterministic Safety Guardrail:
                    </span>
                    <p className="text-xs sm:text-sm text-mist/90 leading-relaxed">
                      {activeAgent.guardrail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AgentOrchestrationDeck;

