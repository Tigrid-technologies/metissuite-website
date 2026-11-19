import React from "react";
import Spotlight from "../components/clientResults/Spotlight";
import Testimonials from "../components/clientResults/Testimonials";
import CallToAction from "../components/shared/CallToAction";

const ClientResults = () => {
  return (
    <div className="relative">
      <Spotlight />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default ClientResults;
