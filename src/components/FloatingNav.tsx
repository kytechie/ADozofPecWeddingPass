"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { title: "RSVP", target: "rsvp" },
  { title: "Journey", target: "journey" },
  { title: "Gallery", target: "gallery" },
  { title: "Proposal", target: "proposal" },
  { title: "Details", target: "details" },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 300) {
        setVisible(false);
      } else {
        setVisible(current < lastScroll);
      }

      setLastScroll(current);

      navItems.forEach((item) => {
        const section = document.getElementById(item.target);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180 && rect.bottom >= 180) {
          setActive(item.target);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
fixed
top-2
sm:top-4
md:top-6

left-1/2
-translate-x-1/2

z-40

w-auto
max-w-[620px]

flex
justify-center

px-2
"
        >
          <div
  className="
flex
items-center
justify-between

w-full

gap-1

overflow-x-auto
whitespace-nowrap

rounded-full
border
border-[#E8DDBF]

bg-white/90
backdrop-blur-2xl

shadow-[0_10px_28px_rgba(0,0,0,0.10)]

px-3
py-2

no-scrollbar
"
>

            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
               className={`
relative
rounded-full

px-3
md:px-4

py-2

text-[11px]
sm:text-xs
md:text-sm
                  transition-all
                  duration-300

                  ${
                    active === item.target
                      ? "bg-[#BE9C63] text-white shadow-md"
                      : "text-[#4F4943] hover:bg-[#F8F3EA]"
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}