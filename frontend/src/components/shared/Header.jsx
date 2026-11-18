import { useScroll, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { navItems } from "../../utils/navItems";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 40);
    });
  }, [scrollY]);
  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(25, 29, 73, 0.05)"
          : "rgba(25, 29, 73, 0)",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderColor: scrolled
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed  top-0 inset-x-0 z-40 border-b"
    >
      <div className="flex items-center gap-4 py-6 wrapper">
        <div className="logo text-[20px] ">
          <span className="font-bold">Metis</span>
          <span className="font-light">Suite</span>
          <span className="font-semibold text-[12px] text-gold ml-1">AI</span>
        </div>
        <nav className="flex shrink-0 items-center gap-6 ml-10 tracking-wide">
          {navItems.map((item) => (
            <RollingLink key={item.title} href={item.href}>
              {item.title}
            </RollingLink>
          ))}
        </nav>
        <div className="ml-auto text-[14px] flex items-center gap-4">
          <Link to={"https://app.metissuiteai.app/login"}>Sign In</Link>
          <Link to={""}>Sign Up</Link>
          <button className="rounded-full flex gap-2 items-center p-2 px-7 bg-teal  text-midnight font-bold">
            Book a walkthrough
            <span>
              <ArrowRight size={17} strokeWidth={1.7} />
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
