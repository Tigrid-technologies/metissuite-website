import React from "react";
import HowItWorksSpotlight from "../components/HowItWorks/HowItWorksSpotlight";
import ArchitecturePipeline from "../components/HowItWorks/ArchitecturePipeline";
import AgentOrchestrationDeck from "../components/HowItWorks/AgentOrchestrationDeck";
import GovernanceSimulator from "../components/HowItWorks/GovernanceSimulator";
import BiotechScenarios from "../components/HowItWorks/BiotechScenarios";
import HowItWorksFaq from "../components/HowItWorks/HowItWorksFaq";
import CallToAction from "../components/shared/CallToAction";

const HowItWorks = () => {
  return (
    <div className="relative">
      {/* 1. Architecture Hero Spotlight */}
      <HowItWorksSpotlight />

      {/* 2. 4-Stage End-to-End Operating Pipeline */}
      <ArchitecturePipeline />

      {/* 3. The 6-Agent Symphony & Command Deck */}
      <AgentOrchestrationDeck />

      {/* 4. Human-in-the-Loop Governance & Checkpoint Simulator */}
      <GovernanceSimulator />

      {/* 5. Real-World Biotech Case Scenarios */}
      <BiotechScenarios />

      {/* 6. Technical & Safety FAQs */}
      <HowItWorksFaq />

      {/* 7. Global Call To Action Footer */}
      <CallToAction />
    </div>
  );
};

export default HowItWorks;

