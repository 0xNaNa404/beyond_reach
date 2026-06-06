"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "home"},
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experiences"},
  { name: "Skills", href: "skills" },
  { name: "Contacts", href: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.getElementById(link.href)
      );

      const scrollPosition = window.scrollY + window.innerHeight/ 3;

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true}}
      className="
        fixed top-6 left-1/2
        -translate-x-1/2
        z-50
      "
    >
      <div
        className="
          relative flex items-center gap-2
          px-3 py-3
          rounded-full

          bg-white/5
          backdrop-blur-2xl

          border border-white/10

          shadow-[0_8px_32px_rgba(0,0,0,0.37)]

          before:absolute
          before:inset-0
          before:rounded-full
          before:bg-white/5
          before:opacity-50
          before:pointer-events-none">
            {links.map((link) => (
          <Link
            key={link.name}
            href={`#${link.href}`}
            className="
              relative px-5 py-2
              text-sm font-medium
              transition-colors
            "
          >
            {active === link.href && (
              <motion.div
                layoutId="liquid-pill"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
                className="
                  absolute inset-0
                  rounded-full

                  bg-white/15

                  border border-white/10

                  backdrop-blur-xl

                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]
                "
              />
            )}

            <span
              className={`
                relative z-10
                ${
                  active === link.href
                    ? "text-white"
                    : "text-white/60"
                }
              `}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}