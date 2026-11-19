import React from "react";
import WalkthroughSpotlight from "../components/Walkthrough/WalkthroughSpotlight";
import BookingSteps from "../components/Walkthrough/BookingSteps";
import BookingCalendarForm from "../components/Walkthrough/BookingCalendarForm";
import BookingFaq from "../components/Walkthrough/BookingFaq";
import CallToAction from "../components/shared/CallToAction";

const BookWalkthrough = () => {
  return (
    <div className="relative">
      {/* 1. Spotlight Section */}
      <WalkthroughSpotlight />

      {/* 2. Steps on How the Booking Works */}
      <BookingSteps />

      {/* 3. Interactive Calendar & Booking Form */}
      <BookingCalendarForm />

      {/* 4. Common Booking FAQ Component */}
      <BookingFaq />

      {/* 5. Global Call To Action Footer */}
      <CallToAction />
    </div>
  );
};

export default BookWalkthrough;

