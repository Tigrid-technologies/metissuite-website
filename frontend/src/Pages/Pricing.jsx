import React from "react";
import Spotlight from "../components/pricing/Spotlight";
import Compare from "../components/pricing/Compare";
import PricingFaq from "../components/pricing/PricingFaq";
import CallToAction from "../components/shared/CallToAction";

const Pricing = () => {
  return (
    <div className="relative">
      <Spotlight />
      <Compare />
      <PricingFaq />
      <CallToAction />
    </div>
  );
};

export default Pricing;
