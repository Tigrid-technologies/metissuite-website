import React from "react";
import { BrainCircuit } from "lucide-react";
import HeroDashboard from "../components/Home/HeroDashboard";
import OperatingLayer from "../components/Home/OperatingLayer";
import Ensemble from "../components/Home/Ensemble";
import LifescienceWorkflow from "../components/Home/LifescienceWorkflow";
import Meetloop from "../components/Home/Meetloop";
import BuiltForControl from "../components/Home/BuiltForControl";
import CallToAction from "../components/shared/CallToAction";

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-8 pb-24">
      {/* Hero Section */}
      <div className="wrapper text-center w-full max-w-4xl mx-auto">
        <div className="inline-flex justify-center gap-2 items-center px-5 py-1.5 rounded-full text-[15px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg">
          <span>
            <BrainCircuit size={19} strokeWidth={1.5} />
          </span>
          <span>AI operations for biotech & life science</span>
        </div>
        <h1 className="text-[40px] md:text-[64px]  tracking-tight leading-tight mt-5 max-w-[70%] mx-auto">
          One intelligent <span className="text-teal font-medium">suite</span>.
          <span className="border-b-5">Every part of your business</span>,{" "}
          <span className="text-teal font-medium">playing in time.</span>
        </h1>
        <p className="w-[90%] md:w-[78%] mx-auto mt-5 text-mist/85 text-[18px] md:text-[20px] leading-relaxed">
          MetisSuiteAI brings your CRM, marketing, invoicing, purchasing,
          content and lead generation into one place - with specialized AI
          agents conducting the routine work.
        </p>

        {/* Hero Dashboard UI Card */}
        <HeroDashboard />
      </div>

      {/* 01. The Operating Layer Section with Marquee Ribbon */}
      <OperatingLayer />

      {/* 02. The Ensemble Section */}
      <Ensemble />

      {/* 03. Life-Science Ready Workflow Section */}
      <LifescienceWorkflow />

      {/* 04. Metis Meetloop Section */}
      <Meetloop />

      {/* 05. Built For Control Section */}
      <BuiltForControl />

      {/* Shared Call To Action */}
      <CallToAction />
    </div>
  );
};

export default Home;
