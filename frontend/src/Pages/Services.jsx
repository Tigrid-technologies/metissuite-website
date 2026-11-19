import React, { useState } from "react";
import ServicesSpotlight from "../components/Services/ServicesSpotlight";
import ServiceFilterGrid from "../components/Services/ServiceFilterGrid";
import InteractiveRoiCalculator from "../components/Services/InteractiveRoiCalculator";
import ServicesVsDisconnected from "../components/Services/ServicesVsDisconnected";
import ServicesFaq from "../components/Services/ServicesFaq";
import CallToAction from "../components/shared/CallToAction";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="relative">
      {/* 1. Services Hero Spotlight with Category Filter */}
      <ServicesSpotlight
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* 2. Filterable Services Bento Grid */}
      <ServiceFilterGrid activeCategory={activeCategory} />

      {/* 3. Interactive ROI & Efficiency Calculator */}
      <InteractiveRoiCalculator />

      {/* 4. Unified Suite vs. Disconnected Tools Comparison */}
      <ServicesVsDisconnected />

      {/* 5. Services & Deployment FAQs */}
      <ServicesFaq />

      {/* 6. Global Call To Action Footer */}
      <CallToAction />
    </div>
  );
};

export default Services;

