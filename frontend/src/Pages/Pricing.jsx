import React from "react";
import Spotlight from "../components/pricing/Spotlight";
import Compare from "../components/pricing/Compare";
import PricingFaq from "../components/pricing/PricingFaq";

const Pricing = () => {
  return (
    <div className="relative">
      <Spotlight />
      <Compare />
      <PricingFaq />
    </div>
  );
};

export default Pricing;
