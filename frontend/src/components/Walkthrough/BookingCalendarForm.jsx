import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Check,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import {
  initialAvailableDays,
  timeSlotsByPeriod,
  supportedTimezones,
} from "../../utils/walkthroughItems";

const BookingCalendarForm = () => {
  // Calendar selections
  const [selectedTimezone, setSelectedTimezone] = useState(supportedTimezones[0].label);
  const [showTzDropdown, setShowTzDropdown] = useState(false);
  const [selectedDay, setSelectedDay] = useState(initialAvailableDays[2]); // Default: WED 25
  const [selectedPeriod, setSelectedPeriod] = useState("Morning");
  const [selectedTime, setSelectedTime] = useState("12:30 AM");

  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Please enter a valid work email";
    }
    if (!formData.phone.trim()) errors.phone = "Please enter your phone or WhatsApp number";
    if (!selectedTime) errors.time = "Please pick a convenient time slot";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate booking API latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 850);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      description: "",
    });
  };

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("MetisSuiteAI — 1-on-1 Systems Walkthrough");
    const details = encodeURIComponent(
      `Private 30-min walkthrough with MetisSuiteAI.\nAttendee: ${formData.name} (${formData.email})\nFocus: ${formData.description || "General life-sciences automation"}\nMeeting link will be provided in your confirmation email.`
    );
    const location = encodeURIComponent("Google Meet (link in invite)");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  // Toggle to PST host timezone
  const toggleHostTimezone = () => {
    const hostTz = supportedTimezones.find((t) => t.key === "PST");
    if (hostTz) {
      setSelectedTimezone(hostTz.label);
    }
  };

  return (
    <section id="booking-calendar-section" className="relative py-16 md:py-24">
      <div className="wrapper max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="booking-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-b from-[#161a3f]/90 via-[#121636]/90 to-[#0c0f2a]/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl p-6 sm:p-8 md:p-10"
            >
              {/* TOP TIMEZONE BAR (Matching image header exactly) */}
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.08] p-3.5 sm:p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-mist">
                  <Globe size={18} className="text-teal shrink-0" />
                  <span>
                    Times shown in{" "}
                    <strong className="text-ivory font-semibold">
                      {selectedTimezone}
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto text-xs">
                  <button
                    type="button"
                    onClick={toggleHostTimezone}
                    className="text-teal hover:underline font-medium transition-all cursor-pointer"
                  >
                    Use host timezone (PST)
                  </button>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowTzDropdown(!showTzDropdown)}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-mist hover:text-white transition-colors"
                    >
                      Change
                    </button>

                    {showTzDropdown && (
                      <div className="absolute right-0 top-full mt-2 w-64 rounded-xl bg-[#161a3f] border border-white/10 shadow-2xl p-2 z-50">
                        {supportedTimezones.map((tz) => (
                          <button
                            key={tz.key}
                            type="button"
                            onClick={() => {
                              setSelectedTimezone(tz.label);
                              setShowTzDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                              selectedTimezone === tz.label
                                ? "bg-teal/20 text-teal font-semibold"
                                : "text-mist hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            {tz.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION: PICK A DAY */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-mist/70">
                    Pick a day
                  </h3>
                  <span className="text-xs text-mist/50">
                    Showing next 2 weeks of availability
                  </span>
                </div>

                {/* Day Cards Grid (Matches user reference image) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                  {initialAvailableDays.map((day) => {
                    const isSelected = selectedDay.id === day.id;

                    return (
                      <button
                        key={day.id}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`relative rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-gradient-to-b from-teal/15 via-[#192248] to-[#141b3d] border-2 border-teal shadow-[0_0_20px_rgba(46,196,182,0.3)] scale-[1.02]"
                            : "bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.06]"
                        }`}
                      >
                        {/* Optional TOMORROW badge floating on top border */}
                        {day.badge && (
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-blue-500 text-white font-extrabold text-[13px] tracking-wider uppercase shadow-md pointer-events-none">
                            {day.badge}
                          </div>
                        )}

                        {/* Day of Week */}
                        <span
                          className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                            isSelected ? "text-teal" : "text-mist/70"
                          }`}
                        >
                          {day.dayName}
                        </span>

                        {/* Date Number */}
                        <span
                          className={`text-2xl sm:text-3xl font-extrabold tracking-tight my-0.5 ${
                            isSelected ? "text-ivory" : "text-ivory/90"
                          }`}
                        >
                          {day.dayNum}
                        </span>

                        {/* Open Slots Count */}
                        <span
                          className={`text-[13.5px] font-medium ${
                            isSelected ? "text-teal/90" : "text-mist/50"
                          }`}
                        >
                          {day.openCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: PICK A TIME */}
              <div className="mb-10 pt-8 border-t border-white/[0.08]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-mist/70">
                    Pick a time
                  </h3>
                  <div className="text-sm font-semibold text-ivory flex items-center gap-2">
                    <CalendarIcon size={15} className="text-teal" />
                    <span>{selectedDay.fullDate}</span>
                  </div>
                </div>

                {/* Period tabs (Morning / Afternoon / Evening) */}
                <div className="flex items-center gap-2 mb-5">
                  {Object.keys(timeSlotsByPeriod).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setSelectedPeriod(period)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        selectedPeriod === period
                          ? "bg-teal/20 text-teal border border-teal/40 shadow-[0_0_12px_rgba(46,196,182,0.2)]"
                          : "bg-white/[0.03] text-mist/70 border border-white/10 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>

                {/* Time slot pills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlotsByPeriod[selectedPeriod].map((time) => {
                    const isSelected = selectedTime === time;

                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer ${
                          isSelected
                            ? "bg-teal text-midnight font-bold shadow-[0_0_15px_rgba(46,196,182,0.4)] scale-[1.02]"
                            : "bg-white/[0.03] border border-white/10 text-ivory hover:border-teal/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <Clock size={14} className={isSelected ? "text-midnight" : "text-teal/70"} />
                        <span>{time}</span>
                      </button>
                    );
                  })}
                </div>

                {formErrors.time && (
                  <p className="mt-2 text-xs text-red-400">{formErrors.time}</p>
                )}
              </div>

              {/* SECTION: ATTENDEE FORM (Name, Email, Phone, Description) */}
              <div className="pt-8 border-t border-white/[0.08]">
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-mist/70 mb-1">
                    Your Details
                  </h3>
                  <p className="text-xs text-mist/60">
                    We'll email you a calendar invite and direct Google Meet link.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1.5">
                        Full Name <span className="text-teal">*</span>
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white/[0.03] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all">
                        <div className="pl-3.5 pr-2 text-mist/50">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Dr. Sarah Jenkins"
                          className="w-full bg-transparent py-3 pr-4 text-sm text-ivory placeholder:text-mist/30 focus:outline-none"
                        />
                      </div>
                      {formErrors.name && (
                        <p className="mt-1 text-xs text-red-400">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1.5">
                        Work Email <span className="text-teal">*</span>
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white/[0.03] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all">
                        <div className="pl-3.5 pr-2 text-mist/50">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="s.jenkins@biopharma.com"
                          className="w-full bg-transparent py-3 pr-4 text-sm text-ivory placeholder:text-mist/30 focus:outline-none"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="mt-1 text-xs text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1.5">
                        Phone / WhatsApp <span className="text-teal">*</span>
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white/[0.03] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all">
                        <div className="pl-3.5 pr-2 text-mist/50">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 349-2041"
                          className="w-full bg-transparent py-3 pr-4 text-sm text-ivory placeholder:text-mist/30 focus:outline-none"
                        />
                      </div>
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-400">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Company / Organization */}
                    <div>
                      <label className="block text-xs font-medium text-mist mb-1.5">
                        Company or Institution
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white/[0.03] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all">
                        <div className="pl-3.5 pr-2 text-mist/50">
                          <Building2 size={16} />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Novis Bio Labs"
                          className="w-full bg-transparent py-3 pr-4 text-sm text-ivory placeholder:text-mist/30 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description / Routines */}
                  <div>
                    <label className="block text-xs font-medium text-mist mb-1.5">
                      What routines or workflows would you like to automate?
                    </label>
                    <div className="relative rounded-xl bg-white/[0.03] border border-white/10 focus-within:border-teal/70 focus-within:shadow-[0_0_15px_rgba(46,196,182,0.15)] transition-all p-3">
                      <div className="flex items-start gap-2.5">
                        <MessageSquare size={16} className="text-mist/50 mt-1 shrink-0" />
                        <textarea
                          name="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="e.g. Lead capture from scientific conferences, PubMed research to CRM synchronization, automated vendor PO approvals..."
                          className="w-full bg-transparent text-sm text-ivory placeholder:text-mist/30 focus:outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary Strip */}
                  <div className="rounded-xl bg-teal/10 border border-teal/20 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-teal font-medium">
                      <Sparkles size={16} className="shrink-0" />
                      <span>
                        Reserved: <strong>{selectedDay.fullDate}</strong> at{" "}
                        <strong>{selectedTime}</strong> ({selectedTimezone})
                      </span>
                    </div>
                    <span className="text-mist/70">30-min live session • Human-in-the-loop</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-teal text-midnight font-bold text-base shadow-[0_0_30px_rgba(46,196,182,0.4)] hover:shadow-[0_0_40px_rgba(46,196,182,0.6)] hover:bg-[#3de2d3] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-midnight border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Confirm Walkthrough</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* SUCCESS CONFIRMATION STATE */
            <motion.div
              key="confirmation-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-b from-[#18214d] via-[#121636] to-[#0c0f2a] border border-teal/40 shadow-[0_20px_70px_rgba(46,196,182,0.25)] p-8 sm:p-12 text-center max-w-2xl mx-auto"
            >
              {/* Animated check badge */}
              <div className="w-20 h-20 mx-auto rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-teal shadow-[0_0_30px_rgba(46,196,182,0.4)] mb-6">
                <CheckCircle2 size={42} className="text-teal" />
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full bg-teal/10 border border-teal/30 text-teal text-xs font-bold uppercase tracking-wider mb-3">
                Walkthrough Confirmed
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-ivory tracking-tight mb-3">
                You're all set, {formData.name.split(" ")[0]}!
              </h2>

              <p className="text-sm sm:text-base text-mist/90 max-w-lg mx-auto leading-relaxed mb-8">
                We've sent a calendar invitation and meeting link to{" "}
                <strong className="text-white">{formData.email}</strong>. Our systems specialist will walk you through live Metis agents.
              </p>

              {/* Meeting Card Details */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 text-left max-w-md mx-auto space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm text-ivory">
                  <CalendarIcon size={17} className="text-teal shrink-0" />
                  <span>{selectedDay.fullDate}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory">
                  <Clock size={17} className="text-teal shrink-0" />
                  <span>{selectedTime} ({selectedTimezone})</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory">
                  <Globe size={17} className="text-teal shrink-0" />
                  <span>Google Meet (link provided in calendar invite)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={createGoogleCalendarUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-teal text-midnight font-bold text-sm shadow-[0_0_20px_rgba(46,196,182,0.4)] hover:bg-[#3de2d3] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Add to Google Calendar</span>
                  <ExternalLink size={15} />
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-mist hover:text-white hover:bg-white/10 font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw size={15} />
                  <span>Book another slot</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingCalendarForm;

