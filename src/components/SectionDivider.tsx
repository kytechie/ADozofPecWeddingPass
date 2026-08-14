"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 flex justify-center"
    >
      <div className="flex items-center">

        <div className="w-16 md:w-24 h-px bg-[#DCC89D]" />

        <div
          className="
          mx-5
          h-11
          w-11
          rounded-full
          border
          border-[#E8DDBF]
          bg-[#FFFDFC]
          shadow-sm
          flex
          items-center
          justify-center
          "
        >
          <span className="text-[#C9A96A] text-lg">
            ❦
          </span>
        </div>

        <div className="w-16 md:w-24 h-px bg-[#DCC89D]" />

      </div>
    </motion.div>
  );
}