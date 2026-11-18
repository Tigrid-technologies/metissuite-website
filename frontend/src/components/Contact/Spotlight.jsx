import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  User,
  Mail,
  Phone,
  MessageSquare,
  Check,
  Send,
  ArrowRight,
} from "lucide-react";

// Reusable Floating Label Input with Focus Glow
const FloatingInput = ({
  id,
  name,
  type = "text",
  label,
  value,
  onChange,
  required = false,
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value && value.length > 0);

  return (
    <div className="relative group">
      {/* Outer reactive glow on focus */}
      <motion.div
        animate={{
          opacity: isFocused ? 1 : 0,
          scale: isFocused ? 1 : 0.98,
        }}
        transition={{ duration: 0.25 }}
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-teal/40 via-teal/20 to-indigo/40 blur-sm pointer-events-none"
      />

      <div
        className={`relative flex items-center rounded-xl bg-[#121636]/80 border transition-all duration-200 ${
          isFocused
            ? "border-teal/70 shadow-[0_0_15px_rgba(46,196,182,0.15)]"
            : "border-white/10 group-hover:border-white/20"
        }`}
      >
        {/* Leading Icon */}
        <div className="pl-3.5 pr-2.5 flex items-center justify-center shrink-0">
          <Icon
            size={17}
            className={`transition-colors duration-200 ${
              isFocused ? "text-teal" : "text-mist/40 group-hover:text-mist/60"
            }`}
          />
        </div>

        {/* Input Element */}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className="w-full bg-transparent pt-5 pb-2 pr-4 text-[14px] text-ivory placeholder-transparent focus:outline-none"
        />

        {/* Floating Label (Slides to Top-Left on active/focused) */}
        <motion.label
          htmlFor={id}
          animate={{
            y: isActive ? -9 : 0,
            scale: isActive ? 0.75 : 1,
            color: isFocused ? "#2ec4b6" : isActive ? "#c9cce0" : "#c9cce080",
          }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-10 pointer-events-none origin-top-left font-medium text-[13.5px] select-none"
        >
          {label} {required && <span className="text-teal font-bold">*</span>}
        </motion.label>
      </div>
    </div>
  );
};

// Reusable Floating Label Textarea with Focus Glow
const FloatingTextarea = ({
  id,
  name,
  label,
  value,
  onChange,
  required = false,
  rows = 4,
  icon: Icon,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value && value.length > 0);

  return (
    <div className="relative group">
      {/* Outer reactive glow on focus */}
      <motion.div
        animate={{
          opacity: isFocused ? 1 : 0,
          scale: isFocused ? 1 : 0.98,
        }}
        transition={{ duration: 0.25 }}
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-teal/40 via-teal/20 to-indigo/40 blur-sm pointer-events-none"
      />

      <div
        className={`relative rounded-xl bg-[#121636]/80 border transition-all duration-200 ${
          isFocused
            ? "border-teal/70 shadow-[0_0_15px_rgba(46,196,182,0.15)]"
            : "border-white/10 group-hover:border-white/20"
        }`}
      >
        <div className="flex items-start">
          {/* Leading Icon */}
          <div className="pl-3.5 pr-2.5 pt-4 flex items-center justify-center shrink-0">
            <Icon
              size={17}
              className={`transition-colors duration-200 ${
                isFocused ? "text-teal" : "text-mist/40 group-hover:text-mist/60"
              }`}
            />
          </div>

          {/* Textarea Element */}
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            rows={rows}
            className="w-full bg-transparent pt-6 pb-3 pr-4 text-[14px] text-ivory placeholder-transparent focus:outline-none resize-none leading-relaxed"
          />
        </div>

        {/* Floating Label (Slides to Top-Left on active/focused) */}
        <motion.label
          htmlFor={id}
          animate={{
            y: isActive ? -5 : 6,
            scale: isActive ? 0.75 : 1,
            color: isFocused ? "#2ec4b6" : isActive ? "#c9cce0" : "#c9cce080",
          }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-10 top-2 pointer-events-none origin-top-left font-medium text-[13.5px] select-none"
        >
          {label} {required && <span className="text-teal font-bold">*</span>}
        </motion.label>
      </div>
    </div>
  );
};

const Spotlight = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    agreeToPrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToPrivacy) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen py-16 md:py-24 wrapper flex flex-col items-center justify-center text-center select-none">
      
      {/* --- Header Tag & Heading --- */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center gap-2 items-center px-5 py-1 rounded-full text-[13px] text-gold border border-gold/20 bg-gold/10 backdrop-blur-lg mb-4"
        >
          <Sparkles size={16} strokeWidth={1.8} />
          <span>Let's advance life science together</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[38px] md:text-[52px] font-semibold tracking-tight leading-tight text-ivory"
        >
          Transform the Way You Work with{" "}
          <span className="font-light text-teal">
            AI-Powered Intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-mist/80 text-[15px] max-w-xl mx-auto"
        >
          Have questions or want to see MetisSuiteAI in action? Fill out the
          form below and our specialized team will get in touch.
        </motion.p>
      </div>

      {/* --- Contact Form Glass Card --- */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl mx-auto mt-10 md:mt-12 text-left"
      >
        {/* Ambient subtle glow behind card */}
        <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-teal/15 via-transparent to-indigo/20 blur-xl pointer-events-none" />

        <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-[#161a3f]/90 via-[#111435]/95 to-[#0b0e27]/98 p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden">
          
          {/* Decorative corner radial light */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal/10 blur-3xl" />

          {/* Background Sheen Sweep on load/hover */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1.6,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -inset-y-full -left-full w-[160%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-25deg]"
          />

          <AnimatePresence mode="wait">
            {submitted ? (
              /* --- Success Feedback State --- */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className="w-16 h-16 rounded-2xl bg-teal/20 border border-teal/40 text-teal flex items-center justify-center shadow-[0_0_25px_rgba(46,196,182,0.5)]"
                >
                  <Check size={32} strokeWidth={2.8} />
                </motion.div>
                <h3 className="text-2xl font-bold text-ivory">Message Received!</h3>
                <p className="text-mist/80 text-sm max-w-md leading-relaxed">
                  Thank you for reaching out, <span className="text-teal font-medium">{formData.name}</span>. Our team will review your message and connect with you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      description: "",
                      agreeToPrivacy: false,
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 hover:bg-white/10 text-ivory transition-colors cursor-pointer"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              /* --- Form with Floating Labels --- */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <FloatingInput
                      id="name"
                      name="name"
                      type="text"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      icon={User}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.38 }}
                  >
                    <FloatingInput
                      id="email"
                      name="email"
                      type="email"
                      label="Work Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      icon={Mail}
                    />
                  </motion.div>
                </div>

                {/* Row 2: Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.46 }}
                >
                  <FloatingInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    icon={Phone}
                  />
                </motion.div>

                {/* Row 3: Description / Message */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.54 }}
                >
                  <FloatingTextarea
                    id="description"
                    name="description"
                    label="Project Description / Message"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    icon={MessageSquare}
                  />
                </motion.div>

                {/* Row 4: Privacy Policy Animated Checkbox */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.62 }}
                  className="pt-1"
                >
                  <label className="flex items-start gap-3 cursor-pointer group select-none">
                    <motion.div
                      whileTap={{ scale: 0.88 }}
                      className={`relative w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center transition-all duration-200 ${
                        formData.agreeToPrivacy
                          ? "bg-teal border-teal shadow-[0_0_12px_rgba(46,196,182,0.7)]"
                          : "border-white/20 bg-[#121636]/80 group-hover:border-teal/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="agreeToPrivacy"
                        checked={formData.agreeToPrivacy}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <AnimatePresence>
                        {formData.agreeToPrivacy && (
                          <motion.div
                            initial={{ scale: 0, rotate: -25 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 25 }}
                            transition={{ type: "spring", stiffness: 500, damping: 25 }}
                          >
                            <Check size={13} strokeWidth={3} className="text-midnight" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <span className="text-[13px] text-mist/80 leading-snug group-hover:text-ivory transition-colors">
                      I agree to the{" "}
                      <a
                        href="/privacy"
                        onClick={(e) => e.stopPropagation()}
                        className="text-teal hover:underline font-medium"
                      >
                        privacy policy
                      </a>{" "}
                      and consent to processing my submitted information.
                    </span>
                  </label>
                </motion.div>

                {/* Row 5: Animated Submit CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="pt-2"
                >
                  <motion.button
                    whileHover={formData.agreeToPrivacy ? { scale: 1.015, y: -1 } : {}}
                    whileTap={formData.agreeToPrivacy ? { scale: 0.985 } : {}}
                    type="submit"
                    disabled={!formData.agreeToPrivacy}
                    className={`relative overflow-hidden w-full py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer group/btn ${
                      formData.agreeToPrivacy
                        ? "bg-teal text-midnight hover:bg-[#3de2d3] shadow-[0_0_20px_rgba(46,196,182,0.4)] hover:shadow-[0_0_28px_rgba(46,196,182,0.7)]"
                        : "bg-white/10 text-mist/40 border border-white/5 cursor-not-allowed"
                    }`}
                  >
                    {/* Button hover shimmer light */}
                    {formData.agreeToPrivacy && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />
                    )}

                    <span className="relative z-10 font-bold tracking-wide">
                      Submit Inquiry
                    </span>
                    <Send
                      size={15}
                      className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                    />
                  </motion.button>
                </motion.div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </motion.div>

    </div>
  );
};

export default Spotlight;
