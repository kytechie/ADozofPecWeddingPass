"use client";

import { motion } from "framer-motion";

export default function Cover({
  onEnter,
}: {
  onEnter: () => void;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F2] flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#FAF8F2_65%,#F4EEE4_100%)]" />

      {/* Texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(201,169,106,.08) 0px, rgba(201,169,106,.08) 1px, transparent 1px, transparent 14px)",
        }}
      />

      {/* Border */}
      <div className="absolute inset-6 border border-[#E8DDBF]" />

      {/* Corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-[#C9A96A]/40" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[#C9A96A]/40" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-[#C9A96A]/40" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[#C9A96A]/40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-4xl mx-auto px-8 text-center"
      >

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="uppercase tracking-[0.55em] text-[11px] text-[#C9A96A]"
        >
          Together with our families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 text-7xl md:text-[7.5rem] font-light text-[#2F2A27] leading-none"
        >
          Peculiar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="my-4 text-[#C9A96A] text-3xl"
        >
          &
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-7xl md:text-[7.5rem] font-light text-[#2F2A27] leading-none"
        >
          Chiedozie
        </motion.h1>

        <div className="w-24 h-px bg-[#C9A96A] mx-auto mt-10" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-8 text-xl italic text-[#6B635C] leading-8"
        >
          request the honour of your presence
          <br />
          as we celebrate the beginning of our forever.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 uppercase tracking-[0.5em] text-[11px] text-[#C9A96A]"
        >
          09 January 2027
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 uppercase tracking-[0.35em] text-[10px] text-[#8A817A]"
        >
          Abuja, Nigeria
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.04,
            backgroundColor: "#C9A96A",
            color: "#fff",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={onEnter}
          className="mt-10 rounded-full border border-[#D5BA83] px-10 py-4 uppercase tracking-[0.45em] text-[11px] text-[#5F5952] transition"
        >
          Open Invitation
        </motion.button>

      </motion.div>

    </main>
  );
}