"use client";

import { motion } from "framer-motion";

export default function Monogram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="flex flex-col items-center"
    >
      <p className="uppercase tracking-[0.7em] text-[11px] text-[#C9A96A]">
        P &nbsp; × &nbsp; C
      </p>

      <div className="mt-5 w-28 h-px bg-[#D5BA83]" />
    </motion.div>
  );
}