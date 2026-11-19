import React from "react";
import { motion } from "motion/react";
import { Check, X, Shield, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { comparisonPoints } from "../../utils/servicesItems";

const ServicesVsDisconnected = () => {
  return (
    <section className="relative py-16 md:py-24 border-t border-white/[0.06]">
      <div className="wrapper max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield size={13} />
            <span>The Strategic Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ivory tracking-tight">
            Unified Suite vs. <span className="text-teal font-light">Disconnected Tools</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-mist/80 max-w-xl mx-auto leading-relaxed">
            Why leading biotech teams replace fragmented single-point subscriptions with one coordinated operating layer.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl bg-gradient-to-b from-[#181d45] via-[#121636] to-[#0c0f2a] border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 bg-white/[0.04] border-b border-white/[0.08] p-4 text-xs font-bold uppercase tracking-wider text-mist">
            <div className="col-span-4">Operational Domain</div>
            <div className="col-span-4 text-teal">With MetisSuiteAI</div>
            <div className="col-span-4 text-mist/50">Fragmented Point Tools</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/[0.06]">
            {comparisonPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-white/[0.02] transition-colors"
              >
                {/* Domain Column */}
                <div className="md:col-span-4 font-bold text-sm text-ivory">
                  {point.feature}
                </div>

                {/* MetisSuite Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-ivory bg-teal/[0.06] border border-teal/20 p-3 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed">{point.metis}</span>
                </div>

                {/* Traditional Column */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-mist/60 bg-white/[0.02] border border-white/[0.06] p-3 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={12} strokeWidth={3} />
                  </div>
                  <span className="leading-relaxed">{point.traditional}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Callout */}
          <div className="p-6 bg-white/[0.02] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mist">
            <span>
              MetisSuite replaces 5+ point subscriptions with a single, coordinated human-in-the-loop operating suite.
            </span>
            <Link
              to="/book-walkthrough"
              className="text-teal font-bold hover:underline flex items-center gap-1.5 shrink-0"
            >
              <span>See the live suite walkthrough</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesVsDisconnected;

