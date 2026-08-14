"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Background line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#EFE7D4] z-[9998]" />

      {/* Gold progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 origin-left h-[2px] w-full bg-[#C9A96A] z-[9999]"
      />
    </>
  );
}