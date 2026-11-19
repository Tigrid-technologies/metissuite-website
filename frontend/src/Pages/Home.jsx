import React from "react";
import { BrainCircuit } from "lucide-react";
import HeroDashboard from "../components/Home/HeroDashboard";
import Ensemble from "../components/Home/Ensemble";
import LifescienceWorkflow from "../components/Home/LifescienceWorkflow";

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-8 pb-24">
      {/* Hero Section */}
      <div className="wrapper text-center w-full max-w-4xl mx-auto">
        <div className="inline-flex justify-center gap-2 items-center px-5 py-1 rounded-full text-[13px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg">
          <span>
            <BrainCircuit size={18} strokeWidth={1.5} />
          </span>
          <span>AI operations for biotech & life science</span>
        </div>
        <h1 className="text-[40px] md:text-[54px] font-semibold tracking-tight leading-tight mt-5">
          One intelligent <span className="text-teal font-light">suite</span>.
          Your business,{" "}
          <span className="text-teal font-light">in sync.</span>
        </h1>
        <p className="w-[90%] md:w-[75%] mx-auto mt-4 text-mist/80 text-[15px] leading-relaxed">
          MetisSuiteAI brings your CRM, marketing, invoicing, purchasing,
          content and lead generation into one place - with specialized AI
          agents conducting the routine work.
        </p>

        {/* Hero Dashboard UI Card */}
        <HeroDashboard />
      </div>

      {/* 02. The Ensemble Section */}
      <Ensemble />

      {/* 03. Life-Science Ready Workflow Section */}
      <LifescienceWorkflow />
    </div>
  );
};

export default Home;
