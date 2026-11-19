import { useScroll, motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { navItems } from "../../utils/navItems";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const RollingLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      initial="initial"
      whileHover="hover"
      className="font-secondary relative inline-block py-1 text-[14px] font-semibold transition-colors duration-200"
    >
      <div className="relative inline-flex overflow-hidden">
        <div className="flex">
          {children.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hover: { y: "-125%" },
              }}
              transition={{
                duration: 0.25,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.02 * i,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0 flex text-teal">
          {children.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "125%" },
                hover: { y: 0 },
              }}
              transition={{
                duration: 0.25,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.02 * i,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Header = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled
            ? "rgba(25, 29, 73, 0.75)"
            : "rgba(25, 29, 73, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-40 border-b"
      >
        <div className="flex items-center justify-between py-4 md:py-5 wrapper">
          
          {/* Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link to="/" className="logo text-[20px] select-none shrink-0">
              <span className="font-bold text-ivory">Metis</span>
              <span className="font-light text-ivory">Suite</span>
              <span className="font-semibold text-[12px] text-gold ml-1">AI</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex shrink-0 items-center gap-7 tracking-wide">
              {navItems.map((item) => (
                <RollingLink key={item.title} href={item.href}>
                  {item.title}
                </RollingLink>
              ))}
            </nav>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-5 text-[14px]">
            <a
              href="https://app.metissuiteai.app/login"
              target="_blank"
              rel="noreferrer"
              className="text-mist hover:text-white transition-colors font-medium"
            >
              Sign In
            </a>
            <a
              href="https://app.metissuiteai.app/signup"
              target="_blank"
              rel="noreferrer"
              className="text-mist hover:text-white transition-colors font-medium"
            >
              Sign Up
            </a>
            <button className="rounded-full flex gap-2 items-center py-2 px-6 bg-teal text-midnight font-bold shadow-[0_0_15px_rgba(46,196,182,0.4)] hover:shadow-[0_0_20px_rgba(46,196,182,0.6)] hover:bg-[#3de2d3] transition-all cursor-pointer">
              <span>Book a walkthrough</span>
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-mist hover:text-white transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>

        </div>
      </motion.header>

      {/* --- Mobile Drawer Navigation (Slide from Left with Spring) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 32,
              }}
              className="fixed inset-y-0 left-0 w-[290px] sm:w-[320px] bg-gradient-to-b from-[#161a3f] via-[#111435] to-[#0c0f2a] border-r border-white/10 shadow-[20px_0_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl z-50 p-6 flex flex-col justify-between lg:hidden select-none"
            >
              {/* Drawer Top Header: Logo + Close Button */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="logo text-[20px]"
                  >
                    <span className="font-bold text-ivory">Metis</span>
                    <span className="font-light text-ivory">Suite</span>
                    <span className="font-semibold text-[12px] text-gold ml-1">AI</span>
                  </Link>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-mist hover:text-white transition-colors cursor-pointer"
                    aria-label="Close navigation menu"
                  >
                    <X size={19} />
                  </motion.button>
                </div>

                {/* Staggered Navigation Items */}
                <nav className="mt-8 flex flex-col space-y-2">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.08 + idx * 0.05,
                        duration: 0.3,
                      }}
                      className="flex items-center justify-between py-3 px-3.5 rounded-xl text-[15px] font-semibold text-mist hover:text-teal hover:bg-white/[0.04] transition-all group"
                    >
                      <span>{item.title}</span>
                      <ArrowRight
                        size={15}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-teal"
                      />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom Actions: Auth & Walkthrough */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="pt-6 border-t border-white/[0.08] space-y-3.5"
              >
                <div className="flex items-center justify-between px-2 text-sm">
                  <a
                    href="https://app.metissuiteai.app/login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist hover:text-white transition-colors font-medium"
                  >
                    Sign In
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href="https://app.metissuiteai.app/signup"
                    target="_blank"
                    rel="noreferrer"
                    className="text-mist hover:text-white transition-colors font-medium"
                  >
                    Sign Up
                  </a>
                </div>

                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-teal text-midnight font-bold text-sm shadow-[0_0_15px_rgba(46,196,182,0.4)] hover:bg-[#3de2d3] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Book a walkthrough</span>
                  <ArrowRight size={15} strokeWidth={2.2} />
                </button>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
