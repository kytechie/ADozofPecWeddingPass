"use client";

import { motion } from "framer-motion";

export default function Cover({
  onEnter,
}: {
  onEnter: () => void;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FAF8F2] flex items-center justify-center">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,#FAF8F2_65%,#F4EEE4_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(201,169,106,.08) 0px, rgba(201,169,106,.08) 1px, transparent 1px, transparent 14px)",
        }}
      />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: .2 }}
          className="uppercase tracking-[0.7em] text-[11px] text-[#C9A96A]"
        >
          A Wedding Invitation
        </motion.p>

        <motion.h1
          layoutId="forever-title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="mt-10 font-serif text-[6rem] md:text-[9rem] font-light leading-none text-[#2F2A27]"
        >
          Forever
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          className="mt-8 uppercase tracking-[0.55em] text-[11px] text-[#7C746D]"
        >
          CHIEDOZIE × PECULIAR
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.04,
            backgroundColor: "#C9A96A",
            color: "#fff",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: .3 }}
          onClick={onEnter}
          className="mt-24 border border-[#D5BA83] px-10 py-4 uppercase tracking-[0.45em] text-[11px] text-[#5F5952]"
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </main>
  );
}