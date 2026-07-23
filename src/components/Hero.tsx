"use client";

import { motion } from "framer-motion";
import Monogram from "@/components/Monogram";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-[#FAF8F2] px-8 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Editorial Frame */}
      <div className="absolute inset-6 border border-[#E8DDBF]" />

      {/* Corner Details */}
      <div className="absolute top-10 left-10 w-8 h-8 border-t border-l border-[#C9A96A]/50" />
      <div className="absolute top-10 right-10 w-8 h-8 border-t border-r border-[#C9A96A]/50" />
      <div className="absolute bottom-10 left-10 w-8 h-8 border-b border-l border-[#C9A96A]/50" />
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b border-r border-[#C9A96A]/50" />

      {/* Giant Background Initials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.8, duration: 2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <h1
          className="
            font-serif
            font-light
            tracking-[0.2em]
            text-[10rem]
            md:text-[18rem]
            lg:text-[24rem]
            text-[#C9A96A]
          "
        >
          C × P
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-4xl text-center z-10">

        <Monogram />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 uppercase tracking-[0.55em] text-xs text-[#C9A96A]"
        >
          CHAPTER ONE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 text-7xl md:text-[8rem] leading-none font-light text-[#2F2A27]"
        >
          Forever.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12"
        >
          <div className="w-14 h-px bg-[#C9A96A] mx-auto mb-8" />

          <div className="text-center">
            <p className="uppercase tracking-[0.45em] text-sm text-[#6B635C]">
              CHIEDOZIE
            </p>

            <p className="my-3 text-[#C9A96A] text-xl">&</p>

            <p className="uppercase tracking-[0.45em] text-sm text-[#6B635C]">
              PECULIAR
            </p>
          </div>

          <div className="w-14 h-px bg-[#C9A96A] mx-auto mt-8" />
        </motion.div>

        {/* Centered Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16"
        >
          <p className="max-w-2xl mx-auto text-center text-xl md:text-2xl italic text-[#5F5952] leading-relaxed">
            One unexpected hello.
            <br />
            A lifetime of certainty.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-14"
        >
          <div className="w-20 h-px bg-[#C9A96A] mx-auto mb-6" />

          <p className="uppercase tracking-[0.55em] text-xs text-[#C9A96A]">
            09 JANUARY 2027
          </p>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 text-center"
      >
        <p className="uppercase tracking-[0.4em] text-xs text-[#8C847D]">
          Begin the Story
        </p>

        <div className="mt-4 w-px h-10 bg-[#C9A96A] mx-auto" />
      </motion.div>
    </motion.section>
  );
}